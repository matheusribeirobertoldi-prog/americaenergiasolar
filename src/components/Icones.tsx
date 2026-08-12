/**
 * Ícones de linha (stroke), como nas artes da marca.
 * A identidade da América nunca usa ícone preenchido nem emoji.
 */

type Props = { className?: string };

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
  "aria-hidden": true,
};

export function IconePainel({ className = "h-7 w-7" }: Props) {
  return (
    <svg {...base} className={className}>
      <path d="M3 4h18l-2 9H5L3 4Z" />
      <path d="M8 4v9M13 4v9M4 8.5h16" />
      <path d="M12 13v7M8 20h8" />
    </svg>
  );
}

export function IconeRaio({ className = "h-7 w-7" }: Props) {
  return (
    <svg {...base} className={className}>
      <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />
    </svg>
  );
}

export function IconeBateria({ className = "h-7 w-7" }: Props) {
  return (
    <svg {...base} className={className}>
      <rect x="2" y="7" width="17" height="10" rx="2.5" />
      <path d="M22 10.5v3" />
      <path d="M6.5 10.5v3M10 10.5v3M13.5 10.5v3" />
    </svg>
  );
}

export function IconeCarro({ className = "h-7 w-7" }: Props) {
  return (
    <svg {...base} className={className}>
      <path d="M4 16v-3.2a2 2 0 0 1 .2-.9l1.8-3.6A2 2 0 0 1 7.8 7h6.4a2 2 0 0 1 1.8 1.1l1.8 3.6a2 2 0 0 1 .2.9V16" />
      <path d="M4 16h14" />
      <circle cx="7.5" cy="17.5" r="1.6" />
      <circle cx="14.5" cy="17.5" r="1.6" />
      <path d="M21 8.5 19.5 11h2L20 13.5" />
    </svg>
  );
}

export function IconeEscudo({ className = "h-7 w-7" }: Props) {
  return (
    <svg {...base} className={className}>
      <path d="M12 3 5 6v5.5c0 4.2 2.9 7.7 7 9.5 4.1-1.8 7-5.3 7-9.5V6l-7-3Z" />
      <path d="m9 12 2.2 2.2L15.5 10" />
    </svg>
  );
}

export function IconeCheck({ className = "h-7 w-7" }: Props) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="m8.5 12 2.4 2.4 4.6-4.8" />
    </svg>
  );
}

export function IconeFerramenta({ className = "h-7 w-7" }: Props) {
  return (
    <svg {...base} className={className}>
      <path d="M14.5 6.5a3.8 3.8 0 0 0 5 5l-9 9a2.1 2.1 0 0 1-3-3l9-9a3.8 3.8 0 0 0-2-2Z" />
      <path d="m5 5 3 3" />
    </svg>
  );
}

export function IconeMedalha({ className = "h-7 w-7" }: Props) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="9" r="5.5" />
      <path d="m8.5 13.5-1.5 7 5-2.5 5 2.5-1.5-7" />
      <path d="M12 6.5v2.5l1.8 1" />
    </svg>
  );
}

export function IconeMais({ className = "h-7 w-7" }: Props) {
  return (
    <svg {...base} className={className}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export function IconeCelular({ className = "h-7 w-7" }: Props) {
  return (
    <svg {...base} className={className}>
      <rect x="6" y="2.5" width="12" height="19" rx="2.5" />
      <path d="M10.5 18.5h3" />
      <path d="M9.5 9.5v3M12 7.5v5M14.5 10.5v2" />
    </svg>
  );
}

export function IconeCasa({ className = "h-7 w-7" }: Props) {
  return (
    <svg {...base} className={className}>
      <path d="m4 10.5 8-6 8 6V20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9.5Z" />
      <path d="M9.5 21v-6h5v6" />
    </svg>
  );
}

export function IconePredio({ className = "h-7 w-7" }: Props) {
  return (
    <svg {...base} className={className}>
      <path d="M4 21V6a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v15" />
      <path d="M15 11h4a1 1 0 0 1 1 1v9" />
      <path d="M7.5 8.5h1.5M11 8.5h1.5M7.5 12h1.5M11 12h1.5M7.5 15.5h1.5M11 15.5h1.5" />
      <path d="M3 21h18" />
    </svg>
  );
}

export function IconeCampo({ className = "h-7 w-7" }: Props) {
  return (
    <svg {...base} className={className}>
      <path d="M3 20h18" />
      <path d="M12 20V9" />
      <path d="M12 9c0-2.5 1.8-4.5 4-4.5 0 2.5-1.8 4.5-4 4.5Z" />
      <path d="M12 12c0-2.5-1.8-4.5-4-4.5 0 2.5 1.8 4.5 4 4.5Z" />
    </svg>
  );
}

export function IconeWhatsApp({ className = "h-7 w-7" }: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884a9.82 9.82 0 016.988 2.898 9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

/** Mapa usado pelos dados: string → componente. */
export const ICONES = {
  painel: IconePainel,
  raio: IconeRaio,
  bateria: IconeBateria,
  carro: IconeCarro,
  escudo: IconeEscudo,
  check: IconeCheck,
  ferramenta: IconeFerramenta,
  medalha: IconeMedalha,
  mais: IconeMais,
  celular: IconeCelular,
  casa: IconeCasa,
  predio: IconePredio,
  campo: IconeCampo,
} as const;

export type NomeIcone = keyof typeof ICONES;
