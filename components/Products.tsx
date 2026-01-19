import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Product } from '../types';

interface ExtendedProduct extends Product {
  bestSeller?: boolean;
  rating?: number;
  reviews?: number;
}

const products: ExtendedProduct[] = [
  {
    id: 'p1',
    name: 'Black Pepper',
    ref: 'SKU-BP001',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBpl01UhQhmF2_T4t1COYWG0azajPZPlpVm23l5ZEAmYHhY_LpuNWtfVC6aDrTTmHaQBKLclkeLuyMOPyXmkB_MQiuFC6ZCWglR-Am-8l0XlZtYRTNm7owHh6cJWAq_HLZ9wlz9eS9iIyIAOVzMIyAYJ7INh6ikCp1gB_I82ocrAIiJYwMgJOMqcpmgtMIofazMyiXWjghTB3oWJw7zwAU3wbGaNYtrZ1j8uRtQY3_JL56tV7T8IdFmgUx7jDCXxQHgbEZF-18wpqh6',
    specs: { PIPERINE: '>6%', MOISTURE: '<11%', ORIGIN: 'KERALA', GRADE: 'MG-1' },
    description: 'The King of Spices, sourced from high-altitude vines.',
    bestSeller: true,
    rating: 4.9,
    reviews: 2847
  },
  {
    id: 'p2',
    name: 'Cardamom',
    ref: 'SKU-GC042',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDmSsqcHODZNqLKprqRsEocdaObsRQvXZk8EaR0kmg3RtmeESIRIGBJsRlrnBv7GrZ3EEaq2oEXfhdoI974nn5cVR5NacdI7laxxUJ1Si5RQndIYHlUOGVDKtKPbOEuU4XAuFoG6Js2l-8LslJN54rULb56ACOB3mDPGPJDYStzCjaQhUqAXofadT_4KVnJLoLwDAGBTZEVPZRT-RYc3kFqZPGazIspw4UxCeMQw1oCDrI50TNWDJhuoUVWAODBAwZD6yRfnPhfOAKY',
    specs: { SIZE: '8MM+', COLOR: 'DEEP GREEN', ORIGIN: 'KERALA', TYPE: 'EXTRA BOLD' },
    description: 'Queen of spices with intense aroma and green pods.',
    bestSeller: true,
    rating: 4.8,
    reviews: 1923
  },
  {
    id: 'p3',
    name: 'Turmeric',
    ref: 'SKU-TM089',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBRA-9XZpVfJHtH1MShg32rownhbmrpK6J2swvHBUFkxHLYMxNXxa_U_gTwe8qj8QfF9GlZFgSjGixPuYx8WCGmAnAE95468_SVC5mVAEl-TCCyPyAgr8o6E97foUT2jy2yCXM9vtJAz6d1SS2H-zVrV5wOeAuzl1SzDjleQM4MMnx8B9ryzv7_BrrTxxhM9ta3QRe9dR9fN4mG_O_4PRWqzXKt1PyjT20s6aPWxYfQu3UxiB3cM31CfQrLbB3NV0_kaDZavUPZve3o',
    specs: { CURCUMIN: '>5%', FORM: 'FINGER/POWDER', ORIGIN: 'KERALA', PROCESS: 'STEAMED' },
    description: 'High curcumin content with vibrant golden yellow color.',
    rating: 4.7,
    reviews: 1456
  },
  {
    id: 'p4',
    name: 'Cloves',
    ref: 'SKU-CL102',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBy96QomCqoDipJ7eunQXJpVa2mEtxjPKJw-JU-c63d9jNchPScWFSK7IsNAMj92ruMV2978BbL00O3jLVOpU36GRfKqkxQPMlDhE4vVCGQbXKA85VUknioDcPFhrfNE-AhIRo1eZS2UQJ6wmhyatO3DF6zXGRJ8n7I6mbCsCYTNfKRkDf62KSN6NCHp5hQfvKeoUedv1M5v65-YvnXmPquFIbZHIZ9eCFdU0BTP0Xfpe2azzMwCDJKwbXkItUqXts2bznjNfQlielB',
    specs: { GRADE: 'LAL PARI', OIL: '>18%',ORIGIN: 'KERALA', SIZE: 'UNIFORM', PURITY: '99%' },
    description: 'Aromatic flower buds with rich oil content.',
    rating: 4.6,
    reviews: 987
  },
  {
    id: 'p5',
    name: 'Cinnamon',
    ref: 'SKU-CN078',
    image: 'https://m.media-amazon.com/images/I/511iVQP62vL._SL1229_.jpg',
    specs: { MOISTURE: '<12%', OIL: '>1.5%', ORIGIN: 'KERALA', TYPE: 'CEYLON' },
    description: 'Premium Ceylon cinnamon with sweet delicate flavor.',
    rating: 4.7,
    reviews: 1234
  },
  {
    id: 'p6',
    name: 'Mace',
    ref: 'SKU-MC056',
    image: 'https://static.wixstatic.com/media/aa6a80_ac555e156a4842ab883e07c3bb970508~mv2_d_1200_1200_s_2.jpg/v1/fill/w_575,h_575,al_c,q_85,usm_0.66_1.00_0.01/aa6a80_ac555e156a4842ab883e07c3bb970508~mv2_d_1200_1200_s_2.jpg',
    specs: { COLOR: 'ORANGE-RED', OIL: '>12%', ORIGIN: 'KERALA', GRADE: 'PREMIUM' },
    description: 'Aromatic spice with warm, sweet flavor profile.',
    rating: 4.5,
    reviews: 654
  },
  {
    id: 'p7',
    name: 'Nutmeg',
    ref: 'SKU-NM034',
    image: 'https://www.theathreya.com/wp-content/uploads/2024/01/Ingredients.png',
    specs: { SIZE: '70-80/LB', OIL: '>6%', ORIGIN: 'KERALA', MOISTURE: '<10%' },
    description: 'Whole nutmeg with intense warm spicy aroma.',
    rating: 4.6,
    reviews: 892
  },
  {
    id: 'p8',
    name: 'Cashew Nuts',
    ref: 'SKU-CW145',
    image: 'https://static.wixstatic.com/media/24d4b1_b0fa25438c6b4d35990c7f8db1b443d5~mv2.jpg/v1/fit/w_614,h_614,q_90,enc_avif,quality_auto/24d4b1_b0fa25438c6b4d35990c7f8db1b443d5~mv2.jpg',
    specs: { GRADE: 'W320', COLOR: 'WHITE', ORIGIN: 'KOLLAM', SIZE: 'LARGE' },
    description: 'Premium grade cashews, crisp and naturally sweet.',
    rating: 4.8,
    reviews: 2156
  },
  {
    id: 'p9',
    name: 'Coffee Products',
    ref: 'SKU-CF234',
    image: ' https://m.media-amazon.com/images/I/31HNx7ZvnFL.jpg',
    specs: { TYPE: 'ARABICA', ROAST: 'MEDIUM', ORIGIN: 'WAYANAD', GRADE: 'AA' },
    description: 'Premium Arabica coffee beans from Western Ghats.',
    rating: 4.7,
    reviews: 1789
  },
  {
    id: 'p10',
    name: 'Tea Products',
    ref: 'SKU-TE187',
    image: 'https://t4.ftcdn.net/jpg/16/15/40/99/240_F_1615409949_XXXAoFOCayjZcOOYQuWRoI0Jk6xH2A6n.jpg',
    specs: { TYPE: 'CTC', GRADE: 'PREMIUM', ORIGIN: 'MUNNAR', COLOR: 'GOLDEN' },
    description: 'Fresh tea leaves from high-altitude estates.',
    rating: 4.6,
    reviews: 1432
  },
  {
    id: 'p11',
    name: 'Edible Oils',
    ref: 'SKU-EO298',
    image: 'https://www.kaipunnyam.com/cdn/shop/files/kaipunnyam-coconut-oil.jpg?v=1702482707',
    specs: { TYPE: 'COCONUT', PROCESS: 'COLD PRESSED', ORIGIN: 'KERALA', PURITY: '100%' },
    description: 'Pure cold-pressed coconut oil, naturally extracted.',
    rating: 4.8,
    reviews: 2341
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
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
      
      // Card width: 280px + gap 24px = 304px per card
      const cardWidth = 304;
      const currentIndex = Math.round(scrollLeft / cardWidth);
      setActiveIndex(Math.min(currentIndex, products.length - 1));
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(checkScrollability, 100);
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollability);
      window.addEventListener('resize', checkScrollability);
    }
    return () => {
      clearTimeout(timer);
      container?.removeEventListener('scroll', checkScrollability);
      window.removeEventListener('resize', checkScrollability);
    };
  }, [checkScrollability]);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    const cardWidth = 304;
    const newPos = scrollContainerRef.current.scrollLeft + (direction === 'left' ? -cardWidth : cardWidth);
    scrollContainerRef.current.scrollTo({ left: newPos, behavior: 'smooth' });
    setTimeout(checkScrollability, 400);
  };

  const scrollToIndex = (index: number) => {
    if (!scrollContainerRef.current) return;
    const cardWidth = 304;
    scrollContainerRef.current.scrollTo({ left: index * cardWidth, behavior: 'smooth' });
    setTimeout(checkScrollability, 400);
  };

  return (
    <section id="products" className="py-24 bg-slate-50 dark:bg-slate-950 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)', backgroundSize: '32px 32px' }} 
      />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-px w-12 bg-primary" />
              <span className="font-mono text-xs font-medium text-primary tracking-[0.2em] uppercase">
                Product Catalog
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white tracking-tight">
              Premium Spices
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-md text-lg">
              Handpicked from Kerala's finest plantations, certified for quality and purity.
            </p>
          </div>
          
          {/* Navigation */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 mr-4">
              <span className="text-sm text-slate-500 dark:text-slate-400 font-mono">
                {String(activeIndex + 1).padStart(2, '0')}
              </span>
              <div className="w-8 h-px bg-slate-300 dark:bg-slate-700" />
              <span className="text-sm text-slate-400 dark:text-slate-500 font-mono">
                {String(products.length).padStart(2, '0')}
              </span>
            </div>
            <button 
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`h-12 w-12 rounded-full border border-slate-300 dark:border-slate-700 flex items-center justify-center transition-all
                ${canScrollLeft 
                  ? 'hover:bg-slate-900 hover:border-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 cursor-pointer' 
                  : 'opacity-30 cursor-not-allowed'}`}
            >
              <span className="material-symbols-outlined text-xl">west</span>
            </button>
            <button 
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`h-12 w-12 rounded-full flex items-center justify-center transition-all
                ${canScrollRight 
                  ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 cursor-pointer' 
                  : 'bg-slate-200 dark:bg-slate-800 text-slate-400 cursor-not-allowed'}`}
            >
              <span className="material-symbols-outlined text-xl">east</span>
            </button>
          </div>
        </div>

        {/* Products Grid - Fixed border clipping with padding */}
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-6 px-1 py-2 snap-x snap-mandatory scroll-smooth hide-scrollbar"
        >
          {products.map((product) => (
            <div 
              key={product.id} 
              className={`min-w-[280px] snap-start group relative flex-shrink-0 rounded-2xl overflow-hidden transition-all duration-500 
                ${product.bestSeller 
                  ? 'bg-gradient-to-b from-amber-50 to-white dark:from-amber-950/30 dark:to-slate-900 ring-1 ring-amber-200 dark:ring-amber-800/50' 
                  : 'bg-white dark:bg-slate-900 ring-1 ring-slate-200 dark:ring-slate-800'
                } hover:ring-2 hover:ring-slate-900 dark:hover:ring-white hover:shadow-xl`}
            >
              {/* Best Seller Badge */}
              {product.bestSeller && (
                <div className="absolute top-3 left-3 z-40 flex items-center gap-1.5 bg-amber-500 text-white px-2.5 py-1 rounded-full">
                  <span className="material-symbols-outlined text-xs">verified</span>
                  <span className="text-[10px] font-semibold tracking-wide uppercase">Best Seller</span>
                </div>
              )}

              {/* SKU Tag */}
              <div className="absolute top-3 right-3 z-40">
                <span className="font-mono text-[9px] text-slate-500 dark:text-slate-400 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm px-2 py-0.5 rounded-md">
                  {product.ref}
                </span>
              </div>
              
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden relative bg-slate-100 dark:bg-slate-800">
                <div 
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                  style={{ backgroundImage: `url('${product.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Content */}
              <div className="p-4">
                {/* Title & Rating */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white mb-0.5">
                      {product.name}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1">
                      {product.description}
                    </p>
                  </div>
                  {product.rating && (
                    <div className="flex-shrink-0 text-right">
                      <div className="flex items-center gap-0.5">
                        <span className="material-symbols-outlined text-amber-500 text-base">star</span>
                        <span className="font-semibold text-sm text-slate-900 dark:text-white">{product.rating}</span>
                      </div>
                      <span className="text-[10px] text-slate-400">({product.reviews?.toLocaleString()})</span>
                    </div>
                  )}
                </div>

                {/* Specs Grid */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {Object.entries(product.specs).map(([key, value]) => (
                    <div key={key} className="bg-slate-50 dark:bg-slate-800/50 rounded-lg px-2 py-1.5">
                      <div className="text-[9px] font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-0.5">
                        {key}
                      </div>
                      <div className={`text-xs font-semibold ${product.bestSeller ? 'text-amber-600 dark:text-amber-400' : 'text-slate-700 dark:text-slate-300'}`}>
                        {value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Progress Dots */}
        <div className="flex justify-center items-center gap-2 mt-8 flex-wrap">
          {products.map((product, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              aria-label={`View ${product.name}`}
              className={`rounded-full transition-all duration-300 ${
                activeIndex === index 
                  ? `w-8 h-2 ${product.bestSeller ? 'bg-amber-500' : 'bg-slate-900 dark:bg-white'}` 
                  : `w-2 h-2 ${product.bestSeller ? 'bg-amber-200 dark:bg-amber-800 hover:bg-amber-300' : 'bg-slate-300 dark:bg-slate-700 hover:bg-slate-400'}`
              }`}
            />
          ))}
        </div>
      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

export default Products;
