import Image from "next/image";
import { DIFERENCIAIS } from "@/lib/dados";
import { IconeCheck } from "./Icones";
import Reveal from "./Reveal";

export default function Diferenciais() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-wider text-laranja-texto">
                Por que a América
              </p>
              <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">
                Não vendemos apenas painéis solares
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-corpo">
                Entregamos independência energética, valorização do seu imóvel e
                previsibilidade financeira.
              </p>

              <ul className="mt-10 space-y-6">
                {DIFERENCIAIS.map((d) => (
                  <li key={d.titulo} className="flex gap-4">
                    <IconeCheck className="mt-0.5 h-6 w-6 shrink-0 text-laranja-600" />
                    <div>
                      <p className="font-extrabold text-titulo">{d.titulo}</p>
                      <p className="mt-1 leading-relaxed text-corpo">
                        {d.texto}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute -inset-3 rounded-[2rem] border border-laranja-500/40" />
              <div className="relative overflow-hidden rounded-3xl border border-linha shadow-lg">
                <Image
                  src="/images/produto-bateria-foxess.jpg"
                  alt="Sistema solar híbrido com bateria FOX ESS, com inversor e bateria integrados, oferecido pela América Energia Solar"
                  width={1122}
                  height={1402}
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="h-auto w-full"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
