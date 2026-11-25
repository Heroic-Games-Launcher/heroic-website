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
  LinuxArm: string
  Windows: string
  WindowsArm: string
  Mac: string
  MacArm: string
  LinuxBeta?: string | null
  LinuxArmBeta?: string | null
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

    // The API returns releases newest-first by creation date, but a beta created
    // before a stable one can be published later, so sort explicitly.
    const latestOf = (prerelease: boolean) =>
      releases
        .filter((rel) => rel.prerelease === prerelease)
        .sort(
          (a, b) =>
            new Date(b.published_at).getTime() -
            new Date(a.published_at).getTime()
        )[0]

    const stable = latestOf(false)
    const beta = latestOf(true)

    const urlFor = (
      release: Release | undefined,
      match: string,
      endsWith = false
    ) =>
      release?.assets.find((asset) =>
        endsWith ? asset.name.endsWith(match) : asset.name.includes(match)
      )?.browser_download_url || null

    return {
      Linux: urlFor(stable, 'x86_64.AppImage', true) || defaultUrl,
      LinuxArm: urlFor(stable, 'arm64.AppImage', true) || defaultUrl,
      LinuxBeta: urlFor(beta, 'x86_64.AppImage', true),
      LinuxArmBeta: urlFor(beta, 'arm64.AppImage', true),
      Windows: urlFor(stable, 'Setup-x64.exe') || defaultUrl,
      WindowsArm: urlFor(stable, 'Setup-arm64.exe') || defaultUrl,
      WindowsBeta: urlFor(beta, 'Setup-x64.exe'),
      WindowsArmBeta: urlFor(beta, 'Setup-arm64.exe'),
      Mac: urlFor(stable, 'macOS-x64.dmg') || defaultUrl,
      MacArm: urlFor(stable, 'macOS-arm64.dmg') || defaultUrl,
      MacBeta: urlFor(beta, 'macOS-x64.dmg'),
      MacArmBeta: urlFor(beta, 'macOS-arm64.dmg')
    }
  } catch (error) {
    console.error({ error })
    return {
      Linux: defaultUrl,
      LinuxArm: defaultUrl,
      Windows: defaultUrl,
      WindowsArm: defaultUrl,
      Mac: defaultUrl,
      MacArm: defaultUrl
    }
  }
}
