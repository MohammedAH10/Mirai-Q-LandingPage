import { Button } from "@/components/ui/button";
import { ArrowRight, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";

const partnershipTypes = [
  "Schools", "Universities", "NGOs", "Government agencies",
  "Research institutions", "Educational communities", "Innovation hubs",
  "Technology organizations", "Social enterprises", "Sponsors and donors",
];

const supportWays = [
  "Partnering with us",
  "Sponsoring educational initiatives",
  "Providing infrastructure support",
  "Collaborating on research",
  "Donating resources",
  "Volunteering expertise",
  "Joining the community",
];

export const PartnershipsCTA = () => {
  const navigate = useNavigate();

  return (
    <section id="partnerships" className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10 space-y-24">
        {/* Partnerships */}
        <div className="space-y-8 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-center">
            Partnerships & <span className="bg-gradient-to-r from-primary to-blue-300 bg-clip-text text-transparent">Collaboration</span>
          </h2>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto">
            We are open to collaborating with organizations that share our vision of accessible educational infrastructure.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {partnershipTypes.map((type) => (
              <span key={type} className="px-4 py-2 glass rounded-full text-sm text-muted-foreground hover:text-primary hover:border-primary/30 transition-all">
                {type}
              </span>
            ))}
          </div>
          <p className="text-center text-muted-foreground">
            Together, we can build accessible educational infrastructure for the future.
          </p>
        </div>

        {/* Support */}
        <div className="space-y-8 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-center">
            Support Our <span className="text-primary">Mission</span>
          </h2>
          <div className="glass rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <p className="text-muted-foreground mb-6 text-center">
              As a nonprofit social enterprise, support helps us expand educational access, build AI learning tools, improve offline learning systems, and support underserved communities.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
              {supportWays.map((way) => (
                <div key={way} className="flex items-start gap-3">
                  <Heart className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{way}</span>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Button variant="hero" size="lg" onClick={() => navigate("/waitlist")} className="group">
                Support Mirai-Q
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>

        {/* Join Section */}
        <div className="space-y-8 animate-fade-in">
          <div className="glass-strong rounded-2xl p-10 md:p-16 text-center max-w-4xl mx-auto border-primary/20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Join <span className="bg-gradient-to-r from-primary to-blue-300 bg-clip-text text-transparent">Mirai-Q</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Whether you are a student, educator, developer, founder, researcher, school, NGO, policymaker, donor, volunteer, or technology partner — there is a place for you in the Mirai-Q ecosystem.
            </p>
            <p className="text-foreground font-semibold text-xl mb-8">
              Together, we can reimagine education for emerging communities.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="lg" onClick={() => navigate("/waitlist")} className="group">
                Join the Community
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="glow" size="lg" onClick={() => navigate("/waitlist")}>
                Become a Partner
              </Button>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="space-y-8 animate-fade-in">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              The Future of Learning Should Be <span className="bg-gradient-to-r from-primary to-blue-300 bg-clip-text text-transparent">Accessible</span>.
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Mirai-Q is building AI-powered educational infrastructure designed for real-world challenges and real human growth.
              <br /><br />
              Join us in building a future where learning is intelligent, collaborative, inclusive, and available to everyone.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="lg" onClick={() => navigate("/waitlist")} className="group">
                Join the Community
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="glow" size="lg" onClick={() => navigate("/waitlist")}>
                Become a Partner
              </Button>
              <Button variant="outline" size="lg" onClick={() => navigate("/waitlist")}>
                Support the Mission
              </Button>
            </div>
            <div className="mt-4">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary" onClick={() => navigate("/waitlist")}>
                Bring Mirai-Q to Your Institution
              </Button>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary ml-4" onClick={() => navigate("/waitlist")}>
                Start Building With Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
