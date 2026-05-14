import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AboutMission } from "@/components/AboutMission";
import { ProblemSolution } from "@/components/ProblemSolution";
import { Features } from "@/components/Features";
import { WhyImpactValues } from "@/components/WhyImpactValues";
import { PartnershipsCTA } from "@/components/PartnershipsCTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <div id="about"><AboutMission /></div>
      <ProblemSolution />
      <div id="features"><Features /></div>
      <div id="impact"><WhyImpactValues /></div>
      <div id="partnerships"><PartnershipsCTA /></div>
      <Footer />
    </div>
  );
};

export default Index;
