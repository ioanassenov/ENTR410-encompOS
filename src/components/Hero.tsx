import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";

const Hero = () => {
  const scrollToPricing = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative pt-32 pb-24 px-6 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center space-y-8">
          {/* Main headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
            Make decisions with context
            <br />
            <span className="text-accent">you can trust</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            An AI-powered dashboard that flags stale assumptions and keeps every team in sync.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button asChild variant="hero" size="lg">
              <Link to="/demo">
                View Demo
                <ArrowRight className="ml-2" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" onClick={scrollToPricing}>
              See Pricing
            </Button>
          </div>
          
          {/* Feature bullets */}
          <div className="pt-12 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="flex items-start gap-3 text-left p-6 rounded-lg bg-card/50 border border-border hover:shadow-md transition-all">
              <CheckCircle className="w-6 h-6 text-success flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">Decision Register with sources</h3>
                <p className="text-sm text-muted-foreground">Track every decision with full context and lineage</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 text-left p-6 rounded-lg bg-card/50 border border-border hover:shadow-md transition-all">
              <CheckCircle className="w-6 h-6 text-success flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">Freshness watermark on critical docs</h3>
                <p className="text-sm text-muted-foreground">Instantly see if your information is current</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 text-left p-6 rounded-lg bg-card/50 border border-border hover:shadow-md transition-all">
              <CheckCircle className="w-6 h-6 text-success flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">"What changed?" daily digest</h3>
                <p className="text-sm text-muted-foreground">Slack/Teams updates keep everyone aligned</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
