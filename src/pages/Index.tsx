import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import HowWeWork from "@/components/HowWeWork";
import Support from "@/components/Support";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Pricing />
      <HowWeWork />
      <Support />
      <Contact />
    </div>
  );
};

export default Index;
