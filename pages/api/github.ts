const githubApi =
  'https://api.github.com/repos/Heroic-Games-Launcher/HeroicGamesLauncher/releases'

interface Asset {
  browser_download_url: string
  name: string
  size: number
}

export interface Release {
  assets: Asset[]
  name: string
  tag_name: string
  published_at: string
}

export interface ReleaseUrls {
  Linux: string
  Windows: string
  Mac: string
}

const defaultUrl =
  'https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher/releases/latest'

export const getLatestReleases = async (): Promise<ReleaseUrls> => {
  try {
    const data = await fetch(githubApi)
    const releases: Release[] = await data.json()
    const { assets } = releases[0]

    const appImage = assets.filter((a) => a.name.endsWith('.AppImage'))[0]
    const windowsSetup = assets.filter((a) => a.name.includes('Setup'))[0]
    const dmg = assets.filter((a) => a.name.endsWith('.dmg'))[0]

    return {
      Linux: appImage.browser_download_url,
      Windows: windowsSetup.browser_download_url,
      Mac: dmg.browser_download_url
    }
  } catch (error) {
    return { Linux: defaultUrl, Windows: defaultUrl, Mac: defaultUrl }
  }
}
