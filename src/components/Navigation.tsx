import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const location = useLocation();
  const isDemo = location.pathname === "/demo";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-primary hover:text-accent transition-colors">
          encompOS
        </Link>
        
        <div className="flex items-center gap-4">
          {!isDemo && (
            <Button asChild variant="hero" size="sm">
              <Link to="/demo">View Demo</Link>
            </Button>
          )}
          {isDemo && (
            <Button asChild variant="ghost" size="sm">
              <Link to="/">Home</Link>
            </Button>
          )}
          <Button asChild variant="ghost" size="sm">
            <Link to="/about">About</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
