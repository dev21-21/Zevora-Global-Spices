import React from 'react';
import LogoLoop from './LogoLoop';

const MarqueeGallery: React.FC = () => {
  const certificates = [
    { src: 'https://res.cloudinary.com/dlnfi4gab/image/upload/v1771846844/16_eccyxg.png', alt: 'Certificate 1' },
    { src: 'https://res.cloudinary.com/dlnfi4gab/image/upload/v1771846844/10_cm6ua4.png', alt: 'Certificate 2' },
    { src: 'https://res.cloudinary.com/dlnfi4gab/image/upload/v1771846844/18_cvqdtx.png', alt: 'Certificate 3' },
    { src: 'https://res.cloudinary.com/dlnfi4gab/image/upload/v1771846844/14_cff0cr.png', alt: 'Certificate 4' },
    { src: 'https://res.cloudinary.com/dlnfi4gab/image/upload/v1771846844/17_j2nt8c.png', alt: 'Certificate 5' },
    { src: 'https://res.cloudinary.com/dlnfi4gab/image/upload/v1771846845/13_jvw864.png', alt: 'Certificate 6' },
    { src: 'https://res.cloudinary.com/dlnfi4gab/image/upload/v1771846844/15_m69ipe.png', alt: 'Certificate 7' },
    { src: 'https://res.cloudinary.com/dlnfi4gab/image/upload/v1771846845/12_fm2ycv.png', alt: 'Certificate 8' },
    { src: 'https://res.cloudinary.com/dlnfi4gab/image/upload/v1771848333/11_mnxwou.png', alt: 'Certificate 9' },
    { src: 'https://res.cloudinary.com/dlnfi4gab/image/upload/v1771848333/8_siwiny.png', alt: 'Certificate 10' },
    { src: 'https://res.cloudinary.com/dlnfi4gab/image/upload/v1771846845/logo7_x4ijt3.png', alt: 'Certificate 11' },
    { src: 'https://res.cloudinary.com/dlnfi4gab/image/upload/v1771848340/9_qwsdhq.png', alt: 'Certificate 12' },
    { src: 'https://res.cloudinary.com/dlnfi4gab/image/upload/v1771846846/logo4_ebrayn.png', alt: 'Certificate 13' },
    { src: 'https://res.cloudinary.com/dlnfi4gab/image/upload/v1771846846/logo5_ucufzf.png', alt: 'Certificate 14' },
    { src: 'https://res.cloudinary.com/dlnfi4gab/image/upload/v1771846846/logo6_gn6vgk.png', alt: 'Certificate 15' },
    { src: 'https://res.cloudinary.com/dlnfi4gab/image/upload/v1771846846/logo1_xqu8gu.png', alt: 'Certificate 16' },
    { src: 'https://res.cloudinary.com/dlnfi4gab/image/upload/v1771848333/logo3_bf4pxt.png', alt: 'Certificate 17' },
    { src: 'https://res.cloudinary.com/dlnfi4gab/image/upload/v1771848334/logo2_eoketj.png', alt: 'Certificate 18' },
  ];

  const createImageCards = (images: typeof certificates) =>
    images.map((img) => ({
      node: (
        <div className="w-[280px] sm:w-[150px] h-[160px] sm:h-[150px] rounded-xl overflow-hidden group/card relative flex-shrink-0">
          <img
            src={img.src}
            alt={img.alt}
            className="w-full h-full object-contain transition-transform duration-700"
            loading="lazy"
            draggable={false}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0" />
          <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover/card:translate-y-0 transition-transform duration-300">
          </div>
        </div>
      ),
      title: img.alt,
    }));

  return (
    <section className="py-12 md:py-16 bg-surface-light dark:bg-surface-dark overflow-hidden border-t border-slate-200 dark:border-slate-700">
      <div className="text-center mb-8 md:mb-10 px-4">
        <div className="inline-block border border-slate-400 dark:border-slate-600 bg-white dark:bg-slate-900 px-4 py-1.5 mb-3 rounded-full font-mono text-[10px] tracking-[0.15em] text-slate-600 dark:text-slate-400 shadow-sm">
          CERTIFICATIONS
        </div>
        <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-[-0.02em]">
          Our <span className="text-primary">Certifications</span>
        </h2>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 font-sans max-w-md mx-auto">
          Internationally recognized certifications ensuring quality, safety, and compliance across global markets
        </p>
      </div>

      <div className="space-y-4 md:space-y-5">
        <div className="relative h-[170px] sm:h-[190px]">
          <LogoLoop
            logos={createImageCards(certificates)}
            speed={60}
            direction="left"
            logoHeight={180}
            gap={20}
            hoverSpeed={20}
            fadeOut
            ariaLabel="Certifications and compliance badges"
          />
        </div>
      </div>

      {/* <div className="flex items-center justify-center gap-3 mt-8 md:mt-10 px-4">
        <div className="h-px flex-1 max-w-[80px] bg-slate-300 dark:bg-slate-600" />
        <span className="text-[10px] font-mono tracking-[0.2em] text-slate-400 dark:text-slate-500">
          ZEVORA GLOBAL SPICES
        </span>
        <div className="h-px flex-1 max-w-[80px] bg-slate-300 dark:bg-slate-600" />
      </div> */}
    </section>
  );
};

export default MarqueeGallery;