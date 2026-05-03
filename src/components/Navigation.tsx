import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Utensils, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { RESTAURANT_INFO } from '../constants';

export default function Navigation() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Our Story', path: '/story' },
    { name: 'Menu', path: '/menu' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Location', path: '/location' },
  ];

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-theme-tan/10 h-20">
        <div className="max-w-7xl mx-auto px-6 h-full flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group h-12">
            <div className="font-serif text-2xl font-bold tracking-[0.2em] text-theme-ink uppercase">
              Samwon<span className="text-theme-red">.</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[11px] uppercase tracking-[2.5px] font-bold transition-all hover:text-theme-red relative pb-1 ${
                  location.pathname === link.path ? 'text-theme-ink' : 'text-theme-ink/30'
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div layoutId="nav-underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-theme-red" />
                )}
              </Link>
            ))}
          </div>

          <Link
            to="/menu"
            className="hidden lg:block bg-theme-ink hover:bg-theme-red text-white px-8 py-3 text-[11px] font-bold tracking-widest uppercase transition-all rounded-sm shadow-xl"
          >
            Explore Menu
          </Link>
          
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-theme-ink p-2 hover:bg-theme-surface rounded-full transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 bg-white md:hidden pt-24"
          >
            <div className="flex flex-col items-center justify-center space-y-10 p-10">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Link
                    to={link.path}
                    className={`text-3xl font-serif font-bold italic tracking-tight ${
                      location.pathname === link.path ? 'text-theme-red' : 'text-theme-ink'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                className="pt-10 w-full"
              >
                <Link
                  to="/menu"
                  className="block w-full text-center bg-theme-ink text-white py-6 rounded-sm font-bold tracking-[4px] uppercase text-xs shadow-2xl"
                >
                  Explore the Menu
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
