import Image from "next/image";

export type CoachingItem = {
  image: string;
  overlayTitle: string;
  title: string;
  description: string;
};

export function CoachingSectionHeader({
  title,
  subtitle,
  showBadge = true,
}: {
  title: string;
  subtitle: string;
  showBadge?: boolean;
}) {
  return (
    <div>
      {showBadge && (
        <div className="mb-8 text-center">
          <span className="inline-block rounded-lg bg-disabled px-6 py-3 text-sm font-semibold text-[#374151]">
            aktuell nicht verfügbar
          </span>
        </div>
      )}

      <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-bold text-[#111011]">
        {title}
      </h2>
      <p className="mt-2 text-lg font-medium text-[#9ca3af]">{subtitle}</p>
    </div>
  );
}

export function CoachingCard({
  item,
  className = "",
}: {
  item: CoachingItem;
  className?: string;
}) {
  return (
    <article className={className}>
      <div className="relative aspect-[4/3] overflow-hidden rounded-[20px]">
        <Image
          src={item.image}
          alt={item.overlayTitle}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_45%,rgba(0,0,0,0.65)_100%)]" />
        <p className="absolute inset-x-0 bottom-0 p-5 text-lg font-bold leading-snug text-white sm:p-6 sm:text-xl">
          {item.overlayTitle}
        </p>
      </div>
      <h3 className="mt-5 text-lg font-bold text-[#111011] sm:text-xl">
        {item.title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-[#9ca3af] sm:text-base">
        {item.description}
      </p>
    </article>
  );
}
