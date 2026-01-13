import { Sparkles, TrendingUp, Smartphone } from "lucide-react";
import transformation1 from "@/assets/transformation-1.jpg";
import transformation2 from "@/assets/transformation-2.jpg";
import transformation3 from "@/assets/transformation-3.jpg";
import transformation4 from "@/assets/transformation-4.jpg";
import transformation5 from "@/assets/transformation-5.jpg";
import transformation6 from "@/assets/transformation-6.jpg";
import transformation7 from "@/assets/transformation-7.jpg";
import transformation8 from "@/assets/transformation-8.jpg";
import transformation9 from "@/assets/transformation-9.jpg";
import transformation10 from "@/assets/transformation-10.jpg";
import transformation11 from "@/assets/transformation-11.jpg";
import transformation12 from "@/assets/transformation-12.jpg";
import transformation13 from "@/assets/transformation-13.jpg";
import transformation14 from "@/assets/transformation-14.jpg";
import transformation15 from "@/assets/transformation-15.jpg";
import transformation16 from "@/assets/transformation-16.jpg";
import transformation17 from "@/assets/transformation-17.jpg";
import transformation18 from "@/assets/transformation-18.jpg";
import transformation19 from "@/assets/transformation-19.jpg";
import transformation20 from "@/assets/transformation-20.jpg";

export const Transformations = () => {
  const transformations = [
    transformation1,
    transformation2,
    transformation3,
    transformation4,
    transformation5,
    transformation6,
    transformation7,
    transformation8,
    transformation9,
    transformation10,
    transformation11,
    transformation12,
    transformation13,
    transformation14,
    transformation15,
    transformation16,
    transformation17,
    transformation18,
    transformation19,
    transformation20,
  ];

  return (
    <section id="resultados" className="py-24 px-4 bg-gradient-to-b from-secondary/20 via-background to-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary rounded-full text-primary text-sm font-semibold uppercase tracking-wider mb-6">
            <Sparkles className="h-4 w-4" />
            Resultados em 3 Meses
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            Algumas evoluções comprovadas 
            <span className="block text-gradient mt-2">dos meus alunos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Essas transformações não são edição. São pessoas reais que decidiram levar o objetivo a sério. 
            <span className="block mt-2 text-foreground font-semibold">Você pode ser o próximo.</span>
          </p>
        </div>

        {/* Grid de transformações - tamanho total */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {transformations.map((image, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl border-2 border-border hover:border-primary transition-all duration-500 shadow-lg hover:shadow-red animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* Badge ANTES → DEPOIS */}
              <div className="absolute top-4 left-4 z-20 bg-primary px-4 py-2 rounded-lg shadow-red flex items-center gap-2 group-hover:scale-110 transition-transform">
                <TrendingUp className="h-4 w-4" />
                <span className="font-bold text-sm uppercase tracking-wider">Antes → Depois</span>
              </div>

              {/* Imagem em tamanho completo */}
              <div className="w-full overflow-hidden relative">
                <img 
                  src={image} 
                  alt={`Transformação Real ${index + 1} - Resultados em 3 meses`}
                  className="w-full h-auto object-contain transition-all duration-700 group-hover:scale-105"
                />
                
                {/* Overlay sutil no hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Texto que aparece no hover */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-2xl font-black text-gradient mb-2">Resultado Real em 3 Meses</p>
                  <p className="text-foreground font-semibold">Com método, disciplina e acompanhamento profissional</p>
                </div>
              </div>

              {/* Brilho de borda animado */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bônus: App de Treinos */}
        <div className="mb-16 p-10 rounded-3xl bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 border-2 border-primary shadow-red animate-fade-in">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center shadow-red">
                <Smartphone className="h-10 w-10" />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-3xl font-black mb-3 text-gradient">
                BÔNUS EXCLUSIVO
              </h3>
              <p className="text-xl font-semibold text-foreground mb-2">
                Assinando a consultoria você ganha acesso ao meu aplicativo de treinos personalizado
              </p>
              <p className="text-lg text-muted-foreground">
                Totalmente montado para o seu objetivo, com exercícios detalhados e acompanhamento em tempo real
              </p>
            </div>
            <div className="flex-shrink-0">
              <div className="px-6 py-3 bg-primary rounded-xl font-black text-2xl shadow-lg">
                GRÁTIS
              </div>
            </div>
          </div>
        </div>

        {/* Stats motivacionais */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-8 rounded-2xl bg-card border border-primary/30 shadow-red animate-fade-in">
            <p className="text-5xl font-black text-gradient mb-4">3 Meses</p>
            <p className="text-lg font-semibold text-foreground mb-2">Tempo Médio de Resultado</p>
            <p className="text-sm text-muted-foreground">Transformação visível e real</p>
          </div>
          <div className="text-center p-8 rounded-2xl bg-card border border-primary/30 shadow-red animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <p className="text-5xl font-black text-gradient mb-4">100%</p>
            <p className="text-lg font-semibold text-foreground mb-2">Método Validado</p>
            <p className="text-sm text-muted-foreground">Por pessoas reais como você</p>
          </div>
          <div className="text-center p-8 rounded-2xl bg-card border border-primary/30 shadow-red animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <p className="text-5xl font-black text-gradient mb-4">∞</p>
            <p className="text-lg font-semibold text-foreground mb-2">Suporte Contínuo</p>
            <p className="text-sm text-muted-foreground">Durante toda sua jornada</p>
          </div>
        </div>

        {/* CTA intermediário */}
        <div className="text-center p-12 rounded-3xl bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-2 border-primary/50 shadow-red animate-fade-in">
          <p className="text-3xl md:text-4xl font-black mb-4">
            Esses resultados não acontecem por acaso.
          </p>
          <p className="text-xl text-muted-foreground mb-6">
            Acontecem com <span className="text-primary font-bold">método profissional</span>, 
            <span className="text-primary font-bold"> disciplina guiada</span> e 
            <span className="text-primary font-bold"> acompanhamento personalizado</span>.
          </p>
          <p className="text-2xl font-bold text-gradient">
            Sua transformação começa com uma decisão. Faça ela AGORA.
          </p>
        </div>
      </div>
    </section>
  );
};
