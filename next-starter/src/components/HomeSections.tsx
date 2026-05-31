import Image from "next/image";
import Link from "next/link";

function PrimaryButton({
  children,
  href = "#",
}: {
  children: React.ReactNode;
  href?: string;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center rounded-[20px] bg-accent px-9 py-4 text-sm font-bold text-white transition-colors hover:bg-accent-dark"
    >
      {children}
    </Link>
  );
}

function DisabledBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-lg bg-disabled px-4 py-2 text-xs font-semibold text-[#374151]">
      {children}
    </span>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-3xl">
      {eyebrow && (
        <p
          className={`mb-3 text-sm font-semibold uppercase tracking-wider ${
            light ? "text-accent" : "text-accent"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-serif text-[clamp(2rem,5vw,3.5rem)] font-medium leading-tight ${
          light ? "text-white" : "text-[#111011]"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 text-base leading-relaxed sm:text-lg ${
            light ? "text-white/80" : "text-[#4b5563]"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

const stats = [
  { value: "500+", label: "Klienten betreut" },
  { value: "10+", label: "Jahre Erfahrung" },
  { value: "200+", label: "Videos" },
  { value: "50+", label: "Module" },
];

const healthCoachings = [
  {
    title: "Frauen Gesundheits Coaching",
    subtitle: "Gesund durch die Wechseljahre",
    description:
      "Ganzheitliche Unterstützung für Hormon- und Lifestyle-Optimierung, speziell auf die Bedürfnisse von Frauen abgestimmt.",
  },
  {
    title: "Fertilitäts Coaching",
    subtitle: "Der Weg zum Kinderwunsch",
    description:
      "Individuelles Coaching für die Verbesserung der Spermienqualität und -quantität – auf dem Weg zum Kinderwunsch.",
  },
  {
    title: "Weight Loss Coaching",
    subtitle: "Sag Tschüss zu Übergewicht",
    description:
      "Effektive Unterstützung beim nachhaltigen Abnehmen mit ärztlicher Begleitung und GLP-1-Rezeptor-Agonisten wie Ozempic.",
  },
  {
    title: "TRT Coaching",
    subtitle: "Hormonhaushalt im Gleichgewicht",
    description:
      "Testosteron-Therapie mit ärztlicher Begleitung, Lifestyle-Anpassungen und persönlichem Kontakt – sicher und legal.",
  },
];

const performanceCoachings = [
  {
    title: "Performance Coaching",
    subtitle: "Erreiche deinen Traumkörper",
    description:
      "Erreiche dein volles Potenzial im Bodybuilding oder Fettverlust mit individueller Betreuung, PED-Plänen und Blutbildanalysen.",
  },
  {
    title: "Weight Loss Coaching",
    subtitle: "Sag Tschüss zu Übergewicht",
    description:
      "Effektive Unterstützung beim nachhaltigen Abnehmen mit ärztlicher Begleitung und GLP-1-Rezeptor-Agonisten wie Ozempic.",
  },
];

const team = [
  {
    name: "Mike",
    role: "Gründer, Biohacker, Coach",
    description:
      "Mike begleitet seine Coaching Mitglieder in Gesundheits- sowie Performance Coachings",
  },
  {
    name: "Miri",
    role: "NPC Bikini & Fitness und Posingcoach",
    description: "Miri hilft Frauen dabei, fit, stark und selbstbewusst zu sein!",
  },
  {
    name: "Bene",
    role: "Personal Trainer & Bodybuilding Athlet",
    description: "Bene begleitet seine Kunden zum maximalen Muskelaufbau.",
  },
];

export function HomeSections() {
  return (
    <>
      <section className="mx-auto w-full max-w-[1200px] px-6 py-16 lg:px-8">
        <div className="text-center">
          <h2 className="text-[clamp(1.75rem,4vw,3.125rem)] font-bold leading-tight text-[#111011]">
            Aktuell sind alle Coaching-Plätze belegt!
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base text-[#4b5563] sm:text-lg">
            Aufgrund der hohen Nachfrage kann Mike aktuell keine neuen Coaching
            Mitglieder aufnehmen.
          </p>
          <h3 className="mx-auto mt-10 max-w-3xl text-xl font-bold text-[#111011] sm:text-2xl">
            Deshalb steckt mein 10+ Jahre Wissen jetzt in dieser Masterclass
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-base font-medium text-[#374151]">
            Meine Biohacking Masterclass bündelt über 10 Jahre Coaching- und
            Praxiserfahrung – kompakt, strukturiert und zu einem unglaublichen
            Preis.
          </p>
          <div className="mt-8">
            <PrimaryButton href="#masterclass">zur Masterclass</PrimaryButton>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-[clamp(2rem,5vw,3.5rem)] font-extrabold text-[#111011]">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-semibold text-[#4b5563] sm:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="masterclass" className="mx-auto w-full max-w-[1900px] px-5 py-8 lg:px-8">
        <div className="relative overflow-hidden rounded-[20px]">
          <div className="relative aspect-[16/9] min-h-[480px] w-full">
            <Image
              src="/images/masterclass.jpg"
              alt="Biohacking Masterclass"
              fill
              className="object-cover"
              sizes="(max-width: 1900px) 100vw, 1900px"
            />
            <div className="absolute inset-0 bg-black/45" />

            <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-12 lg:p-16">
              <p className="text-sm font-semibold uppercase tracking-wider text-accent">
                jetzt erhältlich
              </p>
              <p className="mt-2 text-sm font-medium text-white/70">by Iron Mike</p>
              <h2 className="mt-4 max-w-4xl font-serif text-[clamp(2rem,5vw,4.375rem)] font-medium leading-tight text-white">
                Die allumfassende Biohacking Masterclass.
              </h2>
              <p className="mt-5 max-w-xl text-lg font-semibold text-white">
                Die wirksamsten Biohacking-Strategien
              </p>
              <p className="text-lg text-white/80">— endlich für jeden zugänglich.</p>
              <p className="mt-6 text-sm font-semibold text-white/90">
                10.000+ aktive Mitglieder
              </p>
              <div className="mt-8">
                <PrimaryButton href="#masterclass">zur Masterclass</PrimaryButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1200px] px-6 py-20 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[20px]">
            <Image
              src="/images/coaching.jpg"
              alt="Coaching Angebot"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div>
            <div className="mb-6 flex flex-wrap gap-3">
              {["Gesundheit", "Performance", "Biohacking", "Privatstunden"].map(
                (tab) => (
                  <span
                    key={tab}
                    className="rounded-full border border-[#e5e7eb] bg-white px-4 py-2 text-sm font-semibold text-[#111011]"
                  >
                    {tab}
                  </span>
                ),
              )}
            </div>
            <SectionHeading
              title="Unser allumfassendes Coaching Angebot."
              description="Durch unser umfassendes Coachingangebot im Bereich Fitness, hormoneller Betreuung und Gesundheitsvorsorge nehmen wir uns jeder Ausgangssituation an und begleiten dich Schritt für Schritt beim Erreichen deiner Zielsetzung."
            />
            <Link
              href="#"
              className="mt-8 inline-block text-sm font-bold text-accent hover:underline"
            >
              Mehr erfahren
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1200px] px-6 py-12 lg:px-8">
        <div className="mb-8 flex items-center justify-between gap-4">
          <div>
            <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-bold text-[#111011]">
              Gesundheits Coachings.
            </h2>
            <p className="mt-2 text-lg font-medium text-[#4b5563]">
              Wir begleiten dich zu deinen gesundheitlichen Zielen
            </p>
          </div>
          <DisabledBadge>aktuell nicht verfügbar</DisabledBadge>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {healthCoachings.map((item) => (
            <article
              key={item.title}
              className="rounded-[20px] border border-[#ececec] bg-white p-6 transition-shadow hover:shadow-md"
            >
              <h3 className="text-lg font-bold text-[#111011]">{item.title}</h3>
              <p className="mt-1 text-sm font-semibold text-accent">{item.subtitle}</p>
              <p className="mt-3 text-sm leading-relaxed text-[#4b5563]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1200px] px-6 py-12 lg:px-8">
        <div className="mb-8 flex items-center justify-between gap-4">
          <div>
            <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-bold text-[#111011]">
              Performance Coachings.
            </h2>
            <p className="mt-2 text-lg font-medium text-[#4b5563]">
              Wir helfen dir auf deinem Weg zum Traumkörper
            </p>
          </div>
          <DisabledBadge>aktuell nicht verfügbar</DisabledBadge>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {performanceCoachings.map((item) => (
            <article
              key={item.title}
              className="rounded-[20px] border border-[#ececec] bg-white p-6 transition-shadow hover:shadow-md"
            >
              <h3 className="text-lg font-bold text-[#111011]">{item.title}</h3>
              <p className="mt-1 text-sm font-semibold text-accent">{item.subtitle}</p>
              <p className="mt-3 text-sm leading-relaxed text-[#4b5563]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1200px] px-6 py-20 lg:px-8">
        <div className="rounded-[20px] bg-white p-8 sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            Mehr Gesundheit. Mehr Performance.
          </p>
          <h2 className="mt-4 font-serif text-[clamp(2rem,4vw,3rem)] font-medium text-[#111011]">
            Das ist unsere Mission
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-[#4b5563]">
            <p>
              Unser Leitsatz spiegelt sich in allem wider, was wir tun – sowohl im
              Bereich der Gesundheits- als auch der leistungsorientierten Coachings.
              Wir glauben fest daran, dass es keine Grenzen gibt, nur Lösungen.
            </p>
            <p>
              Durch unsere ganzheitliche Herangehensweise, die medizinische Betreuung,
              Coaching und individuelle Trainingspläne kombiniert, sind wir in der Lage,
              dir in jeder Situation zu helfen.
            </p>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto w-full max-w-[1200px] px-6 py-12 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[20px]">
            <Image
              src="/images/mike.jpg"
              alt="Über Mike"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div>
            <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-bold text-[#111011]">
              Über Mike.
            </h2>
            <p className="mt-2 text-lg font-bold text-[#111011]">Gründer & Coach</p>
            <p className="mt-5 text-base leading-relaxed text-[#4b5563]">
              Mike ist leidenschaftlicher Personal Trainer und hat bereits hunderte von
              Personen jeden Alters, Geschlechts, Herkunft, Sportart und mit
              unterschiedlichen Zielen in seinem Coaching betreut. Er ist der größte
              Verfechter des Mindsets &quot;Grenzen gibt es nur im Kopf&quot; und setzt sich
              tagtäglich mit den Reallife Cheatcodes des Biohackings auseinander.
            </p>
            <Link
              href="#"
              className="mt-6 inline-block text-sm font-bold text-accent hover:underline"
            >
              Mehr erfahren
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1200px] px-6 py-16 lg:px-8">
        <div className="text-center">
          <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-medium text-[#111011]">
            Werde dein eigener Biohacking Experte!
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-[#4b5563]">
            Meine Biohacking Masterclass bündelt über 10 Jahre Coaching- und
            Praxiserfahrung – kompakt, strukturiert und zu einem unglaublichen Preis.
          </p>
          <div className="mt-8">
            <PrimaryButton href="#masterclass">jetzt starten</PrimaryButton>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1200px] px-6 py-12 lg:px-8">
        <h2 className="text-center text-2xl font-bold text-[#111011]">
          Die TEAMIRON Coaches
        </h2>
        <p className="mt-2 text-center text-lg font-medium text-[#4b5563]">
          Lerne uns kennen
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {team.map((member) => (
            <article
              key={member.name}
              className="rounded-[20px] border border-[#ececec] bg-white p-6 text-center"
            >
              <h3 className="text-xl font-bold text-[#111011]">{member.name}</h3>
              <p className="mt-1 text-sm font-semibold text-accent">{member.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-[#4b5563]">
                {member.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1200px] px-6 py-20 text-center lg:px-8">
        <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold text-[#111011]">
          No Limits. Only Solutions.
        </h2>
        <p className="mt-4 text-xl font-medium text-[#4b5563]">
          Bringe Veränderung in dein Leben.
        </p>
      </section>
    </>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-[#ececec] bg-white">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-8 px-6 py-12 sm:flex-row sm:justify-between lg:px-8">
        <div>
          <Image
            src="/images/logo.png"
            alt="Coach Iron Mike"
            width={40}
            height={40}
            className="h-10 w-10 rounded-full object-cover"
          />
          <p className="mt-4 text-sm font-semibold text-[#111011]">Folge mir</p>
        </div>
        <div>
          <p className="text-sm font-bold text-[#111011]">Hilfe & Informationen</p>
        </div>
        <div>
          <p className="text-sm font-bold text-[#111011]">Rechtliches</p>
          <ul className="mt-3 space-y-2 text-sm text-[#4b5563]">
            <li>
              <Link href="#" className="hover:text-accent">
                Impressum
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-accent">
                Datenschutz
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-accent">
                Widerruf
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
