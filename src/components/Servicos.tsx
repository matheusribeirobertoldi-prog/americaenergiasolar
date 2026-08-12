import { SERVICOS, WHATSAPP } from "@/lib/dados";
import { ICONES } from "./Icones";
import Reveal from "./Reveal";

export default function Servicos() {
  return (
    <section id="servicos" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-wider text-laranja-texto">
              Soluções
            </p>
            <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">
              Muito além de instalar painéis
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-corpo">
              Energia solar, armazenamento, mobilidade elétrica e infraestrutura
              elétrica — com engenharia própria.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICOS.map((servico, i) => {
            const Icone = ICONES[servico.icone];
            return (
              <Reveal key={servico.id} delay={i * 80}>
                <article
                  className={`flex h-full flex-col rounded-3xl border p-7 transition-shadow hover:shadow-lg ${
                    servico.destaque
                      ? "border-laranja-500/60 bg-laranja-50"
                      : "border-linha bg-white"
                  }`}
                >
                  <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-marinho-800 text-laranja-500">
                    <Icone className="h-7 w-7" />
                  </span>
                  <h3 className="mb-3 text-xl font-extrabold leading-snug">
                    {servico.titulo}
                  </h3>
                  <p className="flex-1 leading-relaxed text-corpo">
                    {servico.texto}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={200}>
          <div className="mt-12 text-center">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-laranja-500 px-8 py-4 text-base font-bold text-america-preto transition hover:bg-laranja-600"
            >
              Falar com um especialista
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
