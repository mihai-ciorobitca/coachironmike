import {
  CoachingCard,
  CoachingSectionHeader,
  type CoachingItem,
} from "@/components/coaching-ui";

export function CoachingGridSection({
  title,
  subtitle,
  items,
  showBadge = true,
}: {
  title: string;
  subtitle: string;
  items: CoachingItem[];
  showBadge?: boolean;
}) {
  return (
    <section className="mx-auto w-full max-w-[1200px] px-6 py-12 sm:py-16 lg:px-8">
      <CoachingSectionHeader
        title={title}
        subtitle={subtitle}
        showBadge={showBadge}
      />

      <div className="mt-10 grid gap-8 sm:grid-cols-2">
        {items.map((item) => (
          <CoachingCard key={item.overlayTitle} item={item} className="w-full" />
        ))}
      </div>
    </section>
  );
}
