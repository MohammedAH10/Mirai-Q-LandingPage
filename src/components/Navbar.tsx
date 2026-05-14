import { Button } from "@/components/ui/button";
import miraiQLogo from "@/assets/mirai-q-logo.png";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    if (window.location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          setIsMenuOpen(false);
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setIsMenuOpen(false);
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-strong">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div
            className="flex items-center gap-1 group cursor-pointer"
            onClick={() => navigate("/")}
          >
            <div className="logo-glow">
              <span className="text-2xl font-bold text-foreground transition-colors group-hover:text-primary">
                Mirai-
              </span>
              <img
                src={miraiQLogo}
                alt="Q"
                className="w-8 h-8 object-contain relative z-10 transition-all duration-300 group-hover:scale-110"
              />
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground/80 hover:text-primary transition-colors text-sm font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="text-foreground/80 hover:text-primary transition-colors text-sm font-medium"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("impact")}
              className="text-foreground/80 hover:text-primary transition-colors text-sm font-medium"
            >
              Impact
            </button>
            <button
              onClick={() => scrollToSection("partnerships")}
              className="text-foreground/80 hover:text-primary transition-colors text-sm font-medium"
            >
              Partnerships
            </button>
            <Button variant="glow" size="sm" onClick={() => navigate("/waitlist")}>
              Join Waitlist
            </Button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 animate-fade-in">
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left px-4 py-2 text-foreground/80 hover:text-primary hover:bg-secondary/50 rounded-lg transition-all"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="block w-full text-left px-4 py-2 text-foreground/80 hover:text-primary hover:bg-secondary/50 rounded-lg transition-all"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("impact")}
              className="block w-full text-left px-4 py-2 text-foreground/80 hover:text-primary hover:bg-secondary/50 rounded-lg transition-all"
            >
              Impact
            </button>
            <button
              onClick={() => scrollToSection("partnerships")}
              className="block w-full text-left px-4 py-2 text-foreground/80 hover:text-primary hover:bg-secondary/50 rounded-lg transition-all"
            >
              Partnerships
            </button>
            <div className="px-4">
              <Button variant="glow" size="sm" className="w-full" onClick={() => { setIsMenuOpen(false); navigate("/waitlist"); }}>
                Join Waitlist
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
