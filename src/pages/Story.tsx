import { motion } from 'motion/react';
import { Sparkles, Users, History, ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Story() {
  return (
    <div className="pb-32 bg-white">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-white">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&q=80&w=1920" 
            className="w-full h-full object-cover opacity-20" 
            alt="Authentic Cooking"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white" />
        </div>
        <div className="relative text-center max-w-4xl px-6">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-theme-red font-bold tracking-[0.5em] uppercase text-[10px] sm:text-[11px] mb-6 block"
          >
            The Samwon Heritage
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-6xl md:text-8xl font-serif font-bold text-theme-ink mb-6"
          >
            A Story of <span className="italic">Resilience</span>
          </motion.h1>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="aspect-[4/5] w-full border-[15px] sm:border-[20px] border-theme-surface overflow-hidden shadow-2xl relative">
                <img 
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop" 
                  className="w-full h-full object-cover" 
                  alt="Ancestral Traditions"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-10 left-10 text-white font-serif italic text-2xl drop-shadow-lg hidden sm:block">Since Samwon Garden</div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-4xl sm:text-5xl font-serif font-bold mb-10 leading-tight">
                Honoring the Past,<br />
                <span className="italic text-theme-red">Serving the Future.</span>
              </h2>
              <div className="space-y-8 text-theme-ink/85 text-base sm:text-lg leading-relaxed">
                <p>
                  The transition from <span className="text-theme-ink font-semibold">Samwon Garden</span> to <span className="text-theme-ink font-semibold">Samwon Korean Cuisine</span> isn't just about a new name—it's a commitment to a better dining experience.
                </p>
                <p>
                  While our matriarchal recipes remain exactly as they were decades ago, we've invested in a brighter, cleaner environment and professional consistency to ensure every visit is a memory of comfort.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Evolution Grid */}
      <section className="py-20 md:py-32 bg-theme-surface border-y border-theme-tan/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop" className="rounded-sm shadow-xl border border-white/20 aspect-video object-cover" alt="Modern Interior" referrerPolicy="no-referrer" />
            <img src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800&auto=format&fit=crop" className="rounded-sm shadow-xl border border-white/20 aspect-video object-cover" alt="Korean BBQ Seating" referrerPolicy="no-referrer" />
            <div className="bg-white p-8 sm:p-10 flex flex-col justify-center text-left rounded-sm border border-theme-tan/10 shadow-sm">
              <History className="text-theme-red mb-6" size={32} />
              <h4 className="text-xl font-serif font-bold italic mb-4 text-theme-ink uppercase tracking-tight">A Fresh Chapter</h4>
              <p className="text-theme-ink/80 text-sm leading-relaxed">We've modernized our space with better ventilation and professional service standards while keeping the family love at the core.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-theme-ink text-white text-center">
        <div className="max-w-4xl mx-auto px-6 sm:px-10">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif font-bold italic mb-10 sm:mb-12">Ready to experience the resurgence?</h2>
          <Link to="/location" className="inline-flex items-center gap-4 bg-theme-red hover:bg-red-700 text-white px-12 py-5 text-[11px] font-bold tracking-[3px] uppercase transition-all shadow-2xl">
            Visit Us in Fort Worth <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
