import Image, { type StaticImageData } from 'next/image'
import { ArrowRightIcon } from '@heroicons/react/20/solid'

interface CardFeaturesProps {
  title: string
  img: StaticImageData
  description: string
}

export const CardFeatures: React.FC<CardFeaturesProps> = ({
  title,
  img,
  description
}) => {
  return (
    <div className="md:grid md:grid-cols-2 bg-white border border-gray-200 rounded-lg overflow-auto shadow dark:bg-gray-800 dark:border-gray-700">
      {img.src.endsWith('.gif') ? (
        <Image className="object-cover h-full" src={img} alt={title} />
      ) : (
        <Image
          className="object-cover h-full"
          src={img}
          alt={title}
          placeholder="blur"
        />
      )}
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <button className="flex gap-2 w-fit items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Read more
          <ArrowRightIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}
