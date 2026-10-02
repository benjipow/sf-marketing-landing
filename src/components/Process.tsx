import { motion } from "framer-motion";

export function Process() {
  const steps = [
    {
      step: "STEP 1",
      desc: "We take the time to understand your business, goals, and unique pain points, developing consensus through research to shape strategies.",
    },
    {
      step: "STEP 2",
      desc: "Develop consensus on your digital universe and performance – uncovering strengths, weaknesses, and opportunities compared to industry leaders.",
    },
    {
      step: "STEP 3",
      desc: "Armed with insights and expertise, we develop tailored solutions that maximize ROI, achieve goals, and deliver the best results for each client.",
    },
    {
      step: "STEP 4",
      desc: "We monitor, refine, and use data-driven insights to maximize ROI, continuously optimizing campaigns for exceptional results.",
    },
  ];

  return (
    <section className="py-24 px-8 max-w-7xl mx-auto border-t border-border/40">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-6xl font-serif mb-16"
      >
        Our Process
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        {steps.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="border-t border-border/40 pt-6"
          >
            <h4 className="text-xs font-bold tracking-widest uppercase mb-4">
              {s.step}
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {s.desc}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="text-center">
        <a
          href="#"
          className="text-xs font-bold tracking-widest uppercase hover:text-primary transition-colors border-b border-current pb-1"
        >
          Learn More
        </a>
      </div>
    </section>
  );
}
