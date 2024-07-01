import Accordion from "@/components/Accordion";
import CardGrid from "@/components/CardGrid";
import HeroSection from "@/components/HeroSection";
import QuickSteps from "@/components/QuickSteps";
import StudyProcess from "@/components/StudyingProccess";
import WhyStudyAustralia from "@/components/WhyStudyAustralia";
import mainImage from '@/public/ThinkstockPhotos-535455441_12-5.webp'

export default function Home() {
  return (
    <main className="">
      <HeroSection
      imageSrc={mainImage}
      title="Study In"
      highlightText="Australia"
      height="h-96"
      />
        <WhyStudyAustralia />
        <QuickSteps />
        <StudyProcess />
        <CardGrid />
    </main>
  );
}
