import { DiscordIcon, GithubIcon, MastodonIcon, TwitterIcon } from './Icons'
import { Logo } from './Navbar/Logo'

const year = new Date().getFullYear()

export const Footer = (): JSX.Element => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Logo className="flex items-center mb-4 sm:mb-0" />
          <ul className="flex flex-wrap items-center gap-4 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="mailto:heroicgameslauncher@protonmail.com"
                className="hover:underline"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © {year} Heroic Games Launcher™. All Rights Reserved.
          <div className="flex sm:justify-center items-center gap-2 mt-4">
            <a
              href="https://github.com/Heroic-Games-Launcher"
              target="_blank"
              rel="noreferrer"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <hr className="block h-4 w-[1px] dark:bg-slate-700 bg-slate-400 border-none" />
            <a
              href="https://discord.com/invite/rHJ2uqdquK"
              target="_blank"
              rel="noreferrer"
            >
              <DiscordIcon className="w-5 h-5" />
            </a>
            <hr className="block h-4 w-[1px] dark:bg-slate-700 bg-slate-400 border-none" />
            <a
              href="https://twitter.com/HeroicLauncher"
              target="_blank"
              rel="noreferrer"
            >
              <TwitterIcon className="w-5 h-5" />
            </a>
            <hr className="block h-4 w-[1px] dark:bg-slate-700 bg-slate-400 border-none" />
            <a
              href="https://mastodon.social/@heroiclauncher"
              target="_blank"
              rel="noreferrer"
            >
              <MastodonIcon className="w-5 h-5" />
            </a>
          </div>
        </span>
      </div>
    </footer>
  )
}
