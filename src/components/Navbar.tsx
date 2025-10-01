import { Button } from "@/components/ui/button";
import miraiQLogo from "@/assets/mirai-q-logo.png";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-1 group cursor-pointer">
            <span className="text-2xl font-bold text-foreground transition-colors group-hover:text-primary">
              Mirai-
            </span>
            <img 
              src={miraiQLogo} 
              alt="Q" 
              className="w-8 h-8 object-contain transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_hsl(var(--glow)/0.6)]"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("features")}
              className="text-foreground/80 hover:text-primary transition-colors text-sm font-medium"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("cta")}
              className="text-foreground/80 hover:text-primary transition-colors text-sm font-medium"
            >
              Early Access
            </button>
            <Button variant="glow" size="sm">
              Join Waitlist
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 animate-fade-in">
            <button
              onClick={() => scrollToSection("features")}
              className="block w-full text-left px-4 py-2 text-foreground/80 hover:text-primary hover:bg-secondary/50 rounded-lg transition-all"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("cta")}
              className="block w-full text-left px-4 py-2 text-foreground/80 hover:text-primary hover:bg-secondary/50 rounded-lg transition-all"
            >
              Early Access
            </button>
            <div className="px-4">
              <Button variant="glow" size="sm" className="w-full">
                Join Waitlist
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
