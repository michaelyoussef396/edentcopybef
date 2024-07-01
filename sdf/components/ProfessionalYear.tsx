import Image from 'next/image'
import mainImage from '../public/main3.png' // Ensure the image is placed in the public folder

export default function ProfessionalYear() {
  return (
    <div className="relative h-96">
      <Image
        src={mainImage}
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <h1 className="text-5xl font-bold text-white">
          Professional <span className="text-red-500">Year Plan</span>
        </h1>
      </div>
    </div>
  )
}
