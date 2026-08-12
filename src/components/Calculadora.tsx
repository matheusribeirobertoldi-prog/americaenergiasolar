"use client";

import { useState } from "react";
import { CLIENTE_INFO } from "@/lib/dados";
import { Calculator, MessageCircle, Zap, TrendingUp, ShieldCheck, Sun } from "lucide-react";

export default function Calculadora() {
  const [modulos, setModulos] = useState<number>(10);

  // Fórmulas derivadas dos 7 cases reais do cliente
  const geracaoKwhMes = Math.round(modulos * 68.5);
  const economiaAno = Math.round(modulos * 850);
  const economia25Anos = economiaAno * 25;

  const getWhatsAppLink = () => {
    const texto = `Ol%C3%A1!%20Fiz%20uma%20simula%C3%A7%C3%A3o%20no%20site%20para%20${modulos}%20m%C3%B3dulos%20(gera%C3%A7%C3%A3o%20estimada%20de%20${geracaoKwhMes}%20kWh/m%C3%AAs%20e%20economia%20anual%20de%20R$%20${economiaAno.toLocaleString()}).%20Gostaria%20de%20validar%20meu%20projeto.`;
    return `https://wa.me/${CLIENTE_INFO.whatsappRaw}?text=${texto}`;
  };

  return (
    <section id="calculadora" className="py-24 bg-[#000D1E] relative bg-diagonals">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#FD6A0A] bg-[#0A2240] px-3.5 py-1.5 rounded-full border border-[#FD6A0A]/30 inline-flex items-center gap-1.5">
            <Calculator className="w-4 h-4" /> Simulação Interativa Instantânea
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Calculadora de Economia Solar
          </h2>
          <p className="text-base text-[#B8C1CE] max-w-2xl mx-auto">
            Arraste o seletor de módulos abaixo para estimar a capacidade de geração do seu imóvel e o retorno financeiro acumulado.
          </p>
        </div>

        {/* Card Principal da Calculadora */}
        <div className="bg-[#04162C] border-2 border-[#FD6A0A]/40 rounded-[28px] p-6 sm:p-10 shadow-2xl space-y-10">
          {/* Seletor de Slider */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <label htmlFor="modulos-slider" className="text-base font-bold text-white flex items-center gap-2">
                <Sun className="w-5 h-5 text-[#FD6A0A]" />
                Quantidade de Módulos Fotovoltaicos:
              </label>
              <span className="text-3xl font-extrabold text-[#FD6A0A] bg-[#000D1E] px-4 py-1.5 rounded-xl border border-[#FD6A0A]/30">
                {modulos} <span className="text-sm font-normal text-[#B8C1CE]">placas</span>
              </span>
            </div>

            <input
              id="modulos-slider"
              type="range"
              min="5"
              max="60"
              step="1"
              value={modulos}
              onChange={(e) => setModulos(Number(e.target.value))}
              className="w-full h-3 bg-[#000D1E] rounded-lg appearance-none cursor-pointer accent-[#FD6A0A]"
            />

            <div className="flex justify-between text-xs text-[#B8C1CE] font-semibold px-1">
              <span>5 placas (Residencial Pequeno)</span>
              <span>30 placas (Residencial Grande)</span>
              <span>60 placas (Comercial / Usina)</span>
            </div>
          </div>

          {/* Resultado dos Cálculos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#000D1E] p-6 rounded-2xl border border-white/5 space-y-2 text-center">
              <Zap className="w-8 h-8 text-[#FD6A0A] mx-auto" />
              <span className="text-xs font-semibold text-[#B8C1CE] uppercase tracking-wider block">
                Geração Estimada
              </span>
              <span className="text-3xl font-extrabold text-white block">
                {geracaoKwhMes.toLocaleString()} <span className="text-sm text-[#FD6A0A]">kWh/mês</span>
              </span>
            </div>

            <div className="bg-[#000D1E] p-6 rounded-2xl border border-[#FD6A0A]/30 space-y-2 text-center relative overflow-hidden">
              <div className="absolute -right-4 -top-4 w-16 h-16 bg-[#FD6A0A]/10 rounded-full blur-lg" />
              <TrendingUp className="w-8 h-8 text-[#FD6A0A] mx-auto" />
              <span className="text-xs font-semibold text-[#B8C1CE] uppercase tracking-wider block">
                Economia Anual Estimada
              </span>
              <span className="text-3xl font-extrabold text-[#FD6A0A] block">
                R$ {economiaAno.toLocaleString()}
              </span>
            </div>

            <div className="bg-[#000D1E] p-6 rounded-2xl border border-white/5 space-y-2 text-center">
              <ShieldCheck className="w-8 h-8 text-[#FD6A0A] mx-auto" />
              <span className="text-xs font-semibold text-[#B8C1CE] uppercase tracking-wider block">
                Economia em 25 Anos
              </span>
              <span className="text-3xl font-extrabold text-white block">
                R$ {economia25Anos.toLocaleString()}
              </span>
            </div>
          </div>

          {/* Botão de Envio para WhatsApp */}
          <div className="text-center pt-2">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-america w-full sm:w-auto px-10 py-4 text-base sm:text-lg inline-flex items-center justify-center gap-3 shadow-xl"
            >
              <MessageCircle className="w-6 h-6 fill-current text-[#060807]" />
              <span>Enviar esta simulação no WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
