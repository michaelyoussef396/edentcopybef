
import CalendlyWrapper from "@/components/CalendlyWrapper";
import HeroSection from "@/components/HeroSection";
import mainImage from '@/public/f200968a6e72.webp'
export default function Home() {
  return (
    <main className="">
      <HeroSection
      imageSrc={mainImage}
      title="Book an Appointment"
      highlightText=""
      height="h-96"
      />
        <CalendlyWrapper />

    </main>
  );
}
