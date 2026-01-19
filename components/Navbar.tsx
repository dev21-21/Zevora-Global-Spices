import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b-2 border-slate-900 dark:border-white bg-white/95 dark:bg-background-dark/95 backdrop-blur-md">
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
            <div className="h-11 w-11 border-2 border-slate-900 dark:border-white text-primary flex items-center justify-center bg-white dark:bg-black relative overflow-hidden transition-all group-hover:rotate-90 rounded-xl shadow-md">
              <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
                <div className="border-r border-b border-primary/20"></div>
                <div className="border-b border-primary/20"></div>
                <div className="border-r border-primary/20"></div>
                <div></div>
              </div>
              <span className="material-symbols-outlined text-2xl relative z-10">spa</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-lg font-bold tracking-tight text-slate-900 dark:text-white leading-none">
                Kerala<span className="text-primary">Spices</span>
              </span>
              <span className="text-[9px] font-mono text-slate-500 tracking-[0.1em]">Est. 2004 · Exp. Lic. #8892</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-1 items-center text-sm font-sans font-medium text-slate-700 dark:text-slate-300">
            {[
              { name: 'Home', href: '#home' },
              { name: 'Products', href: '#products' },
              { name: 'Supply Chain', href: '#process' },
              { name: 'About Us', href: '#about' },
              { name: 'Contact', href: '#contact' }
            ].map((item) => (
              <a 
                key={item.name}
                href={item.href}
                className="px-4 py-2 border border-transparent transition-all rounded-lg hover:bg-slate-100 dark:hover:bg-white/10 hover:text-primary"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            {/* Download button */}
            <a 
              href="#contact"
              className="hidden sm:flex h-10 items-center justify-center bg-primary px-6 text-sm font-sans font-semibold text-slate-900 shadow-lg hover:shadow-xl hover:bg-primary/90 transition-all rounded-xl"
            >
              Download Brochure
            </a>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2 text-slate-600 dark:text-slate-300 border border-slate-300 dark:border-slate-600 rounded-lg hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark p-4 flex flex-col gap-2 shadow-lg">
          {[
            { name: 'Home', href: '#home' },
            { name: 'Products', href: '#products' },
            { name: 'Supply Chain', href: '#process' },
            { name: 'About Us', href: '#about' },
            { name: 'Team', href: '#team' },
            { name: 'Contact', href: '#contact' }
          ].map((item) => (
            <a 
              key={item.name}
              href={item.href}
              className="block py-3 px-4 border border-slate-200 dark:border-slate-700 font-sans text-sm font-medium text-slate-700 dark:text-slate-300 rounded-xl hover:bg-slate-50 dark:hover:bg-white/5 hover:border-primary transition-all"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;