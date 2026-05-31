import Image from "next/image";
import Link from "next/link";

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

export function MasterclassAppPromoSection() {
  return (
    <section className="mx-auto w-full max-w-[1200px] px-6 py-16 lg:px-8">
      <h2 className="max-w-4xl text-[clamp(1.75rem,4vw,2.75rem)] font-bold leading-snug tracking-tight text-[#111011]">
        Revolutionäre Strategien zur Selbstoptimierung –{" "}
        <span className="font-serif font-medium italic">
          endlich für jeden zugänglich.
        </span>
      </h2>

      <div className="relative mt-10 min-h-[420px] overflow-hidden rounded-[20px] shadow-[0_12px_40px_rgba(0,0,0,0.1)] sm:min-h-[480px] lg:min-h-[560px]">
        <Image
          src="/images/masterclass.jpg"
          alt="Biohacking Masterclass App"
          fill
          className="object-cover object-center"
          sizes="(max-width: 1200px) 100vw, 1200px"
        />
        <div className="absolute inset-0 bg-black/15" />

        <div className="absolute inset-0 flex flex-col items-center justify-between p-6 sm:p-10">
          <div className="flex w-full max-w-md items-center gap-3 rounded-full bg-black/45 px-4 py-2.5 backdrop-blur-md sm:px-5">
            <div className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full">
              <Image
                src="/images/logo.png"
                alt=""
                fill
                className="object-cover"
                sizes="32px"
              />
            </div>
            <p className="text-sm font-semibold text-white sm:text-base">
              Biohacking Masterclass by Sasha Clean Fitness
            </p>
          </div>

          <div className="flex rounded-full bg-white/25 p-1 backdrop-blur-md">
            <span className="rounded-full bg-[#111011] px-5 py-2 text-sm font-semibold text-white sm:px-6">
              Mobile App
            </span>
            <span className="rounded-full px-5 py-2 text-sm font-semibold text-white/90 sm:px-6">
              Web App
            </span>
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-end">
        <Link
          href="#masterclass"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-bold text-white transition-colors hover:bg-accent-dark"
        >
          zur Masterclass
          <ArrowUpRightIcon />
        </Link>
      </div>
    </section>
  );
}
