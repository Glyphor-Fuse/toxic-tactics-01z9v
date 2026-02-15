
import React from "react";
import { motion } from "framer-motion";

const FEATURES = [
  {
    title: "Multi-Level Bases",
    desc: "Two-story strategic strongholds designed for sniper dominance and close-quarters defense.",
    image: "/images/arena-bases.png",
    colSpan: "md:col-span-2",
  },
  {
    title: "Dense Fog FX",
    desc: "Visibility drops to zero. Trust your sensors.",
    image: "/images/arena-fog.png",
    colSpan: "md:col-span-1",
  },
  {
    title: "Real-Time Scoring",
    desc: "Live HUD updates on your phaser and arena displays.",
    image: "/images/arena-scoring.png",
    colSpan: "md:col-span-1",
  },
  {
    title: "40-Player Capacity",
    desc: "Massive team battles. Alpha vs Bravo vs Charlie vs Delta.",
    image: "/images/arena-crowd.png",
    colSpan: "md:col-span-2",
  },
];

export function Features() {
  return (
    <section id="arena" className="py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            ARENA <span className="text-primary">SPECS</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            6,000 sq ft of blacklight-illuminated industrial maze. Every corner is a potential ambush point.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 auto-rows-[300px]">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative group overflow-hidden rounded-xl border border-border/10 bg-card ${feature.colSpan}`}
            >
              <div className="absolute inset-0">
                <img 
                  src={feature.image} 
                  alt={feature.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              </div>
              
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <h3 className="text-2xl font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm md:text-base opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
