import CardFeatures from '@/components/CardFeatures'
import Image from 'next/image'
import gamePage from '../../public/images/game_page.webp'
import heroImage from '../../public/images/hero_image.webp'
import { featuresInfo } from '../contants'

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
              className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
            >
              Download
            </button>
          </div>
        </div>
        <Image
          className='mx-auto rounded-lg border dark:border-gray-700 shadow'
          src={heroImage}
          alt='Heroic Games Launcher Preview'
        />
      </section>

      <section className='container max-w-5xl mx-auto pt-20 px-4 flex flex-col gap-4 dark:text-white'>
        <h2 className='uppercase text-3xl font-semibold text-center'>
          Main features and more info
        </h2>
        {featuresInfo.map(({ title, description }, index) => (
          <CardFeatures
            key={index}
            title={title}
            img={gamePage}
            description={description}
          />
        ))}
      </section>
    </main>
  )
}
