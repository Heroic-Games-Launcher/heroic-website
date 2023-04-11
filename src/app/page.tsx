import CardFeatures from '@/components/CardFeatures'
import Image from 'next/image'
import heroicGame from '../../public/images/heroic_game.png'
import heroicGameHero from '../../public/images/heroic_01.png'
import heroicInstall from '../../public/images/heroic_install.png'
import heroicStore from '../../public/images/heroic_stores.png'
import heroicMenu from '../../public/images/heroic_menu.png'
import heroicThemes from '../../public/images/themes.gif'
import heroicWine from '../../public/images/heroic_wine.png'
import heroicWineSettings from '../../public/images/heroic_wine_settings.png'
import { ArrowDownTray } from '@/components/Icons'

export const featuresInfo = [
  {
    title: 'Game Page',
    description:
      'Check game details like description, publisher, download and install size, time played and more.',
    image: heroicGame
  },
  {
    title: 'Platform Selection',
    description:
      'On Linux and on MacOS you can select to install the Windows version of a native game. This might be handy in case the native version is not supported anymore. On Linux you can choose that for GOG games only.',
    image: heroicInstall
  },
  {
    title: 'Access to the Stores',
    description:
      "Go to the Epic or GOG store without even leaving Heroic. Get free games or buy new ones directly from Heroic's interface!",
    image: heroicStore
  },
  {
    title: 'Organize your library',
    description:
      'Add games to favorites or simply hide the games you already played or will never play at all!',
    image: heroicMenu
  },
  {
    title: 'Themes',
    description:
      "If you don't like the default colors, you have the ability to change them. It also includes the famous Dracula theme.",
    image: heroicThemes
  },
  {
    title: 'Wine Manager',
    description:
      'On Linux, download the latest version of Wine-GE, Wine-Lutris or even Proton-GE using the Wine Manager. These selection of Wine version are focused on improving the gaming experience and compatibility.',
    image: heroicWine
  },
  {
    title: 'Wine Settings',
    description:
      'Besides using the right Wine version, it is important to setup everything to have the best gameplay experience on Linux and on macOS. Under the Wine Settings it is possible to auto install tools like DXVK, VKD3D, FSR and also to run WineCFG, Winetricks and Run EXE on the prefix, so you can install games pre-requisites in a easy way.',
    image: heroicWineSettings
  }
]

export default function HomePage (): JSX.Element {
  return (
    <main className='py-20'>
      <section className='container max-w-5xl mx-auto px-4 flex flex-col gap-4'>
        <div className='max-w-lg mx-auto flex flex-col items-center gap-4 dark:text-white'>
          <h2 className='uppercase font-extrabold text-center text-5xl'>
            Play like a hero!
          </h2>
          <p className='text-center'>
            Heroic is an Open Source GOG and Epic Games Launcher for Linux,
            Windows, and macOS. Also available on the SteamDeck!
          </p>
          <div className='flex gap-2'>
            <button
              type='button'
              className='text-white flex items-center gap-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
            >
              Download
              <ArrowDownTray />
            </button>
          </div>
        </div>
        <Image
          className='mx-auto rounded-lg border dark:border-gray-700 shadow'
          src={heroicGameHero}
          alt='Heroic Games Launcher Preview'
          priority
          placeholder='blur'
        />
      </section>
      <section className='container max-w-5xl mx-auto pt-20 px-4 flex flex-col gap-4 dark:text-white'>
        <h2 className='uppercase text-3xl font-semibold text-center'>
          Main features and more info
        </h2>
        {featuresInfo.map(({ title, description, image }, index) => (
          <CardFeatures
            key={index}
            title={title}
            img={image}
            description={description}
          />
        ))}
      </section>
    </main>
  )
}
