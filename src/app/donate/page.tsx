import { GithubIcon, KofiIcon, PatreonIcon } from '@/components/Icons'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/20/solid'

export const metadata = {
  title: 'Donate'
}

const donate = [
  {
    name: 'Github Sponsor',
    description:
      'Support us with a one-time or recurring donation through GitHub.',
    logo: <GithubIcon className='w-8 h-8' />
  },
  {
    name: 'Patreon',
    description:
      'Activate a monthly subscription on Patreon to support us and get rewards.',
    logo: <KofiIcon className='w-8 h-8' />
  },
  {
    name: 'Ko-fi',
    description:
      'Support the project by offering us a coffee. Just like that, fast and simple!',
    logo: <PatreonIcon className='w-8 h-8' />
  }
]

export default function DonatePage (): JSX.Element {
  return (
    <main className='max-w-screen-xl mx-auto px-4 py-10'>
      <div className='flex flex-col gap-4'>
        <h1 className='text-5xl font-bold dark:text-white'>Support Us</h1>
        <p className='dark:text-white'>
          Heroic is free! Donations help us keep the project alive.
        </p>
      </div>
      <div className='mt-10 flex flex-col md:items-stretch md:grid gap-4 md:grid-cols-3'>
        {donate.map(({ description, name, logo }, index) => (
          <div
            key={index}
            className='flex gap-2 flex-col justify-between p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'
          >
            <div className='dark:text-gray-400 mb-2'>
              {logo}
            </div>
            <h5 className='mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white'>
              {name}
            </h5>
            <p className='mb-3 font-normal text-gray-500 dark:text-gray-400'>
              {description}
            </p>
            <a
              href='#'
              className='flex w-fit gap-2 items-center text-blue-600 hover:underline'
            >
              {name}
              <ArrowTopRightOnSquareIcon className='w-5 h-5' />
            </a>
          </div>
        ))}
      </div>
    </main>
  )
}
