import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import trainerPhoto from "@/assets/trainer-photo.jpg";
import heroBanner from "@/assets/hero-banner.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBanner} 
          alt="Hero Background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <span className="inline-block px-4 py-2 bg-primary/10 border border-primary rounded-full text-primary text-sm font-semibold uppercase tracking-wider">
                Verão 2026
              </span>
              <h1 className="text-5xl md:text-7xl font-black leading-tight">
                Consultoria
                <span className="block text-gradient">Premium</span>
              </h1>
            </div>

            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Transforme seu corpo com acompanhamento de verdade. 
              <span className="text-foreground font-semibold"> Sem fórmulas mágicas, só resultados reais.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 shadow-red transition-all duration-300 hover:scale-105"
                onClick={() => window.location.href = '/checkout'}
              >
                Começar Agora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8 py-6 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                onClick={() => document.getElementById('resultados')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Ver Resultados
              </Button>
            </div>
          </div>

          {/* Trainer Photo */}
          <div className="relative animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden shadow-red">
              <img 
                src={trainerPhoto} 
                alt="Rafael Coxa - Personal Trainer" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 left-6 right-6 bg-card border border-primary p-6 rounded-xl shadow-lg">
              <p className="text-sm text-muted-foreground mb-1">Personal Trainer</p>
              <p className="text-2xl font-bold text-gradient">Rafael Coxa</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
    </section>
  );
};
