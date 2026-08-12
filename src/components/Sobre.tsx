import { EMPRESA, PARCEIROS } from "@/lib/dados";
import Reveal from "./Reveal";

export default function Sobre() {
  return (
    <section className="bg-superficie py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal>
          <p className="mb-3 text-sm font-bold uppercase tracking-wider text-laranja-texto">
            Desde {EMPRESA.desde} no Espírito Santo
          </p>

          <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">
            Engenharia, tecnologia e equipamentos de alto desempenho
          </h2>

          <p className="mt-8 text-lg leading-relaxed text-corpo">
            Cada projeto da {EMPRESA.nomeExtenso} é desenvolvido para entregar
            máxima eficiência, segurança e retorno sobre o investimento.
            Projetamos e executamos sistemas com acompanhamento em todas as
            etapas — do primeiro cálculo à homologação junto à{" "}
            {EMPRESA.concessionaria}.
          </p>

          <p className="mt-10 text-2xl font-extrabold leading-tight sm:text-3xl">
            Tecnologia. <span className="text-laranja-texto">Performance.</span>{" "}
            Confiança.
          </p>

          {/*
            TODO: quando o cliente autorizar o uso das marcas, trocar por
            uma faixa com os logos oficiais dos parceiros.
          */}
          <div className="mt-16 border-t border-linha pt-10">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-corpo">
              Trabalhamos com
            </p>
            <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
              {PARCEIROS.map((p) => (
                <li
                  key={p}
                  className="text-lg font-extrabold uppercase tracking-wide text-titulo"
                >
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
