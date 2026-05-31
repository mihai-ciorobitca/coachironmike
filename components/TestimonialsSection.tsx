import Image from "next/image";

const testimonials = [
  {
    title: "Mini Masterclass - Peptide",
    body: "Das Peptide Modul war super informativ und leicht verständlich. Ich habe endlich verstanden, wie Dosierung, Zyklen und Qualität zusammenhängen. Absolute Empfehlung für jeden, der sich ernsthaft mit dem Thema beschäftigen will.",
  },
  {
    title: "Mini Masterclass - Hormone",
    body: "Endlich verstehe ich meine Blutwerte und weiß, worauf ich achten muss. Die Inhalte sind klar strukturiert und direkt umsetzbar – genau das, was ich gesucht habe.",
  },
  {
    title: "Mini Masterclass - TRT",
    body: "Sehr fundiert erklärt, ohne unnötige Komplexität. Besonders die praktischen Beispiele und Checklisten haben mir enorm weitergeholfen.",
  },
  {
    title: "Mini Masterclass - Biohacking",
    body: "Über 10 Jahre Erfahrung kompakt auf den Punkt gebracht. Die Masterclass lohnt sich allein schon wegen der klaren Prioritäten und Strategien.",
  },
  {
    title: "Mini Masterclass - Ernährung",
    body: "Praxisnah, verständlich und ohne dogmatische Ansätze. Ich konnte mehrere Empfehlungen direkt in meinen Alltag übernehmen.",
  },
];

const categories = [
  {
    label: "Gesundheit",
    image: "/images/hero.jpg",
    alt: "Gesundheit",
  },
  {
    label: "Performance",
    image: "/images/mike.jpg",
    alt: "Performance",
  },
  {
    label: "Biohacking",
    image: "/images/masterclass.jpg",
    alt: "Biohacking",
  },
  {
    label: "Privatstunden",
    image: "/images/coaching.jpg",
    alt: "Privatstunden",
  },
];

function BlackStarIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="currentColor"
      aria-hidden
      className="text-[#111011]"
    >
      <path d="M8 1.333L9.813 5.787L14.667 6.32L11.067 9.413L12.053 14.213L8 11.987L3.947 14.213L4.933 9.413L1.333 6.32L6.187 5.787L8 1.333Z" />
    </svg>
  );
}

function TestimonialCard({
  title,
  body,
  tilt = "left",
}: {
  title: string;
  body: string;
  tilt?: "left" | "right";
}) {
  return (
    <article
      className={`flex w-[min(100vw-3rem,380px)] shrink-0 flex-col rounded-2xl bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.08)] sm:w-[400px] sm:p-8 ${
        tilt === "left" ? "-rotate-2" : "rotate-2"
      }`}
    >
      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <BlackStarIcon key={index} />
        ))}
      </div>

      <h3 className="mt-4 font-serif text-xl italic text-[#c73e6f] sm:text-2xl">
        {title}
      </h3>

      <p className="mt-4 flex-1 text-sm leading-relaxed text-[#111011] sm:text-[0.95rem]">
        {body}
      </p>

      <p className="mt-6 text-right font-serif text-sm italic text-[#9ca3af]">
        — Masterclass Mitglied
      </p>
    </article>
  );
}

export function TestimonialsSection() {
  const loopItems = [...testimonials, ...testimonials];

  return (
    <section className="overflow-hidden bg-[#f5f5f5] py-16 sm:py-20">
      <div className="relative">
        <div className="testimonial-marquee flex w-max gap-6 px-6 sm:gap-8 sm:px-8">
          {loopItems.map((testimonial, index) => (
            <TestimonialCard
              key={`${testimonial.title}-${index}`}
              title={testimonial.title}
              body={testimonial.body}
              tilt={index % 2 === 0 ? "left" : "right"}
            />
          ))}
        </div>
      </div>

      <div className="mx-auto mt-16 flex max-w-[900px] flex-wrap items-start justify-center gap-10 px-6 sm:gap-16 lg:gap-20">
        {categories.map((category) => (
          <div
            key={category.label}
            className="flex w-[120px] flex-col items-center text-center sm:w-[140px]"
          >
            <div className="relative h-24 w-24 overflow-hidden rounded-full sm:h-28 sm:w-28">
              <Image
                src={category.image}
                alt={category.alt}
                fill
                className="object-cover"
                sizes="112px"
              />
            </div>
            <p className="mt-4 text-sm font-semibold text-[#111011] sm:text-base">
              {category.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
