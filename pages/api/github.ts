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
  id: number
}

export interface ReleaseUrls {
  Linux: string
  Windows: string
  WindowsPortable: string
  Mac: string
  LinuxBeta?: string | null
  WindowsBeta?: string | null
  WindowsPortableBeta?: string | null
  MacBeta?: string | null
}

const defaultUrl =
  'https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher/releases/latest'

export const getLatestReleases = async (): Promise<ReleaseUrls> => {
  try {
    const data = await fetch(githubApi)
    const releases: Release[] = await data.json()
    const { assets: assetsStable, id: idStable } = releases.filter(
      (rel) => rel.prerelease === false
    )[0]
    const { assets: assetsBeta, id: idBeta } = releases.filter(
      (rel) => rel.prerelease === true
    )[0]

    const appImageStable = assetsStable.filter((a) =>
      a.name.endsWith('.AppImage')
    )[0].browser_download_url
    const windowsSetupStable = assetsStable.filter((a) =>
      a.name.includes('Setup')
    )[0].browser_download_url
    const windowsPortableStable = assetsStable.filter(
      (a) => a.name.endsWith('.exe') && !a.name.includes('Setup')
    )[0].browser_download_url
    const dmgStable = assetsStable.filter((a) => a.name.endsWith('.dmg'))[0]
      .browser_download_url

    let appImageBeta,
      windowsPortableBeta,
      windowsSetupBeta,
      dmgBeta = null

    console.log({ assetsBeta, idBeta, idStable })

    appImageBeta = assetsBeta.filter((a) => a.name.endsWith('.AppImage'))[0]
      .browser_download_url
    windowsSetupBeta = assetsBeta.filter((a) => a.name.includes('Setup'))[0]
      .browser_download_url
    windowsPortableBeta = assetsBeta.filter(
      (a) => a.name.endsWith('.exe') && !a.name.includes('Setup')
    )[0].browser_download_url
    dmgBeta = assetsBeta.filter((a) => a.name.endsWith('.dmg'))[0]
      .browser_download_url

    return {
      Linux: appImageStable,
      LinuxBeta: appImageBeta,
      Windows: windowsSetupStable,
      WindowsBeta: windowsSetupBeta,
      WindowsPortable: windowsPortableStable,
      WindowsPortableBeta: windowsPortableBeta,
      Mac: dmgStable,
      MacBeta: dmgBeta
    }
  } catch (error) {
    return {
      Linux: defaultUrl,
      Windows: defaultUrl,
      Mac: defaultUrl,
      WindowsPortable: defaultUrl
    }
  }
}
