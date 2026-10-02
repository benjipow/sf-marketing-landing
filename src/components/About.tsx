import { motion } from "framer-motion";

export function About() {
  return (
    <section
      id="about"
      className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-border/40"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left column — label, headline & photo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 flex flex-col gap-8"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            / Meet Benji
          </span>

          {/* Portrait Photo */}
          <div className="relative overflow-hidden rounded-2xl border border-border/60 shadow-2xl bg-card max-w-md group">
            <img
              src="https://vibe.filesafe.space/1781757993930865636/attachments/73bfa233-250c-4d33-8ccc-83447fb3024d.jpg"
              alt="Benji Pow - Creative Marketing Partner"
              className="w-full h-auto object-cover object-center aspect-[3/4] group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 bg-background/85 backdrop-blur-md p-3.5 rounded-xl border border-border/50 flex items-center justify-between text-xs">
              <div>
                <p className="font-semibold tracking-wide text-foreground">
                  BENJI POW
                </p>
                <p className="text-[11px] text-muted-foreground">
                  Founder & Creative Partner
                </p>
              </div>
              <span className="text-primary font-mono text-[10px] uppercase tracking-wider px-2 py-1 rounded bg-primary/10 border border-primary/20">
                SF, CA
              </span>
            </div>
          </div>
        </motion.div>

        {/* Right column — body copy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="lg:col-span-7 flex flex-col gap-6 text-muted-foreground leading-relaxed pt-2"
        >
          <p className="text-lg">
            After nearly two decades in the beauty industry, building a
            six-figure clientele and running my own business, I know what it
            feels like to wear every hat.
          </p>
          <p className="text-base">
            Today, I help owner-operators turn ideas into action through brand
            strategy, creative direction, marketing, AI, and practical systems.
          </p>
          <p className="text-base">
            We figure out what's stuck, what actually matters, and what needs to
            happen next—then we get it done.
          </p>
          <div className="pt-4 border-t border-border/40">
            <p className="text-2xl font-serif text-foreground">
              Are you a business owner with big ideas and too much on your
              plate? You need a creative partner in your corner.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
