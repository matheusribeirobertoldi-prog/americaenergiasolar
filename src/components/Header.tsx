"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { CLIENTE_INFO } from "@/lib/dados";
import { Menu, X, MessageCircle, Sun } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Serviços", href: "#servicos" },
    { label: "Cases Realizados", href: "#cases" },
    { label: "Calculadora", href: "#calculadora" },
    { label: "Como Funciona", href: "#como-funciona" },
    { label: "Diferenciais", href: "#diferenciais" },
    { label: "Sobre", href: "#sobre" },
    { label: "FAQ", href: "#faq" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#000D1E]/95 backdrop-blur-md py-3 shadow-xl border-b border-[#FD6A0A]/20"
          : "bg-[#000D1E]/80 backdrop-blur-sm py-5 border-b border-white/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="#" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-[#FD6A0A] shadow-md group-hover:scale-105 transition-transform">
            <Image
              src="/images/perfil-america.jpg"
              alt="América Energia Solar"
              fill
              className="object-cover"
              sizes="40px"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-montserrat font-extrabold text-base tracking-tight text-white flex items-center gap-1.5">
              AMÉRICA <Sun className="w-4 h-4 text-[#FD6A0A] inline-block animate-spin-slow" />
            </span>
            <span className="text-[10px] font-medium tracking-wider text-[#FD6A0A] uppercase">
              Energia Solar & Engenharia
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#B8C1CE] hover:text-[#FD6A0A] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={CLIENTE_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-america px-5 py-2.5 text-sm flex items-center gap-2 shadow-lg"
          >
            <MessageCircle className="w-4 h-4 fill-current text-[#060807]" />
            Simulação Grátis
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-[#B8C1CE] hover:text-white hover:bg-white/5 transition-colors"
          aria-label="Abrir menu de navegação"
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-[#FD6A0A]" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#04162C] border-b border-[#FD6A0A]/20 px-4 pt-4 pb-6 mt-2 space-y-3 animate-fadeIn">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-[#B8C1CE] hover:text-white hover:bg-white/5"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2">
            <a
              href={CLIENTE_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-america w-full py-3 text-center flex items-center justify-center gap-2 text-base font-bold shadow-lg"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              Simular no WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
