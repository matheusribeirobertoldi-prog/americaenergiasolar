"use client";

import { useState } from "react";
import Image from "next/image";
import { CASES, CLIENTE_INFO } from "@/lib/dados";
import { Zap, Sun, ShieldCheck, ArrowUpRight, Filter } from "lucide-react";

export default function Cases() {
  const [categoria, setCategoria] = useState<string>("Todos");

  const categorias = ["Todos", "Residencial", "Comercial", "Rural (Solo)", "Expansão"];

  const casesFiltrados =
    categoria === "Todos"
      ? CASES
      : CASES.filter((c) => c.tipo.includes(categoria));

  return (
    <section id="cases" className="py-24 bg-[#04162C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#FD6A0A] bg-[#0A2240] px-3.5 py-1.5 rounded-full border border-[#FD6A0A]/30">
            Projetos reais entregues no ES
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Cases de Sucesso & Resultados
          </h2>
          <p className="text-base text-[#B8C1CE]">
            Confira como famílias e empresários capixabas reduziram drasticamente seus custos com a América Energia Solar.
          </p>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <span className="text-xs text-[#B8C1CE] flex items-center gap-1 mr-2">
            <Filter className="w-3.5 h-3.5 text-[#FD6A0A]" /> Filtrar por:
          </span>
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoria(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                categoria === cat
                  ? "bg-[#FD6A0A] text-[#060807] shadow-lg scale-105"
                  : "bg-[#000D1E] text-[#B8C1CE] hover:text-white border border-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid de Cases */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {casesFiltrados.map((item) => (
            <div
              key={item.id}
              className={`rounded-[22px] bg-[#000D1E] card-brand-border overflow-hidden flex flex-col justify-between ${
                item.destaque ? "ring-2 ring-[#FD6A0A]" : ""
              }`}
            >
              <div>
                {/* Imagem do Case */}
                <div className="relative aspect-[4/3] w-full bg-[#0A2240] overflow-hidden">
                  <Image
                    src={item.imagem}
                    alt={item.titulo}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 left-4 bg-[#000D1E]/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-[#FD6A0A] border border-[#FD6A0A]/40">
                    {item.tipo}
                  </div>
                  {item.destaque && (
                    <div className="absolute top-4 right-4 bg-[#FD6A0A] text-[#060807] px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider shadow-md">
                      Destaque Comercial
                    </div>
                  )}
                </div>

                {/* Conteúdo do Case */}
                <div className="p-6 space-y-4">
                  <h3 className="text-lg font-bold text-white leading-snug">
                    {item.titulo}
                  </h3>
                  <p className="text-xs text-[#B8C1CE] leading-relaxed">
                    {item.descricao}
                  </p>

                  {/* Trio de Dados Heroico em Laranja */}
                  <div className="grid grid-cols-3 gap-2 pt-4 border-t border-white/10 text-center">
                    <div className="p-2 rounded-lg bg-[#04162C]">
                      <span className="text-xl sm:text-2xl font-extrabold text-[#FD6A0A] block">
                        {item.modulos}
                      </span>
                      <span className="text-[10px] text-[#B8C1CE] uppercase tracking-wider block">
                        Módulos
                      </span>
                    </div>

                    <div className="p-2 rounded-lg bg-[#04162C]">
                      <span className="text-xl sm:text-2xl font-extrabold text-[#FD6A0A] block">
                        {item.geracaoKwh.toLocaleString()}
                      </span>
                      <span className="text-[10px] text-[#B8C1CE] uppercase tracking-wider block">
                        kWh/mês
                      </span>
                    </div>

                    <div className="p-2 rounded-lg bg-[#04162C]">
                      <span className="text-xl sm:text-2xl font-extrabold text-[#FD6A0A] block">
                        R$ {(item.economiaAno / 1000).toFixed(1)}k
                      </span>
                      <span className="text-[10px] text-[#B8C1CE] uppercase tracking-wider block">
                        Economia/ano
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Botão de Conversão no Card */}
              <div className="p-6 pt-0">
                <a
                  href={`https://wa.me/${CLIENTE_INFO.whatsappRaw}?text=Ol%C3%A1!%20Vi%20o%20case%20de%20${item.modulos}%20m%C3%B3dulos%20no%20site%20e%20quero%20um%20projeto%20parecido.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-[#0A2240] hover:bg-[#FD6A0A] text-white hover:text-[#060807] text-xs font-bold flex items-center justify-center gap-2 transition-all group"
                >
                  <span>Quero resultado similar</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
