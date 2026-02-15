
import React from "react";
import { motion } from "framer-motion";
import { Crosshair, Shield, Zap, Target } from "lucide-react";

export function Hero() {
  return (
    <div className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-background">
      {/* Background Grid & Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]"></div>
        <div className="absolute right-10 bottom-10 -z-10 h-[200px] w-[200px] rounded-full bg-accent/20 opacity-20 blur-[80px]"></div>
      </div>

      <div className="relative z-10 container px-4 md:px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          ARENA STATUS: LIVE
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl lg:text-9xl font-display font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-background to-background/40 mb-6 drop-shadow-2xl"
        >
          TOXIC <br className="md:hidden" /> TACTICS
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl text-lg md:text-xl text-muted-foreground mb-10 font-light tracking-wide"
        >
          Enter the <span className="text-primary font-medium">Bio-Hazard Zone</span>. A high-tech, blacklight-infused battlefield where strategy meets adrenaline.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#booking"
            className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-none border border-primary bg-primary/10 px-8 font-medium text-primary transition-all hover:bg-primary hover:text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
          >
            <span className="mr-2">INITIATE MISSION</span>
            <Crosshair className="w-5 h-5 transition-transform group-hover:rotate-90" />
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
          </a>
          <a
            href="#arena"
            className="inline-flex h-14 items-center justify-center rounded-none border border-border/10 bg-background/50 px-8 font-medium text-foreground transition-colors hover:bg-background/10 hover:border-border/30 backdrop-blur-sm"
          >
            VIEW INTEL
          </a>
        </motion.div>
      </div>
      
      {/* Decorative overlaid UI elements */}
      <div className="absolute bottom-10 left-10 hidden md:block">
        <div className="flex items-center gap-4 text-xs font-mono text-muted-foreground border-l-2 border-primary/50 pl-4">
           <div>
             <p className="text-primary">SECTOR 7</p>
             <p>ACTIVE</p>
           </div>
           <div>
             <p className="text-primary">TEMP</p>
             <p>72°F</p>
           </div>
           <div>
             <p className="text-primary">HUMIDITY</p>
             <p>45%</p>
           </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
