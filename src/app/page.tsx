import { Header } from "@/components/Header/ui/Header";
import { HeroSlider } from "@/components/HeroSlider/ui/HeroSlider";
import AboutSection from "@/sections/AboutSection/ui/AboutSection";
import ContactsSection from "@/sections/ContactsSection/ui/ContactsSection";
import GallerySection from "@/sections/GallerySection/ui/GallerySection";
import HeroSection from "@/sections/HeroSection/ui/HeroSection";
import MenuSection from "@/sections/MenuSection/ui/MenuSection";
import VideoSection from "@/sections/VideoSection/ui/VideoSection";

export default function Home() {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <HeroSection/>
        <AboutSection/>
        <MenuSection/>
        <GallerySection/>
        <VideoSection/>
        <ContactsSection/>
      </main>
    </div>
  );
}
