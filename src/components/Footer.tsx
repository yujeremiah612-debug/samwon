import { Facebook, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { RESTAURANT_INFO } from '../constants';

export default function Footer() {
  return (
    <footer className="bg-theme-ink border-t border-theme-tan/10 pt-20 sm:pt-24 pb-10 sm:pb-12 text-theme-bg">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 sm:gap-16 mb-16 sm:mb-24">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="inline-block mb-6 sm:mb-8 h-16">
              <img 
                src={RESTAURANT_INFO.logo} 
                alt={RESTAURANT_INFO.name} 
                className="h-full w-auto object-contain bg-white p-2 rounded-sm"
                referrerPolicy="no-referrer"
              />
            </Link>
            <p className="text-theme-bg/60 max-w-sm mb-10 leading-relaxed font-medium">
              Authentic Korean traditions preserved through family legacy. Scratch-made daily 
              in Fort Worth, TX. We invite you to experience the soul of our kitchen.
            </p>
            <div className="flex space-x-5">
              {[
                { Icon: Facebook, link: RESTAURANT_INFO.social.facebook }
              ].map((item, idx) => (
                <a 
                  key={idx} 
                  href={item.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-theme-bg/10 flex items-center justify-center text-theme-bg/40 hover:text-theme-red hover:border-theme-red transition-all"
                >
                  <item.Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-theme-bg font-bold text-[11px] uppercase tracking-[4px] mb-8 opacity-40">Navigation</h4>
            <ul className="space-y-5">
              {['Home', 'Our Story', 'Menu', 'Gallery', 'Location'].map((item) => (
                <li key={item}>
                  <Link to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '')}`} className="text-theme-bg/60 hover:text-theme-red transition-colors text-[13px] font-medium tracking-wide">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-theme-bg font-bold text-[11px] uppercase tracking-[4px] mb-8 opacity-40">Contact</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-5">
                <MapPin className="text-theme-red shrink-0" size={18} />
                <span className="text-theme-bg/60 text-[14px] leading-relaxed">{RESTAURANT_INFO.address}</span>
              </li>
              <li className="flex items-center gap-5">
                <Phone className="text-theme-red shrink-0" size={18} />
                <span className="text-theme-bg/60 text-[14px]">{RESTAURANT_INFO.phone}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-theme-bg/5 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[2.5px] text-theme-bg/30 font-bold">
          <p>© {new Date().getFullYear()} SAMWON KOREAN CUISINE. ALL RIGHTS RESERVED.</p>
          <p className="mt-6 md:mt-0 italic opacity-40">Family Love. Made from Scratch.</p>
        </div>
      </div>
    </footer>
  );
}
