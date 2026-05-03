import { motion } from 'motion/react';
import { ArrowRight, Star, Heart, ChefHat, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { RESTAURANT_INFO, REVIEWS } from '../constants';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Home() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0, hours: 0, minutes: 0, seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date(RESTAURANT_INFO.reopeningDate).getTime();
    
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[85vh] sm:h-[90vh] flex items-center overflow-hidden bg-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1920&auto=format&fit=crop" 
            className="w-full h-full object-cover opacity-50 scale-105" 
            alt="Authentic Korean Feast"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/50 to-white" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 z-10 w-full text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <div className="mb-10 inline-block bg-theme-ink px-6 py-3 rounded-full shadow-lg border border-theme-tan/30">
              <span className="text-white font-bold tracking-[0.3em] uppercase text-[11px] sm:text-[12px] font-sans">Est. Samwon Garden Legacy</span>
            </div>
            <div className="flex justify-center mb-8">
              <div className="font-serif text-5xl md:text-8xl font-bold tracking-[0.2em] text-theme-ink uppercase">
                Samwon<span className="text-theme-red">.</span>
              </div>
            </div>
            <p className="text-base sm:text-lg text-theme-ink mb-12 max-w-2xl mx-auto leading-relaxed px-4 font-medium">
              {RESTAURANT_INFO.tagline} Authentic soul, scratch-made in our new Fort Worth home.
            </p>
            
            {/* Countdown Container */}
            <div className="inline-flex justify-center flex-wrap gap-4 sm:gap-12 mb-16 border-y border-theme-tan/20 py-8 sm:py-10 px-6 sm:px-12 bg-white/60 backdrop-blur-md rounded-sm shadow-sm">
              {(Object.entries(timeLeft) as [string, number][]).map(([label, value]) => (
                <div key={label} className="text-center group min-w-[70px] sm:min-w-[90px]">
                  <span className="text-3xl sm:text-6xl font-serif font-bold text-theme-ink block mb-1 sm:mb-2 tracking-tighter">{value < 0 ? 0 : value.toString().padStart(2, '0')}</span>
                  <span className="text-[9px] sm:text-[11px] uppercase tracking-[2px] sm:tracking-[4px] text-theme-ink font-bold opacity-100">{label}</span>
                  <div className="w-8 sm:w-12 h-0.5 bg-theme-red mx-auto mt-2 sm:mt-3" />
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-5 sm:gap-6">
              <Link 
                to="/menu" 
                className="inline-flex items-center justify-center bg-theme-ink text-white px-10 py-5 text-[11px] font-bold tracking-[3px] uppercase transition-all hover:bg-theme-red rounded-sm shadow-2xl min-w-[240px]"
              >
                Discover the Menu
              </Link>
              <Link 
                to="/location" 
                className="inline-flex items-center justify-center bg-white border border-theme-ink/30 text-theme-ink px-10 py-5 text-[11px] font-bold tracking-[3px] uppercase transition-all hover:bg-theme-surface rounded-sm min-w-[240px] shadow-sm"
              >
                Find Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 md:py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-theme-red/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-20">
            {[
              { icon: Heart, title: "Family Love", desc: "Our core belief that food should be served with the same care we give our own family." },
              { icon: ChefHat, title: "Authentic Soul", desc: "No modifications, no compromises. We stick to the scratch-made roots of Korean cuisine." },
              { icon: Sparkles, title: "Fresh Focus", desc: "A rigorous commitment to seasonal ingredients and culinary consistency." }
            ].map((item, i) => (
              <div key={i} className="text-center group">
                <div className="w-20 h-20 mx-auto bg-theme-surface flex items-center justify-center rounded-2xl mb-8 group-hover:bg-theme-apricot/20 transition-all duration-500">
                  <item.icon className="text-theme-red" size={32} />
                </div>
                <h3 className="text-2xl font-serif font-bold mb-4 italic tracking-wide text-theme-ink uppercase tracking-tight">{item.title}</h3>
                <p className="text-theme-ink/85 leading-relaxed text-sm h-12">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Preview */}
      <section className="py-20 md:py-32 bg-theme-bg border-y border-theme-tan/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-6 scale-95 origin-left">
                <div className="space-y-6 pt-12">
                  <img src="input_file_4.png" className="rounded-sm shadow-2xl border border-theme-tan/10" alt="Full Feast Spread" referrerPolicy="no-referrer" />
                  <img src="input_file_1.png" className="rounded-sm shadow-2xl border border-theme-tan/10" alt="Sizzling BBQ" referrerPolicy="no-referrer" />
                </div>
                <div className="space-y-6">
                  <img src="input_file_0.png" className="rounded-sm shadow-2xl border border-theme-tan/10" alt="Handmade Gimbap" referrerPolicy="no-referrer" />
                  <img src="input_file_5.png" className="rounded-sm shadow-2xl border border-theme-tan/10" alt="Premium Galbi" referrerPolicy="no-referrer" />
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 lg:pl-20">
              <span className="text-theme-red font-bold tracking-[0.3em] uppercase text-[10px] mb-6 block underline decoration-2 underline-offset-8 font-serif italic">Our Evolution</span>
              <h2 className="text-5xl font-serif font-bold mb-8 leading-tight tracking-tight text-theme-ink">Better Than Ever. <br/><span className="italic">Same Soul.</span></h2>
              <p className="text-theme-ink/80 text-lg leading-relaxed mb-10">
                We've taken your favorite classics and refined them for our new Fort Worth home. 
                A warmer atmosphere, brighter space, and an even deeper focus on culinary 
                consistency.
              </p>
              <Link to="/story" className="inline-flex items-center gap-3 text-theme-ink font-bold tracking-[0.2em] uppercase text-[11px] group border-b border-theme-tan/20 pb-4 hover:border-theme-red transition-all">
                The Story <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Community Reviews */}
      <section className="py-20 md:py-32 bg-theme-surface border-t border-theme-tan/20">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-3xl md:text-5xl font-serif font-bold italic mb-6 text-theme-ink uppercase tracking-tight">Community Voices</h2>
            <div className="w-16 sm:w-20 h-0.5 bg-theme-red mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
            {REVIEWS.map((review, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bg-theme-bg p-12 rounded-sm border border-theme-tan/20 shadow-xl"
              >
                <div className="flex gap-1 mb-8">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={12} className="fill-theme-red text-theme-red" />
                  ))}
                </div>
                <p className="text-theme-ink h-auto min-h-[6rem] italic text-[15px] sm:text-[16px] leading-relaxed mb-10">"{review.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-[1px] bg-theme-red" />
                  <div className="text-theme-ink font-bold tracking-[0.2em] uppercase text-[11px]">{review.author}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
