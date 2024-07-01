
import AboutUs from "@/components/AboutUs";
import CountryList from "@/components/CountryList";
import Hero from "@/components/Hero";
import Statistics from "@/components/Statistics";
import VisaCategories from "@/components/VisaCategories";
import WorkingProcess from "@/components/WorkingProcess";
import ScrollingLogos from "@/components/ScrollingLogos";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <AboutUs />
      <VisaCategories />
      <CountryList />
      <WorkingProcess />
      <Statistics />
      <ScrollingLogos />
    </main>
  );
}
