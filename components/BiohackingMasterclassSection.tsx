import Image from "next/image";
import Link from "next/link";

const modules = [
  {
    eyebrow: "MINI MASTERCLASS",
    title: "PEPTIDE",
    barColor: "#1e4a7a",
    background: "bg-[linear-gradient(135deg,#1e3a5f_0%,#3b82c4_100%)]",
  },
  {
    eyebrow: "BIOHACKING",
    title: "ESSENTIALS",
    barColor: "#22d3ee",
    background: "bg-[linear-gradient(135deg,#1f2937_0%,#4b5563_100%)]",
    image: "/images/mike.jpg",
  },
  {
    eyebrow: "BIOHACKING",
    title: "PRAXIS",
    barColor: "#0f766e",
    background: "bg-[linear-gradient(135deg,#134e4a_0%,#2dd4bf_100%)]",
  },
  {
    eyebrow: "BIOHACKING",
    title: "BIBLIOTHEK",
    barColor: "#5b21b6",
    background: "bg-[linear-gradient(135deg,#4c1d95_0%,#7c3aed_100%)]",
    image: "/images/masterclass.jpg",
  },
];

function ModuleCard({
  eyebrow,
  title,
  barColor,
  background,
  image,
}: (typeof modules)[number]) {
  return (
    <article className="relative aspect-[16/10] overflow-hidden rounded-[16px]">
      {image ? (
        <Image src={image} alt={title} fill className="object-cover" sizes="(max-width: 768px) 50vw, 400px" />
      ) : (
        <div className={`absolute inset-0 ${background}`} />
      )}
      <div className="absolute inset-0 bg-black/35" />
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
        <p className="text-[10px] font-bold tracking-[0.2em] text-white sm:text-xs">
          {eyebrow}
        </p>
        <p className="mt-1 text-xl font-bold tracking-[0.15em] text-white sm:text-2xl">
          {title}
        </p>
      </div>
      <div
        className="absolute inset-x-0 bottom-0 h-2 sm:h-2.5"
        style={{ backgroundColor: barColor }}
      />
    </article>
  );
}

function ArrowUpRightIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden
      className="shrink-0"
    >
      <path
        d="M3.5 10.5L10.5 3.5M10.5 3.5H5.25M10.5 3.5V8.75"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function BiohackingMasterclassSection() {
  return (
    <section className="mx-auto w-full max-w-[1200px] px-6 py-12 lg:px-8">
      <div className="rounded-[24px] bg-[#eef2f7] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.06)] sm:p-10 lg:p-12">
        <span className="inline-block rounded-full bg-accent px-4 py-1.5 text-sm font-semibold lowercase text-white">
          jetzt erhältlich
        </span>

        <h2 className="mt-6 max-w-3xl text-[clamp(1.75rem,4vw,2.75rem)] font-bold leading-snug tracking-tight text-[#111011]">
          Die{" "}
          <span className="font-serif font-medium italic">wirksamsten</span> Biohacking
          Strategien – jetzt für{" "}
          <span className="font-serif font-medium italic">jeden verständlich</span>{" "}
          gemacht.
        </h2>

        <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#4b5563] sm:text-lg">
          Ob Einsteiger, Fortgeschrittene oder bereits erfahrene Biohacker – wir haben
          sichergestellt, dass jeder den vollen Umfang der Biohacking Masterclass ideal
          nutzen kann.
        </p>

        <Link
          href="#masterclass"
          className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-bold lowercase text-white transition-colors hover:bg-accent-dark"
        >
          jetzt starten
          <ArrowUpRightIcon />
        </Link>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-5">
          {modules.map((module) => (
            <ModuleCard key={module.title} {...module} />
          ))}
        </div>
      </div>
    </section>
  );
}
