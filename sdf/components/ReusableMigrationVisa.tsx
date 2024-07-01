// components/ReusableMigrationVisa.tsx

import React from 'react';

interface Detail {
  title: string;
  content: string;
}

interface SubSection {
  subHeading: string;
  details: Detail[];
}

interface Section {
  heading: string;
  subSections?: SubSection[];
  listItems?: string[];
  note?: string;
  content?: string;
}

interface VisaData {
  title: string;
  description: string;
  sections: Section[];
}

interface ReusableMigrationVisaProps {
  data: VisaData;
}

const ReusableMigrationVisa: React.FC<ReusableMigrationVisaProps> = ({ data }) => {
  return (
    <div className="container mx-auto px-4 md:px-20 py-12">
      <h2 className="text-4xl font-bold text-center mb-8">{data.title}</h2>
      <p className="mb-4">{data.description}</p>
      {data.sections.map((section, index) => (
        <div key={index}>
          <h3 className="text-2xl font-bold mb-4">{section.heading}</h3>
          {section.subSections?.map((subSection, subIndex) => (
            <div key={subIndex}>
              <h4 className="text-xl font-bold mb-2">{subSection.subHeading}</h4>
              {subSection.details.map((detail, detailIndex) => (
                <div key={detailIndex}>
                  <p className="mb-2"><strong>{detail.title}</strong></p>
                  <p className="mb-4">{detail.content}</p>
                </div>
              ))}
            </div>
          ))}
          {section.listItems && (
            <ul className="list-disc list-inside mb-4">
              {section.listItems.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ul>
          )}
          {section.note && <p className="mb-4">{section.note}</p>}
          {section.content && <p className="mb-4">{section.content}</p>}
        </div>
      ))}
    </div>
  );
};

export default ReusableMigrationVisa;
