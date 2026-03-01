import EmblaCarousel from "@/components/carousal";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { EmblaOptionsType } from "embla-carousel";
import "@/css/embla.css";
import AboutSchool from "@/components/about";
import Admissions from "@/components/admissions";
import WhyMilestone from "@/components/whytochoose";
import NewsEvents from "@/components/news";
import Testimonials from "@/components/testimonials";

export default function Home() {
  const OPTIONS: EmblaOptionsType = { loop: true, duration: 30 };
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <div className="h-220 flex flex-col justify-between items-center">
      <Header />

      <EmblaCarousel slides={SLIDES} options={OPTIONS} />

      <AboutSchool />

      <Admissions />

      <NewsEvents />

      <WhyMilestone />

      <Testimonials />

      <Footer />
    </div>
  );
}
