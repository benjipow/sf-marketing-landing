import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Strategy } from "@/components/Strategy";
import { SlidingGallery } from "@/components/SlidingGallery";
import { Marquee } from "@/components/Marquee";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Strategy />
        <SlidingGallery />
        <Marquee />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
