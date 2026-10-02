import { Button } from "@/components/ui/button";
import { ArrowUpRight, Check, Sparkles } from "lucide-react";
import { BookingDialog } from "./BookingDialog";
import { BeforeAfterSlider } from "./BeforeAfterSlider";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-32">
      {/* Background Hero Photo */}
      <div className="absolute inset-x-0 top-0 h-[100svh] md:h-auto md:bottom-0 overflow-hidden pointer-events-none">
        <img
          src="https://vibe.filesafe.space/1781757993930865636/attachments/73ece70b-ff58-43a3-86fa-a7e357b0c7c0.png"
          alt="Benji Pow"
         className="w-full h-full object-cover object-top opacity-60 md:opacity-50"
        />
        {/* Gradients to keep headline & buttons readable while leaving photo clearly visible */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/50 to-background" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute top-20 left-10 hidden lg:block"
        >
          <div className="border border-orange-500/30 rounded-full px-6 py-3 text-[10px] font-semibold text-orange-500 uppercase tracking-widest text-center backdrop-blur-sm bg-background/40">
            YOUR BUSINESS BESTIE
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute top-20 right-10 hidden lg:block"
        >
          <div className="text-[10px] font-semibold text-orange-500 uppercase tracking-widest text-right">
            GET that $#!T DONE
          </div>
        </motion.div>

        <div className="max-w-5xl mx-auto text-center mt-12">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-[5.5rem] font-serif leading-[1.1] mb-16 text-foreground"
          >
            Creative
            <br />
            Marketing Partner
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-muted-foreground uppercase tracking-tight mb-16 text-2xl text-center"
          >
            TURNING YOUR MARKETING TO-DO LIST INTO{" "}
            <span className="text-primary font-semibold">DONE.</span>{" "}
            <span className="relative inline-flex items-center justify-center">
              <Sparkles className="absolute -top-2 -right-1 w-3 h-3 text-primary animate-pulse" />
              <Check className="w-6 h-6 text-primary animate-bounce" />
            </span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center justify-center gap-4 mb-24 relative"
          >
            <BookingDialog>
              <Button className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-7 text-sm font-semibold tracking-widest uppercase group">
                Schedule a meet
                <span className="ml-3 bg-primary-foreground text-primary rounded-full p-1.5 transition-transform group-hover:rotate-45">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </Button>
            </BookingDialog>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <img
              src="https://vibe.filesafe.space/1781757993930865636/attachments/686b8b36-515e-413e-bc9a-31320d5b47e9.png"
              alt="Seth Ambrose Therapy Project"
              className="w-full h-96 object-cover object-top rounded-xl"
            />
            <div className="w-full h-96 rounded-xl overflow-hidden relative border border-border/40">
              <BeforeAfterSlider
                className="w-full h-full"
                beforeImage="https://vibe.filesafe.space/1781757993930865636/attachments/26a095ed-c429-4aa2-98c6-13b2788ec447.jpg"
                afterImage="https://vibe.filesafe.space/1781757993930865636/attachments/01bd864f-149c-4773-808c-4743516bb84c.png"
                beforeAlt="Skin by LaFlamme - Before redesign"
                afterAlt="Skin by LaFlamme - After redesign"
              />
            </div>
            <img
              src="https://vibe.filesafe.space/1781757993930865636/assets/e346ce46-9a97-4dc5-912d-ce008f215746.jpg"
              alt="Work 3"
              className="w-full h-96 object-cover rounded-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
