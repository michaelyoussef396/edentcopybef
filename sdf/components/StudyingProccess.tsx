import { FC } from "react";
import Image from 'next/image';

const steps = [
  {
    title: "SAFE COUNTRY",
    description: `A very important factor for most international students while choosing a study abroad program, is the safety and security of the country and the city in particular. Parents are worried about the safety of their children and factors like crime against women, racial discrimination, theft and burglary play an important role while choosing a destination for study abroad. In this respect, Canada is one of the safest places to study with very low crime rates and cases of racial discrimination. Statistics by Numbeo reveal that Canada’s safety index (62.42) is much higher than the safety indices of other popular study abroad destinations such as US (49.99), UK (57.9) and Australia (57.94).`,
  },
  {
    title: "MULTICULTURAL ENVIRONMENT",
    description: `Canada is an international leader in computer and information technologies and has a reputation for excellence in such sectors as telecommunications, animation, transportation and engineering; and specifically, aerospace, urban transport, microelectronics, medical devices, advanced software, hydroelectric and nuclear power, lasers and opto-electronics, biotechnology etc. Canada was among the first in the world to recognize the need to connect schools and libraries to the Internet, and its SchoolNet program is being copied around the world. All kinds of modern amenities are provided and most campuses happen to be wired with the most sophisticated technologies the world has to offer.`,
  },
  {
    title: "JOB OPPORTUNITIES",
    description: `Yes, as an international student you will still pay more than Canadians for the same course, but that same course in another country, such as the United States, Australia or United Kingdom, would likely cost even more. Also, see point 1 above – not only are you paying less in Canada, you’re also earning.`,
  },
  {
    title: "AFFORDABLE EDUCATION & LIVING",
    description: `Canada offers not only quality education, but education which is affordable for international including Indian students. Compared to countries like the UK, USA and Australia, cost of education in Canada is quite moderate.`,
  },
  {
    title: "ADMISSION REQUIREMENT",
    description: `After having COE, EDUCUDE – on behalf of the student will submit all academics financial documents to the embassy and prepare students for bio-metrics and medical checkup. It takes 20-30 working days to get a visa.`,
  },
];

const StudyProcess: FC = () => {
  return (
    <section className="relative bg-black text-white py-12">
      <div className="absolute inset-0">
        <Image
          src="/shape-7.jpg" // Ensure this image is placed in the public folder
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="opacity-50"
        />
      </div>
      <div className="relative z-10 container mx-auto px-4 md:px-20 text-center">
        <h2 className="text-5xl font-bold mb-12">
          VISA <span className="text-red-500">PROCESS</span>
        </h2>
        {steps.map((step, index) => (
          <div key={index} className="mb-8">
            <h3 className="text-2xl font-bold mb-4 underline">{step.title}</h3>
            <p className="text-lg leading-relaxed">
              {step.description.split(" ").map((word, i) => {
                const isRed = ["AUD", "$50,000", "(Fifty", "thousand)", "interview", "session", "COE", "visa"].includes(word);
                return (
                  <span key={i} className={isRed ? "text-red-500" : ""}>
                    {word}{" "}
                  </span>
                );
              })}
            </p>
          </div>
        ))}
      </div>
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
    </section>
  );
};

export default StudyProcess;
