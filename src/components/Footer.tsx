import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border bg-card">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold text-primary mb-2">encompOS</div>
            <p className="text-sm text-muted-foreground">DecisionOS for modern teams</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link to="/demo" className="text-muted-foreground hover:text-accent transition-colors">
              Demo
            </Link>
            <Link to="/about" className="text-muted-foreground hover:text-accent transition-colors">
              About
            </Link>
            <Link to="/" className="text-muted-foreground hover:text-accent transition-colors">
              Privacy
            </Link>
            <a href="mailto:hello@compros.ai" className="text-muted-foreground hover:text-accent transition-colors">
              Contact
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} encompOS. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
