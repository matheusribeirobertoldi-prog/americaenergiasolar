export interface CaseProjeto {
  id: string;
  modulos: number;
  geracaoKwh: number;
  economiaAno: number;
  tipo: string;
  destaque?: boolean;
  imagem: string;
  titulo: string;
  descricao: string;
}

export interface Servico {
  id: string;
  titulo: string;
  descricao: string;
  icone: string;
  badge?: string;
}

export interface Etapa {
  numero: string;
  titulo: string;
  descricao: string;
}

export interface FAQItem {
  pergunta: string;
  resposta: string;
}

export const CLIENTE_INFO = {
  nome: "América Energia Solar",
  subtitulo: "Energia Solar & Engenharia Elétrica",
  headline: "Invista uma vez, economize para sempre",
  promessaEconomia: "Até 90% de economia na conta de luz",
  fundacao: "2022",
  cidadeBase: "Serra/ES",
  endereco: "Av. Brasília, 2874 — Sala 201, Porto Canoa, Serra/ES — CEP 29168-600",
  whatsapp: "(27) 99797-9497",
  whatsappRaw: "5527997979497",
  whatsappUrl: "https://wa.me/5527997979497?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20quero%20enviar%20minha%20conta%20de%20luz%20para%20uma%20simula%C3%A7%C3%A3o%20gratuita.",
  instagram: "@americaenergiasolar",
  instagramUrl: "https://instagram.com/americaenergiasolar",
  concessionaria: "EDP Espírito Santo",
  cidadesAtendidas: [
    "Serra",
    "Vitória",
    "Vila Velha",
    "Cariacica",
    "Viana",
    "Linhares",
    "Aracruz",
    "Colatina",
    "Grande Vitória"
  ],
  warranties: {
    manutencaoAnos: 3,
    eficienciaAnos: 25,
  }
};

export const GARANTIAS = [
  {
    titulo: "Até 90% de Economia",
    descricao: "Redução drástica do valor pago à concessionária mensalmente",
    icone: "Zap"
  },
  {
    titulo: "Equipamentos Premium",
    descricao: "Painéis Tier 1 de máxima tecnologia e inversores FOX ESS",
    icone: "ShieldCheck"
  },
  {
    titulo: "Engenharia Própria",
    descricao: "Instalação profissional, segura e dentro das normas técnicas",
    icone: "Wrench"
  },
  {
    titulo: "25 Anos de Garantia",
    descricao: "Garantia de eficiência de geração fotovoltaica a longo prazo",
    icone: "Award"
  }
];

export const SERVICOS: Servico[] = [
  {
    id: "fotovoltaico",
    titulo: "Energia Solar Fotovoltaica",
    descricao: "Projetos completos para residências, empresas e áreas rurais no ES com alta rentabilidade.",
    icone: "Sun",
    badge: "Mais Procurado"
  },
  {
    id: "expansao",
    titulo: "Expansão de Sistema Existente",
    descricao: "Sua demanda de energia aumentou? Expandimos seu sistema fotovoltaico atual com máxima eficiência.",
    icone: "TrendingUp"
  },
  {
    id: "baterias",
    titulo: "Sistemas Híbridos com Baterias",
    descricao: "Tecnologia FOX ESS para armazenamento de energia e proteção contra quedas da rede elétrica.",
    icone: "BatteryCharging",
    badge: "Tecnologia Híbrida"
  },
  {
    id: "eletropostos",
    titulo: "Eletropostos para Veículos Elétricos",
    descricao: "Instalação de estações de recarga veicular em residências, condomínios e estabelecimentos comerciais.",
    icone: "Car"
  },
  {
    id: "subestacao",
    titulo: "Engenharia & Subestações",
    descricao: "Projetos elétricos de média e alta tensão, adequações técnicas e laudos com ART de engenheiro responsável.",
    icone: "Cpu"
  },
  {
    id: "monitoramento",
    titulo: "Monitoramento por Aplicativo",
    descricao: "Acompanhe em tempo real na palma da mão a geração diária de energia e a economia acumulada.",
    icone: "Smartphone"
  }
];

export const CASES: CaseProjeto[] = [
  {
    id: "case-60",
    modulos: 60,
    geracaoKwh: 4000,
    economiaAno: 50000,
    tipo: "Comercial",
    destaque: true,
    imagem: "/images/obra-01-expansao.jpg",
    titulo: "Usina Comercial de Alta Performance",
    descricao: "Projeto de grande porte gerando 4.000 kWh/mês com 60 módulos, economizando R$ 50.000 por ano para o empresário."
  },
  {
    id: "case-14",
    modulos: 14,
    geracaoKwh: 1000,
    economiaAno: 12000,
    tipo: "Residencial",
    imagem: "/images/obra-02-telhado.jpg",
    titulo: "Residência Família Unifamiliar",
    descricao: "Sistema de 14 módulos em telhado residencial entregando 1.000 kWh/mês e R$ 12.000 de economia anual acumulada."
  },
  {
    id: "case-10-b",
    modulos: 10,
    geracaoKwh: 900,
    economiaAno: 10800,
    tipo: "Residencial",
    imagem: "/images/obra-06-entrega.jpg",
    titulo: "Projeto Residencial Entregue",
    descricao: "10 módulos de alta tecnologia gerando 900 kWh/mês e eliminando a conta de luz da família."
  },
  {
    id: "case-10-a",
    modulos: 10,
    geracaoKwh: 700,
    economiaAno: 8400,
    tipo: "Residencial",
    imagem: "/images/obra-04-7modulos.jpg",
    titulo: "Sistema Fotovoltaico 10 Painéis",
    descricao: "Geração estimada de 700 kWh/mês trazendo R$ 8.400 de economia direta por ano."
  },
  {
    id: "case-8",
    modulos: 8,
    geracaoKwh: 600,
    economiaAno: 7200,
    tipo: "Rural (Solo)",
    imagem: "/images/obra-03-cliente.jpg",
    titulo: "Usina de Solo Propriedade Rural",
    descricao: "Estrutura instalada em solo para propriedade rural gerando 600 kWh/mês com R$ 7.200 de economia anual."
  },
  {
    id: "case-7",
    modulos: 7,
    geracaoKwh: 500,
    economiaAno: 6000,
    tipo: "Expansão",
    imagem: "/images/obra-07-ampliacao.jpg",
    titulo: "Ampliação de Sistema Existente",
    descricao: "Expansão de usina com +7 módulos para suprir novo aumento no consumo de energia."
  },
  {
    id: "case-5",
    modulos: 5,
    geracaoKwh: 350,
    economiaAno: 4200,
    tipo: "Residencial",
    imagem: "/images/obra-05-excelencia.jpg",
    titulo: "Instalação Compacta Residencial",
    descricao: "5 módulos fotovoltaicos entregando 350 kWh/mês com economia estimada de R$ 4.200 ao ano."
  }
];

export const ETAPAS: Etapa[] = [
  {
    numero: "01",
    titulo: "Simulação Gratuita",
    descricao: "Você envia uma foto da sua conta de luz pelo WhatsApp. Analisamos seu consumo histórico sem compromisso."
  },
  {
    numero: "02",
    titulo: "Projeto de Engenharia",
    descricao: "Nossa equipe técnica projeta a solução ideal customizada para o seu telhado ou terreno, garantindo máxima eficiência."
  },
  {
    numero: "03",
    titulo: "Instalação Ágil & Segura",
    descricao: "Montagem dos módulos e inversores com técnicos qualificados, seguindo todas as normas de segurança da NBR."
  },
  {
    numero: "04",
    titulo: "Homologação EDP",
    descricao: "Cuidamos da vistoria e homologação oficial junto à EDP Espírito Santo para ligação do medidor bidirecional."
  }
];

export const FAQS: FAQItem[] = [
  {
    pergunta: "Como funciona a economia de até 90% na conta de luz?",
    resposta: "Os painéis solares convertem a luz do sol em energia elétrica. Toda energia gerada durante o dia abastece sua casa/empresa e o excesso é injetado na rede da EDP gerando créditos. Você paga apenas a taxa mínima da concessionária."
  },
  {
    pergunta: "Qual é a garantia dos equipamentos e do serviço?",
    resposta: "Nossos painéis solares possuem 25 anos de garantia de eficiência de geração. Os inversores contam com garantia de fábrica e a América Energia Solar oferece 3 anos de manutenção gratuita no seu sistema."
  },
  {
    pergunta: "O que acontece se faltar energia elétrica na rua?",
    resposta: "Nos sistemas conectados à rede (On-Grid padrão), o inversor se desliga por segurança (anti-ilhamento). Caso deseje manter energia mesmo durante apagões, projetamos sistemas híbridos com baterias acumuladoras FOX ESS."
  },
  {
    pergunta: "Já tenho energia solar, posso aumentar o número de placas?",
    resposta: "Com certeza! Realizamos o serviço de expansão de sistemas já existentes, avaliando seu inversor atual ou adicionando um novo módulo para atender a novas cargas (como ar-condicionado ou carro elétrico)."
  },
  {
    pergunta: "Quanto tempo dura a instalação?",
    resposta: "Instalações residenciais levam geralmente de 1 a 3 dias úteis. Em seguida, providenciamos a documentação e agendamento de vistoria da EDP para a troca do relógio medidor."
  },
  {
    pergunta: "É possível financiar 100% do projeto de energia solar?",
    resposta: "Sim! Trabalhamos com linhas de crédito de financiamento solar facilitadas. Muitas vezes o valor da parcela mensal do financiamento fica menor do que a sua conta de luz atual."
  }
];
