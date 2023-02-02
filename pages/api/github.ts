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
  WindowsArm: string
  WindowsPortable: string
  Mac: string
  MacArm: string
  LinuxBeta?: string | null
  WindowsBeta?: string | null
  WindowsArmBeta?: string | null
  WindowsPortableBeta?: string | null
  MacBeta?: string | null
  MacArmBeta?: string | null
}

const defaultUrl =
  'https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher/releases/latest'

export const getLatestReleases = async (): Promise<ReleaseUrls> => {
  try {
    const data = await fetch(githubApi)
    const releases: Release[] = await data.json()
    const { assets: assetsStable, tag_name: tagStable } = releases.filter(
      (rel) => rel.prerelease === false
    )[0]
    const { assets: assetsBeta, tag_name: tagBeta } = releases.filter(
      (rel) => rel.prerelease === true
    )[0]

    const appImageStable =
      assetsStable.filter((a) => a.name.endsWith('.AppImage'))[0]
        ?.browser_download_url || defaultUrl
    const windowsSetupStable =
      assetsStable.filter((a) => a.name.includes('Setup-x64'))[0]
        ?.browser_download_url || defaultUrl
    const WindowsSetupArmStable =
      assetsStable.filter((a) => a.name.includes('Setup-arm64'))[0]
        ?.browser_download_url || defaultUrl
    const windowsPortableStable =
      assetsStable.filter(
        (a) => a.name.endsWith('.exe') && !a.name.includes('Setup')
      )[0]?.browser_download_url || defaultUrl
    const dmgStable =
      assetsStable.filter((a) => a.name.includes('macOS-x64'))[0]
        ?.browser_download_url || defaultUrl
    const dmgArmStable =
      assetsStable.filter((a) => a.name.includes('macOS-arm64'))[0]
        ?.browser_download_url || defaultUrl

    let appImageBeta,
      windowsPortableBeta,
      windowsSetupBeta,
      windowsSetupArmBeta,
      dmgBeta = null,
      dmgArmBeta = null

    const isSameMajor = tagStable >= tagBeta.split('-')[0]

    if (!isSameMajor) {
      appImageBeta = assetsBeta.filter((a) => a.name.endsWith('.AppImage'))[0]
        .browser_download_url
      windowsSetupBeta = assetsBeta.filter((a) => a.name.includes('Setup'))[0]
        .browser_download_url
      windowsSetupArmBeta = assetsBeta.filter((a) =>
        a.name.includes('Setup-arm64')
      )[0].browser_download_url
      windowsPortableBeta = assetsBeta.filter(
        (a) => a.name.endsWith('.exe') && !a.name.includes('Setup')
      )[0].browser_download_url
      dmgBeta = assetsBeta.filter((a) => a.name.endsWith('.dmg'))[0]
        .browser_download_url
      dmgArmBeta = assetsBeta.filter((a) => a.name.includes('macOS-arm64'))[0]
    }

    return {
      Linux: appImageStable,
      LinuxBeta: appImageBeta,
      Windows: windowsSetupStable,
      WindowsArm: WindowsSetupArmStable,
      WindowsBeta: windowsSetupBeta,
      WindowsArmBeta: windowsSetupArmBeta,
      WindowsPortable: windowsPortableStable,
      WindowsPortableBeta: windowsPortableBeta,
      Mac: dmgStable,
      MacArm: dmgArmStable,
      MacBeta: dmgBeta
    }
  } catch (error) {
    console.error({ error })
    return {
      Linux: defaultUrl,
      Windows: defaultUrl,
      WindowsArm: defaultUrl,
      Mac: defaultUrl,
      MacArm: defaultUrl,
      WindowsPortable: defaultUrl
    }
  }
}
