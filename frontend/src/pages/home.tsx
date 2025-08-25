import { Leaf, MapPin, Store } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const nav = useNavigate();

  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-48 translate-x-48" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-y-48 -translate-x-48" />

        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:py-24">
          <div className="text-center space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-foreground leading-tight text-[#374151] tracking-tight">
                Não sabe onde descartar seu{" "}
                <span className="text-[#D97706]">eletrônico antigo?</span>
              </h1>

              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-muted-foreground text-[#374151]">
                Ou quer ser um ponto de descarte?
              </h2>

              <p className="text-xl md:text-3xl lg:text-4xl text-primary font-bold bg-gradient-to-r text-[#d97706] to-accent bg-clip-text">
                Aqui é o lugar certo!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto my-16">
              <div className="border-[#00000027] backdrop-blur-sm border border-border rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-[#d97706]/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-[#d97706]" />
                </div>
                <h3 className="font-bold text-lg mb-2">Encontre Pontos</h3>
                <p className="text-muted-foreground text-sm">
                  Localize o ponto de descarte mais próximo de você
                </p>
              </div>

              <div className="backdrop-blur-sm border-[#00000027] border border-border rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-[#374151]/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Store className="w-6 h-6 text-[#374151]" />
                </div>
                <h3 className="font-bold text-lg mb-2">Seja um Ponto</h3>
                <p className="text-muted-foreground text-sm">
                  Cadastre seu estabelecimento como ponto de coleta
                </p>
              </div>

              <div className="backdrop-blur-sm border-[#00000027] border border-border rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-[#d97706]/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-6 h-6 text-[#d97706]" />
                </div>
                <h3 className="font-bold text-lg mb-2">Impacto Positivo</h3>
                <p className="text-muted-foreground text-sm">
                  Contribua para um futuro mais sustentável
                </p>
              </div>
            </div>

            <div className="relative max-w-4xl mx-auto">
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-card/90 backdrop-blur-sm border border-border rounded-xl px-6 py-4 shadow-lg">
                <div className="flex items-center gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Descarte Seguro</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Certificado</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Sustentável</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-12">
              <button
                onClick={() => nav("/descartes")}
                className="bg-[#d97706] p-3 border border-[#22222248] rounded-[0.8rem] font-bold text-white hover:bg-[#d97706ea] transition duration-500 hover:scale-105"
              >
                Encontre Pontos de Descarte
              </button>
              <button onClick={() => nav("/cadastrar_ponto")} className="bg-[#374151] p-3 border border-[#22222248] rounded-[0.8rem] font-bold text-white hover:bg-[#374151e0] transition duration-500 hover:scale-105">
                Ser Um Ponto de Descarte
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
