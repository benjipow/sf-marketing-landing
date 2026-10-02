import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Creative Direction",
    description:
      "Brand positioning, campaign concepts, messaging, content direction, and helping you decide what the business should actually say and look like.",
  },
  {
    num: "02",
    title: "Brand Strategy & Messaging",
    description:
      "Clarifying your audience, offer, positioning, customer journey, website copy, and the message that makes the right people say, “This is for me.”",
  },
  {
    num: "03",
    title: "Website & Digital Presence",
    description:
      "Website strategy, website design direction, SEO, Google Business Profile, landing pages, and making your digital real estate actually work together.",
  },
  {
    num: "04",
    title: "Content & Social Media Marketing",
    description:
      "Content strategy, campaigns, social media concepts, carousels, email marketing, launch content, and turning one idea into multiple pieces of marketing.",
  },
  {
    num: "05",
    title: "AI, Systems & Automation",
    description:
      "AI workflows, custom prompts, marketing automations, content systems, operational workflows, and tools that help you stop manually doing everything.",
  },
  {
    num: "06",
    title: "Product, Offer & Launch Development",
    description:
      "Turning an idea into something sellable—from offer structure and pricing to curriculum, digital products, launch strategy, landing pages, and campaign execution.",
  },
];

export function Services() {
  return (
    <section className="py-24 px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-16 max-w-3xl"
      >
        <h2 className="text-sm font-bold tracking-widest uppercase text-primary mb-4">
          What I Do
        </h2>
        <h3 className="md:text-5xl font-serif text-3xl leading-tight">
          I help business owners turn “I know I need to do this” into “it’s
          finally done.”{" "}
          <span className="text-muted-foreground italic">
            —without you having to figure everything out alone.
          </span>
        </h3>
      </motion.div>

      <div className="flex flex-col gap-px bg-[#2a2420] rounded-2xl overflow-hidden">
        {services.map((service, index) => (
          <motion.div
            key={service.num}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="bg-[#332A24] px-8 md:px-12 py-8 md:py-10 group hover:bg-[#3d332d] transition-colors cursor-pointer flex flex-col md:flex-row md:items-center gap-4 md:gap-10"
          >
            <span className="text-sm font-mono text-muted-foreground md:w-16 shrink-0">
              /{service.num}
            </span>
            <h3 className="md:text-2xl font-serif font-medium leading-snug md:w-[340px] lg:w-[400px] shrink-0 text-5xl">
              {service.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed md:flex-1">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
