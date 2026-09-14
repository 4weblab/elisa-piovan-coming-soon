import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logoAsset from "@/assets/elisa-piovan-logo-header.webp.asset.json";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/chi-sono", label: "Chi Sono" },
  { to: "/servizi-ep-team", label: "Servizi Team EP" },
  { to: "/ginoide-androide-test", label: "Quiz" },
  { to: "/partnership", label: "Partnership" },
  { to: "/contatti", label: "Contatti" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="flex items-center gap-3 font-display text-sm font-bold tracking-[0.22em] uppercase"
        >
          <img
            src={logoAsset.url}
            alt="Logo Elisa Piovan Personal Trainer"
            width={240}
            height={240}
            className="h-12 w-auto"
          />
          Elisa Piovan
        </Link>

        <nav aria-label="Navigazione principale" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  activeOptions={{ exact: link.to === "/" }}
                  activeProps={{ className: "text-foreground" }}
                  inactiveProps={{ className: "text-muted-foreground" }}
                  className="relative text-sm transition-colors duration-300 after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-foreground after:transition-all after:duration-300 hover:text-foreground hover:after:w-full data-[status=active]:after:w-full"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Chiudi menu" : "Apri menu"}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:bg-secondary md:hidden"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            aria-label="Navigazione mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-border surface-base bg-background md:hidden"
          >
            <ul className="mx-auto flex max-w-6xl flex-col px-6 py-4">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    onClick={() => setOpen(false)}
                    activeOptions={{ exact: link.to === "/" }}
                    activeProps={{ className: "text-foreground" }}
                    inactiveProps={{ className: "text-muted-foreground" }}
                    className="block py-3 text-sm transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
