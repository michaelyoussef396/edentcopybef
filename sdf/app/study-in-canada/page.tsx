import Accordion from "@/components/Accordion";
import AccordionCanada from "@/components/AccordionCanada";
import HeroSection from "@/components/HeroSection";
import QuickSteps from "@/components/QuickSteps";
import ScrollingLogos from "@/components/ScrollingLogos";
import WhyStudyInCanada from "@/components/WhyStudyInCanada";
import { studyInCanadaItems } from "@/data";
import mainImage from '@/public/main3.png'
export default function Home() {
  return (
    <main className="">
      <HeroSection
      imageSrc={mainImage}
      title="STUDY IN"
      highlightText="CANADA"
      height="h-96"
      />
        <WhyStudyInCanada />
        <QuickSteps />
        <AccordionCanada items={studyInCanadaItems} />
        <ScrollingLogos />
    </main>
  );
}
