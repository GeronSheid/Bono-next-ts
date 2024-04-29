import { Header } from "@/components/Header/ui/Header";
import { HeroSlider } from "@/components/HeroSlider/ui/HeroSlider";

export default function Home() {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <section className="hero">
          <HeroSlider />
        </section>
      </main>
    </div>
  );
}
