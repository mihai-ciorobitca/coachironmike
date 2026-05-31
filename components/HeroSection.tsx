import Image from "next/image";

export function HeroSection() {
  return (
    <section className="mx-auto w-full max-w-[1900px] px-5 pb-6 lg:px-8">
      <div className="overflow-hidden rounded-[20px] p-5">
        <div className="relative aspect-[16/7] min-h-[320px] w-full overflow-hidden rounded-[20px] sm:min-h-[420px] lg:min-h-[520px]">
          <Image
            src="/images/hero.jpg"
            alt="Coach Iron Mike"
            fill
            priority
            className="object-cover object-center"
            sizes="(max-width: 1900px) 100vw, 1900px"
          />

          <div className="absolute inset-x-5 bottom-5 sm:inset-x-8 sm:bottom-8 lg:inset-x-10 lg:bottom-10">
            <div className="glass-panel max-w-2xl rounded-2xl px-[30px] py-[34px]">
              <h1 className="text-[clamp(2rem,4vw,3.125rem)] font-bold leading-tight tracking-tight text-[#111011]">
                Mehr Gesundheit. Mehr Performance.
              </h1>
              <p className="mt-3 text-base font-medium text-[#4b5563] sm:text-lg">
                Werde die beste Version deiner selbst – mit meiner Hilfe.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
