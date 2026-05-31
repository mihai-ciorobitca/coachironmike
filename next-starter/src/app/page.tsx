import { Footer, HomeSections } from "@/components/HomeSections";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <HomeSections />
      </main>
      <Footer />
    </div>
  );
}
