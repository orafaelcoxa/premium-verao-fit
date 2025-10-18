import { Button } from "@/components/ui/button";
import { ArrowRight, Timer } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="bg-card border-2 border-primary rounded-3xl p-12 shadow-red animate-fade-in">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 border border-primary rounded-full text-primary text-sm font-semibold uppercase tracking-wider animate-pulse">
              <Timer className="h-4 w-4" />
              Vagas Limitadas
            </div>

            <h2 className="text-4xl md:text-6xl font-black leading-tight">
              Clique no link e comece agora sua 
              <span className="block text-gradient mt-2">transformação</span>
            </h2>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Não deixe para depois. Seu corpo de verão 2026 começa hoje.
            </p>

            <div className="pt-6">
              <Button 
                size="lg" 
                className="text-xl px-12 py-8 bg-primary hover:bg-primary/90 shadow-red transition-all duration-300 hover:scale-105 glow-red font-bold"
                onClick={() => window.location.href = '/checkout'}
              >
                Garantir Minha Vaga Agora
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="space-y-2">
                <p className="text-3xl font-black text-primary">100%</p>
                <p className="text-sm text-muted-foreground">Personalizado</p>
              </div>
              <div className="space-y-2">
                <p className="text-3xl font-black text-primary">24/7</p>
                <p className="text-sm text-muted-foreground">Suporte WhatsApp</p>
              </div>
              <div className="space-y-2">
                <p className="text-3xl font-black text-primary">∞</p>
                <p className="text-sm text-muted-foreground">Resultados Reais</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Atendimento exclusivo • Rafael Coxa Personal Trainer • Transformações comprovadas
          </p>
        </div>
      </div>
    </section>
  );
};
