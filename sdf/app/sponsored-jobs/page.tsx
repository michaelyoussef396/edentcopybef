
import FiveStepsToDream from "@/components/FiveStepsToDream";
import HeroSection from "@/components/HeroSection";
import mainImage from  "@/public/1001_Team.webp";

export default function Home() {
  return (
    <main className="">
      <HeroSection
      imageSrc={mainImage}
      title="Sponsored Jobs"
      highlightText=""
      height="h-96"
      />
        <FiveStepsToDream />
    </main>
  );
}
