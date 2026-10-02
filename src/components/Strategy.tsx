import { useState } from "react";
import { ArrowUpRight, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type CaseStudy = {
  label: string;
  bg: string;
  title: string;
  client: string;
  challenge: string;
  solution: string;
  result: string;
  before: string;
  after: string;
};

const bubbles: CaseStudy[] = [
  {
    label: "Portfolio 1",
    bg: "bg-primary text-primary-foreground",
    title: "BRAND STRATEGY<br />&<br />MESSAGING",
    client: "Salon & Beauty Brand",
    challenge:
      "An established salon with a loyal clientele but no clear brand voice, inconsistent messaging, and a website that didn't reflect the quality of the in-person experience.",
    solution:
      "Refined the brand positioning, rewrote the website copy around the customer journey, and built a messaging framework the owner could reuse across every channel.",
    result:
      "Booked-out calendar within 60 days, a 2.3x increase in website inquiries, and a brand voice the owner finally felt proud to share.",
    before: "Generic copy, unclear positioning, scattered messaging",
    after: "Sharp brand voice, clear offer, consistent across channels",
  },
  {
    label: "Portfolio 2",
    bg: "bg-secondary text-secondary-foreground",
    title: "WEBSITE<br />&<br />DIGITAL PRESENCE",
    client: "Service-Based Business",
    challenge:
      "An outdated website that loaded slowly, ranked nowhere on Google, and sent visitors to a contact form that rarely converted.",
    solution:
      "Designed a conversion-focused website, optimized for SEO and Google Business Profile, with landing pages built around the actual services people search for.",
    result:
      "First-page ranking for 12 local keywords, 4x more qualified leads, and a site that finally works as a 24/7 sales tool.",
    before: "Slow site, no SEO, low-converting contact form",
    after: "Fast, SEO-optimized site with high-converting landing pages",
  },
  {
    label: "Portfolio 3",
    bg: "bg-accent text-accent-foreground",
    title: "Content &<br />Social Media",
    client: "Owner-Operator Brand",
    challenge:
      "Posting inconsistently, no content strategy, and spending hours creating one-off posts that never turned into real engagement or sales.",
    solution:
      "Built a content system that turns one idea into multiple pieces — carousels, email campaigns, and launch content — with a simple workflow the owner could maintain.",
    result:
      "3x engagement in 90 days, a content calendar that runs itself, and email campaigns that actually drive bookings.",
    before: "Random posts, no strategy, hours wasted",
    after: "Repurposable content system with real engagement",
  },
  {
    label: "Portfolio 4",
    bg: "bg-card text-card-foreground border border-border/40",
    title: "AI, Systems &<br />Automation",
    client: "Growing Small Business",
    challenge:
      "The owner was manually handling follow-ups, content scheduling, and client intake — everything lived in their head and a dozen open tabs.",
    solution:
      "Built AI workflows, custom prompts, and marketing automations that handle repetitive tasks, plus an operational workflow that keeps everything organized.",
    result:
      "10+ hours saved per week, zero missed follow-ups, and tools that let the owner focus on the work that actually grows the business.",
    before: "Manual everything, scattered workflows, missed follow-ups",
    after: "Automated systems, saved hours, nothing slipping through",
  },
];

export function Strategy() {
  const [active, setActive] = useState<CaseStudy | null>(null);

  return (
    <section className="py-24 px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mb-24"
      >
        <h2 className="text-5xl md:text-6xl font-serif mb-8">Portfolio</h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          A selection of recent projects spanning brand strategy, creative
          direction, websites, and marketing systems built for owner-operators.
          Tap any card to see the full case study.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {bubbles.map((b, i) => (
          <motion.button
            key={i}
            type="button"
            onClick={() => setActive(b)}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className={`${b.bg} rounded-[2rem] md:rounded-full aspect-square flex items-center justify-center group cursor-pointer p-12 md:p-0 relative text-left`}
          >
            <div className="flex flex-col items-center text-center gap-4">
              <span className="text-xs font-bold tracking-widest uppercase opacity-70">
                {b.label}
              </span>
              <h2
                className="text-3xl md:text-5xl font-serif uppercase leading-tight"
                dangerouslySetInnerHTML={{ __html: b.title }}
              />
              <span className="text-[10px] font-semibold tracking-widest uppercase opacity-60 mt-1">
                View Case Study
              </span>
              <ArrowUpRight className="w-12 h-12 md:w-16 md:h-16 group-hover:scale-110 transition-transform mt-2" />
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card text-card-foreground border border-border rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto relative"
            >
              <button
                type="button"
                onClick={() => setActive(null)}
                className="absolute top-5 right-5 text-muted-foreground hover:text-foreground transition-colors z-10"
                aria-label="Close"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="p-8 md:p-10">
                <span className="text-xs font-bold tracking-widest uppercase text-primary">
                  {active.label} · {active.client}
                </span>
                <h3
                  className="text-3xl md:text-4xl font-serif mt-3 mb-8"
                  dangerouslySetInnerHTML={{ __html: active.title }}
                />

                {/* Before / After */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="rounded-2xl border border-border/60 p-5 bg-muted/40">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground mb-2 block">
                      Before
                    </span>
                    <p className="text-sm leading-relaxed">{active.before}</p>
                  </div>
                  <div className="rounded-2xl border border-primary/30 p-5 bg-primary/5">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-primary mb-2 block">
                      After
                    </span>
                    <p className="text-sm leading-relaxed">{active.after}</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-2">
                      The Challenge
                    </h4>
                    <p className="text-base leading-relaxed">
                      {active.challenge}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-2">
                      The Approach
                    </h4>
                    <p className="text-base leading-relaxed">
                      {active.solution}
                    </p>
                  </div>
                  <div className="rounded-2xl bg-primary/10 border border-primary/20 p-5">
                    <h4 className="text-xs font-bold tracking-widest uppercase text-primary mb-2 flex items-center gap-2">
                      <ArrowRight className="w-4 h-4" /> The Result
                    </h4>
                    <p className="text-base leading-relaxed">{active.result}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
