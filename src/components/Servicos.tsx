import { SERVICOS, CLIENTE_INFO } from "@/lib/dados";
import { Sun, TrendingUp, BatteryCharging, Car, Cpu, Smartphone, ArrowRight } from "lucide-react";

export default function Servicos() {
  const getServicoIcon = (icone: string) => {
    switch (icone) {
      case "Sun":
        return <Sun className="w-8 h-8 text-[#FD6A0A]" />;
      case "TrendingUp":
        return <TrendingUp className="w-8 h-8 text-[#FD6A0A]" />;
      case "BatteryCharging":
        return <BatteryCharging className="w-8 h-8 text-[#FD6A0A]" />;
      case "Car":
        return <Car className="w-8 h-8 text-[#FD6A0A]" />;
      case "Cpu":
        return <Cpu className="w-8 h-8 text-[#FD6A0A]" />;
      case "Smartphone":
        return <Smartphone className="w-8 h-8 text-[#FD6A0A]" />;
      default:
        return <Sun className="w-8 h-8 text-[#FD6A0A]" />;
    }
  };

  return (
    <section id="servicos" className="py-24 bg-[#000D1E] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho de Seção */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#FD6A0A] bg-[#0A2240] px-3.5 py-1.5 rounded-full border border-[#FD6A0A]/30">
            Soluções completas de engenharia
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Nossos Serviços & Especialidades
          </h2>
          <p className="text-base text-[#B8C1CE] leading-relaxed">
            Desenvolvemos projetos de engenharia elétrica de ponta a ponta, desde a análise preliminar de viabilidade até a homologação junto à EDP Espírito Santo.
          </p>
        </div>

        {/* Grid de 6 Serviços */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICOS.map((servico) => (
            <div
              key={servico.id}
              className="relative p-8 rounded-[20px] bg-[#04162C] card-brand-border flex flex-col justify-between group"
            >
              {servico.badge && (
                <span className="absolute top-6 right-6 text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-[#FD6A0A] text-[#060807]">
                  {servico.badge}
                </span>
              )}

              <div className="space-y-6">
                <div className="w-14 h-14 rounded-2xl bg-[#0A2240] border border-[#FD6A0A]/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {getServicoIcon(servico.icone)}
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#FD6A0A] transition-colors">
                    {servico.titulo}
                  </h3>
                  <p className="text-sm text-[#B8C1CE] leading-relaxed">
                    {servico.descricao}
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5">
                <a
                  href={CLIENTE_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#FD6A0A] hover:text-[#FF9A4D] transition-colors"
                >
                  <span>Solicitar orçamento para este serviço</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
