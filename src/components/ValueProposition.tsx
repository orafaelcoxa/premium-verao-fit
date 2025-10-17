import { CheckCircle2 } from "lucide-react";

export const ValueProposition = () => {
  const benefits = [
    "Treino 100% personalizado (em casa ou na academia)",
    "Estratégias de alimentação ajustadas ao seu objetivo",
    "Acompanhamento semanal direto comigo",
    "Ajustes mensais conforme sua evolução",
    "Suporte via WhatsApp para dúvidas e motivação",
    "Indicado para quem busca emagrecimento definitivo ou ganho real de massa muscular"
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Se você está cansado(a) de treinar sem ver resultados
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            ou de seguir dietas que não funcionam, minha <span className="text-primary font-semibold">Consultoria Premium</span> é pra você.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 animate-slide-in">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border hover:border-primary transition-all duration-300 hover:shadow-red group"
            >
              <CheckCircle2 className="h-7 w-7 text-primary flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
              <p className="text-lg text-foreground leading-relaxed">{benefit}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-2xl bg-card border-2 border-primary/50 shadow-red text-center">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <p className="text-4xl font-black text-gradient mb-2">📈</p>
              <p className="text-lg font-semibold">Resultados Comprovados</p>
            </div>
            <div>
              <p className="text-4xl font-black text-gradient mb-2">💬</p>
              <p className="text-lg font-semibold">Atendimento Humanizado</p>
            </div>
            <div>
              <p className="text-4xl font-black text-gradient mb-2">✓</p>
              <p className="text-lg font-semibold">Método Validado</p>
            </div>
          </div>
        </div>

        <div className="mt-12 p-6 rounded-xl bg-primary/10 border border-primary text-center">
          <p className="text-xl font-bold text-primary">
            💬 Vagas limitadas — só atendo quem leva o objetivo a sério.
          </p>
        </div>
      </div>
    </section>
  );
};
