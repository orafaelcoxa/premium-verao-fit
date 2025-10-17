import { Hero } from "@/components/Hero";
import { ValueProposition } from "@/components/ValueProposition";
import { Transformations } from "@/components/Transformations";
import { CTA } from "@/components/CTA";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <ValueProposition />
      <Transformations />
      <CTA />
    </main>
  );
};

export default Index;
