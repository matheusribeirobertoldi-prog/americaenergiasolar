import Image from "next/image";
import { EMPRESA } from "@/lib/dados";

export default function Footer() {
  return (
    <footer className="bg-marinho-950 py-14">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <div className="mb-5">
              {/* Versão de wordmark branco, para o fundo escuro do rodapé. */}
              <Image
                src="/images/logo-america-branco.png"
                alt={EMPRESA.nome}
                width={572}
                height={158}
                className="h-14 w-auto"
              />
            </div>
            <p className="text-sm leading-relaxed text-marinho-200">
              {EMPRESA.headline}.
              <br />
              Energia solar e engenharia desde {EMPRESA.desde}.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-white">
              Contato
            </h3>
            <ul className="space-y-2 text-sm text-marinho-200">
              <li>{EMPRESA.telefone}</li>
              <li>
                <a
                  href={EMPRESA.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-laranja-500"
                >
                  {EMPRESA.instagramHandle}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-white">
              Endereço
            </h3>
            <address className="text-sm not-italic leading-relaxed text-marinho-200">
              {EMPRESA.endereco.rua}
              <br />
              {EMPRESA.endereco.bairro} — {EMPRESA.endereco.cidade}/
              {EMPRESA.endereco.uf}
              <br />
              CEP {EMPRESA.endereco.cep}
            </address>
          </div>
        </div>

        <div className="mt-12 border-t border-white/12 pt-8 text-sm text-marinho-200">
          <p>
            © {new Date().getFullYear()} {EMPRESA.nomeExtenso}. Todos os
            direitos reservados.
          </p>
          {/* TODO: inserir razão social e CNPJ quando o cliente informar —
              necessário também para a política de privacidade (LGPD). */}
        </div>
      </div>
    </footer>
  );
}
