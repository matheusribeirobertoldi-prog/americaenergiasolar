import { WHATSAPP } from "@/lib/dados";
import { IconeWhatsApp } from "./Icones";

export default function WhatsAppFlutuante() {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a América Energia Solar no WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-xl shadow-black/50 transition hover:scale-105 hover:bg-[#1FAD52]"
    >
      <IconeWhatsApp className="h-8 w-8 text-white" />
    </a>
  );
}
