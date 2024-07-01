// components/VisaOptions.tsx
import Image from "next/image";
import { FC } from "react";
import { FaGlobe, FaGraduationCap, FaCog, FaAnchor, FaUserTie, FaGavel } from "react-icons/fa";

const visaOptions = [
  {
    icon: FaGlobe,
    title: "Visitor Visa",
    description: "You might come to Australia for reasons such as holidays, sightseeing, social or recreational reasons, to visit relatives, friends."
  },
  {
    icon: FaCog,
    title: "Skilled Visa",
    description: "General Skilled Migration (GSM) or Skilled Visas is for people who want to live and work in Australia on a temporary or permanent basis."
  },
  {
    icon: FaAnchor,
    title: "Sponsored Visa",
    description: "Employer Sponsored Visas are for employers who cannot fill a position with an Australian worker or by training Australian workers."
  },
  {
    icon: FaGraduationCap,
    title: "Student Visa",
    description: "There is one student visa class (TU) with eight visa subclasses. Seven of the visa subclasses relate to specific educational sectors and one relates to student guardians."
  },
  {
    icon: FaUserTie,
    title: "Partner Visa",
    description: "A partner visa is for people who are married, engaged, or in a de facto relationship with an Australian citizen or eligible New Zealand citizen and want to live in Australia."
  },
  {
    icon: FaGavel,
    title: "AAT & Federal Court",
    description: "We have a team of professional lawyers and solicitors. If you have major issues, please contact us and we will be able to solve your complex migration problems."
  }
];

const VisaOptions: FC = () => {
  return (
    <section className="relative bg-black py-12">
      <div className="absolute inset-0">
        <Image
          src="/footer-3.png" // Ensure this image is placed in the public folder
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="opacity-50"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="relative z-10 container mx-auto px-8 md:px-20">
        <h2 className="text-5xl font-bold text-center mb-8 text-white">
          VISA <span className="text-red-500">OPTIONS</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
          {visaOptions.map((option, index) => (
            <div key={index} className="text-white">
              <option.icon className="text-6xl mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">{option.title}</h3>
              <p>{option.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisaOptions;
