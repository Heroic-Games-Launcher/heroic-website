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
  prerelease: boolean
}

export interface ReleaseUrls {
  Linux: string
  LinuxBeta?: string
  Windows: string
  WindowsBeta?: string
  WindowsPortable: string
  WindowsPortableBeta?: string
  Mac: string
  MacBeta?: string
}

const defaultUrl =
  'https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher/releases/latest'

export const getLatestReleases = async (): Promise<ReleaseUrls> => {
  try {
    const data = await fetch(githubApi)
    const releases: Release[] = await data.json()
    const stable = releases.filter(rel => rel.prerelease === false)
    // const beta = releases.filter(rel => rel.prerelease === true)
    const { assets: assetsStable } = stable[0]
    // const { assets: assetsBeta } = beta[0]

    const appImageStable = assetsStable.filter((a) => a.name.endsWith('.AppImage'))[0]
    const windowsSetupStable = assetsStable.filter((a) => a.name.includes('Setup'))[0]
    const windowsPortableStable = assetsStable.filter((a) => a.name.endsWith('.exe') && !a.name.includes('Setup'))[0]
    const dmgStable = assetsStable.filter((a) => a.name.endsWith('.dmg'))[0]

    return {
      Linux: appImageStable.browser_download_url,
      LinuxBeta: appImageStable.browser_download_url,
      Windows: windowsSetupStable.browser_download_url,
      WindowsPortable: windowsPortableStable.browser_download_url,
      Mac: dmgStable.browser_download_url,
    }
  } catch (error) {
    return { Linux: defaultUrl, Windows: defaultUrl, Mac: defaultUrl, WindowsPortable: defaultUrl }
  }
}
