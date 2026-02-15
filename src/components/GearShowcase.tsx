
import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Shield, Radio, Crosshair, Cpu, Battery, Target } from "lucide-react";

// Types for our gear hotspots
type GearPoint = {
  id: string;
  x: number; // Percentage
  y: number; // Percentage
  title: string;
  desc: string;
  icon: React.ElementType;
};

const GEAR_POINTS: GearPoint[] = [
  {
    id: "phaser",
    x: 65,
    y: 35,
    title: "Plasma Phaser V9",
    desc: "Precision IR beam with 0.05s latency. Haptic recoil engine included.",
    icon: Crosshair,
  },
  {
    id: "vest",
    x: 45,
    y: 50,
    title: "Reactive Armor Vest",
    desc: "RGB target zones that flash on impact. 12-hour battery life.",
    icon: Shield,
  },
  {
    id: "comms",
    x: 55,
    y: 25,
    title: "Tac-Comms Headset",
    desc: "Real-time voice chat with squad mates. Noise-cancelling mic.",
    icon: Radio,
  },
  {
    id: "processor",
    x: 40,
    y: 70,
    title: "Score Processor",
    desc: "Instant kill confirmation and rank updates via local 5GHz mesh.",
    icon: Cpu,
  },
];

export function GearShowcase() {
  const [activePoint, setActivePoint] = useState<string | null>(null);

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[radial-gradient(circle_at_center,var(--primary-dark)_0%,transparent_70%)] opacity-20 pointer-events-none" />

      <div className="container px-4 md:px-6">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            BATTLE-READY <span className="text-primary">HARDWARE</span>
          </h2>
          <p className="text-muted-foreground max-w-xl text-lg">
            Our Gen-4 tactical suits aren't just toys—they're military-grade simulation hardware designed for maximum immersion.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Interactive Image Area */}
          <div className="relative aspect-[4/3] bg-card/30 rounded-xl border border-border/10 overflow-hidden group">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555617766-c94804975da3?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-60 grayscale group-hover:grayscale-0 transition-all duration-700"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            
            {/* Overlay Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(57,255,20,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(57,255,20,0.05)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

            {/* Hotspots */}
            {GEAR_POINTS.map((point) => (
              <div
                key={point.id}
                className="absolute"
                style={{ left: `${point.x}%`, top: `${point.y}%` }}
              >
                <button
                  onClick={() => setActivePoint(point.id)}
                  onMouseEnter={() => setActivePoint(point.id)}
                  className="relative group/point -translate-x-1/2 -translate-y-1/2"
                >
                  {/* Pulse Effect */}
                  <span className="absolute inset-0 rounded-full bg-primary opacity-50 animate-ping group-hover/point:animation-none" />
                  <div className={`relative w-8 h-8 rounded-full border-2 flex items-center justify-center transition-colors ${activePoint === point.id ? "bg-primary border-primary text-foreground" : "bg-background/50 border-primary text-primary hover:bg-primary hover:text-foreground"}`}>
                    <Zap className="w-4 h-4" />
                  </div>
                </button>
              </div>
            ))}

            {/* Connecting Lines (Decor) */}
            <svg className="absolute inset-0 pointer-events-none opacity-30">
              <line x1="45%" y1="50%" x2="65%" y2="35%" stroke="currentColor" className="text-primary" strokeDasharray="4 4" />
              <line x1="45%" y1="50%" x2="55%" y2="25%" stroke="currentColor" className="text-primary" strokeDasharray="4 4" />
            </svg>
          </div>

          {/* Info Panel */}
          <div className="relative h-full min-h-[300px]">
             <AnimatePresence mode="wait">
               {activePoint ? (
                 <motion.div
                   key={activePoint}
                   initial={{ opacity: 0, x: 20 }}
                   animate={{ opacity: 1, x: 0 }}
                   exit={{ opacity: 0, x: -20 }}
                   transition={{ duration: 0.3 }}
                   className="h-full flex flex-col justify-center"
                 >
                   {(() => {
                     const point = GEAR_POINTS.find(p => p.id === activePoint)!;
                     const Icon = point.icon;
                     return (
                       <div className="bg-card border border-primary/20 p-8 rounded-lg relative overflow-hidden">
                         <div className="absolute top-0 right-0 p-4 opacity-10">
                            <Icon className="w-32 h-32 text-primary" />
                         </div>
                         <div className="flex items-center gap-4 mb-4">
                           <div className="p-3 bg-primary/10 rounded border border-primary/30 text-primary">
                             <Icon className="w-6 h-6" />
                           </div>
                           <h3 className="text-3xl font-display font-bold text-foreground">{point.title}</h3>
                         </div>
                         <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                           {point.desc}
                         </p>
                         <div className="flex gap-4">
                            <div className="h-1 flex-1 bg-background/10 rounded-full overflow-hidden">
                              <motion.div 
                                initial={{ width: 0 }} 
                                animate={{ width: "85%" }} 
                                className="h-full bg-primary"
                              />
                            </div>
                            <span className="text-xs font-mono text-primary">POWER: 85%</span>
                         </div>
                       </div>
                     );
                   })()}
                 </motion.div>
               ) : (
                 <div className="h-full flex flex-col justify-center items-center text-center p-8 border border-border/5 rounded-lg border-dashed">
                   <Target className="w-16 h-16 text-muted-foreground/30 mb-4" />
                   <h3 className="text-xl text-muted-foreground">HOVER OVER GEAR TO ANALYZE</h3>
                 </div>
               )}
             </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GearShowcase;
