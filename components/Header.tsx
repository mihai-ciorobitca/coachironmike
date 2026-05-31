"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useId, useState } from "react";

const MENU_DURATION_MS = 550;

const navLinks = [
  {
    label: "Coachings",
    href: "#coachings",
    dropdown: true,
    subLinks: [
      { label: "Gesundheits Coachings", href: "#gesundheits-coachings" },
      { label: "Performance Coachings", href: "#performance-coachings" },
    ],
  },
  { label: "Biohacking Masterclass", href: "#masterclass", accent: true },
  { label: "Biohacking Calls", href: "#calls" },
  { label: "SCF App", href: "#app" },
  { label: "Sasha", href: "#about" },
];

function MenuIcon({ open }: { open: boolean }) {
  const barClass =
    "block h-0.5 w-6 rounded-full bg-[#0b0c0e] transition-all duration-[550ms] ease-[cubic-bezier(0.32,0.72,0,1)]";

  return (
    <span className="relative flex h-[18px] w-6 flex-col justify-between" aria-hidden>
      <span className={`${barClass} ${open ? "translate-y-[8px] rotate-45" : ""}`} />
      <span className={`${barClass} ${open ? "scale-x-0 opacity-0" : ""}`} />
      <span className={`${barClass} ${open ? "-translate-y-[8px] -rotate-45" : ""}`} />
    </span>
  );
}

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);
  const [coachingsOpen, setCoachingsOpen] = useState(false);
  const menuId = useId();

  const closeMenu = useCallback(() => {
    setIsAnimated(false);
    setIsOpen(false);
    setCoachingsOpen(false);
  }, []);

  const toggleMenu = () => {
    if (isOpen) {
      closeMenu();
      return;
    }
    setCoachingsOpen(false);
    setIsOpen(true);
  };

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      const frame = requestAnimationFrame(() => {
        requestAnimationFrame(() => setIsAnimated(true));
      });
      return () => cancelAnimationFrame(frame);
    }

    setIsAnimated(false);
    const timeout = window.setTimeout(() => setIsVisible(false), MENU_DURATION_MS);
    return () => window.clearTimeout(timeout);
  }, [isOpen]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, closeMenu]);

  return (
    <>
      <header
        className={`relative z-[60] mx-auto flex w-full max-w-[1900px] flex-row items-center justify-between px-6 py-5 transition-colors duration-300 lg:px-8 ${
          isVisible ? "max-md:bg-[#faf8f7]" : ""
        }`}
      >
        <Link href="/" className="shrink-0" onClick={closeMenu}>
          <Image
            src="/images/logo.png"
            alt="Sasha Clean Fitness"
            width={48}
            height={48}
            className="h-12 w-12 rounded-full object-cover"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`text-[15px] font-semibold transition-colors hover:opacity-80 ${
                link.accent ? "text-accent" : "text-[#0b0c0e]"
              }`}
            >
              <span className="inline-flex items-center gap-1">
                {link.label}
                {link.dropdown && (
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
                    <path
                      d="M3 4.5L6 7.5L9 4.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </span>
            </Link>
          ))}
        </nav>

        <div className="md:hidden">
          <button
            type="button"
            aria-label={isAnimated ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={isOpen}
            aria-controls={menuId}
            onClick={toggleMenu}
            className="relative z-[70] rounded-lg p-2 text-[#0b0c0e] transition-colors hover:bg-black/5"
          >
            <MenuIcon open={isAnimated} />
          </button>
        </div>
      </header>

      {isVisible && (
        <div
          id={menuId}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation"
          className={`mobile-nav-fullscreen fixed inset-0 z-50 flex flex-col bg-[#faf8f7] pt-[88px] md:hidden ${
            isAnimated ? "mobile-nav-fullscreen-open" : ""
          }`}
        >
          <nav className="flex flex-1 flex-col overflow-y-auto px-6 pb-8 sm:px-10 sm:pb-10">
            {navLinks.map((link, index) => {
              const itemClass = `transition-all duration-500 ease-out ${
                isAnimated ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0"
              }`;

              if (link.dropdown && link.subLinks) {
                return (
                  <div
                    key={link.label}
                    className={`border-b border-black/5 ${itemClass}`}
                    style={{
                      transitionDelay: isAnimated ? `${index * 60 + 220}ms` : "0ms",
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => setCoachingsOpen((open) => !open)}
                      className="flex w-full items-center justify-between py-5 text-left text-[clamp(1.5rem,6vw,2.25rem)] font-bold leading-tight text-[#0b0c0e]"
                    >
                      {link.label}
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 12 12"
                        fill="none"
                        aria-hidden
                        className={`shrink-0 transition-transform duration-300 ease-out ${
                          coachingsOpen ? "rotate-180" : ""
                        }`}
                      >
                        <path
                          d="M3 4.5L6 7.5L9 4.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                    <div
                      className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                        coachingsOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <ul className="space-y-1 pb-5 pl-1">
                          {link.subLinks.map((subLink) => (
                            <li key={subLink.label}>
                              <Link
                                href={subLink.href}
                                onClick={closeMenu}
                                className="block rounded-lg py-3 text-[clamp(1.05rem,4vw,1.25rem)] font-medium text-[#444444] transition-colors hover:bg-black/[0.03] hover:text-[#0b0c0e]"
                              >
                                {subLink.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={closeMenu}
                  className={`block border-b border-black/5 py-5 text-[clamp(1.5rem,6vw,2.25rem)] font-bold leading-tight transition-colors hover:opacity-80 ${itemClass} ${
                    link.accent ? "text-accent" : "text-[#0b0c0e]"
                  }`}
                  style={{
                    transitionDelay: isAnimated ? `${index * 60 + 220}ms` : "0ms",
                  }}
                >
                  {link.label}
                </Link>
              );
            })}

            <div
              className={`mt-auto pt-10 transition-all duration-500 ease-out ${
                isAnimated ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0"
              }`}
              style={{
                transitionDelay: isAnimated ? `${navLinks.length * 60 + 220}ms` : "0ms",
              }}
            >
              <p className="text-sm font-semibold text-[#888888]">Sasha Clean Fitness</p>
              <p className="mt-1 text-base font-medium text-[#0b0c0e]">
                Mehr Gesundheit. Mehr Performance.
              </p>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
