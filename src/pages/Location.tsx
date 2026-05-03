import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';
import { RESTAURANT_INFO } from '../constants';

export default function Location() {
  return (
    <div className="pb-32 bg-white min-h-screen">
      <section className="flex flex-col lg:flex-row min-h-[90vh]">
        {/* Map Side */}
        <div className="w-full lg:w-1/2 min-h-[400px] sm:min-h-[600px] bg-theme-surface relative overflow-hidden border-b lg:border-r border-theme-tan/10">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3358.330894085429!2d-97.35171412351944!3d32.67732296582522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e7239276d4791%3A0xc3c6b24a2f4ab2e4!2s5201%20McCart%20Ave%20%23B%2C%20Fort%20Worth%2C%20TX%2076115!5e0!3m2!1sen!2sus!4v1714670000000!5m2!1sen!2sus" 
            className="w-full h-full border-0 grayscale contrast-125 hover:grayscale-0 transition-all duration-700" 
            allowFullScreen={true}
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          
          <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 w-[min(90%,350px)] sm:w-[min(90%,400px)] text-center p-6 sm:p-8 bg-white/90 backdrop-blur-md rounded-sm border border-theme-tan/20 shadow-2xl pointer-events-none">
            <span className="text-theme-red font-bold uppercase tracking-[0.3em] text-[9px] mb-3 block font-serif italic">The Neighborhood</span>
            <h2 className="text-xl sm:text-2xl font-serif font-bold mb-3 italic text-theme-ink">Fort Worth Home</h2>
            <p className="text-theme-ink/70 italic leading-relaxed font-light text-[12px] sm:text-sm">
              Located near TCU area. {RESTAURANT_INFO.address.split(',')[0]}.
            </p>
          </div>
        </div>

        {/* Info Side */}
        <div className="w-full lg:w-1/2 p-10 sm:p-16 lg:p-32 flex flex-col justify-center bg-white">
          <span className="text-theme-red font-bold tracking-[0.4em] uppercase text-[10px] sm:text-[11px] mb-6 sm:mb-8 block font-serif italic">Information</span>
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-serif font-bold italic mb-10 sm:mb-16 text-theme-ink tracking-tight">Fort Worth</h1>
          
          <div className="space-y-12 sm:space-y-16">
            <div className="group">
              <span className="text-theme-tan font-bold uppercase tracking-[3px] text-[11px] mb-6 block opacity-80">The Address</span>
              <div className="text-2xl sm:text-3xl font-serif font-bold leading-[1.2] text-theme-ink/80 italic">
                {RESTAURANT_INFO.address.split(',').slice(0, 2).join(', ')}<br />
                {RESTAURANT_INFO.address.split(',').slice(2).join(',').trim()}
              </div>
            </div>

            <div className="group">
              <span className="text-theme-tan font-bold uppercase tracking-[3px] text-[11px] mb-6 block opacity-80">Hours of Operation</span>
              <div className="space-y-3">
                <div className="flex items-center gap-3 bg-theme-kimchi/10 px-4 py-2 rounded-sm border border-theme-kimchi/20 w-fit mb-6">
                  <Clock size={14} className="text-theme-red" />
                  <span className="text-[10px] text-theme-red font-bold uppercase tracking-widest italic tracking-[2px]">Grand Reopening June 2026</span>
                </div>
                <div className="grid grid-cols-1 gap-x-12 gap-y-4 text-[14px] sm:text-[15px] text-theme-ink/60 font-light italic max-w-md">
                  <div className="flex justify-between border-b border-theme-tan/10 py-2"><span>Monday - Thursday</span> <span>11AM - 10PM</span></div>
                  <div className="flex justify-between border-b border-theme-tan/10 py-2"><span>Friday - Saturday</span> <span>11AM - 11PM</span></div>
                  <div className="flex justify-between border-b border-theme-tan/10 py-2"><span>Sunday</span> <span>11AM - 10PM</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
