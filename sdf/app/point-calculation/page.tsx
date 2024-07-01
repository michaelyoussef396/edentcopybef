
import HeroSection from "@/components/HeroSection";
import PointCalc from "@/components/PointCalc";
import mainImage from  "@/public/tsiatsios22112022-20.webp";

export default function Home() {
  return (
    <main className="">
      <HeroSection
      imageSrc={mainImage}
      title="Sponsored Jobs"
      highlightText=""
      height="h-96"
      />
        <PointCalc />
    </main>
  );
}
