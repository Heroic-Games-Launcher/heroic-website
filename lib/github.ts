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
  Mac: string
  MacArm: string
  LinuxBeta?: string | null
  WindowsBeta?: string | null
  WindowsArmBeta?: string | null
  MacBeta?: string | null
  MacArmBeta?: string | null
}

const defaultUrl =
  'https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher/releases/latest'

export const getLatestReleases = async (): Promise<ReleaseUrls> => {
  try {
    const data = await fetch(githubApi)
    const releases: Release[] = await data.json()
    const assetsStable = releases.filter((rel) => rel.prerelease === false)[0]
      .assets

    const urlFor = (match: string, endsWith = false) =>
      assetsStable.filter((a) =>
        endsWith ? a.name.endsWith(match) : a.name.includes(match)
      )[0]?.browser_download_url || defaultUrl

    // Beta downloads are currently disabled; they fall back to null so the UI
    // hides them. See the git history for the previous prerelease parsing.
    return {
      Linux: urlFor('.AppImage', true),
      LinuxBeta: null,
      Windows: urlFor('Setup-x64'),
      WindowsArm: urlFor('Setup-arm64'),
      WindowsBeta: null,
      WindowsArmBeta: null,
      Mac: urlFor('macOS-x64'),
      MacArm: urlFor('macOS-arm64'),
      MacBeta: null,
      MacArmBeta: null
    }
  } catch (error) {
    console.error({ error })
    return {
      Linux: defaultUrl,
      Windows: defaultUrl,
      WindowsArm: defaultUrl,
      Mac: defaultUrl,
      MacArm: defaultUrl
    }
  }
}
