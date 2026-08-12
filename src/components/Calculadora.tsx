"use client";

import { useState } from "react";
import {
  CALCULADORA,
  formatarNumero,
  formatarReal,
  whatsappComSimulacao,
} from "@/lib/dados";
import { IconePainel, IconeRaio } from "./Icones";
import Reveal from "./Reveal";

const {
  modulosMin,
  modulosMax,
  passo,
  kwhPorModulo,
  economiaAnualPorModulo,
  anosGarantia,
} = CALCULADORA;

export default function Calculadora() {
  const [modulos, setModulos] = useState<number>(10);

  const geracao = modulos * kwhPorModulo;
  const economiaAnual = modulos * economiaAnualPorModulo;
  const economiaMensal = Math.round(economiaAnual / 12);
  const economiaTotal = economiaAnual * anosGarantia;

  const preenchido =
    ((modulos - modulosMin) / (modulosMax - modulosMin)) * 100;

  return (
    <section id="calculadora" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <Reveal>
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-wider text-laranja-texto">
              Simulador
            </p>
            <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">
              Quanto você pode economizar?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-corpo">
              Arraste para o tamanho do sistema e veja a estimativa. Baseada nos
              projetos que já entregamos.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="rounded-3xl border border-linha bg-superficie p-7 shadow-sm sm:p-10">
            {/* ---------- Slider ---------- */}
            <div className="mb-10">
              <label
                htmlFor="modulos"
                className="mb-2 block text-sm font-bold uppercase tracking-wide text-titulo"
              >
                Tamanho do sistema
              </label>

              <p className="mb-6 flex items-baseline gap-3 text-5xl font-extrabold text-titulo sm:text-6xl">
                <IconePainel className="h-10 w-10 text-laranja-600" />
                {modulos}
                <span className="text-lg font-bold uppercase tracking-wide text-laranja-texto">
                  módulos
                </span>
              </p>

              <input
                id="modulos"
                type="range"
                min={modulosMin}
                max={modulosMax}
                step={passo}
                value={modulos}
                onChange={(e) => setModulos(Number(e.target.value))}
                className="slider-modulos"
                style={{ "--preenchido": `${preenchido}%` } as React.CSSProperties}
                aria-valuetext={`${modulos} módulos`}
              />

              <div className="mt-3 flex justify-between text-sm font-bold text-titulo">
                <span>{modulosMin} módulos</span>
                <span>{modulosMax} módulos</span>
              </div>
            </div>

            {/* ---------- Resultado (cards escuros: onde o laranja rende) ---------- */}
            <div
              aria-live="polite"
              className="grid gap-4 border-t border-linha pt-8 sm:grid-cols-3"
            >
              <div className="rounded-2xl bg-marinho-950 p-6 text-center sm:text-left">
                <IconeRaio className="mx-auto mb-3 h-7 w-7 text-laranja-500 sm:mx-0" />
                <p className="text-xs font-bold uppercase tracking-wide text-marinho-200">
                  Geração estimada
                </p>
                <p className="mt-2 text-2xl font-extrabold text-white">
                  {formatarNumero(geracao)}
                  <span className="ml-1 text-base font-bold text-marinho-200">
                    kWh/mês
                  </span>
                </p>
              </div>

              <div className="rounded-2xl bg-laranja-500 p-6 text-center sm:text-left">
                <p className="text-xs font-bold uppercase tracking-wide text-america-preto">
                  Economia por ano
                </p>
                <p className="mt-2 text-2xl font-extrabold text-america-preto">
                  {formatarReal(economiaAnual)}
                </p>
                <p className="mt-1 text-sm font-bold text-america-preto">
                  ≈ {formatarReal(economiaMensal)} por mês
                </p>
              </div>

              <div className="rounded-2xl bg-marinho-950 p-6 text-center sm:text-left">
                <p className="text-xs font-bold uppercase tracking-wide text-marinho-200">
                  Em {anosGarantia} anos
                </p>
                <p className="mt-2 text-2xl font-extrabold text-white">
                  {formatarReal(economiaTotal)}
                </p>
                <p className="mt-1 text-sm text-marinho-200">
                  período de garantia de eficiência
                </p>
              </div>
            </div>

            <div className="mt-8">
              <a
                href={whatsappComSimulacao(modulos, economiaAnual)}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-full bg-laranja-500 px-8 py-4 text-center text-base font-bold text-america-preto transition hover:bg-laranja-600"
              >
                Enviar minha conta e simular de verdade
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
