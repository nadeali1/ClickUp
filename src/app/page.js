import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import AISolutionsSection from "@/components/section/AISolutionsSection";
import ClickUpHero from "@/components/section/ClickUpHero";
import ContextSection from "@/components/section/ContextSection";
import FeatureGrid from "@/components/section/FeatureGrid";
import SuperAgentHero from "@/components/section/SuperAgentHero";

export default function Home() {
  return (
    <>
      <div>
        <Navbar />
        <ClickUpHero />
        <ContextSection />
        <FeatureGrid />
        <SuperAgentHero />
        <AISolutionsSection />
        <Footer />

      </div>
    </>
  );
}
