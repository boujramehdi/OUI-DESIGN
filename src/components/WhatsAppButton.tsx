import Link from "next/link";
import { whatsappHref } from "@/lib/site";

export function WhatsAppButton() {
  return (
    <Link
      href={whatsappHref()}
      target="_blank"
      aria-label="Contacter Ouidesign sur WhatsApp"
      className="fixed bottom-36 right-5 z-40 inline-flex h-14 items-center justify-center border border-bronze bg-charcoal px-5 text-xs uppercase text-ivory shadow-bronze transition hover:bg-bronze hover:text-charcoal sm:bottom-5"
    >
      WhatsApp
    </Link>
  );
}
