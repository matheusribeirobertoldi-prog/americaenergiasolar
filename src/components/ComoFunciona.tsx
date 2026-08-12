import { ETAPAS } from "@/lib/dados";
import { CheckCircle2, FileText, Wrench, ShieldAlert } from "lucide-react";

export default function ComoFunciona() {
  return (
    <section id="como-funciona" className="py-24 bg-[#04162C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#FD6A0A] bg-[#0A2240] px-3.5 py-1.5 rounded-full border border-[#FD6A0A]/30">
            Jornada da Independência Energética
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Como Funciona o Processo
          </h2>
          <p className="text-base text-[#B8C1CE]">
            Sem complicação ou burocracia. Nossa engenharia cuida de tudo do início ao fim para você começar a economizar.
          </p>
        </div>

        {/* Grid de Etapas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {ETAPAS.map((etapa, index) => (
            <div
              key={etapa.numero}
              className="bg-[#000D1E] rounded-[22px] p-8 border border-white/5 hover:border-[#FD6A0A]/40 transition-all duration-300 relative group flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Número da Etapa Grande em Laranja */}
                <div className="flex items-center justify-between">
                  <span className="text-4xl sm:text-5xl font-extrabold text-[#FD6A0A] group-hover:scale-110 transition-transform block">
                    {etapa.numero}
                  </span>
                  <CheckCircle2 className="w-6 h-6 text-[#FD6A0A]/40 group-hover:text-[#FD6A0A] transition-colors" />
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-[#FD6A0A] transition-colors">
                  {etapa.titulo}
                </h3>

                <p className="text-xs text-[#B8C1CE] leading-relaxed">
                  {etapa.descricao}
                </p>
              </div>

              {/* Indicador de Conexão */}
              {index < ETAPAS.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-10 text-[#FD6A0A]/30">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
