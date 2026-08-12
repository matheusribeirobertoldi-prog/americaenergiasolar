import { CLIENTE_INFO } from "@/lib/dados";
import { MessageCircle, HelpCircle } from "lucide-react";

export default function Provocacao() {
  return (
    <section className="py-20 bg-[#060807] border-y border-[#FD6A0A]/30 relative overflow-hidden">
      {/* Luz Laranja no Fundo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-[#FD6A0A]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FD6A0A]/10 border border-[#FD6A0A]/40 text-xs font-bold text-[#FD6A0A]">
          <HelpCircle className="w-4 h-4" />
          <span>Reflexão Financeira Inteligente</span>
        </div>

        <blockquote className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white leading-relaxed tracking-tight max-w-4xl mx-auto">
          &ldquo;Todo mês você paga a conta. No mês seguinte, paga de novo. E no outro também. Enquanto isso, quem investiu em energia solar transformou uma despesa que nunca acaba em patrimônio.&rdquo;
        </blockquote>

        <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FD6A0A] tracking-tight">
          Até quando você vai financiar a sua conta de energia?
        </p>

        <div className="pt-4 flex justify-center">
          <a
            href={CLIENTE_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-america px-9 py-4 text-lg flex items-center gap-3 shadow-2xl"
          >
            <MessageCircle className="w-6 h-6 fill-current text-[#060807]" />
            <span>Quero transformar minha conta em patrimônio</span>
          </a>
        </div>
      </div>
    </section>
  );
}
