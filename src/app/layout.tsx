import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import { CLIENTE_INFO } from "@/lib/dados";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "América Energia Solar — Energia Solar e Engenharia no Espírito Santo",
  description:
    "Sistemas fotovoltaicos, baterias e eletropostos na Grande Vitória e todo o ES. Até 90% de economia, 25 anos de garantia e 3 anos de manutenção gratuita. Desde 2022.",
  keywords: [
    "energia solar Serra ES",
    "energia solar Espírito Santo",
    "energia solar Grande Vitória",
    "energia solar Vila Velha",
    "energia solar Linhares",
    "eletroposto Espírito Santo",
    "bateria solar ES",
    "sistema fotovoltaico ES",
    "América Energia Solar",
    "engenharia elétrica Serra ES",
  ],
  authors: [{ name: "América Energia Solar & Engenharia" }],
  openGraph: {
    title: "América Energia Solar — Invista uma vez, economize para sempre",
    description:
      "Sistemas fotovoltaicos e engenharia elétrica no Espírito Santo. Até 90% de economia na sua conta de luz EDP.",
    url: "https://americaenergiasolar.com.br",
    siteName: "América Energia Solar",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/obra-01-expansao.jpg",
        width: 1200,
        height: 630,
        alt: "América Energia Solar - Usina Fotovoltaica",
      },
    ],
  },
  icons: {
    icon: "/images/perfil-america.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: CLIENTE_INFO.nome,
    description: CLIENTE_INFO.headline,
    telephone: "+55-27-99797-9497",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. Brasília, 2874 — Sala 201, Porto Canoa",
      addressLocality: "Serra",
      addressRegion: "ES",
      postalCode: "29168-600",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "-20.192535",
      longitude: "-40.279612",
    },
    areaServed: CLIENTE_INFO.cidadesAtendidas,
    url: "https://americaenergiasolar.com.br",
    logo: "https://americaenergiasolar.com.br/images/perfil-america.jpg",
  };

  return (
    <html lang="pt-BR" className={`${montserrat.variable} ${inter.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      </head>
      <body className="antialiased bg-[#000D1E] text-white">
        {children}
      </body>
    </html>
  );
}
