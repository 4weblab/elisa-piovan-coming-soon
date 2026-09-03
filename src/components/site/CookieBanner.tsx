import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Cookie, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const CONSENT_KEY = "ep-cookie-consent";

export function CookieBanner() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const accepted = localStorage.getItem(CONSENT_KEY);
      if (accepted !== "true") {
        setVisible(true);
      }
    } catch {
      // localStorage non disponibile
      setVisible(true);
    }
  }, []);

  const accept = () => {
    try {
      localStorage.setItem(CONSENT_KEY, "true");
    } catch {
      // ignora errori storage
    }
    setVisible(false);
  };

  // Evita il rendering SSR per non generare mismatch di idratazione
  if (!mounted) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 40, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          role="region"
          aria-label="Informativa cookie"
          className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 p-4 shadow-lg backdrop-blur-md sm:p-6"
        >
          <div className="mx-auto flex max-w-6xl flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3 sm:items-center">
              <div className="hidden rounded-full bg-secondary p-2 sm:inline-flex">
                <Cookie className="h-4 w-4 text-muted-foreground" />
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Utilizziamo solo cookie tecnici necessari al funzionamento del sito.
                Non usiamo cookie di profilazione o di terze parti.{" "}
                <Link
                  to="/cookie-policy"
                  className="font-medium text-foreground underline underline-offset-4 transition-colors hover:text-muted-foreground"
                  onClick={() => setVisible(false)}
                >
                  Cookie Policy
                </Link>
              </p>
            </div>
            <div className="flex w-full flex-shrink-0 items-center gap-3 sm:w-auto">
              <Button
                size="sm"
                onClick={accept}
                className="w-full sm:w-auto"
              >
                Ho capito
              </Button>
              <button
                onClick={accept}
                aria-label="Chiudi informativa cookie"
                className="inline-flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
