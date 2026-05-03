import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { MENU_CATEGORIES } from '../constants';
import { Star } from 'lucide-react';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState(MENU_CATEGORIES[0].id);

  return (
    <div className="pb-32 bg-theme-bg min-h-screen">
      {/* Header */}
      <section className="py-20 sm:py-32 bg-theme-surface border-b border-theme-tan/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 text-center">
          <span className="text-theme-red font-bold tracking-[0.5em] uppercase text-[10px] sm:text-[11px] mb-6 sm:mb-8 block underline decoration-theme-red/30 underline-offset-8 font-serif italic">Handcrafted Heritage</span>
          <h1 className="text-5xl md:text-8xl font-serif font-bold text-theme-ink mb-6 sm:mb-8 italic tracking-tight">The Menu</h1>
          <p className="text-theme-ink/80 max-w-2xl mx-auto leading-relaxed text-base sm:text-lg px-4 font-medium">
            A symphony of flavors prepared daily with respect for tradition. 
            From 24-hour broths to our signature hand-marinated proteins.
          </p>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="sticky top-20 z-40 bg-white/95 backdrop-blur-md border-b border-theme-tan/10 py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-6 flex justify-start sm:justify-center items-center space-x-8 sm:space-x-12 overflow-x-auto no-scrollbar pb-2 sm:pb-0">
          {MENU_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`text-[11px] sm:text-[12px] uppercase tracking-[3px] font-bold transition-all whitespace-nowrap relative pb-2 ${
                activeCategory === cat.id 
                  ? 'text-theme-ink' 
                  : 'text-theme-ink/20 hover:text-theme-red'
              }`}
            >
              {cat.name}
              {activeCategory === cat.id && (
                <motion.div 
                  layoutId="active-tab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-theme-red"
                />
              )}
            </button>
          ))}
        </div>
      </section>

      {/* Menu Items Grid */}
      <section className="py-16 sm:py-24 bg-theme-bg">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 sm:gap-x-24 gap-y-16"
            >
              {MENU_CATEGORIES.find(c => c.id === activeCategory)?.items.map((item, idx) => (
                <div key={idx} className="group flex justify-between items-start border-b border-theme-tan/10 pb-10 hover:border-theme-red/40 transition-all duration-500">
                  <div className="flex-grow pr-8 sm:pr-12">
                    <div className="flex flex-wrap items-center gap-3 sm:gap-6 mb-4">
                      <h3 className="text-xl sm:text-2xl font-serif font-bold text-theme-ink tracking-tight uppercase italic">{item.name}</h3>
                      <span className="text-theme-red text-base sm:text-lg font-bold italic border-l border-theme-tan/50 pl-4">{item.korean}</span>
                    </div>
                    <p className="text-theme-ink/90 text-[15px] sm:text-[17px] leading-relaxed italic max-w-sm mb-8 font-medium">{item.description}</p>
                    
                    {idx === 0 && (
                      <div className="inline-flex items-center gap-3 bg-theme-apricot/10 px-4 py-1.5 rounded-sm border border-theme-apricot/20">
                        <Star size={10} className="text-theme-red fill-theme-red" />
                        <span className="text-[9px] text-theme-ink/60 font-bold uppercase tracking-[2px]">Signature Choice</span>
                      </div>
                    )}
                  </div>
                  <div className="text-right">
                    <span className="text-theme-ink font-serif font-bold text-xl italic opacity-80">${item.price}</span>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          <div className="mt-20 md:mt-32 p-8 sm:p-16 rounded-sm bg-theme-surface border border-theme-tan/10 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-theme-red/20" />
            <h4 className="text-2xl sm:text-3xl font-serif font-bold mb-6 sm:mb-8 italic tracking-tight text-theme-ink uppercase font-sans tracking-wide">Culinary Note</h4>
            <p className="text-theme-ink/80 text-sm sm:text-[15px] max-w-4xl mx-auto leading-relaxed font-medium">
              Consuming raw or undercooked meats, poultry, seafood, shellfish or eggs may increase your risk of foodborne illness. 
              Please inform your server of any food allergies before ordering. All menu items and prices are subject to change based on 
              availability and seasonal sourcing. We take pride in our scratch-made approach and authentic preservation of Korean flavors.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
