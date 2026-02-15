import React from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { LeaderboardTicker } from "@/components/LeaderboardTicker";
import { GearShowcase } from "@/components/GearShowcase";
import { Features } from "@/components/Features";
import { Pricing } from "@/components/Pricing";
import { Reviews } from "@/components/Reviews";
import { Footer } from "@/components/Footer";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <main className="min-h-screen bg-background text-foreground font-body selection:bg-primary selection:text-black">
          <Navbar />
          <Hero />
          <LeaderboardTicker />
          <Features />
          <div id="gear">
             <GearShowcase />
          </div>
          <Reviews />
          <Pricing />
          <Footer />
        </main>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
