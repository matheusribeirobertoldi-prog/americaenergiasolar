"use client";

import { useState } from "react";
import { FAQS } from "@/lib/dados";
import { HelpCircle, ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-[#000D1E] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <div className="text-center space-y-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#FD6A0A] bg-[#0A2240] px-3.5 py-1.5 rounded-full border border-[#FD6A0A]/30 inline-flex items-center gap-1.5">
            <HelpCircle className="w-4 h-4" /> Tire suas Dúvidas
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Perguntas Frequentes
          </h2>
          <p className="text-base text-[#B8C1CE]">
            Esclareça as dúvidas mais comuns sobre sistemas de energia solar e homologação junto à EDP.
          </p>
        </div>

        {/* Acordeão FAQ */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-[#04162C] border border-white/5 hover:border-[#FD6A0A]/40 rounded-2xl overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-white hover:text-[#FD6A0A] transition-colors"
                >
                  <span>{faq.pergunta}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#FD6A0A] shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-0 text-sm text-[#B8C1CE] leading-relaxed border-t border-white/5 animate-fadeIn">
                    {faq.resposta}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
