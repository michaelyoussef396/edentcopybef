import Image from 'next/image'
import sponserJobsImage from '../public/sponserjobs.jpg' // Make sure the image is in the public folder

const FiveStepsToDream = () => {
  return (
    <div className="container mx-auto my-16 px-4">
      <h1 className="text-3xl font-bold text-center mb-4">
        Five Easy Steps To Live The <span className="text-red-500">Australian</span> Dream
      </h1>
      <p className="text-center mb-8">
        Discover how the Skills Shortage Recruitment Process has helped international candidates like you live the Australian Dream.
      </p>
      <div className="flex justify-center">
        <div className="relative w-full max-w-4xl">
          <Image
            src={sponserJobsImage}
            alt="Five Easy Steps"
            layout="responsive"
            objectFit="contain"
            quality={100}
          />
        </div>
      </div>
    </div>
  )
}

export default FiveStepsToDream
