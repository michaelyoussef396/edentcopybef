"use client"
import { FC, useState } from "react";
import { motion } from "framer-motion";

interface AccordionItemProps {
  title: string;
  content: string;
}

const AccordionItem: FC<AccordionItemProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full p-4 text-left text-xl font-medium text-gray-900 bg-red-500 hover:bg-red-600 focus:outline-none focus:bg-red-600"
      >
        <span className="flex items-center">
          {isOpen ? (
            <span className="mr-2">-</span>
          ) : (
            <span className="mr-2">+</span>
          )}
          {title}
        </span>
      </button>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        {isOpen && <div className="p-4 bg-white text-gray-900">{content}</div>}
      </motion.div>
    </div>
  );
};

const FAQAccordion: FC = () => {
  const items = [
    {
      title: "HOW DO I FIND OUT IF I AM ELIGIBLE TO APPLY?",
      content:
        "Please click here for a summary of the current Australian immigration regulations. Then take a FREE initial check of your eligibility to be referred to a MARA Registered Migration Agent.",
    },
    {
      title: "HOW LONG DOES IT TAKE TO GET A PERMANENT RESIDENCE VISA TO IMMIGRATE TO AUSTRALIA?",
      content: "Every application is different and processing times largely depend on the type of visa being applied for. For the most recent guidelines for Australian visa processing times, see Global visa and citizenship processing times on the Department of Immigration and Border Protection website.",
    },
    {
      title: "CAN THE IMMIGRATION AUTHORITIES REFUSE MY APPLICATION?",
      content: "Yes. A surprisingly large number of applicants are unaware how strictly the immigration regulations are enforced and are often unnecessarily refused or delayed due to technical errors on their application or by submitting the wrong supporting documentation. So the moral of the story is to consider seeking the professional guidance and independent advice of a MARA Registered Migration Agent before lodging an application for residence. Migration Agents exist to help you find the best way through the immigration maze and are highly effective in doing so.",
    },
    {
      title: "WILL THE IMMIGRATION AUTHORITIES OR EMBASSY HELP ME TO PREPARE MY APPLICATION AND MAKE SURE THAT EVERYTHING IS CORRECT BEFORE APPLYING?",
      content: "No. This type of service is no longer provided by Government. The authorities exist to enforce the immigration law, make decisions on residence applications and to issue residence visas. Although basic information and application forms are available, the authorities are unable to provide independent advice and personalized guidance on your specific case. An Australian Registered Migration Agent can provide this kind of service.",
    },
    {
      title: "MY MIGRATION AGENT HAS ASSESSED ME AS BEING ELIGIBLE FOR RESIDENCE IN AUSTRALIA. IF I APPLY WITHOUT HIS OR HER HELP, CAN I BE CERTAIN OF SUCCESS?",
      content: "No. Although you may fundamentally qualify under the immigration policy, you are by no means guaranteed of success. Your application must be prepared in accordance with the prevailing immigration regulations and submitted together with the appropriate supporting documentation in order to be approved by the immigration authorities. The ways in which to do this are not always clearly set out by the immigration authorities and result in many applicants presenting their cases incorrectly, inevitably leading to refusal. So you should consider seeking the advice of a MARA Registered Migration Agent."
    },
  ];

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-8 md:px-20">
        <h2 className="text-5xl font-bold text-center mb-8">
          Frequently Asked <span className="text-red-500">Questions</span>
        </h2>
        <div className="space-y-4">
          {items.map((item, index) => (
            <AccordionItem
              key={index}
              title={item.title}
              content={item.content}
            />
          ))}
        </div>
        <div className="mt-8 text-center">
          <a href="/contact-us">
            <button className="px-6 py-3 text-white bg-red-500 hover:bg-red-600 font-bold">
              GET A FREE INITIAL ASSESSMENT OF YOUR ELIGIBILITY
            </button>
          </a>

        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;
