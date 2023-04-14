import { Github } from './github.model'

const API = 'https://api.github.com/repos/Heroic-Games-Launcher/HeroicGamesLauncher/releases'

export interface ReleaseUrls {
  LinuxDEB: string
  LinuxRPM: string
  Windows: string
  WindowsArm64: string
  Mac: string
  MacArm64: string
}

export async function getLatestReleases (): Promise<ReleaseUrls> {
  const res = await fetch(API)
  const data: Github[] = await res.json()
  const { assets } = data.filter(
    (rel) => !rel.prerelease
  )[0]

  const debImage =
      assets.filter((a) => a.name.endsWith('.deb'))[0]
        ?.browser_download_url
  const rpmImage =
      assets.filter((a) => a.name.endsWith('.rpm'))[0]
        ?.browser_download_url
  const windowsSetupStable =
      assets.filter((a) => a.name.includes('Setup-x64'))[0]
        ?.browser_download_url
  const windowsSetupStableArm64 =
      assets.filter((a) => a.name.includes('Setup-arm64'))[0]
        ?.browser_download_url
  const dmgStable =
      assets.filter((a) => a.name.includes('macOS-x64'))[0]
        ?.browser_download_url
  const dmgStableArm64 =
      assets.filter((a) => a.name.includes('macOS-arm64'))[0]
        ?.browser_download_url

  return {
    LinuxDEB: debImage,
    LinuxRPM: rpmImage,
    Windows: windowsSetupStable,
    WindowsArm64: windowsSetupStableArm64,
    Mac: dmgStable,
    MacArm64: dmgStableArm64
  }
}
