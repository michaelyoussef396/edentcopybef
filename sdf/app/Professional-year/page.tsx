import { contentData } from '@/data';
import ContentSection from '@/components/ContentSection';
import InvertedContentSection from '@/components/InvertedContentSection';
import HeroSection from '@/components/HeroSection';

export default function Home() {
  const {
    heroSection,
    professionalYearPrograms,
    educationCentre,
    performanceEducation,
    atmcProfessionalYear,
  } = contentData;

  return (
    <main className="">
      <HeroSection
        imageSrc={heroSection.imageSrc}
        title={heroSection.title}
        highlightText={heroSection.highlightText}
        height={heroSection.height}
      />
      <ContentSection
        {...professionalYearPrograms}
        backgroundColor="bg-white"
        textColor="text-black"
      />
      <InvertedContentSection
        {...educationCentre}
      />
      <ContentSection
        {...performanceEducation}
        backgroundColor="bg-white"
        textColor="text-black"
      />
      <InvertedContentSection
        {...atmcProfessionalYear}
      />
    </main>
  );
}
