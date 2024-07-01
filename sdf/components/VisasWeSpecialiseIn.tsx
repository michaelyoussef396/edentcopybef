// components/VisasWeSpecialiseIn.tsx
import { FC } from "react";
import { FaPaperPlane } from "react-icons/fa";
import Image from 'next/image';

const visaSpecialisations = [
  {
    title: "Temporary Skill Shortage Visa",
    subclass: "Subclass 482",
  },
  {
    title: "Training Visa",
    subclass: "Subclass 407",
  },
  {
    title: "Skilled Independent Visa",
    subclass: "Subclass 189",
  },
  {
    title: "Skilled Nominated Visa",
    subclass: "Subclass 190",
  },
  {
    title: "Skilled Work Regional Visa",
    subclass: "Subclass 491",
  },
  {
    title: "Sponsored Jobs",
    subclass: "",
  }
];

const VisasWeSpecialiseIn: FC = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-8 md:px-20">
        <h2 className="text-5xl font-bold text-center mb-8">
          VISAS WE <span className="text-red-500">SPECIALISE</span> IN
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
          {visaSpecialisations.map((visa, index) => (
            <div
              key={index}
              className="bg-gray-100 p-8 rounded-lg transition-transform transform hover:-translate-y-2 hover:shadow-lg"
            >
              <FaPaperPlane className="text-6xl text-red-500 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-2">{visa.title}</h3>
              <p className="text-lg text-gray-600">{visa.subclass}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisasWeSpecialiseIn;
