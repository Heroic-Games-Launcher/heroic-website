import { ArrowDownTray } from '@/components/Icons'
import Image from 'next/image'
import { getLatestReleases } from './getLatestReleases'
import WindowsLogo from '../../../public/images/logo-windows.webp'
import LinuxLogo from '../../../public/images/linux-logo.png'
import AppleLogo from '../../../public/images/apple-logo.svg'

export const metadata = {
  title: 'Download'
}

export default async function DownloadsPage (): Promise<JSX.Element> {
  const { Windows, WindowsArm64, LinuxDEB, LinuxRPM, Mac, MacArm64 } = await getLatestReleases()

  return (
    <main className='max-w-screen-xl mx-auto px-4 py-10'>
      <div className='flex flex-col gap-4'>
        <h1 className='text-5xl dark:text-white font-bold'>Download</h1>
        <p className='dark:text-white'>Heroic is available for all major operating systems</p>
      </div>
      <div className='flex flex-col lg:flex-row gap-4 justify-between mt-10'>
        <section className='w-full flex flex-col justify-between gap-2 items-center p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
          <h2 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>Windows</h2>
          <Image src={WindowsLogo} priority alt='Windows logo' width={100} height={100} />
          <p className='mb-3 text-center font-normal text-gray-700 dark:text-gray-400'>Install Heroic on your system and get auto-updates when a new version is released. Next, Next, Finish!</p>
          <div className='flex gap-2 flex-wrap justify-center'>
            <a href={Windows} className='flex gap-2 w-fit items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
              Windows x64
              <ArrowDownTray />
            </a>
            <a href={WindowsArm64} className='flex gap-2 w-fit items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
              Windows Arm64
              <ArrowDownTray />
            </a>
          </div>
        </section>
        {/*  */}
        <section className='w-full flex flex-col justify-between gap-2 items-center p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
          <h2 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>Linux</h2>
          <Image src={LinuxLogo} priority alt='Linux logo' height={100} width={100} />
          <p className='mb-3 text-center font-normal text-gray-700 dark:text-gray-400'>Supported OS versions: Ubuntu 20.04LTS or newer, Fedora 33 or newer.</p>
          <div className='flex gap-2'>
            <a href={LinuxDEB} className='flex gap-2 w-fit items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
              .deb
              <ArrowDownTray />
            </a>
            <a href={LinuxRPM} className='flex gap-2 w-fit items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
              .rpm
              <ArrowDownTray />
            </a>
          </div>
        </section>
        {/*  */}
        <section className='w-full flex flex-col justify-between gap-2 items-center p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
          <h2 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>Mac</h2>
          <Image src={AppleLogo} priority alt='Apple logo' height={100} width={100} />
          <p className='mb-3 text-center font-normal text-gray-700 dark:text-gray-400'>Optimized for Intel Chips. Open it and copy the Heroic App to the Applications folder and you are good to go!</p>
          <div className='flex gap-2 flex-wrap justify-center'>
            <a href={Mac} className='flex gap-2 w-fit items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
              Mac
              <ArrowDownTray />
            </a>
            <a href={MacArm64} className='flex gap-2 w-fit items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
              Mac Arm64
              <ArrowDownTray />
            </a>
          </div>
        </section>
      </div>
    </main>
  )
}
