import { GARANTIAS } from "@/lib/dados";
import { Zap, ShieldCheck, Wrench, Award } from "lucide-react";

export default function GarantiasBar() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Zap":
        return <Zap className="w-8 h-8 text-[#FD6A0A]" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-8 h-8 text-[#FD6A0A]" />;
      case "Wrench":
        return <Wrench className="w-8 h-8 text-[#FD6A0A]" />;
      case "Award":
        return <Award className="w-8 h-8 text-[#FD6A0A]" />;
      default:
        return <Zap className="w-8 h-8 text-[#FD6A0A]" />;
    }
  };

  return (
    <section className="bg-[#04162C] border-y border-[#FD6A0A]/20 py-10 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {GARANTIAS.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-4 rounded-xl bg-[#000D1E]/60 border border-white/5 hover:border-[#FD6A0A]/40 transition-all duration-200"
            >
              <div className="p-3 rounded-lg bg-[#0A2240] border border-[#FD6A0A]/30 shrink-0">
                {getIcon(item.icone)}
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-white tracking-tight">
                  {item.titulo}
                </h3>
                <p className="text-xs text-[#B8C1CE] leading-relaxed">
                  {item.descricao}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
