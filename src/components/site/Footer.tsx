import { Link } from "@tanstack/react-router";
import { Instagram } from "lucide-react";
import { INSTAGRAM_URL, TIKTOK_URL, WHATSAPP_URL } from "@/lib/site";
import { TikTokIcon } from "@/components/site/TikTokIcon";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";

export function Footer() {
  return (
    <footer className="border-t border-border surface-base bg-background">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-sm font-bold tracking-[0.22em] uppercase">
            Elisa Piovan | fitness coach al femminile
          </p>
          <p className="mt-1 max-w-md text-xs leading-relaxed text-muted-foreground">
            Sito web{" "}
            <Link
              to="/4weblab"
              className="font-medium text-foreground underline underline-offset-2 transition-colors hover:text-muted-foreground"
            >
              creato e gestito da 4 Web Lab
            </Link>{" "}
            | Siti web per negozi, professionisti e aziende
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            © 2026 Elisa Piovan - P.IVA 05509730288
          </p>
          <p className="mt-1 flex flex-col gap-0.5 text-sm text-muted-foreground sm:flex-row sm:gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
            >
              +39 327 884 0255
            </a>
            <span className="hidden text-border sm:inline">|</span>
            <a
              href="mailto:elisapiovantrainer@gmail.com"
              className="transition-colors hover:text-foreground"
            >
              elisapiovantrainer@gmail.com
            </a>
          </p>
        </div>

        <nav aria-label="Note legali">
          <ul className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <li>
              <Link
                to="/privacy-policy"
                className="transition-colors hover:text-foreground"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="/cookie-policy"
                className="transition-colors hover:text-foreground"
              >
                Cookie Policy
              </Link>
            </li>
            <li>
              <Link
                to="/contatti"
                hash="collabora"
                className="transition-colors hover:text-foreground"
              >
                Collabora con noi
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram di Elisa Piovan Trainer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:text-foreground"
          >
            <Instagram className="h-4 w-4" />
          </a>
          <a
            href={TIKTOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok di Elisa Piovan Trainer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:text-foreground"
          >
            <TikTokIcon className="h-4 w-4" />
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Scrivi su WhatsApp"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:text-foreground"
          >
            <WhatsAppIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
