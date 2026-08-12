"use client";

import { CLIENTE_INFO } from "@/lib/dados";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip no Hover */}
      <span className="hidden sm:inline-block bg-[#04162C] text-white text-xs font-bold px-3 py-1.5 rounded-xl border border-[#FD6A0A]/40 shadow-xl animate-bounce">
        Simule grátis agora! ☀️
      </span>

      {/* Botão Flutuante */}
      <a
        href={CLIENTE_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar pelo WhatsApp com América Energia Solar"
        className="relative w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 group"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30 pointer-events-none" />
        <MessageCircle className="w-8 h-8 fill-current text-white group-hover:scale-110 transition-transform" />
      </a>
    </div>
  );
}
