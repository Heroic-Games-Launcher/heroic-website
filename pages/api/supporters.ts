import { NextApiRequest, NextApiResponse } from 'next'
import { getGitHubSponsors, getPatreonSupporters } from '../../lib/supporters'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const [github, patreon] = await Promise.all([
      getGitHubSponsors(),
      getPatreonSupporters()
    ])
    res.status(200).json({ github, patreon })
  } catch (error) {
    console.error('Error fetching supporters:', error)
    res.status(500).json({ error: 'Failed to fetch supporters' })
  }
}
