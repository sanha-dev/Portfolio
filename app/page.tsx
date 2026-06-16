import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CareerSnapshot from "@/components/CareerSnapshot";
import CoreStrength from "@/components/CoreStrength";
import FeaturedProjects from "@/components/FeaturedProjects";
import Timeline from "@/components/Timeline";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <CareerSnapshot />
        <CoreStrength />
        <FeaturedProjects />
        <Timeline />
        <Contact />
      </main>

      <Footer />
    </>
  );
}