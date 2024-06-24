import { Header } from "@/components/Header/ui/Header";
import { HeroSlider } from "@/components/HeroSlider/ui/HeroSlider";
import AboutSection from "@/sections/AboutSection/ui/AboutSection";
import HeroSection from "@/sections/HeroSection/ui/HeroSection";

export default function Home() {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <HeroSection/>
        <AboutSection/>
      </main>
    </div>
  );
}
