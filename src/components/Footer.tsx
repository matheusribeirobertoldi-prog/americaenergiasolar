import Image from "next/image";
import Link from "next/link";
import { CLIENTE_INFO } from "@/lib/dados";
import { Sun, MessageCircle, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#060807] border-t border-[#FD6A0A]/30 pt-16 pb-12 text-[#B8C1CE] text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Coluna 1 - Empresa */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9 rounded-full overflow-hidden border border-[#FD6A0A]">
                <Image
                  src="/images/perfil-america.jpg"
                  alt="América Energia Solar Logo"
                  fill
                  className="object-cover"
                  sizes="36px"
                />
              </div>
              <span className="font-montserrat font-extrabold text-base text-white tracking-tight">
                AMÉRICA <Sun className="w-4 h-4 text-[#FD6A0A] inline-block" />
              </span>
            </div>

            <p className="text-xs text-[#B8C1CE] leading-relaxed">
              &ldquo;{CLIENTE_INFO.headline}&rdquo;
              <br />
              Sistemas fotovoltaicos e engenharia elétrica de alta performance no ES.
            </p>

            <div className="pt-2">
              <span className="text-[10px] font-bold text-[#FD6A0A] uppercase tracking-wider block">
                Homologação EDP Espírito Santo
              </span>
            </div>
          </div>

          {/* Coluna 2 - Cidades Atendidas */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Áreas de Atendimento
            </h4>
            <ul className="text-xs space-y-1.5 text-[#B8C1CE]">
              {CLIENTE_INFO.cidadesAtendidas.map((cidade) => (
                <li key={cidade} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FD6A0A]" />
                  <span>{cidade}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3 - Links Rápidos */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Navegação
            </h4>
            <ul className="text-xs space-y-2">
              <li>
                <Link href="#servicos" className="hover:text-[#FD6A0A] transition-colors">
                  Serviços de Engenharia
                </Link>
              </li>
              <li>
                <Link href="#cases" className="hover:text-[#FD6A0A] transition-colors">
                  Cases de Sucesso
                </Link>
              </li>
              <li>
                <Link href="#calculadora" className="hover:text-[#FD6A0A] transition-colors">
                  Calculadora Solar
                </Link>
              </li>
              <li>
                <Link href="#como-funciona" className="hover:text-[#FD6A0A] transition-colors">
                  Como Funciona
                </Link>
              </li>
              <li>
                <Link href="#diferenciais" className="hover:text-[#FD6A0A] transition-colors">
                  25 Anos de Garantia
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-[#FD6A0A] transition-colors">
                  Dúvidas Frequentes (FAQ)
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 4 - Contato & Redes */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Contato Rápido
            </h4>
            <div className="space-y-2 text-xs">
              <p className="text-white font-bold">{CLIENTE_INFO.whatsapp}</p>
              <p className="text-[#B8C1CE] leading-relaxed">{CLIENTE_INFO.endereco}</p>
            </div>

            <div className="pt-2">
              <a
                href={CLIENTE_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-america px-5 py-2.5 text-xs inline-flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-current text-[#060807]" />
                <span>Atendimento WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Rodapé Final Copyright */}
        <div className="pt-8 border-t border-white/10 text-center text-xs text-[#B8C1CE] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>
            © {new Date().getFullYear()} América Energia Solar & Engenharia. Todos os direitos reservados.
          </p>
          <p className="text-[11px]">
            Serra — Espírito Santo / Brasil
          </p>
        </div>
      </div>
    </footer>
  );
}
