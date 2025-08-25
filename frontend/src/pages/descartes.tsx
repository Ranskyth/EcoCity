import { ArrowLeft, Clock, MapPin, Phone, Search } from "lucide-react"
import { useState } from "react"

const pontosDescarte = [
  {
    id: 1,
    nome: "EcoTech Reciclagem",
    endereco: "Rua das Flores, 123 - Centro, São Paulo - SP",
    telefone: "(11) 3456-7890",
    horario: "Seg-Sex: 8h-18h | Sáb: 8h-12h",
  },
  {
    id: 2,
    nome: "Green Electronics",
    endereco: "Av. Paulista, 456 - Bela Vista, São Paulo - SP",
    telefone: "(11) 2345-6789",
    horario: "Seg-Sex: 9h-19h | Sáb: 9h-14h",
  },
  {
    id: 3,
    nome: "Recicla Digital",
    endereco: "Rua Augusta, 789 - Consolação, São Paulo - SP",
    telefone: "(11) 4567-8901",
    horario: "Seg-Sex: 8h-17h",
  },
  {
    id: 4,
    nome: "TechCycle Centro",
    endereco: "Praça da Sé, 321 - Sé, São Paulo - SP",
    telefone: "(11) 5678-9012",
    horario: "Seg-Sex: 7h-16h | Sáb: 8h-12h",
  },
  {
    id: 5,
    nome: "Eletrônicos Sustentáveis",
    endereco: "Rua Oscar Freire, 654 - Jardins, São Paulo - SP",
    telefone: "(11) 6789-0123",
    horario: "Seg-Sex: 10h-20h | Sáb: 10h-16h",
  },
  {
    id: 6,
    nome: "Ponto Verde Tech",
    endereco: "Av. Faria Lima, 987 - Itaim Bibi, São Paulo - SP",
    telefone: "(11) 7890-1234",
    horario: "Seg-Sex: 8h-18h | Sáb: 8h-14h",
  },
]

export const Descartes = () => {
      const [busca, setBusca] = useState("")

  const pontosFiltrados = pontosDescarte.filter(
    (ponto) =>
      ponto.nome.toLowerCase().includes(busca.toLowerCase()) ||
      ponto.endereco.toLowerCase().includes(busca.toLowerCase()),
  )
    return(
<main className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-48 translate-x-48" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-y-48 -translate-x-48" />

        <div className="relative max-w-6xl mx-auto px-4 py-16">
          <div className="mb-12">
          
              <button className="mb-6 hover:bg-primary/10">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar
              </button>
      

            <div className="text-center space-y-4">
              <h1 className="text-4xl md:text-5xl font-black text-foreground">
                Pontos de <span className="text-primary">Descarte</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Encontre o local mais conveniente para descartar seus eletrônicos de forma segura e sustentável
              </p>
            </div>
          </div>

  
          <div className="relative mb-8 max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground z-1 w-5 h-5" />
            <input
              type="text"
              placeholder="Buscar por nome, endereço ou bairro..."
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              className="pl-12 py-4 text-lg w-full bg-card/50 backdrop-blur-sm border-border focus:border-primary rounded-xl"
            />
          </div>

          <div className="text-center mb-8">
            <p className="text-muted-foreground">
              {pontosFiltrados.length} {pontosFiltrados.length === 1 ? "ponto encontrado" : "pontos encontrados"}
            </p>
          </div>

          <div className="space-y-6">
            {pontosFiltrados.map((ponto) => (
              <div
                key={ponto.id}
                className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/50"
              >
                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-8 h-8 text-primary" />
                  </div>

                  <div className="flex-1 space-y-3">
                    <h3 className="text-2xl font-bold text-foreground">{ponto.nome}</h3>

                    <div className="space-y-2">
                      <p className="text-muted-foreground flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {ponto.endereco}
                      </p>

                      <p className="text-muted-foreground flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        {ponto.telefone}
                      </p>

                      <p className="text-muted-foreground flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {ponto.horario}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                 
                      className="border-primary flex text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Ligar
                    </button>

                    <button className="bg-[#D97706] text-white items-center px-3 py-1 rounded-[0.5rem] flex hover:bg-[#D97706]/90 text-primary-foreground">
                      <MapPin className="w-4 h-4 mr-2" />
                      Ver no Mapa
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {pontosFiltrados.length === 0 && (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-muted/50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-12 h-12 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Nenhum ponto encontrado</h3>
                <p className="text-muted-foreground">
                  Não encontramos pontos de descarte para "{busca}". Tente buscar por outro termo.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
    )
}