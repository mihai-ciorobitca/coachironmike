"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type TabId = "essentials" | "praxis" | "bibliothek";

type TabContent = {
  label: string;
  headingBefore: string;
  headingItalic: string;
  headingAfter: string;
  description: string;
  stats: { value: string; label: string }[];
  image: string;
};

const tabContent: Record<TabId, TabContent> = {
  essentials: {
    label: "Essentials",
    headingBefore: "Die ",
    headingItalic: "Biohacking Essentials",
    headingAfter: " Module",
    description:
      "Die Grundlagen für jeden Biohacker: verständliche Einführungen in die wichtigsten Themen, von Schlaf und Ernährung bis hin zu Supplementierung und Recovery – ideal für den Einstieg.",
    stats: [
      { value: "12", label: "Module" },
      { value: "98", label: "Videos" },
      { value: "860", label: "Minuten" },
    ],
    image: "/images/masterclass.jpg",
  },
  praxis: {
    label: "Praxis",
    headingBefore: "Die ",
    headingItalic: "Biohacking Praxis",
    headingAfter: " Module",
    description:
      "Die Module in diesem Bereich konzentrieren sich auf die Aufklärung zu Medikamenten und Peptiden im Kontext natürlicher Maßnahmen wie Ernährung und Lifestyle.",
    stats: [
      { value: "15", label: "Module" },
      { value: "167", label: "Videos" },
      { value: "1484", label: "Minuten" },
    ],
    image: "/images/coaching.jpg",
  },
  bibliothek: {
    label: "Bibliothek",
    headingBefore: "Die ",
    headingItalic: "Biohacking Bibliothek",
    headingAfter: "",
    description:
      "Vertiefende Inhalte, Studienübersichten und Experteninterviews – alles an einem Ort, um dein Wissen Schritt für Schritt zu erweitern und dauerhaft anzuwenden.",
    stats: [
      { value: "20", label: "Module" },
      { value: "210", label: "Videos" },
      { value: "1920", label: "Minuten" },
    ],
    image: "/images/hero.jpg",
  },
};

const tabOrder: TabId[] = ["essentials", "praxis", "bibliothek"];

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

export function MasterclassContentsSection() {
  const [activeTab, setActiveTab] = useState<TabId>("praxis");
  const content = tabContent[activeTab];

  return (
    <section className="mx-auto w-full max-w-[900px] px-6 py-16 sm:py-20 lg:px-8">
      <div className="text-center">
        <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-bold leading-snug text-[#111011]">
          Werde dein eigener{" "}
          <span className="font-serif font-medium italic">Biohacking Experte!</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[#9ca3af] sm:text-base">
          Meine Biohacking Masterclass bündelt über 10 Jahre Coaching- und
          Praxiserfahrung – kompakt, strukturiert und zu einem unglaublichen Preis.
        </p>
      </div>

      <div className="mt-12 flex flex-col items-center text-center">
        <h3 className="text-lg font-bold text-[#111011] sm:text-xl">
          Masterclass Inhalte
        </h3>

        <div className="mt-4 inline-flex w-full max-w-md rounded-full bg-[#ececec] p-1 sm:w-auto">
          {tabOrder.map((tabId) => (
            <button
              key={tabId}
              type="button"
              onClick={() => setActiveTab(tabId)}
              className={`flex-1 rounded-full px-6 py-2.5 text-sm font-semibold transition-colors sm:flex-none sm:px-8 ${
                activeTab === tabId
                  ? "bg-[#8fa3b0] text-white"
                  : "text-[#6b7280] hover:text-[#111011]"
              }`}
            >
              {tabContent[tabId].label}
            </button>
          ))}
        </div>

        <div className="mt-10 w-full text-left">
          <h4 className="text-[clamp(1.5rem,3vw,2rem)] font-bold leading-snug text-[#111011]">
            {content.headingBefore}
            <span className="font-serif font-medium italic">{content.headingItalic}</span>
            {content.headingAfter}
          </h4>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#9ca3af] sm:text-base">
            {content.description}
          </p>

          <div className="mt-8 grid grid-cols-3 gap-4 sm:gap-8">
            {content.stats.map((stat) => (
              <div key={stat.label} className="text-left sm:text-center">
                <p className="text-3xl font-bold text-[#111011] sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-[#9ca3af]">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-[20px] shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
            <Image
              src={content.image}
              alt={content.headingItalic}
              fill
              className="object-cover"
              sizes="(max-width: 900px) 100vw, 900px"
            />
          </div>

          <div className="mt-10 flex justify-center">
            <Link
              href="#masterclass"
              className="inline-flex w-full max-w-md items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-bold lowercase text-white transition-colors hover:bg-accent-dark sm:w-auto sm:min-w-[280px]"
            >
              jetzt starten
              <ArrowUpRightIcon />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
