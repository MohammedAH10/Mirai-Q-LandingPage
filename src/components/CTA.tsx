import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Rocket } from "lucide-react";

export const CTA = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "You're on the list!",
        description: "Get ready for the future of studying with Mirai-Q.",
      });
      setEmail("");
    }
  };

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center space-y-8 p-8 md:p-12 bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl shadow-[0_0_50px_hsl(var(--glow)/0.15)] animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-4">
            <Rocket className="w-8 h-8 text-primary" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold">
            Ready to Transform
            <br />
            Your Study Experience?
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Be among the first to experience the future of collaborative learning. Sign up for early access today.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-input border-border focus:border-primary h-12 text-base"
              />
              <Button type="submit" variant="hero" size="lg">
                Join Waitlist
              </Button>
            </div>
          </form>

          <p className="text-sm text-muted-foreground">
            No spam, ever. We respect your privacy.
          </p>
        </div>
      </div>
    </section>
  );
};
