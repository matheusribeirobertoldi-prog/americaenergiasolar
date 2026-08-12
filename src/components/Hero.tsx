import Image from "next/image";
import { CLIENTE_INFO } from "@/lib/dados";
import { MessageCircle, ShieldCheck, Zap, Home, Building2, Trees, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-[#000D1E] via-[#04162C] to-[#000D1E] overflow-hidden bg-diagonals">
      {/* Elementos de Iluminação de Fundo */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#FD6A0A]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -top-12 -right-12 w-96 h-96 bg-[#0A2240] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Lado Esquerdo - Conteúdo & Conversão */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Tag de Marca */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A2240] border border-[#FD6A0A]/30 text-xs font-semibold text-[#FD6A0A]">
              <span className="w-2 h-2 rounded-full bg-[#FD6A0A] animate-ping" />
              Engenharia Elétrica & Solar em Serra e Todo ES
            </div>

            {/* Headline Principal */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Invista uma vez,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FD6A0A] via-[#FF9A4D] to-[#FD6A0A]">
                economize para sempre.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-[#B8C1CE] max-w-2xl font-normal leading-relaxed">
              Sistemas fotovoltaicos com engenharia própria para residências, empresas e propriedades rurais na Grande Vitória e em todo o Espírito Santo. Até{" "}
              <strong className="text-white font-bold underline decoration-[#FD6A0A] decoration-2">
                90% de economia
              </strong>{" "}
              na sua conta de luz EDP.
            </p>

            {/* CTAs e Conversão */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={CLIENTE_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-america px-8 py-4 text-base sm:text-lg flex items-center justify-center gap-3 shadow-2xl group"
              >
                <MessageCircle className="w-6 h-6 fill-current text-[#060807] group-hover:scale-110 transition-transform" />
                <span>Enviar conta e simular grátis</span>
              </a>
            </div>

            {/* Selos de Atendimento Rápidos */}
            <div className="pt-4 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-[#B8C1CE]">
              <div className="flex items-center gap-2">
                <Home className="w-4 h-4 text-[#FD6A0A]" />
                <span>Residencial</span>
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-[#FD6A0A]" />
                <span>Comercial</span>
              </div>
              <div className="flex items-center gap-2">
                <Trees className="w-4 h-4 text-[#FD6A0A]" />
                <span>Rural</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FD6A0A]" />
                <span>Desde 2022</span>
              </div>
            </div>
          </div>

          {/* Lado Direito - Card Hero com Arte do Cliente */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-[24px] overflow-hidden border-2 border-[#FD6A0A]/40 shadow-2xl bg-[#04162C] p-2 group hover:border-[#FD6A0A] transition-all duration-300">
              <div className="relative aspect-[4/5] w-full rounded-[18px] overflow-hidden">
                <Image
                  src="/images/obra-01-expansao.jpg"
                  alt="América Energia Solar - Instalação de Painéis Fotovoltaicos"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000D1E] via-transparent to-transparent opacity-60" />
              </div>

              {/* Badge Assinatura Marca "+1" */}
              <div className="absolute bottom-6 left-6 right-6 bg-[#000D1E]/90 backdrop-blur-md p-4 rounded-xl border border-[#FD6A0A]/50 flex items-center justify-between shadow-xl">
                <div>
                  <span className="text-[11px] font-semibold text-[#FD6A0A] uppercase tracking-wider block">
                    Engenharia Homologada EDP
                  </span>
                  <p className="text-sm font-bold text-white">
                    Soluções sob medida no ES
                  </p>
                </div>
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#FD6A0A] text-[#060807] font-extrabold text-sm shadow-md">
                  +1
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
