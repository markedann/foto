import {
  Camera,
  Download,
  Image as ImageIcon,
  Lock,
  Sparkles,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "KI-Optimierung",
    description:
      "Professionelle Beleuchtung, Hintergrund und Koerperposition werden automatisch angepasst.",
  },
  {
    icon: Camera,
    title: "Biometrisch korrekt",
    description:
      "Erfuellt alle deutschen Anforderungen fuer Reisepass, Personalausweis und Fuehrerschein.",
  },
  {
    icon: Zap,
    title: "Blitzschnell",
    description:
      "Ergebnis in weniger als 30 Sekunden. Kein Termin beim Fotografen noetig.",
  },
  {
    icon: Download,
    title: "Sofort herunterladen",
    description:
      "Laden Sie Ihr fertiges Foto in hoher Aufloesung direkt auf Ihr Geraet herunter.",
  },
  {
    icon: Lock,
    title: "Datenschutz garantiert",
    description:
      "Ihre Fotos werden nicht gespeichert und sofort nach der Verarbeitung geloescht.",
  },
  {
    icon: ImageIcon,
    title: "Vielseitig einsetzbar",
    description:
      "Perfekt fuer Reisepass, Personalausweis, Fuehrerschein, Visa und Bewerbungsfotos.",
  },
];

export function Features() {
  return (
    <section id="features" className="relative px-4 py-14 sm:px-5 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 text-center sm:mb-14">
          <span className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary sm:mb-4">
            Vorteile
          </span>
          <h2 className="text-balance font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl lg:text-5xl">
            Warum FotoProfi?
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm text-muted-foreground sm:mt-4 sm:text-base">
            Alles was du fuer das perfekte Dokumentenfoto brauchst -- kostenlos und sofort.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5"
            >
              {/* Hover glow */}
              <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/5 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-primary/15">
                  <feature.icon className="h-5 w-5" />
                </div>
                <h3 className="mb-2 font-display text-base font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
