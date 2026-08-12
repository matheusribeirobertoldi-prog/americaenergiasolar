import { GARANTIAS } from "@/lib/dados";
import { ICONES } from "./Icones";
import Reveal from "./Reveal";

/** Os 4 selos que aparecem no rodapé de todas as artes oficiais da marca. */
export default function Garantias() {
  return (
    <section
      className="border-y border-linha bg-superficie py-12"
      aria-label="Nossas garantias"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {GARANTIAS.map((g, i) => {
            const Icone = ICONES[g.icone];
            return (
              <Reveal key={g.titulo} delay={i * 90}>
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-laranja-50 text-laranja-600">
                    <Icone className="h-7 w-7" />
                  </span>
                  <div>
                    <p className="text-lg font-extrabold leading-tight text-titulo">
                      {g.titulo}
                    </p>
                    <p className="text-sm leading-snug text-corpo">{g.texto}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
