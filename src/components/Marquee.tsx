export function Marquee() {
  return (
    <section className="w-full overflow-hidden py-12 md:py-24 relative flex items-center bg-background border-t border-border/40">
      <div className="flex w-[200%] animate-marquee whitespace-nowrap">
        <span className="text-7xl md:text-[10rem] leading-none font-serif text-foreground mr-8 md:mr-16">
          Let's Work Together
        </span>
        <span className="text-7xl md:text-[10rem] leading-none font-serif text-foreground mr-8 md:mr-16">
          Let's Work Together
        </span>
        <span className="text-7xl md:text-[10rem] leading-none font-serif text-foreground mr-8 md:mr-16">
          Let's Work Together
        </span>
        <span className="text-7xl md:text-[10rem] leading-none font-serif text-foreground mr-8 md:mr-16">
          Let's Work Together
        </span>
      </div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <button className="rounded-full bg-primary text-primary-foreground px-8 py-4 text-xs font-bold tracking-widest uppercase hover:bg-primary/90 transition-colors shadow-xl">
          HIRE US
        </button>
      </div>
    </section>
  );
}
