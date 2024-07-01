// components/BackgroundImage.tsx
import Image from 'next/image'
import mainImage from '../public/main3.png' // Ensure the image is placed in the public folder

export default function AffilateHero() {
  return (
    <div className="relative h-96"> {/* Adjust the height as needed */}
      <Image
        src={mainImage}
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <div className="absolute inset-0 bg-black bg-opacity-50" />
    </div>
  )
}
