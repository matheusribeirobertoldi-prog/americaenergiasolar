import { ShieldCheck, Award, Wrench, Cpu, CheckCircle } from "lucide-react";
import Image from "next/image";
import { CLIENTE_INFO } from "@/lib/dados";

export default function Diferenciais() {
  return (
    <section id="diferenciais" className="py-24 bg-[#000D1E] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Esquerda - Destaque das Baterias Fox ESS */}
          <div className="lg:col-span-5">
            <div className="relative rounded-[24px] overflow-hidden border-2 border-[#FD6A0A]/40 bg-[#04162C] p-3 shadow-2xl group">
              <div className="relative aspect-[4/5] w-full rounded-[18px] overflow-hidden">
                <Image
                  src="/images/produto-bateria-foxess.jpg"
                  alt="Sistema de Armazenamento Híbrido Bateria FOX ESS"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
              </div>
              <div className="absolute bottom-6 left-6 right-6 bg-[#000D1E]/95 backdrop-blur-md p-4 rounded-xl border border-[#FD6A0A]/50 space-y-1">
                <span className="text-[10px] font-extrabold text-[#FD6A0A] uppercase tracking-wider block">
                  Autonomia Contra Apagões
                </span>
                <p className="text-sm font-bold text-white">
                  Sistemas Híbridos FOX ESS com Baterias de Lítio
                </p>
              </div>
            </div>
          </div>

          {/* Direita - Pilares de Diferencial */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#FD6A0A] bg-[#0A2240] px-3.5 py-1.5 rounded-full border border-[#FD6A0A]/30">
                Por que escolher a América Energia Solar?
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Engenharia de Alta Performance com Garantia Garantida
              </h2>
              <p className="text-base text-[#B8C1CE] leading-relaxed">
                Diferente de instaladores amadores, entregamos um projeto de engenharia elétrica completo, homologado e acompanhado de perto durante anos.
              </p>
            </div>

            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-[#04162C] border border-white/5 flex gap-5 hover:border-[#FD6A0A]/40 transition-all">
                <div className="p-3 rounded-xl bg-[#000D1E] border border-[#FD6A0A]/40 h-fit shrink-0">
                  <Wrench className="w-7 h-7 text-[#FD6A0A]" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-white">
                    3 Anos de Manutenção Preventiva Gratuita
                  </h3>
                  <p className="text-xs text-[#B8C1CE] leading-relaxed">
                    Acompanhamos o desempenho da sua usina fotovoltaica nos primeiros 36 meses com vistorias preventivas para assegurar máxima geração.
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[#04162C] border border-white/5 flex gap-5 hover:border-[#FD6A0A]/40 transition-all">
                <div className="p-3 rounded-xl bg-[#000D1E] border border-[#FD6A0A]/40 h-fit shrink-0">
                  <Award className="w-7 h-7 text-[#FD6A0A]" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-white">
                    25 Anos de Garantia de Eficiência Fotovoltaica
                  </h3>
                  <p className="text-xs text-[#B8C1CE] leading-relaxed">
                    Módulos solares selecionados Tier 1 com performance garantida em contrato por 25 anos contínuos.
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[#04162C] border border-white/5 flex gap-5 hover:border-[#FD6A0A]/40 transition-all">
                <div className="p-3 rounded-xl bg-[#000D1E] border border-[#FD6A0A]/40 h-fit shrink-0">
                  <Cpu className="w-7 h-7 text-[#FD6A0A]" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-white">
                    Responsabilidade Técnica & Homologação EDP
                  </h3>
                  <p className="text-xs text-[#B8C1CE] leading-relaxed">
                    Projetos assinados por engenheiros eletricistas registrados no CREA-ES, agilizando o parecer de acesso junto à concessionária EDP.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
