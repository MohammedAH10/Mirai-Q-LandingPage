import { Button } from "@/components/ui/button";
import miraiQLogo from "@/assets/mirai-q-logo.png";
import { ArrowRight, Sparkles, GraduationCap, Users, Heart, School } from "lucide-react";
import { useNavigate } from "react-router-dom";

const taglines = [
  "Learning Without Limits.",
  "AI for Education. Built for Africa.",
  "Intelligent Learning for Everyone.",
  "The Future Classroom for Emerging Communities.",
  "Learn. Collaborate. Build.",
  "Education Beyond Infrastructure.",
];

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20 pt-32">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center space-y-8 animate-fade-in">
          <div className="flex justify-center mb-8">
            <div className="relative group cursor-pointer">
              <div className="logo-glow">
                <img
                  src={miraiQLogo}
                  alt="Mirai-Q Logo"
                  className="w-48 h-48 md:w-64 md:h-64 object-contain relative z-10 transition-transform duration-500 hover:scale-110"
                />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-sm text-foreground/90 animate-scale-in">
              <Sparkles className="w-4 h-4 text-primary" />
              <span>The AI-Powered Learning & Collaboration Ecosystem for African Education</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight animate-fade-in-up">
              <span className="bg-gradient-to-r from-primary via-blue-300 to-primary bg-[length:200%_auto] animate-shimmer bg-clip-text text-transparent">
                MIRAI-Q
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <span className="text-foreground font-semibold">Education should not depend on stable internet, expensive infrastructure, or geography.</span>
              <br /><br />
              Mirai-Q is a nonprofit social enterprise building the future of learning for Africa through AI-powered education, collaboration, and digital access.
              <br /><br />
              We are creating an intelligent learning ecosystem where students, educators, founders, researchers, creators, and communities can learn, collaborate, build, and grow together — online and offline.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 pt-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            {taglines.map((tagline, i) => (
              <span
                key={tagline}
                className="px-3 py-1.5 glass rounded-full text-sm text-muted-foreground hover:text-primary hover:border-primary/40 transition-all cursor-default"
                style={{ animationDelay: `${0.5 + i * 0.1}s` }}
              >
                {tagline}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4 pt-6 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            <Button variant="hero" size="lg" onClick={() => navigate("/waitlist")} className="group">
              Join the Movement
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="glow" size="lg" onClick={() => document.getElementById("partnerships")?.scrollIntoView({ behavior: "smooth" })}>
              Become a Partner
            </Button>
            <Button variant="outline" size="lg" onClick={() => navigate("/waitlist")}>
              Start Learning
            </Button>
          </div>
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.7s" }}>
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary" onClick={() => document.getElementById("partnerships")?.scrollIntoView({ behavior: "smooth" })}>
              <Heart className="w-4 h-4 mr-1" /> Support Mirai-Q
            </Button>
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary" onClick={() => navigate("/waitlist")}>
              <School className="w-4 h-4 mr-1" /> Bring Mirai-Q to Your School
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
