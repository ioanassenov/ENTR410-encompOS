import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Home;
