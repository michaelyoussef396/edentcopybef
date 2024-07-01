
import CalendlyWrapper from "@/components/CalendlyWrapper";
import ContactForm from "@/components/ContactForm";
import HeroSection from "@/components/HeroSection";
import mainImage from '@/public/f200968a6e72.webp'
import { InlineWidget } from "react-calendly";
export default function Home() {
  return (
    <main className="">
      <HeroSection
      imageSrc={mainImage}
      title="Contact Us"
      highlightText=""
      height="h-96"
      />
        <ContactForm />

    </main>
  );
}
