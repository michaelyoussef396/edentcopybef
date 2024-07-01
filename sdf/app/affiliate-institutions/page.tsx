import AffiliatedInstitutions from "@/components/AffiliatedInstitutions";
import HeroSection from "@/components/HeroSection";
import ScrollingLogos from "@/components/ScrollingLogos";
import Affiliated from "@/components/affilated";
import mainImage from '@/public/US_School5441_Output.webp'
import image from "@/public/footer-3.png"
export default function Home() {
  return (
    <main className="">
      <HeroSection
      imageSrc={mainImage}
      title=""
      highlightText=""
      height="h-96"
      />
        <AffiliatedInstitutions />
        <HeroSection
      imageSrc={image}
      title="OUR AFFILIATED"
      highlightText="INSTITUTIONS"
      height="h-36"
      />
        <Affiliated />
        <ScrollingLogos />
    </main>
  );
}
