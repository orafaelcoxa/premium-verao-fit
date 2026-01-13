import { Hero } from "@/components/Hero";
import { ValueProposition } from "@/components/ValueProposition";
import { Transformations } from "@/components/Transformations";
import { Testimonials } from "@/components/Testimonials";
import { CTA } from "@/components/CTA";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <ValueProposition />
      <Transformations />
      <Testimonials />
      <CTA />
    </main>
  );
};

export default Index;
