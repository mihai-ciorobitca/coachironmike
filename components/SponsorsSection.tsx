type Sponsor = {
  id: string;
  caption: string;
  logo: React.ReactNode;
};

function DoctrinusLogo() {
  return (
    <p className="text-3xl font-bold tracking-tight text-[#1e4a8a] sm:text-4xl">
      Doctrinus
      <sup className="ml-0.5 text-lg font-semibold">1</sup>
    </p>
  );
}

function EsnLogo() {
  return (
    <p className="text-4xl font-black italic tracking-tighter text-[#111011] sm:text-5xl">
      ESN
    </p>
  );
}

function MoreLogo() {
  return (
    <p className="font-serif text-4xl font-medium italic text-[#111011] sm:text-5xl">
      More
    </p>
  );
}

function LevelLogo() {
  return (
    <p className="text-3xl font-black tracking-wide text-[#111011] sm:text-4xl">
      LE<span className="inline-flex h-8 w-8 items-center justify-center rounded-sm border-2 border-[#111011] text-xs font-bold sm:h-9 sm:w-9">L</span>EL
    </p>
  );
}

function OnlineTrainerLogo() {
  return (
    <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-[#4b5563] px-2 text-center sm:h-24 sm:w-24">
      <p className="text-[9px] font-bold leading-tight text-white sm:text-[10px]">
        <span className="text-yellow-300">ONLINE</span>
        <br />
        TRAINER
        <br />
        <span className="text-yellow-300">LIZENZ</span>
      </p>
    </div>
  );
}

function PlanetMeatLogo() {
  return (
    <p className="text-3xl font-black tracking-tight text-[#111011] sm:text-4xl">
      PL
      <span className="relative inline-block">
        A
        <span className="absolute left-1/2 top-[42%] h-1 w-[70%] -translate-x-1/2 bg-yellow-400" />
      </span>
      NET
      <span className="ml-1 block text-sm font-normal italic sm:inline sm:text-base">
        meat
      </span>
    </p>
  );
}

const sponsors: Sponsor[] = [
  {
    id: "doctrinus",
    caption: "maximal sparen mit Code 'IRON'",
    logo: <DoctrinusLogo />,
  },
  {
    id: "esn",
    caption: "-10% mit 'IRON'",
    logo: <EsnLogo />,
  },
  {
    id: "more",
    caption: "-10% mit 'IRON'",
    logo: <MoreLogo />,
  },
  {
    id: "level",
    caption: "-10% mit 'IRON'",
    logo: <LevelLogo />,
  },
  {
    id: "otl",
    caption: "-10% mit 'Mike'",
    logo: <OnlineTrainerLogo />,
  },
  {
    id: "planet-meat",
    caption: "-10% mit 'IRON'",
    logo: <PlanetMeatLogo />,
  },
];

export function SponsorsSection() {
  return (
    <section className="mx-auto w-full max-w-[1000px] px-6 py-16 lg:px-8">
      <h2 className="text-center text-lg font-medium text-[#111011] sm:text-xl">
        Sponsored by
      </h2>

      <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 sm:gap-x-10">
        {sponsors.map((sponsor) => (
          <article key={sponsor.id} className="flex flex-col items-center text-center">
            <div className="flex min-h-[80px] items-center justify-center sm:min-h-[96px]">
              {sponsor.logo}
            </div>
            <p className="mt-4 text-sm font-normal text-[#111011] sm:text-base">
              {sponsor.caption}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
