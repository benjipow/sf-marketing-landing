import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="border-t border-border/40 py-16 px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-24"
      >
        <div>
          <h3 className="text-2xl font-serif font-bold mb-8">
            BENJIPOW<span className="text-primary text-xs align-top">®</span>
          </h3>
        
        </div>

        <div>
          <h4 className="text-xs font-bold tracking-widest uppercase mb-6">
            My Approach
          </h4>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li>
              <a href="#" className="hover:text-primary transition-colors">
               Google & AI Visibility
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
               Brand Strategy & Messaging
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                AI Coaching
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                Graphics & Media
              </a>
            </li>
        </div>

        <div>
          <h4 className="text-xs font-bold tracking-widest uppercase mb-6">
            FOLLOW ME
          </h4>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                Google
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                YouTube
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold tracking-widest uppercase mb-6">
            Resources
          </h4>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                Case Studies
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                Self-Paced Programs
              </a>
            </li>
          </ul>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border/40 text-xs text-muted-foreground"
      >
        <p>© 2026 BENJI POW</p>
        <p>
          <a href="#" className="hover:text-primary">
            Privacy Policy
          </a>
        </p>
      </motion.div>
    </footer>
  );
}
