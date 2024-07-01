import Image from 'next/image'
import img10 from '../public/img10.jpg' // Ensure the image is placed in the public folder

const VisaComparison: React.FC = () => {
  return (
    <div className="relative h-screen bg-white">
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
        <h1 className="text-5xl font-bold mb-8 text-center">
          COMPARISON SUBCLASS 189/190/491
        </h1>
        <div className="w-full max-w-4xl">
          <Image
            src={img10}
            alt="Comparison Table"
            layout="responsive"
            width={1920}
            height={1080}
            quality={100}
          />
        </div>
      </div>
    </div>
  );
}

export default VisaComparison;
