import { Sparkles, TrendingUp } from "lucide-react";
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

export const Transformations = () => {
  const transformations = [
    { image: transformation1, featured: true },
    { image: transformation2, featured: false },
    { image: transformation3, featured: true },
    { image: transformation4, featured: false },
    { image: transformation5, featured: false },
    { image: transformation6, featured: true },
    { image: transformation7, featured: false },
    { image: transformation8, featured: true },
    { image: transformation9, featured: false },
    { image: transformation10, featured: false },
    { image: transformation11, featured: true },
    { image: transformation12, featured: false },
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
            Resultados Reais
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            Veja o que os alunos <span className="text-gradient">conseguiram</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Essas transformações não são edição. São pessoas reais que decidiram levar o objetivo a sério. 
            <span className="block mt-2 text-foreground font-semibold">Você pode ser o próximo.</span>
          </p>
        </div>

        {/* Grid de transformações */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {transformations.map((item, index) => (
            <div 
              key={index}
              className={`group relative overflow-hidden rounded-2xl border-2 border-border hover:border-primary transition-all duration-500 shadow-lg hover:shadow-red animate-fade-in ${
                item.featured ? 'lg:col-span-2 lg:row-span-1' : ''
              }`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* Badge ANTES → DEPOIS */}
              <div className="absolute top-4 left-4 z-20 bg-primary px-4 py-2 rounded-lg shadow-red flex items-center gap-2 group-hover:scale-110 transition-transform">
                <TrendingUp className="h-4 w-4" />
                <span className="font-bold text-sm uppercase tracking-wider">Antes → Depois</span>
              </div>

              {/* Imagem */}
              <div className={`${item.featured ? 'aspect-video' : 'aspect-square'} overflow-hidden relative`}>
                <img 
                  src={item.image} 
                  alt={`Transformação Real ${index + 1}`}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                />
                
                {/* Overlay com efeito de gradiente */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Texto que aparece no hover */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-2xl font-black text-gradient mb-2">Resultado Real</p>
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

        {/* Stats motivacionais */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-8 rounded-2xl bg-card border border-primary/30 shadow-red animate-fade-in">
            <p className="text-5xl font-black text-gradient mb-4">12+</p>
            <p className="text-lg font-semibold text-foreground mb-2">Transformações Comprovadas</p>
            <p className="text-sm text-muted-foreground">Resultados que falam por si</p>
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
