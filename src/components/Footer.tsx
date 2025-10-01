import miraiQLogo from "@/assets/mirai-q-logo.png";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <div className="flex items-center gap-1 justify-center md:justify-start">
              <span className="text-2xl font-bold" style={{ color: 'rgb(47, 150, 216)' }}>
                Mirai-
              </span>
              <img 
                src={miraiQLogo} 
                alt="Q" 
                className="w-8 h-8 object-contain"
              />
            </div>
            <p className="text-sm text-muted-foreground mt-1">
              The future of collaborative learning
            </p>
          </div>
          
          <div className="text-sm text-muted-foreground text-center md:text-right">
            <p>© 2025 Mirai-Q. All rights reserved.</p>
            <p className="mt-1">Building the next generation of study tools</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
