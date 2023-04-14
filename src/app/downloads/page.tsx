import { ArrowDownTray } from '@/components/Icons'
import Image from 'next/image'

export const metadata = {
  title: 'Download'
}

export default function DownloadsPage (): JSX.Element {
  return (
    <main className='max-w-screen-xl mx-auto px-4 py-10'>
      <div className='flex flex-col gap-4'>
        <h1 className='text-5xl dark:text-white font-bold'>Download</h1>
        <p className='dark:text-white'>Heroic is available for all major operating systems</p>
      </div>
      <div className='flex flex-col md:flex-row gap-4 justify-between mt-10'>
        <section className='w-full flex flex-col justify-between gap-2 items-center p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
          <Image src='https://code.visualstudio.com/assets/images/windows-logo.png' alt='Windows logo' height={100} width={100} />
          <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
          <a href='#' className='flex gap-2 w-fit items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
            Windows
            <ArrowDownTray />
          </a>
        </section>
        {/*  */}
        <section className='w-full flex flex-col justify-between gap-2 items-center p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
          <Image src='https://code.visualstudio.com/assets/images/linux-logo.png' alt='Windows logo' height={100} width={100} />
          <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
          <div className='flex gap-2'>
            <a href='#' className='flex gap-2 w-fit items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
              .deb
              <ArrowDownTray />
            </a>
            <a href='#' className='flex gap-2 w-fit items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
              .rpm
              <ArrowDownTray />
            </a>
          </div>
        </section>
        {/*  */}
        <section className='w-full flex flex-col justify-between gap-2 items-center p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
          <Image src='https://code.visualstudio.com/assets/images/apple-logo.svg' alt='Windows logo' height={100} width={100} />
          <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
          <a href='#' className='flex gap-2 w-fit items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
            Mac
            <ArrowDownTray />
          </a>
        </section>
      </div>

      {/* <h2 className='text-4xl dark:text-white font-semibold mt-10'>Other download methods</h2> */}
    </main>
  )
}
