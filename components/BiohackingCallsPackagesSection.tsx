"use client";

import Link from "next/link";
import { CoachingCardsCarousel } from "@/components/CoachingCardsCarousel";
import type { CoachingItem } from "@/components/coaching-ui";

const biohackingCallPackages: CoachingItem[] = [
  {
    image: "/images/hero.jpg",
    overlayTitle: "Libido steigern",
    title: "Erlange ein neues Lebensgefühl",
    description: "Drei Video Calls für die Förderung deiner Libido.",
  },
  {
    image: "/images/coaching.jpg",
    overlayTitle: "Hilfe bei Verletzungen",
    title: "Wege zu einer schnellen Heilung",
    description: "Drei Video Calls für eine schnelle Genesung.",
  },
  {
    image: "/images/masterclass.jpg",
    overlayTitle: "Verbesserung der Schlafqualität",
    title: "Finde neue Perspektiven",
    description: "Drei Video Calls zur Optimierung deiner Schlafqualität.",
  },
  {
    image: "/images/mike.jpg",
    overlayTitle: "Mehr mentale Leistungsfähigkeit",
    title: "Kognitive Leistung auf einem neuen Level",
    description:
      "Drei Video Calls zur gezielten Optimierung deiner mentalen Leistungsfähigkeit.",
  },
  {
    image: "/images/hero.jpg",
    overlayTitle: "Förderung des Immunsystems",
    title: "Gesund und stark durch den Alltag",
    description: "Drei Video Calls zur Optimierung deines Immunsystems.",
  },
  {
    image: "/images/coaching.jpg",
    overlayTitle: "Gesunde Haut",
    title: "Finde neue Perspektiven",
    description:
      "Drei Video Calls zur Förderung eines langanhaltend gesunden Hautbildes.",
  },
  {
    image: "/images/masterclass.jpg",
    overlayTitle: "Hilfe bei Verletzungen",
    title: "Dein Weg zu schneller Heilung",
    description:
      "Vier Video Calls zur ganzheitlichen Betreuung bei chronischen Krankheiten und komplexen gesundheitlichen Problemen.",
  },
  {
    image: "/images/mike.jpg",
    overlayTitle: "Bekämpfung des Haarausfalls",
    title: "Die Lösung bei Haarausfall",
    description:
      "Drei Video Calls zur Analyse und Lösung von Haarausfall-Problemen — von der Anamnese bis zur langfristigen Ergebnisanalyse.",
  },
];

export function BiohackingCallsPackagesSection() {
  return (
    <section className="mx-auto w-full max-w-[1900px] py-12 sm:py-16">
      <div className="px-6 lg:px-8">
        <div className="mb-8 text-center">
          <span className="inline-block rounded-lg bg-disabled px-6 py-3 text-sm font-semibold text-[#374151]">
            aktuell nicht verfügbar
          </span>
        </div>

        <p className="max-w-3xl text-base leading-relaxed text-[#111011] sm:text-lg">
          In den Biohacking Call Paketen geht Mike mit dir deine Probleme durch und
          liefert dir individuelle Lösungsansätze durch Biohacking jeglicher Art.
        </p>

        <Link
          href="#"
          className="mt-6 inline-flex items-center gap-2 text-base text-[#9ca3af] transition-colors hover:text-[#6b7280]"
        >
          Mehr erfahren
          <span aria-hidden>→</span>
        </Link>
      </div>

      <div className="mt-10">
        <CoachingCardsCarousel items={biohackingCallPackages} />
      </div>
    </section>
  );
}
