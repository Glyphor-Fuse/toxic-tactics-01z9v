
import React from "react";
import { Star } from "lucide-react";

const REVIEWS = [
  {
    name: "Marcus T.",
    text: "Absolutely insane. The blacklight maze is massive and the fog effects make it feel like a movie. Highly recommend the 'Infection' game mode.",
    rating: 5,
  },
  {
    name: "Sarah J.",
    text: "Best birthday party ever. The gear is super responsive, no lag on the hits. Staff was awesome with the kids.",
    rating: 5,
  },
  {
    name: "Team Bravo",
    text: "We come here every Friday for the league nights. The competitive scene is legit. Good snacks too.",
    rating: 5,
  },
  {
    name: "Alex K.",
    text: "Way better than the old place at the mall. This feels like a standalone arena. The second floor vantage points are killer.",
    rating: 4,
  },
];

export function Reviews() {
  return (
    <section className="py-24 bg-card border-y border-border/5 overflow-hidden">
      <div className="container px-4 md:px-6 mb-12">
        <h2 className="text-3xl font-display font-bold text-foreground">DEBRIEFING <span className="text-primary">LOGS</span></h2>
      </div>
      
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee flex gap-6 px-4">
          {[...REVIEWS, ...REVIEWS, ...REVIEWS].map((review, i) => (
            <div 
              key={i}
              className="flex-shrink-0 w-[300px] md:w-[400px] p-6 rounded-xl bg-background border border-border/10 hover:border-primary/30 transition-colors"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < review.rating ? "text-primary fill-primary" : "text-muted-foreground"}`} />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 italic">"{review.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center font-bold text-foreground">
                  {review.name[0]}
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">{review.name}</p>
                  <p className="text-xs text-muted-foreground">Verified Player</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reviews;
