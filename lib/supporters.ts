export interface Supporter {
  name: string;
  amount?: number;
  avatar?: string;
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
    const nodes = result.data?.organization?.sponsorshipsAsMaintainer?.nodes || [];

    return nodes.map((node: any) => ({
      name: node.sponsorEntity.name || node.sponsorEntity.login,
      amount: node.tier.monthlyPriceInCents,
      avatar: node.sponsorEntity.avatarUrl,
    })).sort((a: any, b: any) => (b.amount || 0) - (a.amount || 0));
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

  const url = `https://www.patreon.com/api/oauth2/v2/campaigns/${campaignId}/members?include=user&fields[member]=full_name,lifetime_support_cents&fields[user]=image_url`;

  try {
    const response = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    const result = await response.json();
    const members = result.data || [];
    const included = result.included || [];

    return members.map((member: any) => {
      const userId = member.relationships?.user?.data?.id;
      const user = included.find((inc: any) => inc.type === 'user' && inc.id === userId);

      return {
        name: member.attributes.full_name,
        amount: member.attributes.lifetime_support_cents,
        avatar: user?.attributes?.image_url,
      };
    }).sort((a: any, b: any) => (b.amount || 0) - (a.amount || 0));
  } catch (error) {
    console.error('Error fetching Patreon supporters:', error);
    return [];
  }
}
