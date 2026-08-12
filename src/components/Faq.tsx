import { FAQ } from "@/lib/dados";
import Reveal from "./Reveal";

export default function Faq() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <Reveal>
          <div className="mb-14 text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-wider text-laranja-texto">
              Dúvidas frequentes
            </p>
            <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">
              O que todo mundo pergunta antes de decidir
            </h2>
          </div>
        </Reveal>

        <div className="space-y-4">
          {FAQ.map((item, i) => (
            <Reveal key={item.pergunta} delay={i * 60}>
              {/* <details> nativo: acessível e funciona sem JavaScript */}
              <details className="group rounded-2xl border border-linha bg-superficie px-6 transition-colors open:border-laranja-500/60 open:bg-white open:shadow-md">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left text-base font-bold text-titulo sm:text-lg">
                  {item.pergunta}
                  <span
                    aria-hidden="true"
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-marinho-950 text-lg font-extrabold text-laranja-500 transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="border-t border-linha pb-6 pt-5 leading-relaxed text-corpo">
                  {item.resposta}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
