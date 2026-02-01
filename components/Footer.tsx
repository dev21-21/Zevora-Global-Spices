import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white border-t-2 border-primary py-8 relative">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4 relative z-10">
        {/* Copyright */}
        <p className="font-sans text-sm text-slate-400 tracking-wide">
          © 2026 Kerala Spices Export Co. · All rights reserved.
        </p>
        
        {/* Footer links */}
        <div className="flex gap-6 text-sm">
          <a href="#" className="font-sans font-medium text-slate-400 hover:text-primary transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="font-sans font-medium text-slate-400 hover:text-primary transition-colors">
            Terms of Service
          </a>
        </div>
      </div>
      
      {/* Floating Buttons Container */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        {/* Download Brochure Button */}
        <a 
          href="/brochure/ZEVORA GLOBAL SPICES.pdf" 
          download='ZEVORA GLOBAL SPICES.pdf'
          className="rounded-2xl group relative flex h-14 w-14 items-center justify-center bg-primary text-slate-900 shadow-lg hover:shadow-xl hover:scale-105 transition-all border-2 border-slate-900/10"
          title="Download Brochure"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          
          {/* Tooltip */}
          <span className="absolute right-16 bg-slate-800 text-white text-[11px] font-sans font-medium px-3 py-2 rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-xl pointer-events-none border border-primary/30">
            Download Brochure
          </span>
        </a>

        {/* WhatsApp Contact Button */}
        <a 
          href="https://wa.me/1234567890" 
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-2xl group relative flex h-14 w-14 items-center justify-center bg-[#25D366] text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all"
          title="Contact on WhatsApp"
        >
          <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.017-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"></path>
          </svg>
          
          {/* Tooltip */}
          <span className="absolute right-16 bg-slate-800 text-white text-[11px] font-sans font-medium px-3 py-2 rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-xl pointer-events-none border border-[#25D366]/30">
            Contact Us
          </span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;