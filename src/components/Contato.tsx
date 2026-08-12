import { EMPRESA, WHATSAPP } from "@/lib/dados";
import { IconeWhatsApp } from "./Icones";
import Reveal from "./Reveal";

const ENDERECO_COMPLETO = `${EMPRESA.endereco.rua}, ${EMPRESA.endereco.bairro}, ${EMPRESA.endereco.cidade} - ${EMPRESA.endereco.uf}, ${EMPRESA.endereco.cep}`;

const MAPA_SRC = `https://www.google.com/maps?q=${encodeURIComponent(
  ENDERECO_COMPLETO,
)}&output=embed`;

const CIDADES = [
  "Serra",
  "Vitória",
  "Vila Velha",
  "Cariacica",
  "Viana",
  "Linhares",
  "Aracruz",
  "Colatina",
];

export default function Contato() {
  return (
    <section id="contato" className="bg-superficie py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">
              Envie sua conta de luz e descubra quanto economiza
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-corpo">
              A simulação é gratuita e sem compromisso. Mostramos a economia
              estimada e em quanto tempo o investimento se paga.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <div className="space-y-8">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-4 rounded-2xl bg-laranja-500 p-6 shadow-lg shadow-laranja-500/25 transition hover:bg-laranja-600"
              >
                <span>
                  <span className="block text-xs font-bold uppercase tracking-wide text-america-preto">
                    WhatsApp
                  </span>
                  <span className="mt-1 block text-2xl font-extrabold text-america-preto">
                    {EMPRESA.telefone}
                  </span>
                </span>
                <IconeWhatsApp className="h-9 w-9 shrink-0 text-america-preto" />
              </a>

              <div>
                <h3 className="mb-3 text-lg font-extrabold">Onde estamos</h3>
                <address className="not-italic leading-relaxed text-corpo">
                  {EMPRESA.endereco.rua}
                  <br />
                  {EMPRESA.endereco.bairro} — {EMPRESA.endereco.cidade}/
                  {EMPRESA.endereco.uf}
                  <br />
                  CEP {EMPRESA.endereco.cep}
                </address>
              </div>

              <div>
                <h3 className="mb-3 text-lg font-extrabold">
                  Cidades atendidas
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {CIDADES.map((c) => (
                    <li
                      key={c}
                      className="rounded-full border border-linha bg-white px-4 py-1.5 text-sm font-semibold text-titulo"
                    >
                      {c}
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-sm text-corpo">
                  Atendemos toda a Grande Vitória e região.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <div className="h-full min-h-80 overflow-hidden rounded-3xl border border-linha shadow-sm">
              <iframe
                src={MAPA_SRC}
                title={`Localização da ${EMPRESA.nome} no mapa`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="h-full min-h-80 w-full border-0"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
