import React from 'react';
import { Product } from '../types';

interface ExtendedProduct extends Product {
  bestSeller?: boolean;
  rating?: number;
  reviews?: number;
  tagline?: string;
  nickname?: string;
  origin?: string;
  keyFeatures?: string[];
  gradesSummary?: string;
  supplyHighlights?: string[];
}

const products: ExtendedProduct[] = [
  {
    id: 'p1',
    name: 'Green Cardamom',
    ref: 'SKU-BP001',
    tagline: 'PREMIUM KERALA GREEN CARDAMOM',
    nickname: 'Queen of Spices',
    origin: 'Western Ghats, Kerala',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDmSsqcHODZNqLKprqRsEocdaObsRQvXZk8EaR0kmg3RtmeESIRIGBJsRlrnBv7GrZ3EEaq2oEXfhdoI974nn5cVR5NacdI7laxxUJ1Si5RQndIYHlUOGVDKtKPbOEuU4XAuFoG6Js2l-8LslJN54rULb56ACOB3mDPGPJDYStzCjaQhUqAXofadT_4KVnJLoLwDAGBTZEVPZRT-RYc3kFqZPGazIspw4UxCeMQw1oCDrI50TNWDJhuoUVWAODBAwZD6yRfnPhfOAKY',
    specs: { SIZE: '7.5mm | 8mm | 8mm+', COLOR: 'DEEP GREEN', ORIGIN: 'KERALA', TYPE: 'EXTRA BOLD' },
    description: 'Export-grade cardamom cultivated in high-altitude estates of the Western Ghats. Handpicked, size-graded, and naturally cured for vibrant color and strong aroma retention.',
    gradesSummary: '8mm+ Premium  •  8mm Commercial  •  7.5mm Industrial',
    keyFeatures: [
      'Extra-bold capsules with deep green color',
      'High volatile oil content & aroma intensity',
      'Machine graded & lab-tested batches',
      'Bulk & private label packaging',
    ],
    supplyHighlights: ['MOQ: 300 kg', 'Worldwide shipping', 'Lab reports on request'],
    bestSeller: true,
    rating: 4.9,
    reviews: 2847,
  },
  {
    id: 'p2',
    name: 'Black Pepper',
    ref: 'SKU-GC042',
    tagline: 'PREMIUM KERALA BLACK PEPPER',
    nickname: 'Black Gold',
    origin: 'Western Ghats, Kerala',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBpl01UhQhmF2_T4t1COYWG0azajPZPlpVm23l5ZEAmYHhY_LpuNWtfVC6aDrTTmHaQBKLclkeLuyMOPyXmkB_MQiuFC6ZCWglR-Am-8l0XlZtYRTNm7owHh6cJWAq_HLZ9wlz9eS9iIyIAOVzMIyAYJ7INh6ikCp1gB_I82ocrAIiJYwMgJOMqcpmgtMIofazMyiXWjghTB3oWJw7zwAU3wbGaNYtrZ1j8uRtQY3_JL56tV7T8IdFmgUx7jDCXxQHgbEZF-18wpqh6',
    specs: { DENSITY: '550–600+ GL', PIPERINE: '>6%', ORIGIN: 'KERALA', GRADE: 'MG-1 MALABAR' },
    description: 'Authentic Malabar Black Pepper sun-dried to preserve natural piperine strength, deep black appearance, and sharp lingering heat profile demanded by serious buyers.',
    gradesSummary: '550 GL  •  580 GL  •  600+ GL Bulk Density',
    keyFeatures: [
      'Strong aroma with high oil retention',
      'Deep black color, tight wrinkled surface',
      'Machine cleaned & gravity sorted',
      'Custom private labeling available',
    ],
    supplyHighlights: ['MOQ: 300 kg', '25kg / 50kg packaging', 'Lab reports on request'],
    bestSeller: true,
    rating: 4.8,
    reviews: 1923,
  },
  {
    id: 'p3',
    name: 'Fresh Ginger',
    ref: 'SKU-FG003',
    tagline: 'PREMIUM INDIAN FRESH GINGER',
    nickname: 'Nature\'s Healer',
    origin: 'Kerala, India',
    image: 'https://res.cloudinary.com/dlnfi4gab/image/upload/v1777303334/gpt_ex4sqr.png',
    specs: {
      SIZE: 'Medium to Large',
      COLOR: 'Natural Light Brown',
      MOISTURE: '80–85%',
      PURITY: '99% Clean',
    },
    description: 'Premium quality fresh ginger sourced from the finest farms of India. Known for its strong aroma, rich flavor, and high nutritional value, our ginger is carefully selected and hygienically processed to meet international export standards.',
    gradesSummary: 'Export Grade  •  Bulk Available  •  Custom Packaging',
    keyFeatures: [
      'Strong aroma and rich flavor profile',
      'High nutritional value and 99% purity',
      'Hygienically processed for export standards',
      'Ideal for culinary, medicinal & industrial use',
    ],
    supplyHighlights: ['MOQ: 500 kg', 'Mesh Bags / Cartons', 'Worldwide shipping'],
    bestSeller: false,
    rating: 4.7,
    reviews: 1560,
  },
];

const Products: React.FC = () => {
  return (
    <section id="products" className="py-20 md:py-28 bg-slate-50 dark:bg-slate-950 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-14 md:mb-20 space-y-4">
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-primary" />
            <span className="font-mono text-xs font-medium text-primary tracking-[0.2em] uppercase">Product Catalog</span>
            <div className="h-px w-12 bg-primary" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white tracking-tight">
            Premium Spices
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-lg mx-auto text-lg">
            Handpicked from Kerala's finest plantations, certified for quality and purity.
          </p>
        </div>

        {/* Product Cards — Full Width Horizontal */}
        <div className="space-y-6">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`group relative rounded-2xl overflow-hidden transition-all duration-500
                ${product.bestSeller
                  ? 'bg-gradient-to-r from-amber-50/80 to-white dark:from-amber-950/20 dark:to-slate-900 ring-1 ring-amber-200 dark:ring-amber-800/50'
                  : 'bg-white dark:bg-slate-900 ring-1 ring-slate-200 dark:ring-slate-800'}
                hover:ring-2 hover:ring-slate-900 dark:hover:ring-white hover:shadow-2xl`}
            >
              <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                {/* Image Side */}
                <div className="lg:w-[45%] relative overflow-hidden">
                  <div className="aspect-[4/3] lg:aspect-auto lg:absolute lg:inset-0">
                    <div
                      className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                      style={{ backgroundImage: `url('${product.image}')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black/50 via-black/20 to-transparent" />
                  </div>

                  {/* Badges on Image */}
                  {product.bestSeller && (
                    <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 bg-amber-500 text-white px-3 py-1.5 rounded-full shadow-lg">
                      <span className="material-symbols-outlined text-sm">verified</span>
                      <span className="text-[11px] font-semibold tracking-wide uppercase">Best Seller</span>
                    </div>
                  )}
                  {product.nickname && (
                    <div className="absolute top-4 right-4 z-10">
                      <span className="font-mono text-[10px] text-white bg-white/20 backdrop-blur-md px-3 py-1 rounded-full font-semibold border border-white/20">
                        "{product.nickname}"
                      </span>
                    </div>
                  )}

                  {/* Origin on Image */}
                  <div className="absolute bottom-4 left-4 z-10 flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                    <span className="material-symbols-outlined text-white text-sm">location_on</span>
                    <span className="text-xs text-white font-medium">{product.origin}</span>
                  </div>

                  {/* Rating on Image */}
                  {product.rating && (
                    <div className="absolute bottom-4 right-4 z-10 flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                      <span className="material-symbols-outlined text-amber-400 text-sm">star</span>
                      <span className="text-white font-semibold text-sm">{product.rating}</span>
                      <span className="text-white/60 text-[10px]">({product.reviews?.toLocaleString()})</span>
                    </div>
                  )}
                </div>

                {/* Content Side */}
                <div className="lg:w-[55%] p-5 sm:p-6 lg:p-8 flex flex-col justify-between">
                  {/* Top Section */}
                  <div>
                    {/* Tagline + SKU */}
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-[10px] text-primary tracking-[0.15em] uppercase font-medium">
                        {product.tagline}
                      </span>
                      <span className="font-mono text-[9px] text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">
                        {product.ref}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white leading-tight mb-3">
                      {product.name}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-sans mb-5">
                      {product.description}
                    </p>

                    {/* Specs Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-5">
                      {Object.entries(product.specs).map(([key, value]) => (
                        <div key={key} className="bg-slate-50 dark:bg-slate-800/60 rounded-xl px-3 py-2.5 border border-slate-100 dark:border-slate-700/50">
                          <div className="text-[8px] font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1">
                            {key}
                          </div>
                          <div className={`text-xs font-bold ${product.bestSeller ? 'text-amber-600 dark:text-amber-400' : 'text-slate-700 dark:text-slate-300'}`}>
                            {value}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Grades */}
                    {product.gradesSummary && (
                      <div className="flex items-center gap-2.5 mb-5 px-4 py-2.5 bg-amber-50 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-800/30 rounded-xl">
                        <span className="material-symbols-outlined text-amber-500 text-lg flex-shrink-0">workspace_premium</span>
                        <span className="text-xs font-sans font-semibold text-amber-700 dark:text-amber-400">
                          {product.gradesSummary}
                        </span>
                      </div>
                    )}

                    {/* Key Features */}
                    {product.keyFeatures && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mb-5">
                        {product.keyFeatures.map((feature, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <span className="material-symbols-outlined text-green-500 flex-shrink-0 mt-0.5" style={{ fontSize: '14px' }}>check_circle</span>
                            <span className="text-xs text-slate-600 dark:text-slate-400 font-sans leading-relaxed">{feature}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Bottom Bar */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4 border-t border-slate-200 dark:border-slate-700/50">
                    <div className="flex flex-wrap gap-2 flex-1">
                      {product.supplyHighlights?.map((tag, i) => (
                        <span key={i} className="inline-flex items-center gap-1 px-2.5 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-[10px] font-mono text-slate-500 dark:text-slate-400 border border-slate-200/50 dark:border-slate-700/50">
                          <span className="material-symbols-outlined text-primary" style={{ fontSize: '11px' }}>check</span>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a
                      href="#contact"
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl text-sm font-sans font-semibold hover:bg-slate-800 dark:hover:bg-slate-100 transition-all hover:shadow-lg flex-shrink-0"
                    >
                      <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>mail</span>
                      Request Quote
                    </a>
                  </div>
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