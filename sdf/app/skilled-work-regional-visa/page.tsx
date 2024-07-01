import VisaComparison from "@/components/ComparisonCard";
import MigrationHeroSection from "@/components/MigrationHeroSection";
import SkilledWorkRegionalVisa from "@/components/SkilledWorkRegionalVisa";
import VisaDetails from "@/components/VisaDetails";
import mainImage from '@/public/ACS.webp'
export default function Home() {
  return (
    <main className="">
        <MigrationHeroSection
          imageSrc={mainImage}
          title="SKILLED WORK REGIONAL VISA"
          highlightText="SUBCLASS 491"
          height="h-96"
        />
      <VisaDetails />
      <VisaComparison />
    </main>
  );
}
