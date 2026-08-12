import { ETAPAS } from "@/lib/dados";
import Reveal from "./Reveal";

export default function ComoFunciona() {
  return (
    <section id="como-funciona" className="bg-superficie py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-wider text-laranja-texto">
              Como funciona
            </p>
            <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">
              Da sua conta de luz à sua própria energia
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-corpo">
              Quatro etapas. A primeira é gratuita e sem compromisso.
            </p>
          </div>
        </Reveal>

        <ol className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-8 hidden h-px bg-linha lg:block"
          />

          {ETAPAS.map((etapa, i) => (
            <Reveal key={etapa.numero} delay={i * 100}>
              <li className="relative flex h-full flex-col">
                <span
                  aria-hidden="true"
                  className="relative z-10 mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-marinho-950 text-xl font-extrabold text-laranja-500 ring-8 ring-superficie"
                >
                  {etapa.numero}
                </span>
                <h3 className="mb-3 text-lg font-extrabold">{etapa.titulo}</h3>
                <p className="leading-relaxed text-corpo">{etapa.texto}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
