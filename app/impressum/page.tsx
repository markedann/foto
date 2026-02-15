import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum - FotoProfi",
};

export default function Impressum() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-5 py-16">
        <Link
          href="/"
          className="mb-10 inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-bold text-primary shadow-sm transition-all hover:border-primary/30 hover:shadow-md"
        >
          <ArrowLeft className="h-4 w-4" />
          Zurueck zur Startseite
        </Link>

        <div className="rounded-2xl border border-border bg-card p-8 shadow-lg md:p-12">
          <h1 className="mb-8 font-display text-4xl font-extrabold tracking-tight text-foreground">
            Impressum
          </h1>

          <div className="space-y-6 leading-relaxed text-muted-foreground">
            <section>
              <h2 className="mb-2 text-lg font-bold text-foreground">
                Angaben gemaess 5 TMG
              </h2>
              <p>
                FotoProfi<br />
                Musterstrasse 1<br />
                12345 Musterstadt<br />
                Deutschland
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-lg font-bold text-foreground">Kontakt</h2>
              <p>
                E-Mail: kontakt@fotoprofi.de
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-lg font-bold text-foreground">
                Verantwortlich fuer den Inhalt nach 55 Abs. 2 RStV
              </h2>
              <p>
                Max Mustermann<br />
                Musterstrasse 1<br />
                12345 Musterstadt
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-lg font-bold text-foreground">
                Haftungsausschluss
              </h2>
              <h3 className="mb-1 font-semibold text-foreground/80">
                Haftung fuer Inhalte
              </h3>
              <p className="mb-3 text-sm">
                Die Inhalte unserer Seiten wurden mit groesster Sorgfalt erstellt.
                Fuer die Richtigkeit, Vollstaendigkeit und Aktualitaet der Inhalte
                koennen wir jedoch keine Gewaehr uebernehmen. Als Diensteanbieter
                sind wir gemaess 7 Abs.1 TMG fuer eigene Inhalte auf diesen Seiten
                nach den allgemeinen Gesetzen verantwortlich.
              </p>
              <h3 className="mb-1 font-semibold text-foreground/80">
                Haftung fuer Links
              </h3>
              <p className="text-sm">
                Unser Angebot enthaelt Links zu externen Webseiten Dritter, auf
                deren Inhalte wir keinen Einfluss haben. Deshalb koennen wir fuer
                diese fremden Inhalte auch keine Gewaehr uebernehmen.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-lg font-bold text-foreground">Urheberrecht</h2>
              <p className="text-sm">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
                diesen Seiten unterliegen dem deutschen Urheberrecht. Die
                Vervielfaeltigung, Bearbeitung, Verbreitung und jede Art der
                Verwertung ausserhalb der Grenzen des Urheberrechtes beduerfen der
                schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
