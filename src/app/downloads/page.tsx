import { ArrowDownTrayIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import { getLatestReleases } from './getLatestReleases'
import WindowsLogo from '../../../public/images/logo-windows.webp'
import LinuxLogo from '../../../public/images/linux-logo.png'
import AppleLogo from '../../../public/images/apple-logo.svg'

export const metadata = {
  title: 'Download'
}

const downloadSection = [
  {
    name: 'Windows',
    image: WindowsLogo,
    desc: 'Install Heroic on your system and get auto-updates when a new version is released. Next, Next, Finish!',
    url: {
      Windows: 'Windows x64',
      WindowsArm64: 'Windows Arm64'
    }
  },
  {
    name: 'Linux',
    image: LinuxLogo,
    desc: 'Install Heroic on your system and get auto-updates when a new version is released. Next, Next, Finish!',
    url: {
      LinuxDEB: '.deb',
      LinuxRPM: '.rpm'
    }
  },
  {
    name: 'Mac',
    image: AppleLogo,
    desc: 'Install Heroic on your system and get auto-updates when a new version is released. Next, Next, Finish!',
    url: {
      Mac: 'Mac',
      MacArm64: 'Mac Arm64'
    }
  }
]

export default async function DownloadsPage(): Promise<JSX.Element> {
  const data = await getLatestReleases()
  return (
    <main className="max-w-screen-xl mx-auto px-4 py-10">
      <div className="flex flex-col gap-4">
        <h1 className="text-5xl dark:text-white font-bold">Download</h1>
        <p className="dark:text-white">
          Heroic is available for all major operating systems
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-4 justify-between mt-10">
        {downloadSection.map(({ name, desc, image, url }) => (
          <section
            key={name}
            className="w-full flex flex-col justify-between gap-2 items-center p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {name}
            </h2>
            <Image
              src={image}
              priority
              alt="Windows logo"
              width={100}
              height={100}
            />
            <p className="mb-3 text-center font-normal text-gray-700 dark:text-gray-400">
              {desc}
            </p>
            <div className="flex gap-2 flex-wrap justify-center">
              {Object.entries(url).map(([name, value]) => (
                <a
                  key={name}
                  href={data[name]}
                  className="flex gap-2 w-fit items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  {value}
                  <ArrowDownTrayIcon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  )
}
