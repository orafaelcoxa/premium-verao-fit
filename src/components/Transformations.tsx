import transformation1 from "@/assets/transformation-1.jpg";
import transformation2 from "@/assets/transformation-2.jpg";
import transformation3 from "@/assets/transformation-3.jpg";
import transformation4 from "@/assets/transformation-4.jpg";
import transformation5 from "@/assets/transformation-5.jpg";
import transformation6 from "@/assets/transformation-6.jpg";
import transformation7 from "@/assets/transformation-7.jpg";

export const Transformations = () => {
  const transformations = [
    transformation1,
    transformation2,
    transformation3,
    transformation4,
    transformation5,
    transformation6,
    transformation7,
  ];

  return (
    <section id="resultados" className="py-24 px-4 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            Veja o que os alunos <span className="text-gradient">dizem</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transformações reais de pessoas reais. Seu resultado pode ser o próximo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {transformations.map((image, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-border hover:border-primary transition-all duration-500 animate-fade-in shadow-lg hover:shadow-red"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={image} 
                  alt={`Transformação ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-lg font-bold text-foreground">Antes & Depois</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-2xl font-bold mb-4">
            Esses resultados não acontecem por acaso.
          </p>
          <p className="text-xl text-muted-foreground">
            Acontecem com método, disciplina e acompanhamento profissional.
          </p>
        </div>
      </div>
    </section>
  );
};
