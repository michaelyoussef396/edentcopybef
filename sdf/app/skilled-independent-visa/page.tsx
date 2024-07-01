import VisaComponent from "@/components/VisaComponent";
import VisaComparison from "@/components/ComparisonCard";
import SkillIndependence from "@/components/SkillIndependence";
import mainImage from '@/public/Prepaid-Cards.webp'
import MigrationHeroSection from "@/components/MigrationHeroSection";
export default function Home() {
  return (
    <main className="">
        <MigrationHeroSection
          imageSrc={mainImage}
          title="SKILLED INDEPENDENT VISA"
          highlightText="SUBCLASS 189"
          height="h-96"
        />
        <VisaComponent />
        <VisaComparison />
    </main>
  );
}
