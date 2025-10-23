import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import DecisionFeed from "@/components/demo/DecisionFeed";
import FreshnessScore from "@/components/demo/FreshnessScore";
import ImpactGraph from "@/components/demo/ImpactGraph";
import AlertsPanel from "@/components/demo/AlertsPanel";

const Demo = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Live Dashboard Demo
            </h1>
            <p className="text-xl text-muted-foreground">
              Explore how encompOS keeps your team's decisions fresh and aligned
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Left column */}
            <div className="space-y-6">
              <DecisionFeed />
              <AlertsPanel />
            </div>
            
            {/* Right column */}
            <div className="space-y-6">
              <FreshnessScore />
              <ImpactGraph />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Demo;
