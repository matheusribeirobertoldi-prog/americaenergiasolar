/**
 * Dados da América Energia Solar.
 *
 * Extraído do Instagram oficial (@americaenergiasolar) em 11/08/2026,
 * a partir de 96 posts analisados.
 *
 * Nenhum número foi inventado. Os 7 cases abaixo foram publicados pela
 * própria empresa, com módulos, geração e economia informados por ela.
 */

export const EMPRESA = {
  nome: "América Energia Solar",
  nomeExtenso: "América Energia Solar & Engenharia",
  headline: "Invista uma vez, economize para sempre",
  desde: 2022,
  economiaMaxima: "90%",
  instagram: "https://www.instagram.com/americaenergiasolar/",
  instagramHandle: "@americaenergiasolar",
  concessionaria: "EDP Espírito Santo",
  endereco: {
    rua: "Av. Brasília, 2874 — Sala 201",
    bairro: "Porto Canoa",
    cidade: "Serra",
    uf: "ES",
    cep: "29168-600",
  },
  telefone: "(27) 99797-9497",
  telefoneInternacional: "5527997979497",
} as const;

/* TODO: confirmar com o cliente e então exibir uma faixa de contadores.
   - clientesAtendidos
   - projetosEntregues (total desde 2022)
   - modulosInstalados / kWp total
   - razaoSocial / CNPJ (rodapé e política de privacidade)
   Hoje nenhum total agregado aparece na página — só os cases reais. */

const MSG = encodeURIComponent(
  "Olá! Vim pelo site e quero enviar minha conta de luz para uma simulação gratuita.",
);

export const WHATSAPP = `https://wa.me/${EMPRESA.telefoneInternacional}?text=${MSG}`;

/** Link do WhatsApp já com o resultado da simulação na mensagem. */
export function whatsappComSimulacao(
  modulos: number,
  economiaAnual: number,
): string {
  const texto = encodeURIComponent(
    `Olá! Simulei no site: ${modulos} módulos, com economia estimada de ${formatarReal(
      economiaAnual,
    )} por ano. Quero enviar minha conta de luz para uma simulação gratuita.`,
  );
  return `https://wa.me/${EMPRESA.telefoneInternacional}?text=${texto}`;
}

export function formatarReal(valor: number): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  }).format(valor);
}

export function formatarNumero(valor: number): string {
  return new Intl.NumberFormat("pt-BR", { maximumFractionDigits: 0 }).format(
    valor,
  );
}

/** Os 4 selos que aparecem no rodapé das artes oficiais da marca. */
export const GARANTIAS = [
  { titulo: "Até 90%", texto: "de economia na conta de luz", icone: "escudo" },
  { titulo: "Equipamentos", texto: "de alta qualidade", icone: "check" },
  { titulo: "Instalação", texto: "profissional e certificada", icone: "ferramenta" },
  { titulo: "25 anos", texto: "de garantia de eficiência", icone: "medalha" },
] as const;

export const SERVICOS = [
  {
    id: "fotovoltaico",
    titulo: "Energia solar fotovoltaica",
    texto:
      "Sistemas dimensionados para residências, empresas e propriedades rurais. Telhado ou usina de solo, com homologação completa junto à concessionária.",
    icone: "painel",
    destaque: true,
  },
  {
    id: "expansao",
    titulo: "Expansão de sistema",
    texto:
      "Seu consumo aumentou depois da instalação? Ampliamos o sistema existente com novos módulos, aumentando a geração sem refazer o projeto.",
    icone: "mais",
    destaque: false,
  },
  {
    id: "bateria",
    titulo: "Sistema híbrido com bateria",
    texto:
      "Solução FOX ESS ALL-IN-ONE: inversor e bateria integrados. Produza de dia, armazene o excedente e mantenha a casa funcionando durante apagões.",
    icone: "bateria",
    destaque: true,
  },
  {
    id: "eletroposto",
    titulo: "Eletroposto",
    texto:
      "Estações de recarga para veículos elétricos. Atraia clientes, aumente o tempo de permanência no seu estabelecimento e crie uma nova fonte de receita.",
    icone: "carro",
    destaque: true,
  },
  {
    id: "subestacao",
    titulo: "Subestação",
    texto:
      "Projeto e execução de subestação para empreendimentos que precisam de infraestrutura elétrica de maior porte.",
    icone: "raio",
    destaque: false,
  },
  {
    id: "monitoramento",
    titulo: "Monitoramento por app",
    texto:
      "Acompanhe em tempo real a geração do sistema, o consumo do imóvel e os créditos acumulados na concessionária, direto do celular.",
    icone: "celular",
    destaque: false,
  },
] as const;

/**
 * Cases reais publicados pela empresa no Instagram.
 * Módulos, geração e economia são os números que ela mesma divulgou.
 */
export const CASES = [
  {
    modulos: 60,
    geracao: 4000,
    economia: 50000,
    tipo: "Comercial",
    local: "Espírito Santo",
    destaque: true,
    // TODO: pedir ao cliente o nome/segmento deste cliente — é o melhor argumento comercial
  },
  {
    modulos: 14,
    geracao: 1000,
    economia: 12000,
    tipo: "Residencial",
    local: "Porto Canoa — Serra/ES",
    destaque: false,
  },
  {
    modulos: 10,
    geracao: 900,
    economia: 10800,
    tipo: "Residencial",
    local: "Porto Canoa — Serra/ES",
    destaque: false,
  },
  {
    modulos: 10,
    geracao: 700,
    economia: 8400,
    tipo: "Residencial",
    local: "Espírito Santo",
    destaque: false,
  },
  {
    modulos: 8,
    geracao: 600,
    economia: 7200,
    tipo: "Rural — usina de solo",
    local: "Espírito Santo",
    destaque: false,
  },
  {
    modulos: 7,
    geracao: 500,
    economia: 6000,
    tipo: "Expansão de sistema",
    local: "Espírito Santo",
    destaque: false,
  },
  {
    modulos: 5,
    geracao: 350,
    economia: 4200,
    tipo: "Residencial",
    local: "Serra/ES",
    destaque: false,
  },
] as const;

/**
 * Calculadora.
 * A proporção vem da média dos 7 cases reais acima — é a mesma lógica que a
 * empresa comunica publicamente, não uma estimativa nossa.
 */
export const CALCULADORA = {
  modulosMin: 5,
  modulosMax: 60,
  passo: 1,
  kwhPorModulo: 70, // média observada nos cases
  economiaAnualPorModulo: 865, // média observada nos cases
  anosGarantia: 25,
} as const;

export const GALERIA = [
  {
    src: "/images/obra-02-telhado.jpg",
    alt: "Arte da América Energia Solar mostrando instalação residencial de 10 módulos com geração de 900 kWh por mês",
  },
  {
    src: "/images/obra-03-cliente.jpg",
    alt: "Arte mostrando usina de solo de 8 módulos instalada em área rural ao pôr do sol",
  },
  {
    src: "/images/obra-01-expansao.jpg",
    alt: "Arte de expansão de sistema com 7 novos módulos em telhado metálico",
  },
  {
    src: "/images/obra-06-entrega.jpg",
    alt: "Arte de obra entregue com 5 módulos e geração de 350 kWh por mês",
  },
  {
    src: "/images/obra-05-excelencia.jpg",
    alt: "Arte de projeto fotovoltaico entregue pela América Energia Solar",
  },
  {
    src: "/images/obra-09-instalacao.jpg",
    alt: "Arte de instalação fotovoltaica concluída pela equipe da América Energia Solar",
  },
  {
    src: "/images/obra-07-ampliacao.jpg",
    alt: "Arte de ampliação de sistema fotovoltaico existente",
  },
  {
    src: "/images/obra-04-7modulos.jpg",
    alt: "Arte de projeto residencial entregue com painéis solares em telhado",
  },
] as const;

export const ETAPAS = [
  {
    numero: "01",
    titulo: "Simulação gratuita",
    texto:
      "Você envia uma foto da sua conta de luz. Nós mostramos, sem custo, quanto dá para economizar e em quanto tempo o investimento se paga.",
  },
  {
    numero: "02",
    titulo: "Projeto de engenharia",
    texto:
      "Dimensionamos o sistema para o seu consumo real, com equipamentos de alta performance e projeto assinado.",
  },
  {
    numero: "03",
    titulo: "Instalação profissional",
    texto:
      "Nossa equipe executa a obra com acompanhamento em todas as etapas, do primeiro parafuso à energização.",
  },
  {
    numero: "04",
    titulo: "Homologação e economia",
    texto:
      "Cuidamos de todo o processo junto à EDP Espírito Santo, incluindo a troca pelo medidor bidirecional. Você passa a produzir a própria energia.",
  },
] as const;

export const DIFERENCIAIS = [
  {
    titulo: "3 anos de manutenção gratuita",
    texto:
      "Depois da instalação, seguimos com você. Manutenção inclusa por três anos, sem custo adicional.",
  },
  {
    titulo: "25 anos de garantia de eficiência",
    texto:
      "Os equipamentos são cobertos por garantia de eficiência de 25 anos. É um investimento que atravessa décadas.",
  },
  {
    titulo: "Consultoria grátis",
    texto:
      "Antes de qualquer decisão, você entende o projeto inteiro: geração estimada, retorno do investimento e cada etapa do processo.",
  },
  {
    titulo: "Homologação completa",
    texto:
      "Cuidamos de toda a burocracia junto à concessionária, incluindo a troca do medidor. Você não precisa se preocupar com nada disso.",
  },
] as const;

export const FAQ = [
  {
    pergunta: "O que acontece com a energia que sobra?",
    resposta:
      "Ela não é perdida. Quando o sistema gera mais do que o imóvel consome, o excedente é injetado na rede da concessionária e se transforma em créditos, que você usa depois — à noite ou em meses de menor geração.",
  },
  {
    pergunta: "Preciso trocar o medidor de energia?",
    resposta:
      "Sim, e nós cuidamos disso. Após a instalação, o medidor tradicional é substituído pelo medidor bidirecional, que registra tanto a energia consumida quanto a excedente injetada na rede. Todo o processo de homologação junto à EDP Espírito Santo é feito por nós.",
  },
  {
    pergunta: "E se faltar energia na rede?",
    resposta:
      "Com o sistema convencional, a geração é interrompida junto com a rede, por segurança. Já com o sistema híbrido com bateria FOX ESS, sua casa continua funcionando durante o apagão: geladeira, internet, iluminação, portão e sistema de segurança seguem ligados.",
  },
  {
    pergunta: "Quanto tempo demora para o investimento se pagar?",
    resposta:
      "Depende do seu consumo e do porte do sistema. Esse é exatamente um dos números que apresentamos na simulação gratuita: você envia sua conta de luz e mostramos a economia estimada e o tempo de retorno, antes de qualquer decisão.",
  },
  {
    pergunta: "Vocês atendem fora da Grande Vitória?",
    resposta:
      "Sim. Nossa base fica em Porto Canoa, na Serra, e atendemos toda a Grande Vitória — Vila Velha, Cariacica, Viana e Vitória — além de Linhares, Aracruz e Colatina. Fale com a gente para confirmar sua cidade.",
  },
  {
    pergunta: "Já tenho energia solar. Dá para aumentar o sistema?",
    resposta:
      "Dá sim, e fazemos isso com frequência. Se seu consumo aumentou, instalamos módulos adicionais no sistema existente para elevar a geração. Faça uma análise conosco e descubra quanto ainda dá para economizar.",
  },
  {
    pergunta: "Por que não escolher apenas pelo preço?",
    resposta:
      "Porque energia solar é um investimento para décadas. Uma decisão errada hoje pode gerar prejuízo e dor de cabeça por muitos anos. Antes de fechar contrato, analise a empresa, os equipamentos, a equipe e o suporte oferecido — não só o valor final.",
  },
] as const;

/* TODO: quando o cliente confirmar, adicionar pergunta sobre financiamento
   (bancos e condições) — é uma das dúvidas mais frequentes do setor. */

export const PARCEIROS = ["Fortlev Solar", "FOX ESS"] as const;
/* TODO: confirmar com o cliente se podemos exibir os logos dos parceiros. */
