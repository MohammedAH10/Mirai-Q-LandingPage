export const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Mirai-Q
            </h3>
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
