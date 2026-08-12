import { CLIENTE_INFO } from "@/lib/dados";
import { Building, MapPin, Calendar, CheckCircle2, ShieldAlert } from "lucide-react";
import Image from "next/image";

export default function Sobre() {
  return (
    <section id="sobre" className="py-24 bg-[#04162C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Lado Esquerdo - História & Missão */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FD6A0A] bg-[#000D1E] px-3.5 py-1.5 rounded-full border border-[#FD6A0A]/30">
              Autoridade no Espírito Santo desde {CLIENTE_INFO.fundacao}
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Sobre a América Energia Solar
            </h2>

            <div className="space-y-4 text-[#B8C1CE] text-sm leading-relaxed font-normal">
              <p>
                Fundada em <strong className="text-white">2022</strong> na cidade de Serra/ES, a{" "}
                <strong className="text-white">América Energia Solar & Engenharia</strong> nasceu com um propósito claro: não vender apenas módulos fotovoltaicos, mas entregar verdadeira <strong className="text-[#FD6A0A]">independência energética, valorização patrimonial e previsibilidade financeira</strong>.
              </p>

              <p>
                Nossa atuação abrange toda a Grande Vitória e demais municípios do Espírito Santo (Serra, Vitória, Vila Velha, Cariacica, Viana, Linhares, Aracruz, Colatina). Combinamos a engenharia elétrica de ponta à instalação rigorosa conforme as especificações da concessionária EDP Espírito Santo.
              </p>
            </div>

            {/* Três Pilares da Assinatura */}
            <div className="pt-4 grid grid-cols-3 gap-4 text-center border-t border-white/10">
              <div className="p-3 rounded-xl bg-[#000D1E] border border-white/5">
                <span className="text-sm font-extrabold text-[#FD6A0A] block">TECNOLOGIA</span>
                <span className="text-[10px] text-[#B8C1CE]">Módulos & Baterias</span>
              </div>
              <div className="p-3 rounded-xl bg-[#000D1E] border border-white/5">
                <span className="text-sm font-extrabold text-[#FD6A0A] block">PERFORMANCE</span>
                <span className="text-[10px] text-[#B8C1CE]">Máximo Geração kWh</span>
              </div>
              <div className="p-3 rounded-xl bg-[#000D1E] border border-white/5">
                <span className="text-sm font-extrabold text-[#FD6A0A] block">CONFIANÇA</span>
                <span className="text-[10px] text-[#B8C1CE]">Engenharia Própria</span>
              </div>
            </div>
          </div>

          {/* Lado Direito - Card Visual da Sede */}
          <div className="lg:col-span-5">
            <div className="bg-[#000D1E] p-8 rounded-[24px] border-2 border-[#FD6A0A]/40 space-y-6 shadow-2xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#FD6A0A] text-[#060807] font-extrabold flex items-center justify-center text-lg shadow-md">
                  ES
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Sede Operacional</h3>
                  <p className="text-xs text-[#B8C1CE]">Porto Canoa, Serra/ES</p>
                </div>
              </div>

              <div className="space-y-3 text-xs text-[#B8C1CE]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#FD6A0A] shrink-0 mt-0.5" />
                  <span>Av. Brasília, 2874 — Sala 201, Porto Canoa, Serra/ES — CEP 29168-600</span>
                </div>
                <div className="flex items-center gap-3">
                  <Building className="w-4 h-4 text-[#FD6A0A] shrink-0" />
                  <span>Concessionária Atendida: EDP Espírito Santo</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-4 h-4 text-[#FD6A0A] shrink-0" />
                  <span>Empresa estabelecida em 2022</span>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10">
                <p className="text-xs text-[#B8C1CE] italic">
                  &ldquo;Tecnologia. Performance. Confiança.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
