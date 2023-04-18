import Image from 'next/image'
import Link from 'next/link'

const year = new Date().getFullYear()

export const Footer = (): JSX.Element => {
  return (
    <footer className="bg-white shadow dark:bg-gray-900">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link href="/" className="flex items-center mb-4 sm:mb-0">
            <Image
              src="/images/logo.png"
              width={30}
              height={30}
              alt="Heroic Games Launcher Logo"
            />
            <span className="self-center text-xl md:text-2xl font-semibold whitespace-nowrap dark:text-white">
              Heroic Games Launcher
            </span>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                About
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © {year}{' '}
          <a href="#" className="hover:underline">
            Heroic Games Launcher™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  )
}
