// components/WhyStudyAustralia.tsx
import { FC } from "react";

const WhyStudyAustralia: FC = () => {
  return (
    <section className="bg-white py-20"> {/* Increased vertical padding */}
      <div className="container mx-auto px-8 md:px-20 text-center">
        <h2 className="text-2xl font-bold uppercase mb-4">
          Education Is Your Right, Not An Option
        </h2>
        <h1 className="text-6xl font-bold mb-8">
          WHY STUDY IN <span className="text-red-500">AUSTRALIA?</span>
        </h1>
        <p className="text-lg mx-auto max-w-4xl">
          When we consider studying in Australia, there are lots of factors that attract students’ attention easily. Growing Destination. <span className="text-red-500">AUSTRALIA</span> is currently the third most popular destination for international students in the English-speaking world, behind the United States and the UK. Many international students choose to study there because of the cultural diversity, friendly natives, and high quality of education.
        </p>
      </div>
    </section>
  );
};

export default WhyStudyAustralia;
