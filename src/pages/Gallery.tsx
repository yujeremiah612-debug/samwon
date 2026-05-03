import { motion } from 'motion/react';
import { GALLERY_IMAGES, RESTAURANT_INFO } from '../constants';

export default function Gallery() {
  return (
    <div className="pb-32 bg-white">
      {/* Header */}
      <section className="bg-theme-surface py-24 sm:py-32 border-b border-theme-tan/10 text-center">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <span className="text-theme-red font-bold tracking-[0.4em] sm:tracking-[0.5em] uppercase text-[9px] sm:text-[10px] mb-6 sm:mb-8 block underline decoration-theme-red/30 underline-offset-8 font-serif italic">The Visual Narrative</span>
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-serif font-bold italic mb-6 sm:mb-8 text-theme-ink tracking-tight">Visual Gallery</h1>
          <p className="text-theme-ink/80 max-w-2xl mx-auto leading-relaxed text-base sm:text-lg italic px-4 font-medium">
            A window into our kitchen. Capturing the textures, colors, and 
            soul of every dish prepared with family love.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-12">
            {GALLERY_IMAGES.map((image, idx) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (idx % 3) * 0.1, duration: 0.8 }}
                className={`${idx === 0 ? 'col-span-1 md:col-span-2' : 'col-span-1'} group relative cursor-pointer overflow-hidden aspect-square border border-theme-tan/10 rounded-sm shadow-md`}
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-theme-red/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-theme-ink/90 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-white font-bold text-[10px] sm:text-[11px] uppercase tracking-[3px] font-serif italic">{image.alt}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Hook */}
      <section className="py-20 md:py-32 bg-theme-surface border-t border-theme-tan/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold italic mb-10 sm:mb-12 tracking-tight text-theme-ink uppercase font-sans tracking-wide">Follow our journey</h2>
          <div className="flex justify-center gap-6 flex-wrap">
            <a 
              href={RESTAURANT_INFO.social.facebook} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-theme-ink hover:bg-theme-red text-white px-8 sm:px-12 py-4 sm:py-5 text-[10px] sm:text-[11px] font-bold tracking-[2px] sm:tracking-[3px] uppercase transition-all shadow-2xl rounded-sm"
            >
              Facebook
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
