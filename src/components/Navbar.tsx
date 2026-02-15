
import { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
      scrolled ? "bg-background/80 backdrop-blur-md border-border/10 py-4" : "bg-transparent py-6"
    )}>
      <div className="container px-4 md:px-6 flex items-center justify-between">
        <a href="#" className="text-2xl font-display font-black text-foreground tracking-tighter">
          TOXIC<span className="text-primary">TACTICS</span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="#arena" className="hover:text-primary transition-colors">ARENA</a>
          <a href="#missions" className="hover:text-primary transition-colors">MISSIONS</a>
          <a href="#gear" className="hover:text-primary transition-colors">GEAR</a>
          <a href="#booking" className="hover:text-primary transition-colors">PRICING</a>
        </div>

        <a 
          href="#booking"
          className="px-6 py-2 bg-primary text-foreground font-bold text-sm rounded hover:bg-background transition-colors"
        >
          BOOK NOW
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
