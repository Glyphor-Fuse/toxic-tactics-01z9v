
import React from "react";
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border/10 pt-16 pb-8">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl font-display font-black text-foreground mb-6">TOXIC TACTICS</h2>
            <p className="text-muted-foreground max-w-sm mb-8">
              The premier high-tech laser tag experience. 
              Dominate the arena, climb the leaderboards, and experience the future of combat entertainment.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-background/5 flex items-center justify-center text-foreground hover:bg-primary hover:text-foreground transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/5 flex items-center justify-center text-foreground hover:bg-primary hover:text-foreground transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/5 flex items-center justify-center text-foreground hover:bg-primary hover:text-foreground transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-foreground mb-6">HQ LOCATION</h3>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>1092 Sector 7 Blvd,<br/>Neo Industrial District, NY 10012</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>(555) 019-2834</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>ops@toxictactics.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-foreground mb-6">OPERATING HOURS</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex justify-between">
                <span>Mon - Thu</span>
                <span className="text-foreground">4PM - 10PM</span>
              </li>
              <li className="flex justify-between">
                <span>Friday</span>
                <span className="text-foreground">4PM - 12AM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span className="text-foreground">10AM - 12AM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="text-foreground">12PM - 9PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© 2024 Toxic Tactics Arena. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary">Privacy Policy</a>
            <a href="#" className="hover:text-primary">Waiver</a>
            <a href="#" className="hover:text-primary">Safety Rules</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
