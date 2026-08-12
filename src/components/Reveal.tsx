"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

const SEM_OBSERVER =
  typeof window !== "undefined" && typeof IntersectionObserver === "undefined";

/**
 * Anima o conteúdo ao entrar na viewport.
 * A animação é aprimoramento progressivo: sem JS o conteúdo já aparece
 * (ver .js .reveal em globals.css), e há fallback por timeout caso o
 * observer nunca dispare.
 */
export default function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visivel, setVisivel] = useState(SEM_OBSERVER);

  useEffect(() => {
    const el = ref.current;
    if (!el || SEM_OBSERVER) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisivel(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );

    observer.observe(el);

    // Rede de segurança: melhor perder a animação do que esconder a seção.
    const fallback = window.setTimeout(() => setVisivel(true), 2500);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${visivel ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
