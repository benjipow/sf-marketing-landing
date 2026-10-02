import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookingDialog } from "./BookingDialog";
import { Menu, X, ChevronDown, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    {
      number: "01",
      label: "HOME",
      action: () => window.scrollTo({ top: 0, behavior: "smooth" }),
    },
    {
      number: "02",
      label: "ABOUT ME",
      action: () => scrollToSection("about"),
    },
    {
      number: "03",
      label: "SERVICES",
      action: () => scrollToSection("services"),
    },
    {
      number: "04",
      label: "START HERE",
      action: () => scrollToSection("process"),
    },
    {
      number: "05",
      label: "INQUIRE",
      action: () => scrollToSection("strategy"),
    },
  ];

  return (
    <>
      {/* Top Banner Bar */}
      <div className="bg-primary text-primary-foreground py-2 text-center text-xs font-semibold uppercase tracking-widest">
        NOW BOOKING LATE 2026 — LIMITED FREELANCE SLOTS AVAILABLE
      </div>

      <nav className="flex items-center justify-between py-5 px-6 md:px-12 max-w-7xl mx-auto border-b border-border/40 relative z-40 bg-background/80 backdrop-blur-md sticky top-0">
        {/* Left: MENU button + Dropdowns */}
        <div className="flex items-center gap-6">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center gap-2 text-xs uppercase font-bold tracking-widest hover:text-primary transition-colors py-2 px-3 rounded-md bg-secondary/10 border border-border/60"
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? (
              <X className="w-4 h-4 text-primary" />
            ) : (
              <Menu className="w-4 h-4 text-primary" />
            )}
            <span>MENU</span>
          </button>
        </div>

        {/* Center: Brand Name */}
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-2xl md:text-3xl font-serif font-bold tracking-tight absolute left-1/2 -translate-x-1/2"
        >
          BENJIPOW<span className="text-primary text-xs align-top">®</span>
        </Link>

        {/* Right: CTA */}
        <div className="flex items-center gap-4">
          <BookingDialog>
            <Button
              variant="secondary"
              className="rounded-full px-5 py-2 bg-primary text-primary-foreground hover:bg-primary/90 text-xs tracking-widest uppercase font-bold transition-all shadow-md hover:scale-105"
            >
              HIRE ME
            </Button>
          </BookingDialog>
        </div>
      </nav>

      {/* Full-Screen High-Fashion Overlay Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex flex-col justify-between p-6 md:p-12 overflow-y-auto"
          >
            {/* Overlay Header */}
            <div className="flex items-center justify-between max-w-7xl mx-auto w-full border-b border-border/40 pb-6">
              <span className="text-xs uppercase font-bold tracking-widest text-primary">
                NAVIGATION
              </span>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-2 text-xs uppercase font-bold tracking-widest hover:text-primary transition-colors py-2 px-4 rounded-full border border-border"
              >
                <span>CLOSE</span>
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Menu Links Grid */}
            <div className="max-w-7xl mx-auto w-full my-auto py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 flex flex-col space-y-4">
                {navLinks.map((item) => (
                  <motion.div
                    key={item.number}
                    whileHover={{ x: 12 }}
                    className="border-b border-border/30 pb-4 group cursor-pointer flex items-center justify-between"
                    onClick={() => {
                      item.action();
                      setIsMenuOpen(false);
                    }}
                  >
                    <div className="flex items-baseline gap-4 md:gap-8">
                      <span className="text-sm font-mono text-primary">
                        {item.number}
                      </span>
                      <span className="text-3xl md:text-6xl font-serif font-bold group-hover:text-primary transition-colors">
                        {item.label}
                      </span>
                    </div>
                    <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8 opacity-0 group-hover:opacity-100 text-primary transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </motion.div>
                ))}
              </div>

              {/* Sidebar info inside menu */}
              <div className="lg:col-span-4 bg-card/60 border border-border/60 p-6 md:p-8 rounded-2xl flex flex-col space-y-6">
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-2">
                    ABOUT BENJIPOW
                  </h4>
                  <p className="text-sm leading-relaxed text-foreground/80">
                    Helping business owners turn “I know I need to do this” into
                    “it’s finally done.”
                  </p>
                </div>

                <div className="pt-4 border-t border-border/40">
                  <h4 className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-2">
                    START A PROJECT
                  </h4>
                  <BookingDialog>
                    <Button
                      onClick={() => setIsMenuOpen(false)}
                      className="w-full bg-primary text-primary-foreground font-bold text-xs uppercase tracking-widest py-3 rounded-xl"
                    >
                      BOOK CONSULTATION
                    </Button>
                  </BookingDialog>
                </div>

                <div className="pt-4 border-t border-border/40 flex justify-between items-center text-xs text-muted-foreground">
                  <span>SAN FRANCISCO, CA</span>
                  <span>© 2026 BENJIPOW</span>
                </div>
              </div>
            </div>

            {/* Overlay Footer */}
            <div className="max-w-7xl mx-auto w-full pt-6 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-muted-foreground">
              <span>CREATIVE DIRECTION & MARKETING STRATEGY</span>
              <div className="flex items-center gap-6">
                <a
                  href="#services"
                  onClick={() => scrollToSection("services")}
                  className="hover:text-primary transition-colors"
                >
                  SERVICES
                </a>
                <a
                  href="#about"
                  onClick={() => scrollToSection("about")}
                  className="hover:text-primary transition-colors"
                >
                  ABOUT
                </a>
                <a
                  href="#process"
                  onClick={() => scrollToSection("process")}
                  className="hover:text-primary transition-colors"
                >
                  PROCESS
                </a>
                <a
                  href="#strategy"
                  onClick={() => scrollToSection("strategy")}
                  className="hover:text-primary transition-colors"
                >
                  STRATEGY
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
