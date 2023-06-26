import Image, { type StaticImageData } from 'next/image'

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
      </div>
    </div>
  )
}
