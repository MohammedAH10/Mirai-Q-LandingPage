import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import miraiQLogo from "@/assets/mirai-q-logo.png";
import { ArrowRight, Sparkles } from "lucide-react";

export const Hero = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Thanks for your interest!",
        description: "We'll notify you when Mirai-Q launches.",
      });
      setEmail("");
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20 pt-32">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[100px] animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center space-y-8 animate-fade-in">
          {/* Logo */}
          <div className="flex justify-center mb-12">
            <div className="relative group cursor-pointer">
              <img 
                src={miraiQLogo} 
                alt="Mirai-Q Logo" 
                className="w-64 h-64 md:w-80 md:h-80 object-contain hover:scale-110 transition-transform duration-500 drop-shadow-[0_0_25px_rgba(47,150,216,0.4)]"
              />
            </div>
          </div>

          {/* Heading */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/50 border border-primary/30 rounded-full text-sm text-foreground/90 animate-scale-in">
              <Sparkles className="w-4 h-4 text-primary" />
              <span>AI-Powered Study Revolution</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight animate-fade-in-up">
              Your AI Study
              <br />
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-shimmer bg-clip-text text-transparent">
                Companion
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Create personal or group study spaces, collaborate seamlessly, and harness AI-powered learning—even offline.
            </p>
          </div>

          {/* Early Access Form */}
          <div className="max-w-md mx-auto animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-input border-border focus:border-primary h-12 text-base"
              />
              <Button type="submit" variant="hero" size="lg" className="group">
                Get Early Access
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
            <p className="text-sm text-muted-foreground mt-3">
              Join the waitlist for exclusive early access
            </p>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 pt-8 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            {["Offline-First", "AI-Powered", "Collaborative", "Discord-Style"].map((feature, index) => (
              <div
                key={feature}
                className="px-4 py-2 bg-card border border-border rounded-full text-sm hover:border-primary/50 hover:bg-card/80 transition-all duration-300 cursor-default"
                style={{ animationDelay: `${0.7 + index * 0.1}s` }}
              >
                {feature}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
