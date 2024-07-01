
import VisitorToStudentVisa from "@/components/VisitorToStudentVisa";
import { StudentTestimonials } from "@/components/StudentTestimonials";
import CardGrid from "@/components/CardGrid";
import HeroSection from "@/components/HeroSection";
import mainImage from '@/public/main3.png'
import ShoreServices from "@/components/ShoreServices";
export default function Home() {
  return (
    <main className="">
      <HeroSection
      imageSrc={mainImage}
      title="student"
      highlightText="visa"
      height="h-screen"
      />
        <ShoreServices />
        <VisitorToStudentVisa />
        <StudentTestimonials />
        <CardGrid />
    </main>
  );
}
