import { Link } from "@tanstack/react-router";
import { Instagram } from "lucide-react";
import { INSTAGRAM_URL, TIKTOK_URL, WHATSAPP_URL } from "@/lib/site";
import { TikTokIcon } from "@/components/site/TikTokIcon";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-sm font-bold tracking-[0.22em] uppercase">
            Elisa Piovan | fitness coach al femminile
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            © 2026 Elisa Piovan - P.IVA 05509730288
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
