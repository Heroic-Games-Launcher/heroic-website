export interface Supporter {
  name: string;
  amount?: number;
  avatar?: string;
}

interface GitHubSponsorNode {
  tier: {
    monthlyPriceInCents: number;
  };
  sponsorEntity: {
    login: string;
    name: string | null;
    avatarUrl: string;
  };
}

interface PatreonMember {
  attributes: {
    full_name: string;
    lifetime_support_cents: number;
  };
  relationships?: {
    user?: {
      data?: {
        id: string;
      };
    };
  };
}

interface PatreonUser {
  id: string;
  type: string;
  attributes?: {
    image_url?: string;
  };
}

export async function getGitHubSponsors(): Promise<Supporter[]> {
  const token = process.env.G_SPONSORS;
  if (!token) {
    console.warn('GITHUB_TOKEN is not set');
    return [];
  }

  const query = `
    query {
      organization(login: "Heroic-Games-Launcher") {
        sponsorshipsAsMaintainer(first: 100, activeOnly: true) {
          nodes {
            tier {
              monthlyPriceInCents
            }
            sponsorEntity {
              ... on User {
                login
                name
                avatarUrl
              }
              ... on Organization {
                login
                name
                avatarUrl
              }
            }
          }
        }
      }
    }
  `;

  try {
    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    });

    const result = await response.json();
    const nodes: GitHubSponsorNode[] = result.data?.organization?.sponsorshipsAsMaintainer?.nodes || [];

    return nodes
      .map((node: GitHubSponsorNode) => ({
        name: node.sponsorEntity.name || node.sponsorEntity.login,
        amount: node.tier.monthlyPriceInCents,
        avatar: node.sponsorEntity.avatarUrl,
      }))
      .filter((s: Supporter) => (s.amount || 0) > 0)
      .sort((a: Supporter, b: Supporter) => (b.amount || 0) - (a.amount || 0));
  } catch (error) {
    console.error('Error fetching GitHub sponsors:', error);
    return [];
  }
}

export async function getPatreonSupporters(): Promise<Supporter[]> {
  const token = process.env.PATREON_TOKEN;
  const campaignId = process.env.PATREON_CAMPAIGN_ID;

  if (!token || !campaignId) {
    console.warn('PATREON_TOKEN or PATREON_CAMPAIGN_ID is not set');
    return [];
  }

  let allSupporters: Supporter[] = [];
  let nextUrl: string | null = `https://www.patreon.com/api/oauth2/v2/campaigns/${campaignId}/members?include=user&fields[member]=full_name,lifetime_support_cents&fields[user]=image_url&page[size]=100`;

  try {
    while (nextUrl) {
      const response: Response = await fetch(nextUrl, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        console.error(`Patreon API error: ${response.status} ${response.statusText}`);
        break;
      }

      const result = await response.json();
      const members: PatreonMember[] = result.data || [];
      const included: PatreonUser[] = result.included || [];

      const pageSupporters = members
        .map((member: PatreonMember) => {
          const userId = member.relationships?.user?.data?.id;
          const user = included.find((inc: PatreonUser) => inc.type === 'user' && inc.id === userId);

          return {
            name: member.attributes.full_name,
            amount: member.attributes.lifetime_support_cents,
            avatar: user?.attributes?.image_url,
          };
        })
        .filter((s: Supporter) => (s.amount || 0) >= 1000);

      allSupporters = [...allSupporters, ...pageSupporters];
      nextUrl = result.links?.next || null;

      // Safety break to avoid infinite loops
      if (allSupporters.length > 5000) break;
    }

    return allSupporters.sort((a, b) => (b.amount || 0) - (a.amount || 0));
  } catch (error) {
    console.error('Error fetching Patreon supporters:', error);
    return allSupporters;
  }
}
