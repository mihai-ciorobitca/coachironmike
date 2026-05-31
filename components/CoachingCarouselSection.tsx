import {
  CoachingCardsCarousel,
} from "@/components/CoachingCardsCarousel";
import {
  CoachingSectionHeader,
  type CoachingItem,
} from "@/components/coaching-ui";

export function CoachingCarouselSection({
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

      <div className="mt-10">
        <CoachingCardsCarousel items={items} />
      </div>
    </section>
  );
}
