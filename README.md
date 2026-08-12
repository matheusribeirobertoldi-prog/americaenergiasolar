# América Energia Solar — Landing Page

Landing page da **América Energia Solar & Engenharia**, de Serra/ES. O objetivo
é gerar contatos via WhatsApp para simulação gratuita.

Next.js 16 · React 19 · TypeScript · Tailwind CSS v4

---

## Rodando

```bash
npm install
```

```bash
npm run dev
```

Abre em http://localhost:3000 (neste ambiente roda em 3001, para não conflitar
com o projeto da Nexxon).

---

## Onde mexer

Todo o conteúdo textual está em **`src/lib/dados.ts`**. Trocar telefone, case,
FAQ ou serviço não exige abrir componente.

| Arquivo | O que controla |
|---|---|
| `src/lib/dados.ts` | Conteúdo: contato, serviços, cases, FAQ, etapas, calculadora |
| `src/app/globals.css` | Tokens de cor, slider, animações |
| `src/app/layout.tsx` | SEO, Open Graph, JSON-LD `LocalBusiness` |
| `src/components/Icones.tsx` | Ícones de linha (a marca não usa ícone sólido nem emoji) |
| `src/components/` | Um componente por seção |
| `public/images/` | Artes oficiais extraídas do Instagram |

---

## Identidade visual

Cores extraídas por análise de pixel das artes oficiais.

| Token | Hex | Uso |
|---|---|---|
| `america-marinho` | `#000D1E` | Fundo dominante |
| `america-laranja` | `#FD6A0A` | Cor de marca: títulos, números, CTAs |
| `america-preto` | `#060807` | Footer, texto sobre laranja |

**A marca é assumidamente escura.** Fundo escuro é identidade, não decoração.
Proporção: ~55% marinho, 30% branco, 15% laranja. Um site claro
descaracterizaria a marca.

### Regras de contraste (validadas)

- Botão CTA = fundo `#FD6A0A` + texto `#060807` → **6.9:1** ✅
- Texto branco sobre `#000D1E` → **19.5:1** ✅
- ❌ **Nunca texto branco sobre laranja** → 2.9:1, reprovado.
  O Instagram faz isso em títulos gigantes; aqui não.

### Linguagem visual

Copiada das artes do Instagram: cantos bem arredondados, contorno laranja fino,
ícones de linha, números gigantes em laranja e riscos diagonais decorativos.

---

## Calculadora

O slider vai de 5 a 60 módulos. A proporção usada —
**70 kWh/mês e R$ 865/ano por módulo** — é a média dos 7 cases reais
publicados pela empresa, não uma estimativa nossa.

Conferência contra os cases reais:

| Módulos | Case real | Calculadora |
|---|---|---|
| 5 | 350 kWh · R$ 4.200 | 350 kWh · R$ 4.325 |
| 60 | 4.000 kWh · R$ 50.000 | 4.200 kWh · R$ 51.900 |

> **Sobre o número de 25 anos:** é uma projeção linear (economia anual × 25).
> Não considera degradação dos módulos nem inflação da tarifa. Se preferir um
> número mais conservador, ajuste `anosGarantia` em `dados.ts` ou remova esse
> terceiro card.

---

## ⚠️ Pendências do cliente

Marcadas com `TODO` no código. **Nenhum número foi inventado** — onde o dado não
existe, o elemento simplesmente não aparece.

| Onde | O que falta |
|---|---|
| `public/images/logo-america.png` | **Logo em vetor.** O atual foi extraído das artes (572×158) — bom o bastante para o tamanho em uso, mas o vetor continua sendo o ideal |
| `dados.ts` (topo) | Total de clientes, projetos entregues e módulos instalados desde 2022 |
| `dados.ts` → `CASES` | Nome/segmento do cliente do case de 60 módulos |
| `dados.ts` → fim | FAQ sobre financiamento; autorização para exibir logos dos parceiros |
| `Sobre.tsx` | Logos oficiais da Fortlev Solar e FOX ESS (hoje são só texto) |
| `layout.tsx` | `SITE_URL` está com domínio provisório |
| `Footer.tsx` | Razão social e CNPJ (rodapé + LGPD) |

### Não incluído de propósito

`obra-08-linhares.jpg` mostra **clientes identificáveis** assinando contrato.
Não foi usada na página — depende de autorização de uso de imagem. O arquivo
está em `public/images/` caso o cliente confirme.

### Quando os números chegarem

Adicione uma faixa de contadores abaixo do hero: fundo `bg-marinho-900`,
números em `text-laranja-500`.

---

## Assets

### Hero

`hero.png` (1672×941, 16:9) — foto limpa, sem texto embutido, fornecida pelo
cliente. Diferente das demais imagens, que são artes gráficas do Instagram.

O overlay branco sobre ela é o mesmo padrão dos outros projetos: gradiente
lateral no desktop (forte à esquerda, zerando em 60%) e vertical no mobile,
onde o texto ocupa a largura toda.

### Artes do Instagram

11 imagens extraídas do Instagram oficial em 11/08/2026, em 1440×1920.

### Logo

O logo do perfil do Instagram tem 150×150 e, descontada a margem branca,
apenas **141×40 px de conteúdo real** — inútil para o site.

A solução foi extraí-lo do rodapé de `obra-05-excelencia.jpg`, onde aparece
em alta resolução sobre fundo escuro uniforme. O processamento remove o fundo
(alpha proporcional à luminância, preservando o anti-aliasing) e recolore o
wordmark, gerando duas versões:

| Arquivo | Wordmark | Uso |
|---|---|---|
| `logo-america.png` | marinho `#0A2240` | Header (fundo claro) |
| `logo-america-branco.png` | branco | Rodapé (fundo escuro) |

Ambos em **572×158 com fundo transparente**. Exibidos a 52px de altura no
header, o que dá ~3× de densidade — nítido em telas retina.

`perfil-america.jpg` segue no projeto apenas como favicon (é quadrado).

> **São artes gráficas, não fotos limpas** — já vêm com texto embutido. Por isso
> não são usadas como fundo de hero com texto por cima; entram emolduradas,
> no estilo das próprias artes. Se o cliente enviar as fotos originais sem
> arte, dá para reformular o hero.

---

## Acessibilidade

- HTML semântico, um único `<h1>`, hierarquia correta
- FAQ em `<details>` nativo — funciona sem JavaScript
- Ícones em SVG com `aria-hidden`, textos em elementos reais
- Menu mobile com `aria-expanded` / `aria-controls`
- Slider com `<label>` associado e `aria-valuetext`; resultado em `aria-live`
- Animação de scroll é aprimoramento progressivo: sem JS o conteúdo aparece
- `prefers-reduced-motion` respeitado
- Sem scroll horizontal de 375px a 1920px
