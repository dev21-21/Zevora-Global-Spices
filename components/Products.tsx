import React from 'react';
import { Product } from '../types';

interface ExtendedProduct extends Product {
  bestSeller?: boolean;
  rating?: number;
  reviews?: number;
}

const products: ExtendedProduct[] = [
  {
    id: 'p1',
    name: 'Cardamom',
    ref: 'SKU-BP001',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDmSsqcHODZNqLKprqRsEocdaObsRQvXZk8EaR0kmg3RtmeESIRIGBJsRlrnBv7GrZ3EEaq2oEXfhdoI974nn5cVR5NacdI7laxxUJ1Si5RQndIYHlUOGVDKtKPbOEuU4XAuFoG6Js2l-8LslJN54rULb56ACOB3mDPGPJDYStzCjaQhUqAXofadT_4KVnJLoLwDAGBTZEVPZRT-RYc3kFqZPGazIspw4UxCeMQw1oCDrI50TNWDJhuoUVWAODBAwZD6yRfnPhfOAKY',
    specs: { SIZE: '7.5mm | 8mm | 8mm+', COLOR: 'DEEP GREEN', ORIGIN: 'KERALA', TYPE: 'EXTRA BOLD' },
    description: 'Queen of spices with intense aroma and green pods.',
    bestSeller: true,
    rating: 4.9,
    reviews: 2847
  },
  {
    id: 'p2',
    name: 'Black Pepper',
    ref: 'SKU-GC042',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBpl01UhQhmF2_T4t1COYWG0azajPZPlpVm23l5ZEAmYHhY_LpuNWtfVC6aDrTTmHaQBKLclkeLuyMOPyXmkB_MQiuFC6ZCWglR-Am-8l0XlZtYRTNm7owHh6cJWAq_HLZ9wlz9eS9iIyIAOVzMIyAYJ7INh6ikCp1gB_I82ocrAIiJYwMgJOMqcpmgtMIofazMyiXWjghTB3oWJw7zwAU3wbGaNYtrZ1j8uRtQY3_JL56tV7T8IdFmgUx7jDCXxQHgbEZF-18wpqh6',
    specs: { PIPERINE: '>6%', MOISTURE: '<11%', ORIGIN: 'KERALA', GRADE: 'MG-1' },
    description: 'The King of Spices, sourced from high-altitude vines.',
    bestSeller: true,
    rating: 4.8,
    reviews: 1923
  },
];

const Products: React.FC = () => {
  return (
    <section id="products" className="py-24 bg-slate-50 dark:bg-slate-950 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)', backgroundSize: '32px 32px' }} 
      />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-primary" />
            <span className="font-mono text-xs font-medium text-primary tracking-[0.2em] uppercase">
              Product Catalog
            </span>
            <div className="h-px w-12 bg-primary" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white tracking-tight">
            Premium Spices
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-md mx-auto text-lg">
            Handpicked from Kerala's finest plantations, certified for quality and purity.
          </p>
        </div>

        {/* Two Cards Centered */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 max-w-3xl mx-auto">
          {products.map((product) => (
            <div 
              key={product.id} 
              className={`w-full sm:w-[340px] group relative flex-shrink-0 rounded-2xl overflow-hidden transition-all duration-500 
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
      </div>
    </section>
  );
};

export default Products;