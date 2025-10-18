import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, CreditCard, QrCode } from "lucide-react";
import checkoutBg from "@/assets/checkout-bg.jpg";
const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState<"credit" | "pix">("credit");
  const pixKey = "44151334874";
  const benefits = ["Treino 100% personalizado", "Estratégias de alimentação ajustadas", "Acompanhamento semanal direto", "Ajustes mensais conforme evolução", "Suporte via WhatsApp", "Acesso ao app de treinos personalizado"];
  return <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${checkoutBg})`
    }}>
        <div className="absolute inset-0 bg-black/80"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-black mb-4">
              Consultoria Premium
              <span className="block text-gradient mt-2">Verão 2026</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Transforme seu corpo com acompanhamento de verdade
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Benefits Card */}
            <Card className="p-8 bg-card/90 backdrop-blur border-2 border-primary/20 animate-slide-in">
              <h2 className="text-2xl font-bold mb-6 text-gradient">O que você recebe:</h2>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => <li key={index} className="flex items-start gap-3">
                    <div className="bg-primary rounded-full p-1 mt-1">
                      <Check className="h-4 w-4 text-primary-foreground" />
                    </div>
                    <span className="text-lg">{benefit}</span>
                  </li>)}
              </ul>

              <div className="mt-8 pt-8 border-t border-border">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-2xl font-bold">Investimento:</span>
                  <span className="text-4xl font-black text-gradient">R$ 97</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Valor mensal com acompanhamento completo
                </p>
              </div>
            </Card>

            {/* Payment Card */}
            <Card className="p-8 bg-card/90 backdrop-blur border-2 border-primary/20 animate-slide-in">
              <h2 className="text-2xl font-bold mb-6">Escolha o pagamento:</h2>

              <div className="space-y-4 mb-8">
                <button onClick={() => setPaymentMethod("credit")} className={`w-full p-6 rounded-lg border-2 transition-all ${paymentMethod === "credit" ? "border-primary bg-primary/10" : "border-border hover:border-primary/50"}`}>
                  <div className="flex items-center gap-4">
                    <CreditCard className="h-8 w-8 text-primary" />
                    <div className="text-left">
                      <p className="font-bold text-lg">Cartão de Crédito</p>
                      <p className="text-sm text-muted-foreground">
                        Parcele em até 12x
                      </p>
                    </div>
                  </div>
                </button>

                <button onClick={() => setPaymentMethod("pix")} className={`w-full p-6 rounded-lg border-2 transition-all ${paymentMethod === "pix" ? "border-primary bg-primary/10" : "border-border hover:border-primary/50"}`}>
                  <div className="flex items-center gap-4">
                    <QrCode className="h-8 w-8 text-primary" />
                    <div className="text-left">
                      <p className="font-bold text-lg">PIX</p>
                      <p className="text-sm text-muted-foreground">
                        Aprovação instantânea
                      </p>
                    </div>
                  </div>
                </button>
              </div>

              {paymentMethod === "pix" && <div className="mb-8 p-6 bg-primary/10 rounded-lg border border-primary animate-fade-in">
                  <p className="font-bold mb-2">Chave PIX:</p>
                  <div className="flex items-center gap-2 bg-background/50 p-3 rounded">
                    <code className="text-lg flex-1">{pixKey}</code>
                    <Button size="sm" onClick={() => {
                  navigator.clipboard.writeText(pixKey);
                }}>
                      Copiar
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground mt-3">
                    Após o pagamento, envie o comprovante via WhatsApp
                  </p>
                </div>}

              <Button size="lg" className="w-full text-xl py-8 bg-primary hover:bg-primary/90 shadow-red transition-all duration-300 hover:scale-105 glow-red font-bold" onClick={() => {
              if (paymentMethod === "pix") {
                window.open(`https://wa.me/55${pixKey}?text=Olá! Gostaria de contratar a Consultoria Premium Verão 2026 via PIX`, "_blank");
              } else {
                // Redirect to credit card payment
                window.location.href = 'https://cakto-premium-checkout.lovable.app';
              }
            }}>
                {paymentMethod === "pix" ? "Pagar com PIX" : "Pagar com Cartão"}
              </Button>

              <p className="text-center text-sm text-muted-foreground mt-4">
                🔒 Pagamento 100% seguro
              </p>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground">
              Dúvidas? Entre em contato via WhatsApp
            </p>
          </div>
        </div>
      </div>
    </div>;
};
export default Checkout;