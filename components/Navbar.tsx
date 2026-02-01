import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b-2 border-slate-900 dark:border-white bg-white/95 dark:bg-background-dark/95 backdrop-blur-md">
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo */}
          <a 
            href="#home"
            className="flex items-center gap-4 group cursor-pointer select-none"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            {/* Logo Image */}
            <div className="relative flex-shrink-0 h-20 w-20 sm:h-24 sm:w-24 flex items-center justify-center transition-all duration-300 group-hover:scale-105">
              <img 
                src="https://res.cloudinary.com/dlnfi4gab/image/upload/v1769765458/logo_1-removebg-preview_ufjqnm.png" 
                alt="Zevora Global Spices Logo"
                className="h-full w-full object-contain"
              />
            </div>
            
            {/* Brand Text */}
            <div className="hidden sm:flex flex-col justify-center">
              <span className="font-display text-sm lg:text-lg font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
                Zevora<span className="text-primary"> Global Spices</span>
              </span>
              <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 tracking-[0.12em] uppercase mt-1">
                Premium Spice Exporters
              </span>
            </div>
          </a>

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

          <div className="flex items-center gap-3 sm:gap-4">
            {/* Download button */}
            <a 
              href="/brochure/ZEVORA GLOBAL SPICES.pdf" 
              download='ZEVORA GLOBAL SPICES.pdf'
              className="hidden sm:flex h-10 items-center justify-center bg-primary px-5 lg:px-6 text-sm font-sans font-semibold text-slate-900 shadow-lg hover:shadow-xl hover:bg-primary/90 transition-all rounded-xl whitespace-nowrap"
            >
              Download Brochure
            </a>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2 text-slate-600 dark:text-slate-300 border border-slate-300 dark:border-slate-600 rounded-lg hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className="material-symbols-outlined">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-4 flex flex-col gap-2">
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
          
          {/* Mobile Download Button */}
          <a 
            href="/brochure/ZEVORA GLOBAL SPICES.pdf" 
            download='ZEVORA GLOBAL SPICES.pdf'
            className="sm:hidden mt-2 flex h-12 items-center justify-center bg-primary px-6 text-sm font-sans font-semibold text-slate-900 shadow-lg rounded-xl"
          >
            Download Brochure
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;