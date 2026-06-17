import { getMelStats } from "@/lib/mel-stats";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CareerSnapshot from "@/components/CareerSnapshot";
import CoreStrength from "@/components/CoreStrength";
import FeaturedProjects from "@/components/FeaturedProjects";
import Timeline from "@/components/Timeline";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const revalidate = 3600;

export default async function Home() {
  const { userCount } = await getMelStats();

  return (
    <>
      <Navbar />

      <main>
        <Hero userCount={userCount} />
        <CareerSnapshot />
        <CoreStrength />
        <FeaturedProjects melUserCount={userCount} />
        <Timeline />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
