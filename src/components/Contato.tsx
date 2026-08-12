import { CLIENTE_INFO } from "@/lib/dados";
import { MapPin, Phone, MessageCircle, Clock, Send } from "lucide-react";

export default function Contato() {
  return (
    <section id="contato" className="py-24 bg-[#04162C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Lado Esquerdo - Informações de Atendimento */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#FD6A0A] bg-[#000D1E] px-3.5 py-1.5 rounded-full border border-[#FD6A0A]/30">
                Fale com nossos engenheiros
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Entre em Contato
              </h2>
              <p className="text-base text-[#B8C1CE]">
                Estamos prontos para atender você na Serra, Vitória, Vila Velha e em todo o Espírito Santo.
              </p>
            </div>

            <div className="space-y-6">
              {/* WhatsApp Card */}
              <a
                href={CLIENTE_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-2xl bg-[#000D1E] border border-[#FD6A0A]/40 flex items-center gap-5 hover:border-[#FD6A0A] transition-all group"
              >
                <div className="p-4 rounded-xl bg-[#FD6A0A] text-[#060807] shrink-0 group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-7 h-7 fill-current" />
                </div>
                <div>
                  <span className="text-xs text-[#FD6A0A] font-bold uppercase tracking-wider block">
                    WhatsApp Direto
                  </span>
                  <span className="text-xl font-extrabold text-white block">
                    {CLIENTE_INFO.whatsapp}
                  </span>
                  <span className="text-xs text-[#B8C1CE]">
                    Clique para simulação gratuita em minutos
                  </span>
                </div>
              </a>

              {/* Endereço Card */}
              <div className="p-6 rounded-2xl bg-[#000D1E] border border-white/5 flex items-start gap-5">
                <div className="p-4 rounded-xl bg-[#0A2240] text-[#FD6A0A] border border-[#FD6A0A]/30 shrink-0">
                  <MapPin className="w-7 h-7" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs text-[#B8C1CE] font-bold uppercase tracking-wider block">
                    Endereço Comercial
                  </span>
                  <p className="text-sm font-bold text-white leading-relaxed">
                    {CLIENTE_INFO.endereco}
                  </p>
                </div>
              </div>

              {/* Instagram Card */}
              <a
                href={CLIENTE_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-2xl bg-[#000D1E] border border-white/5 flex items-center gap-5 hover:border-[#FD6A0A]/40 transition-all group"
              >
                <div className="p-4 rounded-xl bg-[#0A2240] text-[#FD6A0A] border border-[#FD6A0A]/30 shrink-0 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 stroke-current" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </div>
                <div>
                  <span className="text-xs text-[#B8C1CE] font-bold uppercase tracking-wider block">
                    Instagram Oficial
                  </span>
                  <span className="text-base font-bold text-white block">
                    {CLIENTE_INFO.instagram}
                  </span>
                  <span className="text-xs text-[#B8C1CE]">
                    Acompanhe nossas obras diárias e stories
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* Lado Direito - Google Maps Iframe Embed */}
          <div className="lg:col-span-6 relative">
            <div className="w-full h-full min-h-[400px] rounded-[24px] overflow-hidden border-2 border-[#FD6A0A]/40 bg-[#000D1E] shadow-2xl relative">
              <iframe
                title="Localização América Energia Solar"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3744.6069966395355!2d-40.279612323862215!3d-20.192534981254388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb81f1816e8aa8f%3A0x6b4121d58dfc9cb2!2sAv.%20Bras%C3%ADlia%2C%202874%20-%20Porto%20Canoa%2C%20Serra%20-%20ES%2C%2029168-600!5e0!3m2!1spt-BR!2sbr!4v1710000000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale contrast-125 opacity-85 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
