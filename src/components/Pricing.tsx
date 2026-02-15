
import React from "react";
import { Check } from "lucide-react";

const PACKAGES = [
  {
    name: "ROOKIE",
    price: "25",
    rounds: "2 Missions",
    features: ["Training Briefing", "Standard Phaser", "Shared Scorecard"],
    highlight: false,
  },
  {
    name: "VETERAN",
    price: "45",
    rounds: "4 Missions",
    features: ["Training Briefing", "Advanced Phaser Upgrade", "Individual Scorecard", "1 Drink Voucher"],
    highlight: true,
  },
  {
    name: "ELITE SQUAD",
    price: "350",
    rounds: "Party Package",
    features: ["10 Players Included", "Private Party Room (1hr)", "Unlimited Soda", "Exclusive Game Mode", "T-Shirt for MVP"],
    highlight: false,
    isParty: true,
  },
];

export function Pricing() {
  return (
    <section id="booking" className="py-24 bg-background relative">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">DEPLOYMENT <span className="text-primary">OPTIONS</span></h2>
          <p className="text-muted-foreground">Select your loadout. Book online to secure your slot.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {PACKAGES.map((pkg) => (
            <div 
              key={pkg.name}
              className={`relative flex flex-col p-8 rounded-2xl border ${pkg.highlight ? 'border-primary bg-primary/5' : 'border-border/10 bg-card'} transition-all hover:border-primary/50`}
            >
              {pkg.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-foreground font-bold px-4 py-1 rounded-full text-xs tracking-wider uppercase">
                  Best Value
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-display font-bold text-foreground mb-2">{pkg.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black text-foreground">${pkg.price}</span>
                  {!pkg.isParty && <span className="text-muted-foreground">/ person</span>}
                </div>
                <p className="text-primary font-medium mt-2">{pkg.rounds}</p>
              </div>

              <ul className="flex-1 space-y-4 mb-8">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="w-5 h-5 text-primary shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded font-bold tracking-wide transition-colors ${pkg.highlight ? 'bg-primary text-foreground hover:bg-background' : 'bg-background/10 text-foreground hover:bg-background hover:text-foreground'}`}>
                BOOK NOW
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
