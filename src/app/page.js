import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import AISolutionsSection from "@/components/section/AISolutionsSection";
import ClickUpHero from "@/components/section/ClickUpHero";
import ContextSection from "@/components/section/ContextSection";
import EnterpriseSection from "@/components/section/EnterpriseSection";
import FeatureGrid from "@/components/section/FeatureGrid";
import FooterBanner from "@/components/section/FooterBanner";
import G2Stats from "@/components/section/G2Stats";
import LovedSection from "@/components/section/LovedSection";
import RoiSection from "@/components/section/RoiSection";
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
        <RoiSection />
        <LovedSection />
        <G2Stats />
        <EnterpriseSection />
        <FooterBanner />
        <Footer />

      </div>
    </>
  );
}
