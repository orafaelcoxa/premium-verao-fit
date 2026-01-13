import { Star, Quote, MessageCircle } from "lucide-react";

interface Testimonial {
  name: string;
  text: string;
  highlight: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Marcos Silva",
    text: "A consultoria do Rafael mudou minha vida! O treino é muito bem elaborado e ele está sempre disponível para tirar dúvidas. Em 4 meses perdi 15kg e ganhei muita massa muscular. Recomendo demais!",
    highlight: "Atendimento excepcional"
  },
  {
    name: "Juliana Costa",
    text: "Melhor investimento que já fiz! O Rafael é muito atencioso e profissional. O app de treino é sensacional, facilita muito no dia a dia. Os resultados vieram mais rápido do que eu esperava!",
    highlight: "Resultados incríveis"
  },
  {
    name: "Pedro Henrique",
    text: "Já fiz várias consultorias online e nenhuma chegou perto do nível do Rafael. O acompanhamento é de verdade, ele cobra, motiva e ajusta o treino sempre que precisa. Top demais!",
    highlight: "Profissional dedicado"
  },
  {
    name: "Amanda Rodrigues",
    text: "Nunca imaginei que conseguiria resultados assim treinando em casa. O Rafael montou um treino perfeito pro meu objetivo e minha realidade. Super recomendo a consultoria!",
    highlight: "Treino personalizado"
  },
  {
    name: "Lucas Ferreira",
    text: "O diferencial é o suporte! Qualquer dúvida ele responde rápido, ajusta exercício, dá dicas de alimentação... É como ter um personal 24h. Valeu cada centavo investido!",
    highlight: "Suporte incrível"
  },
  {
    name: "Carolina Mendes",
    text: "Comecei a consultoria sem saber nada de academia e hoje me sinto outra pessoa. O Rafael tem muita paciência e explica tudo nos mínimos detalhes. Transformou meu corpo e minha autoestima!",
    highlight: "Mudou minha vida"
  }
];

export const Testimonials = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background via-secondary/10 to-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary rounded-full text-primary text-sm font-semibold uppercase tracking-wider mb-6">
            <MessageCircle className="h-4 w-4" />
            Depoimentos Reais
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            O que nossos alunos
            <span className="block text-gradient mt-2">estão dizendo</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Depoimentos reais de pessoas que transformaram seus corpos e suas vidas com a consultoria
          </p>
        </div>

        {/* Grid de depoimentos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group relative p-6 rounded-2xl bg-card border-2 border-border hover:border-primary transition-all duration-500 shadow-lg hover:shadow-red animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote icon */}
              <div className="absolute -top-3 -left-3 w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-red group-hover:scale-110 transition-transform">
                <Quote className="h-5 w-5" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4 pt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Highlight badge */}
              <div className="inline-block px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-primary text-xs font-bold uppercase tracking-wider mb-4">
                {testimonial.highlight}
              </div>

              {/* Text */}
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-foreground font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-primary">Aluno(a) da Consultoria</p>
                </div>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 py-8 px-6 rounded-2xl bg-card/50 border border-primary/20">
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-3xl font-black text-gradient">5.0</p>
            <p className="text-sm text-muted-foreground">Avaliação Média</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-black text-gradient">100%</p>
            <p className="text-sm text-muted-foreground">Satisfação</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-black text-gradient">+500</p>
            <p className="text-sm text-muted-foreground">Alunos Transformados</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-black text-gradient">24h</p>
            <p className="text-sm text-muted-foreground">Suporte Disponível</p>
          </div>
        </div>
      </div>
    </section>
  );
};
