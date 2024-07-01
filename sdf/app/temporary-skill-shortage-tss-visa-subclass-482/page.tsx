import MigrationHeroSection from "@/components/MigrationHeroSection";
import ReusableMigrationVisa from "@/components/ReusableMigrationVisa";
import { temporarySkilledVisaData } from "@/data";
import mainImage from '@/public/berlinmed_leistungen_gesundheitssektor.webp'

export default function Home() {
  return (
    <main className="">
        <MigrationHeroSection
          imageSrc={mainImage}
          title="TEMPORARY SKILL SHORTAGE (TSS) VISA"
          highlightText="SUBCLASS 482"
          height="h-96"
        />
        <ReusableMigrationVisa data={temporarySkilledVisaData} />
    </main>
  );
}
