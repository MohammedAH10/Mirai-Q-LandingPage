import miraiQLogo from "@/assets/mirai-q-logo.png";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Mission", href: "#about" },
  { label: "Vision", href: "#about" },
  { label: "Features", href: "#features" },
  { label: "Community", href: "#impact" },
  { label: "Partnerships", href: "#partnerships" },
  { label: "Support Us", href: "#partnerships" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms", href: "#" },
];

const socials = [
  { label: "LinkedIn", href: "#" },
  { label: "X / Twitter", href: "#" },
  { label: "GitHub", href: "#" },
  { label: "Discord", href: "#" },
  { label: "YouTube", href: "#" },
];

export const Footer = () => {
  return (
    <footer className="py-16 px-4 border-t border-border/50 glass-strong">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-1 mb-3">
              <div className="logo-glow">
                <span className="text-2xl font-bold text-foreground">
                  Mirai-
                </span>
                <img
                  src={miraiQLogo}
                  alt="Q"
                  className="w-7 h-7 object-contain relative z-10"
                />
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              AI-Powered Educational Infrastructure for Emerging Communities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:hello@miraiq.org" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  hello@miraiq.org
                </a>
              </li>
              <li>
                <a href="mailto:partnerships@miraiq.org" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  partnerships@miraiq.org
                </a>
              </li>
              <li>
                <a href="mailto:community@miraiq.org" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  community@miraiq.org
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Social</h4>
            <ul className="space-y-2">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; Mirai-Q. Building accessible intelligent learning systems for the future.
          </p>
        </div>
      </div>
    </footer>
  );
};
