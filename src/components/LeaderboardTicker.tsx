
import React from "react";
import { motion } from "framer-motion";

const SCORES = [
  { rank: "01", callsign: "NEON_VAMPIRE", score: 45200, faction: "ALPHA" },
  { rank: "02", callsign: "SHADOW_OPS", score: 43150, faction: "BRAVO" },
  { rank: "03", callsign: "TOXIC_AVENGER", score: 41900, faction: "ALPHA" },
  { rank: "04", callsign: "LASER_LIZARD", score: 39500, faction: "CHARLIE" },
  { rank: "05", callsign: "VOID_WALKER", score: 38200, faction: "BRAVO" },
  { rank: "06", callsign: "CYBER_GHOST", score: 36800, faction: "ALPHA" },
];

export function LeaderboardTicker() {
  return (
    <div className="w-full bg-card border-y border-border/5 py-4 overflow-hidden relative z-20">
      <div className="container px-4 flex items-center gap-8">
        <div className="flex items-center gap-2 text-primary font-display font-bold shrink-0">
          <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          LIVE RANKINGS
        </div>
        
        <div className="flex-1 overflow-hidden relative mask-linear-fade">
          <motion.div 
            className="flex items-center gap-12 whitespace-nowrap"
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          >
            {[...SCORES, ...SCORES, ...SCORES].map((score, i) => (
              <div key={i} className="flex items-center gap-3 text-sm font-mono text-muted-foreground">
                <span className="text-xs text-primary/50">#{score.rank}</span>
                <span className="font-bold text-foreground">{score.callsign}</span>
                <span className="bg-background/5 px-2 py-0.5 rounded text-xs">{score.score.toLocaleString()}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default LeaderboardTicker;
