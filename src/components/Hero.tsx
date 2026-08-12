import Image from "next/image";
import { EMPRESA, WHATSAPP } from "@/lib/dados";
import { IconeCampo, IconeCasa, IconePredio } from "./Icones";

const SEGMENTOS = [
  { Icone: IconeCasa, label: "Residencial" },
  { Icone: IconePredio, label: "Comercial" },
  { Icone: IconeCampo, label: "Rural" },
];

/** Halo branco: sustenta o texto onde o gradiente já se dissipou. */
const HALO = {
  textShadow: "0 1px 10px rgba(255,255,255,0.95), 0 0 26px rgba(255,255,255,0.8)",
};

export default function Hero() {
  return (
    <section
      id="topo"
      className="relative flex min-h-[100svh] items-center overflow-hidden"
    >
      {/* Imagem em tela cheia (1672x941, 16:9) — foto limpa, sem texto embutido. */}
      <Image
        src="/images/hero.png"
        alt="Usina fotovoltaica instalada em telhado metálico, com paisagem de montanhas ao fundo"
        fill
        priority
        sizes="100vw"
        quality={85}
        className="object-cover object-center"
      />

      {/*
        Overlay só do lado esquerdo, onde fica o texto — forte na esquerda,
        enfraquecendo até zerar por volta do meio. A metade direita da foto
        aparece sem filtro.
        No mobile o texto ocupa a largura toda, então a proteção ali é
        vertical: um gradiente lateral não cobriria a linha do texto.
      */}
      <div
        className="absolute inset-0 lg:hidden"
        style={{
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0.97) 0%, rgba(255,255,255,0.94) 45%, rgba(255,255,255,0.80) 72%, rgba(255,255,255,0.55) 100%)",
        }}
      />
      <div
        className="absolute inset-0 hidden lg:block"
        style={{
          background:
            "linear-gradient(to right, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.97) 40%, rgba(255,255,255,0.93) 48%, rgba(255,255,255,0.55) 53%, rgba(255,255,255,0) 60%)",
        }}
      />

      {/* Riscos diagonais laranja — assinatura visual das artes */}
      <div
        aria-hidden="true"
        className="riscos-diagonais pointer-events-none absolute -right-16 -top-16 h-72 w-72 opacity-50"
        style={{
          maskImage: "radial-gradient(circle at 70% 30%, black, transparent 72%)",
          WebkitMaskImage:
            "radial-gradient(circle at 70% 30%, black, transparent 72%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-32 sm:px-8">
        {/* No desktop o bloco cabe na faixa onde o gradiente ainda protege. */}
        <div className="max-w-2xl lg:max-w-xl">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-laranja-500/50 bg-laranja-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-laranja-texto">
            Energia solar no Espírito Santo · desde {EMPRESA.desde}
          </p>

          <h1
            className="text-4xl font-extrabold leading-[1.08] sm:text-5xl lg:text-6xl"
            style={HALO}
          >
            Invista uma vez,{" "}
            <span className="text-laranja-texto">economize para sempre</span>
          </h1>

          <p
            className="mt-6 max-w-xl text-lg leading-relaxed text-corpo sm:text-xl"
            style={HALO}
          >
            Sistemas fotovoltaicos com engenharia própria para residências,
            empresas e propriedades rurais. Até{" "}
            <strong className="font-bold text-titulo">
              {EMPRESA.economiaMaxima}
            </strong>{" "}
            de economia na sua conta de luz.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-laranja-500 px-8 py-4 text-center text-base font-bold text-america-preto shadow-lg shadow-laranja-500/30 transition hover:bg-laranja-600"
            >
              Enviar minha conta e simular grátis
            </a>
            <a
              href="#projetos"
              className="rounded-full border-2 border-marinho-800 bg-white/80 px-8 py-4 text-center text-base font-bold text-titulo backdrop-blur-sm transition hover:bg-marinho-800 hover:text-white"
            >
              Ver projetos entregues
            </a>
          </div>

          <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-4">
            {SEGMENTOS.map(({ Icone, label }) => (
              <li
                key={label}
                className="flex items-center gap-2.5 text-sm font-bold text-titulo"
                style={HALO}
              >
                <Icone className="h-6 w-6 text-laranja-600" />
                {label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
