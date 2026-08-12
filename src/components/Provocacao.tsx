import { EMPRESA, WHATSAPP } from "@/lib/dados";
import Reveal from "./Reveal";

/**
 * Única seção escura da página, de propósito: é o momento de impacto da
 * marca ("Pare de financiar a concessionária"). O contraste com o resto
 * claro faz o bloco parar o olho — e é onde o laranja rende 6.7:1.
 */
export default function Provocacao() {
  return (
    <section className="relative overflow-hidden bg-marinho-950 py-20 sm:py-28">
      <div
        aria-hidden="true"
        className="riscos-diagonais pointer-events-none absolute -left-10 top-0 h-64 w-64 opacity-30"
        style={{
          maskImage: "radial-gradient(circle at 30% 30%, black, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(circle at 30% 30%, black, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal>
          <p className="text-xl leading-relaxed text-white sm:text-2xl sm:leading-relaxed">
            Todo mês você paga a conta. No mês seguinte, paga de novo. E no
            outro também.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-marinho-200 sm:text-xl">
            Enquanto isso, quem investiu em energia solar transformou uma despesa
            que nunca acaba em <strong className="text-white">patrimônio</strong>.
          </p>

          <p className="mt-10 text-3xl font-extrabold leading-tight text-laranja-500 sm:text-4xl">
            Até quando você vai financiar a sua conta de energia?
          </p>

          <p className="mx-auto mt-8 max-w-2xl leading-relaxed text-marinho-200">
            A tarifa da {EMPRESA.concessionaria} sobe. As bandeiras tarifárias
            encarecem ainda mais. Quem depende só da concessionária não controla
            nenhum desses aumentos.
          </p>

          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-block rounded-full bg-laranja-500 px-8 py-4 text-base font-bold text-america-preto transition hover:bg-laranja-600"
          >
            Quero parar de pagar caro
          </a>
        </Reveal>
      </div>
    </section>
  );
}
