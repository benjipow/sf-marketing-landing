import { motion } from "framer-motion";

const topRow = [
  "https://vibe.filesafe.space/1781757993930865636/attachments/686b8b36-515e-413e-bc9a-31320d5b47e9.png",
  "https://vibe.filesafe.space/1781757993930865636/assets/6eca4e94-2674-4ac3-8f90-566ec4ff4b38.jpg",
  "https://vibe.filesafe.space/1781757993930865636/assets/e346ce46-9a97-4dc5-912d-ce008f215746.jpg",
  "https://vibe.filesafe.space/1781757993930865636/assets/d74319fd-699a-4eb1-af7e-a8c93c8198aa.jpg",
];

const bottomRow = [
  "https://vibe.filesafe.space/1781757993930865636/assets/e346ce46-9a97-4dc5-912d-ce008f215746.jpg",
  "https://vibe.filesafe.space/1781757993930865636/assets/d74319fd-699a-4eb1-af7e-a8c93c8198aa.jpg",
  "https://vibe.filesafe.space/1781757993930865636/attachments/686b8b36-515e-413e-bc9a-31320d5b47e9.png",
  "https://vibe.filesafe.space/1781757993930865636/assets/6eca4e94-2674-4ac3-8f90-566ec4ff4b38.jpg",
];

function Row({
  images,
  reverse,
  duration,
}: {
  images: string[];
  reverse?: boolean;
  duration: number;
}) {
  const items = [...images, ...images];
  return (
    <div
      className="flex gap-6 w-max animate-slide"
      style={{
        animationDuration: `${duration}s`,
        animationDirection: reverse ? "reverse" : "normal",
      }}
    >
      {items.map((src, i) => (
        <div
          key={i}
          className="relative shrink-0 w-[80vw] sm:w-[60vw] md:w-[40vw] lg:w-[32vw] aspect-[4/3] rounded-2xl overflow-hidden border border-border/40 group"
        >
          <img
            src={src}
            alt={`Work showcase ${i + 1}`}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      ))}
    </div>
  );
}

export function SlidingGallery() {
  return (
    <section className="py-24 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-8 mb-16 text-center"
      >
        <span className="text-xs font-bold tracking-widest uppercase text-primary">
          Selected Work
        </span>
        <h2 className="text-4xl md:text-6xl font-serif mt-4">
          A Look at What's Possible
        </h2>
      </motion.div>

      <div className="space-y-6">
        <Row images={topRow} duration={40} />
        <Row images={bottomRow} reverse duration={50} />
      </div>
    </section>
  );
}
