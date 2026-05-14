import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, CheckCircle, AlertCircle, Users, Sparkles } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

type Status = "idle" | "loading" | "success" | "duplicate" | "error";

export default function Waitlist() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState({ title: "", description: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      setMessage({ title: data.title, description: data.description });
      setStatus(data.message === "success" ? "success" : data.message === "duplicate" ? "duplicate" : "error");
    } catch {
      setMessage({ title: "Connection Error", description: "Could not reach the server. Please try again later." });
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20 pt-32">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-float" />
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] animate-float" style={{ animationDelay: "2s" }} />
        </div>

        <div className="container mx-auto max-w-2xl relative z-10">
          <div className="glass-strong rounded-2xl p-8 md:p-12 border-primary/20 shadow-[0_0_50px_hsl(var(--glow)/0.15)] animate-fade-in">
            <div className="text-center space-y-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-2">
                <Users className="w-8 h-8 text-primary" />
              </div>

              <h1 className="text-3xl md:text-4xl font-bold">
                Join the <span className="bg-gradient-to-r from-primary to-blue-300 bg-clip-text text-transparent">Waitlist</span>
              </h1>

              <p className="text-muted-foreground max-w-lg mx-auto">
                Be among the first to experience Mirai-Q — the AI-powered learning ecosystem built for Africa. Sign up as an early tester and help shape the future of education.
              </p>

              {/* Status cards */}
              {status === "success" && (
                <div className="glass rounded-xl p-4 border-green-500/30 bg-green-500/5 animate-scale-in">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-400 shrink-0 mt-0.5" />
                    <div className="text-left">
                      <p className="font-semibold text-green-400">{message.title}</p>
                      <p className="text-sm text-muted-foreground">{message.description}</p>
                    </div>
                  </div>
                </div>
              )}

              {status === "duplicate" && (
                <div className="glass rounded-xl p-4 border-amber-500/30 bg-amber-500/5 animate-scale-in">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-6 h-6 text-amber-400 shrink-0 mt-0.5" />
                    <div className="text-left">
                      <p className="font-semibold text-amber-400">{message.title}</p>
                      <p className="text-sm text-muted-foreground">{message.description}</p>
                    </div>
                  </div>
                </div>
              )}

              {status === "error" && (
                <div className="glass rounded-xl p-4 border-red-500/30 bg-red-500/5 animate-scale-in">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-6 h-6 text-red-400 shrink-0 mt-0.5" />
                    <div className="text-left">
                      <p className="font-semibold text-red-400">{message.title}</p>
                      <p className="text-sm text-muted-foreground">{message.description}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Form */}
              {status !== "success" && (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      disabled={status === "loading"}
                      className="flex-1 bg-background border-border focus:border-primary h-12 text-base"
                    />
                    <Button type="submit" variant="hero" size="lg" disabled={status === "loading"} className="group">
                      {status === "loading" ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" /></svg>
                          Submitting...
                        </span>
                      ) : (
                        <>
                          Join Early Access
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    No spam, ever. We respect your privacy.
                  </p>
                </form>
              )}

              {status === "success" && (
                <div className="pt-4">
                  <Button variant="glow" onClick={() => navigate("/")} className="group">
                    <Sparkles className="w-4 h-4" />
                    Back to Home
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
