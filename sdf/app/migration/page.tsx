import FAQAccordion from "@/components/FAQAccordion";
import HeroSection from "@/components/HeroSection";
import ScrollingLogos from "@/components/ScrollingLogos";
import VisaOptions from "@/components/VisaOptions";
import VisasWeSpecialiseIn from "@/components/VisasWeSpecialiseIn";
import mainImage from '@/public/parallax-abouit-01.webp'

export default function Home() {
  return (
    <main className="">
      <HeroSection
      imageSrc={mainImage}
      title="MIGRATION"
      highlightText=""
      height="h-96"
      />
        <VisaOptions />
        <VisasWeSpecialiseIn />
        <FAQAccordion />
        <ScrollingLogos />
    </main>
  );
}
