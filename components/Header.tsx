import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Coachings", href: "#", dropdown: true },
  { label: "Biohacking Masterclass", href: "#masterclass", accent: true },
  { label: "Biohacking Calls", href: "#calls" },
  { label: "IRONLABS App", href: "#app" },
  { label: "Mike", href: "#about" },
];

export function Header() {
  return (
    <header className="mx-auto flex w-full max-w-[1900px] items-center justify-between px-6 py-5 lg:px-8">
      <Link href="/" className="shrink-0">
        <Image
          src="/images/logo.png"
          alt="Coach Iron Mike"
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
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  aria-hidden
                >
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
          aria-label="Menü öffnen"
          className="rounded-lg p-2 text-[#0b0c0e]"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M4 7H20M4 12H20M4 17H20"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
