import Image from 'next/image';

const steps = [
  {
    number: '01',
    title: 'File Submission',
    description: (
      <ul className="text-left list-disc list-inside">
        <li>Passport</li>
        <li>Passport Size Photographs</li>
        <li>Academic Documents</li>
        <li>Birth Certificate</li>
        <li>NID (English Translated)</li>
        <li>Application Fees</li>
        <li>SOP (Statement of Purpose)</li>
        <li>Resume/CV</li>
        <li>IELTS/TOEFL Certificate</li>
      </ul>
    ),
    color: 'bg-red-500',
  },
  {
    number: '02',
    title: 'Offer Letter',
    description: 'Receive an Offer Letter from the University for Admission upon successful G.T.E. Assessment.',
    color: 'bg-orange-500',
  },
  {
    number: '03',
    title: 'G.T.E. Assessment',
    description: 'Financial and other documents investigation and interview with the university.',
    color: 'bg-green-500',
  },
  {
    number: '04',
    title: 'COE Confirmation',
    description: 'Successful enrollment in university and payment confirmation.',
    color: 'bg-blue-500',
  },
  {
    number: '05',
    title: 'Visa Lodgement',
    description: 'Submit visa application and required documents.',
    color: 'bg-purple-500',
  },
  {
    number: '06',
    title: 'Successful Visa',
    description: 'Receive visa approval and prepare for travel.',
    color: 'bg-yellow-500', // Changed to a different color
  },
];

const QuickSteps = () => {
  return (
    <div className="relative bg-black py-12 px-4 md:px-20">
      <div className="absolute inset-0">
        <Image
          src="/footer-3.png"
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="opacity-50"
        />
      </div>
      <div className="relative z-10 text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          QUICK STEPS OF <span className="text-red-500">ADMISSION PROCESS</span>
        </h1>
      </div>
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg shadow-lg ${step.color} text-white text-center transform transition duration-300 hover:scale-105`}
          >
            <div className="text-2xl font-bold mb-2">{step.number}</div>
            <h2 className="text-xl font-semibold mb-2">{step.title}</h2>
            <div className="text-sm">{step.description}</div>
          </div>
        ))}
      </div>
      <div className="relative z-10 flex justify-center mt-8">
        <button className="bg-red-500 text-white font-bold py-2 px-4 rounded">
          Click here to see the full visa process
        </button>
      </div>
    </div>
  );
};

export default QuickSteps;
