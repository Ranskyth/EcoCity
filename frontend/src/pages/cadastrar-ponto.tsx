/* eslint-disable @typescript-eslint/no-unused-vars */
import { ArrowLeft, Clock, Mail, MapPin, Phone, Store } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function CadastrarPonto() {
  const nav = useNavigate();

  const [formData, setFormData] = useState({
    nome: "",
    endereco: "",
    telefone: "",
    email: "",
    horario: "",
    descricao: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Cadastrar ponto:", formData);
    alert(
      "Ponto cadastrado com sucesso! Você receberá um email de confirmação em até 48 horas."
    );
    nav("/");
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background py-8 px-4">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-48 translate-x-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-y-48 -translate-x-48" />

      <div className="relative max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <Link
            to={"/"}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar ao início
          </Link>
          <div className="text-sm text-muted-foreground">
            Logado como: <span className="font-medium text-foreground">{}</span>
          </div>
        </div>

        <div className="border border-[#b3b3b34f] bg-[#FEFBEE] p-5 rounded-[1rem]">
          <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
            <Store className="w-8 h-8 text-accent" />
          </div>
          <div className="text-center my-8">
            <h1 className="text-2xl">Cadastrar Ponto de Descarte</h1>
            <p>
              Ajude sua comunidade oferecendo um local para descarte responsável
              de eletrônicos
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <p className="flex items-center gap-2">
                  <Store className="w-4 h-4" />
                  Nome do estabelecimento
                </p>
                <input
                  id="nome"
                  type="text"
                  placeholder="Ex: EcoTech Reciclagem"
                  value={formData.nome}
                  onChange={(e) => handleChange("nome", e.target.value)}
                  required
                  className="w-full border border-[#b3b3b3] rounded-[0.3rem] p-1"
                />
              </div>
              <div className="space-y-2">
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Telefone
                </p>
                <input
                  id="telefone"
                  type="tel"
                  placeholder="(11) 99999-9999"
                  value={formData.telefone}
                  onChange={(e) => handleChange("telefone", e.target.value)}
                  required
                  className="w-full border border-[#b3b3b3] rounded-[0.3rem] p-1"
                />
              </div>
            </div>

            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Endereço completo
              </p>
              <input
                id="endereco"
                type="text"
                placeholder="Rua, número, bairro, cidade - estado"
                value={formData.endereco}
                onChange={(e) => handleChange("endereco", e.target.value)}
                required
                className="w-full border border-[#b3b3b3] rounded-[0.3rem] p-1"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Email de contato
                </p>
                <input
                  id="email"
                  type="email"
                  placeholder="contato@estabelecimento.com"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  required
                  className="w-full border border-[#b3b3b3] rounded-[0.3rem] p-1"
                />
              </div>
              <div className="space-y-2">
                <p className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Horário de funcionamento
                </p>
                <input
                  id="horario"
                  type="text"
                  placeholder="Seg-Sex: 8h-18h, Sáb: 8h-12h"
                  value={formData.horario}
                  onChange={(e) => handleChange("horario", e.target.value)}
                  required
                  className="w-full border border-[#b3b3b3] rounded-[0.3rem] p-1"
                />
              </div>
            </div>

            <div className="space-y-2">
              <p>Descrição dos serviços (opcional)</p>
              <textarea
                id="descricao"
                placeholder="Descreva que tipos de eletrônicos vocês aceitam, se há algum processo especial, etc."
                rows={5}
                value={formData.descricao}
                onChange={(e) => handleChange("descricao", e.target.value)}
                className="w-full border border-[#b3b3b3] rounded-[0.3rem] p-1"
              />
            </div>

            <div className="bg-muted/50 rounded-lg p-4 space-y-2">
              <h3 className="font-semibold text-sm">
                Informações importantes:
              </h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>
                  • Seu ponto será verificado antes de aparecer na listagem
                </li>
                <li>• Você receberá um email de confirmação em até 48 horas</li>
                <li>• É necessário seguir as normas ambientais de descarte</li>
              </ul>
            </div>

            <button
              type="submit"
              className="w-full bg-[#d97706] hover:bg-[#d97706]/90 bg-accent hover:bg-accent/90 text-accent-foreground text-lg py-3"
            >
              Cadastrar Ponto de Descarte
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
