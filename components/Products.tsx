import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Product } from '../types';

const products: Product[] = [
  {
    id: 'p1',
    name: 'Black Pepper',
    ref: 'SKU-BP001',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBpl01UhQhmF2_T4t1COYWG0azajPZPlpVm23l5ZEAmYHhY_LpuNWtfVC6aDrTTmHaQBKLclkeLuyMOPyXmkB_MQiuFC6ZCWglR-Am-8l0XlZtYRTNm7owHh6cJWAq_HLZ9wlz9eS9iIyIAOVzMIyAYJ7INh6ikCp1gB_I82ocrAIiJYwMgJOMqcpmgtMIofazMyiXWjghTB3oWJw7zwAU3wbGaNYtrZ1j8uRtQY3_JL56tV7T8IdFmgUx7jDCXxQHgbEZF-18wpqh6',
    specs: { PIPERINE: '>6%', MOISTURE: '<11%', ORIGIN: 'IDUKKI', GRADE: 'MG-1' },
    description: 'The King of Spices, sourced from high-altitude vines.'
  },
  {
    id: 'p2',
    name: 'Cardamom',
    ref: 'SKU-GC042',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDmSsqcHODZNqLKprqRsEocdaObsRQvXZk8EaR0kmg3RtmeESIRIGBJsRlrnBv7GrZ3EEaq2oEXfhdoI974nn5cVR5NacdI7laxxUJ1Si5RQndIYHlUOGVDKtKPbOEuU4XAuFoG6Js2l-8LslJN54rULb56ACOB3mDPGPJDYStzCjaQhUqAXofadT_4KVnJLoLwDAGBTZEVPZRT-RYc3kFqZPGazIspw4UxCeMQw1oCDrI50TNWDJhuoUVWAODBAwZD6yRfnPhfOAKY',
    specs: { SIZE: '8MM+', COLOR: 'DEEP GREEN', ORIGIN: 'ALLEPPEY', TYPE: 'EXTRA BOLD' },
    description: 'Queen of spices with intense aroma and green pods.'
  },
  {
    id: 'p3',
    name: 'Turmeric',
    ref: 'SKU-TM089',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBRA-9XZpVfJHtH1MShg32rownhbmrpK6J2swvHBUFkxHLYMxNXxa_U_gTwe8qj8QfF9GlZFgSjGixPuYx8WCGmAnAE95468_SVC5mVAEl-TCCyPyAgr8o6E97foUT2jy2yCXM9vtJAz6d1SS2H-zVrV5wOeAuzl1SzDjleQM4MMnx8B9ryzv7_BrrTxxhM9ta3QRe9dR9fN4mG_O_4PRWqzXKt1PyjT20s6aPWxYfQu3UxiB3cM31CfQrLbB3NV0_kaDZavUPZve3o',
    specs: { CURCUMIN: '>5%', FORM: 'FINGER/POWDER', ORIGIN: 'WAYANAD', PROCESS: 'STEAMED' },
    description: 'High curcumin content with vibrant golden yellow color.'
  },
  {
    id: 'p4',
    name: 'Cloves',
    ref: 'SKU-CL102',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBy96QomCqoDipJ7eunQXJpVa2mEtxjPKJw-JU-c63d9jNchPScWFSK7IsNAMj92ruMV2978BbL00O3jLVOpU36GRfKqkxQPMlDhE4vVCGQbXKA85VUknioDcPFhrfNE-AhIRo1eZS2UQJ6wmhyatO3DF6zXGRJ8n7I6mbCsCYTNfKRkDf62KSN6NCHp5hQfvKeoUedv1M5v65-YvnXmPquFIbZHIZ9eCFdU0BTP0Xfpe2azzMwCDJKwbXkItUqXts2bznjNfQlielB',
    specs: { GRADE: 'LAL PARI', OIL: '>18%', SIZE: 'UNIFORM', PURITY: '99%' },
    description: 'Aromatic flower buds with rich oil content.'
  }
];

const Products: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const checkScrollability = useCallback(() => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 5);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
      
      const cardWidth = 370;
      const newIndex = Math.round(scrollLeft / cardWidth);
      setActiveIndex(Math.min(newIndex, products.length - 1));
    }
  }, []);

  useEffect(() => {
    const initialCheck = setTimeout(() => {
      checkScrollability();
    }, 100);

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollability);
      window.addEventListener('resize', checkScrollability);
    }

    return () => {
      clearTimeout(initialCheck);
      if (container) {
        container.removeEventListener('scroll', checkScrollability);
        window.removeEventListener('resize', checkScrollability);
      }
    };
  }, [checkScrollability]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = 350 + 32;
      
      const currentScroll = container.scrollLeft;
      const newScrollLeft = direction === 'left' 
        ? currentScroll - cardWidth 
        : currentScroll + cardWidth;
      
      container.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });

      setTimeout(() => {
        checkScrollability();
      }, 400);
    }
  };

  const scrollToIndex = (index: number) => {
    if (scrollContainerRef.current) {
      const cardWidth = 350 + 32;
      scrollContainerRef.current.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth'
      });

      setTimeout(() => {
        checkScrollability();
      }, 400);
    }
  };

  return (
    <section id="products" className="py-20 bg-white dark:bg-background-dark relative overflow-hidden">
      {/* Background text - decorative */}
      <div className="absolute top-10 right-0 font-display font-black text-[200px] text-slate-100 dark:text-slate-900 leading-none pointer-events-none z-0 opacity-50 select-none overflow-hidden">
        PRODUCTS
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-slate-200 dark:border-slate-800 pb-6">
          <div>
            {/* Product catalog badge - professional mono */}
            <div className="inline-block bg-primary text-slate-900 font-mono text-[10px] font-semibold px-3 py-1.5 mb-3 rounded-full tracking-[0.1em] shadow-sm">
              PRODUCT CATALOG
            </div>
            
            {/* Heading - Display font */}
            <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-[-0.02em]">
              Premium Spices
            </h2>
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex gap-2">
            <button 
              type="button"
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              aria-label="Previous product"
              className={`h-12 w-12 border-2 border-slate-900 dark:border-white flex items-center justify-center transition-all duration-200 rounded-xl
                ${canScrollLeft 
                  ? 'hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 cursor-pointer shadow-md hover:shadow-lg' 
                  : 'opacity-40 cursor-not-allowed'
                }`}
            >
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <button 
              type="button"
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              aria-label="Next product"
              className={`h-12 w-12 border-2 border-slate-900 dark:border-white flex items-center justify-center transition-all duration-200 rounded-xl
                ${canScrollRight 
                  ? 'bg-primary text-slate-900 hover:bg-primary/90 shadow-lg hover:shadow-xl cursor-pointer' 
                  : 'bg-slate-300 text-slate-500 cursor-not-allowed shadow-none'
                }`}
            >
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>

        {/* Products Carousel */}
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto hide-scrollbar gap-8 pb-12 snap-x snap-mandatory scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {products.map((product) => (
            <div 
              key={product.id} 
              className="min-w-[300px] md:min-w-[350px] snap-start group relative bg-white dark:bg-surface-dark border-2 border-slate-900 dark:border-slate-600 p-2 flex-shrink-0 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
            >
              {/* Product Code Tag - technical mono */}
              <div className="absolute top-3 right-3 bg-slate-900 text-white font-mono text-[10px] font-semibold px-3 py-1.5 z-30 rounded-lg shadow-md tracking-wide">
                {product.ref}
              </div>
              
              {/* Image Container */}
              <div className="aspect-[4/5] overflow-hidden relative border border-slate-200 dark:border-slate-700 mt-8 rounded-xl">
                {/* Grid overlay */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CjxwYXRoIGQ9Ik0gMjAgMCBMIDAgMCAwIDIwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+Cjwvc3ZnPg==')] z-20 opacity-30 pointer-events-none"></div>
                
                {/* Product Image */}
                <div 
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110 filter  group-hover:grayscale-0" 
                  style={{ backgroundImage: `url('${product.image}')` }}
                ></div>
                
                {/* Hover icon */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity z-20">
                  <span className="material-symbols-outlined text-9xl text-white/20">grain</span>
                </div>
                
                {/* Product Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-slate-900/95 backdrop-blur-sm p-4 z-30 border-t border-primary rounded-b-xl">
                  {/* Product name - Display font */}
                  <h3 className="font-display text-xl font-bold text-white mb-2">
                    {product.name}
                  </h3>
                  
                  {/* Specs - Mono font for technical data */}
                  <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-[10px] font-mono mt-3 border-t border-slate-700 pt-3">
                    {Object.entries(product.specs).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-center">
                        <span className="text-slate-500 tracking-wide">{key}:</span>
                        <span className="text-primary font-semibold">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Technical Specifications Button */}
              {/* <button 
                type="button"
                className="w-full mt-3 py-3 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-sans text-sm font-semibold hover:bg-primary hover:text-slate-900 transition-all flex justify-between px-4 items-center group/btn rounded-xl shadow-sm hover:shadow-md"
              >
                <span>View Details</span>
                <span className="material-symbols-outlined text-lg transform group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
              </button> */}
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center gap-2 mt-4">
          {products.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => scrollToIndex(index)}
              aria-label={`Go to product ${index + 1}`}
              className={`w-8 h-2 rounded-full transition-all duration-300 hover:scale-110 ${
                activeIndex === index 
                  ? 'bg-primary shadow-md' 
                  : 'bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-600'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Hide scrollbar styles */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default Products;