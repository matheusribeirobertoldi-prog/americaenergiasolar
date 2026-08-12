import Image from "next/image";
import { CASES, GALERIA, formatarNumero, formatarReal } from "@/lib/dados";
import { IconePainel, IconeRaio } from "./Icones";
import Reveal from "./Reveal";

const destaque = CASES.find((c) => c.destaque)!;
const demais = CASES.filter((c) => !c.destaque);

export default function Projetos() {
  return (
    <section id="projetos" className="bg-superficie py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-wider text-laranja-texto">
              Projetos entregues
            </p>
            <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">
              Números reais de obras reais
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-corpo">
              Cada projeto entregue com geração estimada e economia anual
              calculada. Estes são alguns deles.
            </p>
          </div>
        </Reveal>

        {/* ---------- Case em destaque (card escuro: onde o laranja rende) ---------- */}
        <Reveal>
          <article className="mb-10 overflow-hidden rounded-3xl bg-marinho-950 shadow-xl">
            <div className="grid items-center gap-8 p-8 sm:p-10 lg:grid-cols-[1fr_1.1fr]">
              <div>
                <span className="mb-5 inline-flex w-fit items-center gap-2 rounded-full bg-laranja-500 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-america-preto">
                  Maior projeto entregue
                </span>
                <h3 className="text-2xl font-extrabold leading-tight text-white sm:text-3xl">
                  {destaque.tipo}
                </h3>
                <p className="mt-2 text-sm font-medium text-marinho-200">
                  {destaque.local}
                </p>
                <p className="mt-6 leading-relaxed text-marinho-200">
                  Um sistema desse porte transforma um dos maiores custos fixos
                  da empresa em patrimônio. A economia anual estimada equivale a
                  um retorno que se acumula por décadas.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/12 bg-marinho-900 p-6 text-center">
                  <IconePainel className="mx-auto mb-3 h-8 w-8 text-laranja-500" />
                  <p className="text-3xl font-extrabold text-white">
                    {destaque.modulos}
                  </p>
                  <p className="mt-1 text-xs font-bold uppercase tracking-wide text-marinho-200">
                    módulos
                  </p>
                </div>
                <div className="rounded-2xl border border-white/12 bg-marinho-900 p-6 text-center">
                  <IconeRaio className="mx-auto mb-3 h-8 w-8 text-laranja-500" />
                  <p className="text-3xl font-extrabold text-white">
                    {formatarNumero(destaque.geracao)}
                  </p>
                  <p className="mt-1 text-xs font-bold uppercase tracking-wide text-marinho-200">
                    kWh / mês
                  </p>
                </div>
                <div className="rounded-2xl bg-laranja-500 p-6 text-center">
                  <p className="text-xs font-bold uppercase tracking-wide text-america-preto">
                    Economia anual
                  </p>
                  <p className="mt-2 text-3xl font-extrabold leading-tight text-america-preto">
                    {formatarReal(destaque.economia)}
                  </p>
                </div>
              </div>
            </div>
          </article>
        </Reveal>

        {/* ---------- Demais cases ---------- */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {demais.map((c, i) => (
            <Reveal key={`${c.modulos}-${c.geracao}`} delay={i * 70}>
              <article className="flex h-full flex-col rounded-2xl border border-linha bg-white p-6 transition-shadow hover:shadow-lg">
                <div className="mb-4 flex items-baseline gap-2">
                  <span className="text-4xl font-extrabold leading-none text-titulo">
                    {c.modulos}
                  </span>
                  <span className="text-sm font-bold uppercase tracking-wide text-laranja-texto">
                    módulos
                  </span>
                </div>

                <h3 className="text-base font-bold">{c.tipo}</h3>
                <p className="mb-5 text-sm text-corpo">{c.local}</p>

                <dl className="mt-auto space-y-2 border-t border-linha pt-4 text-sm">
                  <div className="flex items-center justify-between gap-3">
                    <dt className="text-corpo">Geração</dt>
                    <dd className="font-bold text-titulo">
                      {formatarNumero(c.geracao)} kWh/mês
                    </dd>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <dt className="text-corpo">Economia anual</dt>
                    <dd className="rounded-full bg-laranja-500 px-3 py-1 font-extrabold text-america-preto">
                      {formatarReal(c.economia)}
                    </dd>
                  </div>
                </dl>
              </article>
            </Reveal>
          ))}
        </div>

        {/* ---------- Galeria de obras ---------- */}
        <Reveal>
          <h3 className="mb-8 mt-20 text-center text-2xl font-extrabold">
            Obras entregues
          </h3>
        </Reveal>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {GALERIA.map((foto, i) => (
            <Reveal key={foto.src} delay={i * 50}>
              <div className="overflow-hidden rounded-2xl border border-linha bg-white shadow-sm transition-shadow hover:shadow-lg">
                <Image
                  src={foto.src}
                  alt={foto.alt}
                  width={1440}
                  height={1920}
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="h-auto w-full"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
