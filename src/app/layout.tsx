import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import { EMPRESA } from "@/lib/dados";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// TODO: trocar pelo domínio real assim que o cliente informar.
const SITE_URL = "https://americaenergiasolar.com.br";

const TITULO =
  "América Energia Solar — Energia Solar e Engenharia no Espírito Santo";
const DESCRICAO =
  "Sistemas fotovoltaicos, baterias e eletropostos na Grande Vitória e todo o ES. Até 90% de economia, 25 anos de garantia e 3 anos de manutenção gratuita. Desde 2022.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITULO,
  description: DESCRICAO,
  keywords: [
    "energia solar Serra ES",
    "energia solar Espírito Santo",
    "energia solar Grande Vitória",
    "energia solar Vila Velha",
    "energia solar Linhares",
    "energia solar Cariacica",
    "placa solar Serra ES",
    "sistema fotovoltaico Espírito Santo",
    "eletroposto Espírito Santo",
    "carregador veículo elétrico ES",
    "bateria solar Espírito Santo",
    "subestação Espírito Santo",
    "América Energia Solar",
  ],
  authors: [{ name: EMPRESA.nomeExtenso }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: EMPRESA.nome,
    title: TITULO,
    description: DESCRICAO,
    images: [
      {
        url: "/images/obra-01-expansao.jpg",
        width: 1448,
        height: 1931,
        alt: "Projeto fotovoltaico entregue pela América Energia Solar no Espírito Santo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITULO,
    description: DESCRICAO,
    images: ["/images/obra-01-expansao.jpg"],
  },
  icons: {
    icon: "/images/perfil-america.jpg",
    apple: "/images/perfil-america.jpg",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: EMPRESA.nomeExtenso,
  image: `${SITE_URL}/images/perfil-america.jpg`,
  url: SITE_URL,
  description:
    "Instalação de sistemas de energia solar fotovoltaica, baterias, eletropostos e subestações no Espírito Santo.",
  foundingDate: String(EMPRESA.desde),
  address: {
    "@type": "PostalAddress",
    streetAddress: EMPRESA.endereco.rua,
    addressLocality: `${EMPRESA.endereco.bairro}, ${EMPRESA.endereco.cidade}`,
    addressRegion: EMPRESA.endereco.uf,
    postalCode: EMPRESA.endereco.cep,
    addressCountry: "BR",
  },
  telephone: `+${EMPRESA.telefoneInternacional}`,
  areaServed: [
    "Serra",
    "Vitória",
    "Vila Velha",
    "Cariacica",
    "Viana",
    "Linhares",
    "Aracruz",
    "Colatina",
  ].map((nome) => ({ "@type": "City", name: `${nome}, ES` })),
  sameAs: [EMPRESA.instagram],
  knowsAbout: [
    "energia solar fotovoltaica",
    "sistema solar híbrido com bateria",
    "eletroposto para veículos elétricos",
    "subestação elétrica",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${montserrat.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        {/*
          Marca que o JS está ativo antes do primeiro paint. Só com esta classe
          o CSS esconde os blocos animados — assim, sem JS, a página aparece
          inteira em vez de ficar em branco.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add('js')`,
          }}
        />
      </head>
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
