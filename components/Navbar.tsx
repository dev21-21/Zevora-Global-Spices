import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Check if on policy page (for solid background)
  const isOnPolicyPage = location.pathname === '/policies';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle navigation to sections
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Handle logo/home click
  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Use solid background if scrolled OR on policy page
  const showSolidBg = isScrolled || isOnPolicyPage;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showSolidBg
          ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-slate-200 dark:border-slate-800'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 md:h-20">
          
          {/* ============================================ */}
          {/* YOUR ORIGINAL LOGO - PASTE YOUR LOGO CODE HERE */}
          {/* Just add onClick={handleHomeClick} to your <a> tag */}
          {/* ============================================ */}
          <a href="/" onClick={handleHomeClick} className="flex items-center gap-3 cursor-pointer">
            {/* YOUR LOGO IMAGE/CONTENT HERE */}
            <div className="relative flex-shrink-0 h-20 w-20 sm:h-24 sm:w-24 flex items-center justify-center transition-all duration-300 group-hover:scale-105">
              {showSolidBg ? (
    <img src="https://res.cloudinary.com/dlnfi4gab/image/upload/v1770808015/zevora_email_logo_gpmu7s.png" alt="Zevora" className="h-full w-full object-contain" />
  ) : (
    <img src="https://res.cloudinary.com/dlnfi4gab/image/upload/v1771316433/zervo_white_logo_ztnvci.png" alt="Zevora" className="h-full w-full object-contain" />
  )}
            </div>
          </a>
          
          {/* ============================================ */}

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="/"
              onClick={handleHomeClick}
              className={`font-sans text-sm font-medium transition-colors hover:text-primary ${
                showSolidBg
                  ? 'text-slate-700 dark:text-slate-300'
                  : 'text-white/90'
              }`}
            >
              Home
            </a>
            <a
              href="#products"
              onClick={(e) => handleNavClick(e, 'products')}
              className={`font-sans text-sm font-medium transition-colors hover:text-primary ${
                showSolidBg
                  ? 'text-slate-700 dark:text-slate-300'
                  : 'text-white/90'
              }`}
            >
              Products
            </a>
            <a
              href="#process"
              onClick={(e) => handleNavClick(e, 'process')}
              className={`font-sans text-sm font-medium transition-colors hover:text-primary ${
                showSolidBg
                  ? 'text-slate-700 dark:text-slate-300'
                  : 'text-white/90'
              }`}
            >
              Process
            </a>
            <a
              href="#about"
              onClick={(e) => handleNavClick(e, 'about')}
              className={`font-sans text-sm font-medium transition-colors hover:text-primary ${
                showSolidBg
                  ? 'text-slate-700 dark:text-slate-300'
                  : 'text-white/90'
              }`}
            >
              About
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className={`font-sans text-sm font-medium transition-colors hover:text-primary ${
                showSolidBg
                  ? 'text-slate-700 dark:text-slate-300'
                  : 'text-white/90'
              }`}
            >
              Contact
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="/brochure/ZEVORA GLOBAL SPICES.pdf"
              download="ZEVORA GLOBAL SPICES.pdf"
              className={`inline-flex items-center gap-2 h-10 px-4 font-sans text-sm font-medium rounded-xl transition-colors border ${
                showSolidBg
                  ? 'border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                  : 'border-white/30 text-white hover:bg-white/10'
              }`}
            >
              <span className="material-symbols-outlined text-base">download</span>
              Brochure
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="inline-flex items-center gap-2 h-10 px-5 bg-primary text-slate-900 font-sans text-sm font-semibold rounded-xl hover:bg-white transition-colors"
            >
              Get Quote
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              showSolidBg
                ? 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                : 'text-white hover:bg-white/10'
            }`}
          >
            <span className="material-symbols-outlined text-2xl">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-xl">
            <div className="px-4 py-4 space-y-1">
              <a
                href="/"
                onClick={handleHomeClick}
                className="block px-4 py-3 font-sans text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-primary rounded-xl transition-colors"
              >
                Home
              </a>
              <a
                href="#products"
                onClick={(e) => handleNavClick(e, 'products')}
                className="block px-4 py-3 font-sans text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-primary rounded-xl transition-colors"
              >
                Products
              </a>
              <a
                href="#process"
                onClick={(e) => handleNavClick(e, 'process')}
                className="block px-4 py-3 font-sans text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-primary rounded-xl transition-colors"
              >
                Process
              </a>
              <a
                href="#about"
                onClick={(e) => handleNavClick(e, 'about')}
                className="block px-4 py-3 font-sans text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-primary rounded-xl transition-colors"
              >
                About
              </a>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, 'contact')}
                className="block px-4 py-3 font-sans text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-primary rounded-xl transition-colors"
              >
                Contact
              </a>
              
              <div className="pt-2 mt-2 border-t border-slate-200 dark:border-slate-700 space-y-2">
                <a
                  href="/brochure/ZEVORA GLOBAL SPICES.pdf"
                  download="ZEVORA GLOBAL SPICES.pdf"
                  className="flex items-center justify-center gap-2 h-12 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-sans text-sm font-medium rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  <span className="material-symbols-outlined text-base">download</span>
                  Download Brochure
                </a>
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, 'contact')}
                  className="flex items-center justify-center gap-2 h-12 bg-primary text-slate-900 font-sans text-sm font-semibold rounded-xl hover:bg-primary/90 transition-colors"
                >
                  Get Quote
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;