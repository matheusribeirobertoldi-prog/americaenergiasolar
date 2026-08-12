"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { EMPRESA, WHATSAPP } from "@/lib/dados";

const LINKS = [
  { href: "#servicos", label: "Serviços" },
  { href: "#projetos", label: "Projetos" },
  { href: "#calculadora", label: "Simular economia" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#contato", label: "Contato" },
];

export default function Header() {
  const [rolou, setRolou] = useState(false);
  const [menuAberto, setMenuAberto] = useState(false);

  useEffect(() => {
    const aoRolar = () => setRolou(window.scrollY > 24);
    aoRolar();
    window.addEventListener("scroll", aoRolar, { passive: true });
    return () => window.removeEventListener("scroll", aoRolar);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuAberto ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuAberto]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        rolou || menuAberto
          ? "border-b border-linha bg-white/95 shadow-sm backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#topo" className="flex items-center" aria-label={`${EMPRESA.nome} — início`}>
          {/*
            Logo extraído em alta das artes oficiais (572x158), com fundo
            removido e wordmark recolorido para o marinho da marca.
            TODO: substituir pelo vetor quando o cliente enviar.
          */}
          <Image
            src="/images/logo-america.png"
            alt={EMPRESA.nome}
            width={572}
            height={158}
            priority
            className="h-11 w-auto sm:h-13"
          />
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-titulo transition-colors hover:text-laranja-texto"
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-laranja-500 px-6 py-3 text-sm font-bold text-america-preto transition-colors hover:bg-laranja-600"
          >
            Falar no WhatsApp
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setMenuAberto((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-lg text-titulo lg:hidden"
          aria-expanded={menuAberto}
          aria-controls="menu-mobile"
          aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
        >
          <span className="relative block h-4 w-6">
            <span
              className={`absolute left-0 block h-0.5 w-6 bg-current transition-all ${
                menuAberto ? "top-1/2 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 block h-0.5 w-6 -translate-y-1/2 bg-current transition-opacity ${
                menuAberto ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 block h-0.5 w-6 bg-current transition-all ${
                menuAberto ? "top-1/2 -rotate-45" : "bottom-0"
              }`}
            />
          </span>
        </button>
      </div>

      {menuAberto && (
        <nav
          id="menu-mobile"
          className="border-t border-linha bg-white px-5 pb-8 pt-4 lg:hidden"
        >
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuAberto(false)}
              className="block border-b border-linha py-4 text-base font-semibold text-titulo"
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuAberto(false)}
            className="mt-6 block rounded-full bg-laranja-500 py-4 text-center text-base font-bold text-america-preto"
          >
            Falar no WhatsApp
          </a>
        </nav>
      )}
    </header>
  );
}
