import Image from 'next/image'
export default function Sponser() {
  return (
    <div className="relative h-90"> {/* Adjust the height as needed */}
      <Image
        src="/main3.png"
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white">
          SPONSORED JOBS
          </h1>
        </div>
      </div>
    </div>
  )
}
