import Image from "next/image";

export function HeroSection() {
  return (
    <section className="mx-auto w-full max-w-[1900px] px-4 pb-6 sm:px-5 lg:px-8">
      <div className="rounded-[20px] p-3 sm:p-5">
        <div className="relative aspect-[4/5] w-full min-h-[420px] rounded-[20px] sm:aspect-[16/10] sm:min-h-[380px] lg:aspect-[16/7] lg:min-h-[520px]">
          <div className="absolute inset-0 overflow-hidden rounded-[20px]">
            <Image
              src="/images/hero.jpg"
              alt="Sasha Clean Fitness"
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 1900px) 100vw, 1900px"
            />
          </div>

          <div className="absolute inset-0 flex items-end justify-center rounded-[20px]">
            <div className="relative mb-[10px] w-[90%] sm:mb-8 sm:w-[58%] sm:max-w-[640px] lg:mb-10 lg:max-w-[720px]">
              <div
                aria-hidden
                className="hero-glass-panel absolute inset-0 rounded-[20px] sm:rounded-2xl"
              />
              <div className="relative w-full min-w-0 px-7 py-8 text-center sm:px-8 sm:py-8 sm:text-left lg:px-[30px] lg:py-[34px]">
                <h1 className="text-[clamp(1.625rem,5.5vw,2.5rem)] font-bold leading-[1.2] tracking-tight text-[#111011] lg:text-[clamp(1.75rem,2.2vw,2.5rem)]">
                  <span className="block lg:inline">Mehr Gesundheit.</span>{" "}
                  <span className="block lg:inline lg:font-serif lg:font-medium lg:italic">
                    Mehr Performance.
                  </span>
                </h1>
                <p className="mx-auto mt-3 max-w-md text-[15px] font-medium leading-relaxed text-[#111011] sm:mx-0 sm:max-w-none sm:text-lg sm:text-[#4b5563]">
                  Werde die beste Version deiner selbst – mit meiner Hilfe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
