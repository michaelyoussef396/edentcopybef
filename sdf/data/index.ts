import mainImage from '@/public/main3.png';
import studyImage from '@/public/study.jpg';
import ecaImage from '@/public/eca-img.jpg';
import image from "@/public/1001_Team.webp"
import image2 from "@/public/Performance-Education.webp"
import image3 from "@/public/ATMC-Professional-Year-768x538.webp"
const slides = [
  {
    subtitle: "Student Visa",
    description: "Student visas are non-immigrant visas and do not require the applicant to gain citizenship.",
    image: "/hero1.png",
    buttonText: "More About Us",
    buttonLink: "/student-visa",
  },
  {
    subtitle: "Migration",
    description: "You'll be surprised to know that your experience and qualification may create pathways to skilled migration in Australia.",
    image: "/hero2.png",
    buttonText: "More About Us",
    buttonLink: "/migration",
  },
];

export const contentData = {
  heroSection: {
    imageSrc: image,
    title: 'Professional',
    highlightText: 'Year Plan',
    height: 'h-96',
  },
  professionalYearPrograms: {
    title: 'PROFESSIONAL',
    highlightText: 'YEAR PROGRAMS',
    content: `The Professional Year Program (PYP) offers former international students, who have graduated from a university in Australia, an introduction to their respective occupation and relevant practical training. Australian Internships provides the practical component of the Professional Year Program (PYP) and has been approved by the accrediting bodies authorised by the Department of Immigration and Boarder Protection (DIBP).`,
    imageSrc: studyImage,
  },
  educationCentre: {
    title: 'EDUCATION CENTRE OF',
    highlightText: 'AUSTRALIA',
    content: `The Education Centre of Australia (ECA) is one of the leading affordable private education providers in Australia with multiple campuses in Sydney, Brisbane and Melbourne. As a growing network of colleges, we are looking for ways to ensure your time with ECA provides you with the quality of education, practical skills and project-based hands-on learning. The pathways programs and internships we offer take students from classroom to career. Our modern multicultural learning environments provide an excellent place for growing minds.`,
    imageSrc: ecaImage,
  },
  performanceEducation: {
    title: 'PERFORMANCE',
    highlightText: 'EDUCATION',
    content: `As The Graduate Employability Experts, Performance Education Group changes lives by helping people achieve career success through learning and access to Australia’s best employment connections. Established in 2006 to improve the careers of young professionals in Australia, we are now a leader in this space, developing much-needed employability skills including; professional business communication, workplace readiness, Work Integrated Learning (WIL) programs and career skills. We ensure that each and every student is given the best possible training and support to achieve their career goals.`,
    imageSrc: image2,
  },
  atmcProfessionalYear: {
    title: 'ATMC',
    highlightText: 'PROFESSIONAL YEAR',
    content: `Have you finished your degree but want to gain additional technical skills and knowledge to establish your career in Australia? Now you can kick-start your career with help from the Professional Year Program with ATMC. ATMC offers Professional Year programs through the Australian Computer Society (ACS) for information technology graduates and accounting programs through the Accounting PYP. The Professional Year (PY) Program is specifically designed for international students who have graduated from an Australian university and are looking for a successful pathway from university to employment and residency in Australia.`,
    imageSrc: image3,
  },
};

export const logos = [
  '/Acsenda-School-of-ManagementEduCo-Australia (1).png',
  '/Bupa-Australia-Educube.png',
  '/Charles-Darwin-University-Australia-Educube.png',
  '/Deakin-University-Australia-Educube.png',
  '/Edith-Cowan-University-Australia-Educube.png',
  '/Excelsia-College-Australia-Educube.png',
  '/Federation-University-Australia-Educube.png',
  '/Griffit-University-Australia-educube.png',
  '/Holmes-Institute-Australia-Educube.png',
  '/Kings-own-Institute-Australia-Educube.png',
  '/La-Trobe-University-Australia-educube.png',
  '/Southern-Cross-University-Australia-Educube.png',
  '/The-University-of-NewCastle-Australia-Educube.png',
  '/University-of-South-Australia-Educube.png',
  '/Victoria-University-Sydney-Australia-Educube.png',
  '/Western-Sydney-University-Australia-Educube.png'
];
// data/index.ts

interface Detail {
  title: string;
  content: string;
}

interface SubSection {
  subHeading: string;
  details?: Detail[];
  listItems?: string[];
  note?: string;
  content?: string;
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

export const trainingVisaData: VisaData = {
  title: "ABOUT THIS VISA",
  description: "The Training visa subclass 407 is a temporary visa for people in Australia who want to undergo job or work training in Australia. This visa helps the holder to develop their skills in their current profession, area of tertiary study or field of expertise. The visa is generally valid for stay in Australia for up to 2 years.",
  sections: [
    {
      heading: "HOW DO I QUALIFY FOR THE TRAINING SUBCLASS 407 VISA?",
      listItems: [
        "be sponsored by an approved sponsor, to participate in relevant professional development or occupational training programs directly from the sponsor",
        "have been nominated for an approved occupation position by an approved Australian temporary activities sponsor, and that nomination has been approved",
        "be invited to apply for the visa, if the sponsor is a Commonwealth agency",
        "be undertaking training in an occupation on the 407 Training Visa Occupations List, and have already worked or studied full time in this occupation for at least 12 months full time in the last 24 months",
        "be at least 18 years old at the time of visa grant decision, in most circumstances",
        "meet English language requirements",
        "if applying in Australia, hold a substantive visa that is NOT a:",
        "— Subclass 403 Temporary Work Visa in the Domestic Worker (Diplomatic or Consular stream)",
        "— Subclass 771 Transit Visa, or",
        "— Special Purpose Visa",
        "meet health and character requirements",
        "meet the requirements of the stream in which you apply",
        "demonstrate sufficient funds to support themselves in Australia",
        "be a genuine temporary entrant"
      ]
    },
    {
      heading: "HOW DO I APPLY FOR THE TRAINING SUBCLASS 407 VISA?",
      content: "Before you can apply for a Training visa, your proposed sponsor will need to lodge a nomination application for you. They will only be able to do this if they are an approved sponsor or have at least lodged an application to become a sponsor. This visa can be applied for both onshore and offshore."
    },
    {
      heading: "WHAT THIS VISA WILL ALLOW YOU TO DO",
      listItems: [
        "Temporarily live in Australia for up to 2 years and complete the training specified in your application",
        "Leave and re-enter Australia frequently till the visa is valid",
        "Bring eligible family members to accompany you in Australia"
      ]
    },
    {
      heading: "CONDITION",
      content: "The visa is subject to condition 8102 which forbids work apart from the training specified in the visa application."
    },
    {
      heading: "WORK CONDITION",
      content: "You can only work for your sponsor. You must work at least 30 hours per week and be paid at least the Award rate."
    },
    {
      heading: "HEALTH INSURANCE",
      content: "You must also maintain your health insurance whilst in Australia."
    },
    {
      heading: "LOCATION",
      content: "The application must be lodged online. You can either be in Australia or overseas when lodging the application."
    },
    {
      heading: "FAMILY MEMBERS",
      content: "Family members (spouses and children) can be included in the application."
    }
  ]
};



export const temporarySkilledVisaData = {
  title: "ABOUT THIS VISA",
  description: "The Temporary Work Visa (Subclass 457) has been replaced by the Temporary Skill Shortage (TSS) Visa Subclass 482 on 18 March 2018. This visa enables employers to address labour shortages by bringing in skilled workers where employers can’t source an appropriately skilled Australian worker.",
  sections: [
    {
      heading: "HOW DO I QUALIFY FOR THE TEMPORARY SKILL SHORTAGE (TSS) SUBCLASS 482 VISA?",
      subSections: [
        {
          subHeading: "Eligibility for the Temporary Skill Shortage (TSS) Visa Subclass 482:",
          details: [
            {
              title: "i) Short Term Stream:",
              content: "This stream is available if an employer wishes to sponsor an overseas skilled worker on a temporary basis only in occupations listed on the Short-term Skilled Occupation list (STSOL) for a TSS visa. It can be used to fill positions for a maximum of two years or four years if an International Trade Obligation (ITO) applies."
            },
            {
              title: "ii) Medium Term Stream:",
              content: "This visa enables employers to address labour shortages by bringing in skilled workers where employers can’t source an appropriately skilled Australian worker."
            },
            {
              title: "iii) Labour Agreement Stream:",
              content: "This visa is for skilled workers nominated by employers who have a Labour Agreement. It lets you live and work in Australia temporarily. Labour agreements are developed between the Australian Government (represented by the Department) and employers."
            }
          ]
        }
      ]
    },
    {
      heading: "What are the eligibility requirements to apply for a Temporary Skill Shortage visa (subclass 482)?",
      listItems: [
        "You have an occupation on the Consolidated Skilled Occupations list",
        "You have been nominated for a job position by an Australian employer that wants to recruit you to work for them",
        "You have the relevant skills and qualifications for your occupation",
        "You have at least two (2) years of work experience in your occupation",
        "You have vocational English language ability",
        "You can satisfy DHA requirements for good character and health",
        "If you are in Australia, you have a substantive visa, or a bridging visa A, B, or C and you have complied with your visa condition."
      ],
      note: "Note: There is no age requirement for the TSS visa."
    },
    {
      heading: "What are the general requirements for employers to apply for a Temporary Skill Shortage visa (subclass 482)?",
      listItems: [
        "Be a lawfully operating business",
        "Have no adverse information against the business",
        "Nominate a job position for the foreign national worker that is full-time and genuine",
        "Satisfy salary and employment condition related requirements",
        "Provide evidence of Labour Market Testing if required"
      ]
    },
    {
      heading: "How do I apply for the Temporary Skill Shortage (TSS) Subclass 482 Visa?",
      content: "Before you can apply for a TSS visa, your proposed employer will need to lodge a nomination application for you. They will only be able to do this if they are an approved sponsor or have at least lodged an application to become a standard business sponsor. If your employer is still an approved 457 sponsor then they can sponsor you for a TSS (Subclass 482) under that existing sponsorship. Sponsors also need to evidence mandatory labour market testing to show that they cannot employ an Australian into the position."
    },
    {
      heading: "What this visa will allow you to do?",
      content: "This visa allows you to travel to and from Australia for the duration of your visa and:",
      listItems: [
        "If you are the primary visa holder, to work in Australia for an approved sponsor in your nominated occupation",
        "If you are a family member, to work and study in Australia"
      ]
    }
  ]
};




export const institutions = [
  "University of North South Wales (UNSW) - Global",
  "Central Queensland University (CQU)",
  "Charles Darwin University (CDU)",
  "Charles Stuart University",
  "Curtin University - Perth",
  "Deakin University",
  "Edith Cowan University (ECU)",
  "James Cook University (JCUB)",
  "La Trobe University",
  "La Trobe University - Sydney",
  "Macquarie University",
  "Monash University / College",
  "Murdoch University",
  "RMIT (Royal Melbourne Institute of Technology)",
  "SAIBT - University of South Australia (Navitas)",
  "Southern Cross University (SCU)",
  "Swinburne University",
  "Sydney Institute of Business and Technology (SIBT)",
  "TAFE NSW",
  "The University of Newcastle",
  "Torrens University",
  "University of Queensland (UQ)",
  "University of Tasmania Sydney (UTAS)",
  "University of Technology, Sydney (UTS)",
  "University of Western Sydney (WSU)",
  "University of Wollongong (UOW)",
  "Victorian Institute of Technology (VIT)",
  "Victoria University - Melbourne",
  "University of Sunshine Coast",
  "Australian National University",
  "The University of Queensland",
  "The University of Western Australia",
  "University of South Australia",
  "The University of Notre Dame Australia",
  "Federation University Australia",
  "Bright College",
  "AIBI College",
  "Alpha College",
  "Connected Institute",
  "Building Institute (NSW)",
  "Australian Learning Institute",
  "Trinity Institute Australia",
  "Astrall Skill Institute Australia",
  "Apex Australia",
  "Reach Community College",
  "Waratah Polytechnic",
  "Australian Academy of Hospitality Management",
  "Kaplan Business School Australia",
  "TAFE NSW",
  "Kings Own Institute",
  "Education Centre of Australia (ECA)",
  "Stodds College",
  "TAFE Queensland",
  "UTS College",
  "UOW College",
  "Stanley College",
  "TAFE SA",
  "Charles Darwin University International College",
  "Deakin College",
  "Latrobe College Australia",
  "Conestoga College",
  "Confederation College",
  "ACAP College",
  "Academia International",
  "Engineer Institute of Technology",
  "Melbourne Institute of Technology (MIT)",
  "Insearch UTS",
  "Griffith College (Navitas)",
  "Lead College",
  "Griffith College",
  "International College of Management (Sydney)",
  "TAFE International Western Australia",
  "Holmes Institute",
  "Swinburne College",
  "Crown Institute of Higher Education",
  "International Institute of Business and Information Technology",
  "Le Cordon Bleu",
  "Melbourne Polytechnic",
  "The Université of Adelaide College",
  "Quality College of Australia",
  "Sydney Institute of Business and Technology (SIBT)",
  "Adelaide Institute of Business and Technology",
  "Greenwich College",
  "Curtin College",
  "Edith Cowan College",
  "Equals International",
  "The Hotel School of Australia",
  "Australian Learning Group",
  "UNSW Global",
  "Academics Australasia Polytechnic",
  "Kent Institute Australia",
  "Icon Institute of Australia",
  "Skills Australia Institute",
  "Australian Ideal College",
  "Imagine Education Australia",
  "Institute of Health and Nursing Australia",
  "Signet Institute of Australia",
  "ILSC-Australia",
  "Australian Health & Science Institute",
  "Australian National Airline College",
  "WSU - College",
  "Phoneix",
  "Murdoch Institute (MIT)",
  "Greystone College Australia",
  "Oxford House (OHC) - Australia",
  "ANGAD Australian Institute of Technology",
  "Australian National Education (ANE)",
  "Australian Technical College Western",
  "Australian International High School Pty Ltd",
  "Skills Training Australia",
  "Australian Harbour International College",
  "Australian Science and Mathematics School",
  "Australian Skills Group",
  "Kaplan International English - Australia",
  "Texila College Australia",
  "Australian Centre of English",
  "Australian Childcare Career Options",
  "Australian College of Management and Innovation",
  "Australian College of Technology Pty Ltd",
  "Australian Institute of Electro Technology",
  "Australian Institute of Technical Training",
  "Australian International College",
  "Australian National Airline College",
  "Australian National Institute of Education",
  "Australian Skills Management Institute",
  "Australian Sovereign College",
  "International Sport College of Australia",
  "Salisbury College Australia",
  "Blue Mountain Hotel School",
  "Canterbury Intstitute of Technology (USQ Sydney)",
  "Canterbury Education Group (CLA, CBC, CTI)",
  "Chisholm Institute",
  "Deakin College (Navitas)",
  "Excelsia College",
  "Engineering Institute of Technology",
  "Eyensbury"
];

export const studyInAustraliaItems = [
  {
    title: "WORLD-CLASS UNIVERSITIES",
    content: `
      <p>According to the 2018-19 world ranking (Times Higher Education’s World University Ranking), there are more than 35 top universities in Australia and 10 of them feature in the prestigious top 100.</p>
    `,
  },
  {
    title: "SCHOLARSHIPS",
    content: `
      <p>Did you know that the Australian Government invests more than $200,000,000 on international scholarships yearly? Other than the Australian Government, many others offer a significant number of scholarships to help you achieve Australian higher degrees easily. Universities offering scholarships:</p>
      <ul class="mt-4 list-disc list-inside">
        <li><strong>Charles Darwin University:</strong> These universities offer a 15% scholarship for all students through ATMC. Students don’t need high IELTS scores to get this scholarship.</li>
        <div class="flex justify-center"><img src="/Charles-Darwin-UniVERSITY.webp" alt="Charles Darwin University" class="w-1/2 mt-4 rounded-lg"></div>
        <li><strong>Federation University Australia:</strong> Offers a 15% scholarship for all students through ATMC. Students don’t need high IELTS scores to get this scholarship.</li>
        <div class="flex justify-center"><img src="/Federation-University-australia.webp" alt="Federation University Australia" class="w-1/2 mt-4 rounded-lg"></div>
        <li><strong>University of the Sunshine Coast:</strong> Offers a 15% scholarship for all students through ATMC. Students don’t need high IELTS scores to get this scholarship.</li>
        <div class="flex justify-center"><img src="/university-of-the-sunshine-coast.webp" alt="University of the Sunshine Coast" class="w-1/2 mt-4 rounded-lg"></div>
        <li><strong>Australian Awards:</strong> The Australia Awards aim to promote knowledge, education links, and enduring ties between Australia and its neighbors through extensive scholarship programs. Scholarships are available for full tuition fees, accommodation, return air travel, establishment allowance, and health cover.</li>
        <li><strong>International Postgraduate Research Scholarships (IPRS):</strong>The IPRS program enables international students to undertake a postgraduate research qualification in Australia and gain experience with leading Australian researchers. The scholarships are available for a period of two years for a Masters by research degree or AUD three years for a Doctorate by Research degree. The scholarship covers tuition fees and health cover costs.</li>
        <li><strong>Macquarie University International Scholarships:</strong>TThe Macquarie University Vice-Chancellor’s International Scholarship provides a partial tuition fee scholarship for outstanding students to study an undergraduate or postgraduate degree at Macquarie University North Ryde campus. The scholarship amount is varied up to AUD $10,000.</li>
        <li><strong>Adelaide Scholarships International:</strong>The University of Adelaide offers the Adelaide Scholarships International (ASI) program to attract high quality international postgraduate students to areas of research strength in the University of Adelaide to support its research effort. The scholarships include course tuition fees, annual living allowance, and health insurance. **Note: Educube Bangladesh assist students to get these all aforementioned scholarships package.</li>  
        </ul>
    `,
  },
  {
    title: "VERSATILE PROGRAM AND RESEARCH",
    content: `
      <p>Along with a vast number of programs, Australia is top-ranked for Research. Australia is fertile ground for students wishing to pursue higher degrees and conduct research. Australian Universities offer more than 22,000 courses in 1,150 institutions across the country, with an additional $600 million estimated for research in Science and innovation-related programs and activities.</p>
    `,
  },
  {
    title: "EDUCATION COST",
    content: `
      <p>Australia costs less to study compared to the USA and UK. The average first-semester tuition fees are AUD $8,000 to $13,000. Students can work part-time (20 hours per week) and full-time during vacations. Students need to deposit AUD $8,000 to $13,000 for tuition fees and AUD $2500 to $3000 for overseas health cover initially. The air travel and embassy fee cost approximately AUD $900 and AUD $581 respectively.</p>
    `,
  },
  {
    title: "ADMISSION REQUIREMENT",
    content: `
      <p>All students must meet the following criteria to gain admission to any University/College/Institute in Australia:</p>
      <ul class="mt-4 list-disc list-inside">
        <li>Academic Qualifications: Minimum 60% marks in all previous degree programs (secondary, higher secondary, or intermediate level and bachelor or honors).</li>
        <li>ELICOS (English language course for overseas students): Minimum band 5.5 in IELTS (no band less than 5.0) or 46 in PTE or 62 in TOEFL.</li>
        <li>Diploma: Minimum band 5.5 in IELTS (no band less than 5.0) or 46 in PTE or 62 in TOEFL.</li>
        <li>Bachelor Program: Minimum band 6.0 in IELTS (no band less than 5.5) or 54 in PTE or 73 in TOEFL.</li>
        <li>Masters Program: Minimum band 6.5 in IELTS (no band less than 6.0) or 61 in PTE or 85 in TOEFL.</li>
      </ul>
    `,
  },
];

export const studyInCanadaItems = [
  {
    title: "SAFE COUNTRY",
    content: `A very important factor for most international students while choosing a study abroad program, is the safety and security of the country and the city in particular. Parents are worried about the safety of their children and factors like crime against women, racial discrimination, theft and burglary play an important role while choosing a destination for study abroad. In this respect, Canada is one of the safest places to study with very low crime rates and cases of racial discrimination. Statistics by Numbeo reveal that Canada’s safety index (62.42) is much higher than the safety indices of other popular study abroad destinations such as US (49.99), UK (57.9) and Australia (57.94).`,
  },
  {
    title: "MULTICULTURAL ENVIRONMENT",
    content: `Canada is an international leader in computer and information technologies and has a reputation for excellence in such sectors as telecommunications, animation, transportation and engineering; and specifically, aerospace, urban transport, microelectronics, medical devices, advanced software, hydroelectric and nuclear power, lasers and opto-electronics, biotechnology etc. Canada was among the first in the world to recognize the need to connect schools and libraries to the Internet, and its SchoolNet program is being copied around the world. All kinds of modern amenities are provided and most campuses happen to be wired with the most sophisticated technologies the world has to offer.`,
  },
  {
    title: "JOB OPPORTUNITIES",
    content: `Yes, as an international student you will still pay more than Canadians for the same course, but that same course in another country, such as the United States, Australia or United Kingdom, would likely cost even more. Also, see point 1 above – not only are you paying less in Canada, you’re also earning.`,
  },
  {
    title: "AFFORDABLE EDUCATION & LIVING",
    content: `Canada offers not only quality education, but education which is affordable for international including Indian students. Compared to countries like the UK, USA and Australia, cost of education in Canada is quite moderate.`,
  },
  {
    title: "ADMISSION REQUIREMENT",
    content: `
      <p>All students must fulfill these following criteria to take admission in any University/College/Institute in Canada:
      Academic Qualifications: Minimum 60% marks in all previous degree programs i.e. secondary and higher secondary level or intermediate level and bachelor or honors.</p>
      <p>ESL Course (English as a Second Language):</p>
      <p>English language qualifications: With/Without IELTS can apply.</p>
      <p>Diploma:</p>
      <ul class="mt-4 list-disc list-inside">
        <li>English language qualifications: Students require to score minimum band 5.5 (no band less than 5.0) in IELTS or 46 in PTE or 62 in TOEFL.</li>
      </ul>
      <p>Bachelor Program:</p>
      <ul class="mt-4 list-disc list-inside">
        <li>English language qualifications: Students require to score minimum band 6.0 (no band less than 5.5) in IELTS or 54 in PTE or 73 in TOEFL.</li>
      </ul>
      <p>Masters Program:</p>
      <ul class="mt-4 list-disc list-inside">
        <li>English language qualifications: Students require to score minimum band 6.5 (no band less than 6.0) in IELTS or 61 in PTE or 85 in TOEFL.</li>
      </ul>
    `,
  },
];



export const cards = [
  {
    title: "Accounting",
    imageUrl: "/i.webp",
    description: "Develop skills in financial reporting, auditing, and taxation. Learn to analyze financial statements and manage budgets.",
  },
  {
    title: "Engineering & Technology",
    imageUrl: "/i-2.webp",
    description: "Explore innovative solutions in fields like mechanical, civil, and electrical engineering. Gain hands-on experience in technology development.",
  },
  {
    title: "Art",
    imageUrl: "/i-3.webp",
    description: "Delve into creative expression through various mediums. Study art history, techniques, and contemporary practices.",
  },
  {
    title: "Business Management",
    imageUrl: "/i-4.webp",
    description: "Understand business operations, marketing, and strategy. Prepare for leadership roles in diverse organizational settings.",
  },
  {
    title: "Communication",
    imageUrl: "/i-5.webp",
    description: "Learn effective communication strategies, public relations, and media dynamics. Enhance your interpersonal and writing skills.",
  },
  {
    title: "Media",
    imageUrl: "/i-6.webp",
    description: "Study the impact of digital media, journalism, and content creation. Gain skills in multimedia storytelling and production.",
  },
  {
    title: "Medicine",
    imageUrl: "/i-7.webp",
    description: "Prepare for a career in healthcare with a focus on patient care, medical research, and clinical practices.",
  },
  {
    title: "Nursing",
    imageUrl: "/i-11.webp",
    description: "Train in patient care, medical procedures, and healthcare management. Join a rewarding profession dedicated to helping others.",
  },
  {
    title: "Language",
    imageUrl: "/i-9.webp",
    description: "Study linguistics, translation, and cross-cultural communication. Enhance your proficiency in multiple languages.",
  },
  {
    title: "Computing & Technology",
    imageUrl: "/999.webp",
    description: "Learn about software development, data analysis, and emerging technologies. Build a strong foundation in computer science.",
  },
  {
    title: "Education & Training",
    imageUrl: "/i-10.webp",
    description: "Develop teaching skills and educational theory. Prepare to inspire and educate the next generation of learners.",
  },
  {
    title: "Architecture",
    imageUrl: "/192.webp",
    description: "Explore architectural design, urban planning, and sustainable building. Gain the skills to shape the built environment.",
  },
];



export const testimonials = [
  {
    quote:
      "Finally I've received my visa, thanks a lot to Educube for helping me at this field. I've a great experience with this organisation. Staff of Educube is very helping. I will suggest my friends to apply through Educube only.",
    name: "Shakil Alom",
    imageUrl: "/img-01-alom-1-150x150.webp"
  },
  {
    quote:
      "I will be recommending Educube Services to any other trades that are in my situation. This service saved me countless hours of having to resist a college course. Great organization!!",
    name: "Lisa",
    imageUrl: "/6-1-1-150x150.webp",
  },
  {
    quote:
    "It was a pleasure to work with Educube. The way they guide, especially Md Arifuzzaman helped me a lot to get ready for University viva and show a proper direction to develop my English Language skill.",
    name: "Md Sadh",
    imageUrl: "/8-1-150x150.webp",
  },
  {
    quote:
      "I was just delighted when I got the Visa. I want to give all credit to Educube Pty Ltd. because of their proper initiative. They are too much friendly about the student Visa processing. If anyone wants to go to abroad then feel free to contact with EDUCUBE.",
    name: "Arafat Hossain Akib",
    imageUrl: "/7-1-150x150.webp",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];


export const OffShores = [
  {
    title: "Initial Assessment",
    description: "Valuation all Academic Transcripts & Certificates, English Language Course Certificate, National Identity, Passport etc.",
    icon: "/img-11-05-1.webp", // Replace with the appropriate icon if available
  },
  {
    title: "Financial Assessment",
    description: "We informed about course fees, travel cost, sponsor requirements, who can be sponsor and how much money require to pay.",
    icon: "/img-11-06-1.webp", // Replace with the appropriate icon if available
  },
  {
    title: "Scholarships",
    description: "Save on your course fees with a little help from Educube.",
    icon: "/img-11-07-1.webp", // Replace with the appropriate icon if available
  },
  {
    title: "Course & University Selection",
    description: "With so many great abroad universities and courses to choose from, deciding where and what to study can be a difficult decision.",
    icon: "/img-11-08-1.webp", // Replace with the appropriate icon if available
  },
];

export const OnShores = [
  {
    title: "Course Change",
    description: "Educube helps you to choose a suitable course or change a course which is already running.",
    icon: "/img-11-01-1.webp", // Replace with the appropriate icon if available
  },
  {
    title: "University or Institution Change",
    description: "Many of students want to change their Universities/Institutions for better opportunity but they don’t know the proper way to do this. We help them to do this.",
    icon: "/img-11-02-1.webp", // Replace with the appropriate icon if available
  },
  {
    title: "Pre-assessment for migration or another Visa",
    description: "Students can have their assessment during studies. They can check their eligibility and prerequisite for skilled migration and other visas by in house Migration Lawyer from Educube.",
    icon: "/img-11-03-1.webp", // Replace with the appropriate icon if available
  },
  {
    title: "Student Visa Extension",
    description: "You've finished those subjects and your visa is about to expire or you've completed your course and now you've decided to apply for a new student visa.",
    icon: "/img-11-04-1.webp", // Replace with the appropriate icon if available
  },
];

export const statistics = [
  {
    icon: '🌍', // Replace with actual icon if available
    value: '20+',
    description: 'Worldwide Office Handle',
  },
  {
    icon: '📄', // Replace with actual icon if available
    value: '15.8k',
    description: 'Successful Visa Process',
  },
  {
    icon: '👥', // Replace with actual icon if available
    value: '99%',
    description: 'Satisfied Clients Maintains',
  },
];


export const countries = [
  "Dubai",
  "Canada",
  "USA",
  "Australia",
  "Italy",
  "Croatia",
  "Turkey",
  "Malta",
  "Germany",
  "Philippines",
  "Korea"
];


export const steps = [
  {
    step: 1,
    title: "Step One",
    description: "Fill In The Required Form",
    icon: "📈" // Ensure the icon property is included
  },
  {
    step: 2,
    title: "Step Two",
    description: "Sumbit Your Documents",
    icon: "💼" // Ensure the icon property is included
  },
  {
    step: 3,
    title: "Step Three",
    description: "Get Ready To Recieve your visa",
    icon: "🚀" // Ensure the icon property is included
  },
];


export default slides;
