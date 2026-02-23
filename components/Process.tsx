import React, { useEffect, useRef, useState, useMemo } from 'react';

const Process: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState<number[]>([0, 0, 0, 0]);
  const [horizontalProgress, setHorizontalProgress] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const stickyRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !stickyRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollableDistance = sectionHeight - windowHeight;

      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / scrollableDistance));
      setHorizontalProgress(progress);

      const stepProgress = [0, 1, 2, 3].map((i) => {
        const stepStart = i * 0.25;
        const stepEnd = (i + 1) * 0.25;
        if (progress < stepStart) return 0;
        if (progress > stepEnd) return 1;
        return (progress - stepStart) / 0.25;
      });

      setScrollProgress(stepProgress);
      setActiveStep(Math.min(3, Math.floor(progress * 4)));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const steps = useMemo(() => [
    { 
      id: '01', 
      title: 'Harvest', 
      icon: 'agriculture', 
      subtitle: 'Farm Fresh Spices', 
      detail: 'Sourced from Kerala\'s Western Ghats — one of the world\'s finest spice-growing regions. Our Green Cardamom is hand-harvested at peak maturity for vibrant color, bold aroma, and clean 8mm+ grading. Black Pepper is selectively handpicked at optimal ripeness, then sun-dried in Kerala\'s mountain climate to develop deep color, high piperine content, and concentrated flavor with long shelf stability.',
      highlights: ['Western Ghats Origin', 'Hand-Harvested', '8mm+ Grading'],
      color: 'green',
      bgImage: 'https://images.unsplash.com/photo-1627920769842-6887c6df05ca?q=80&w=1333&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      label: 'KERALA SPICE FIELDS',
      labelIcon: 'location_on',
      description: 'Hand-picked premium spices from Kerala\'s finest plantations'
    },
    { 
      id: '02', 
      title: 'Quality Lab', 
      icon: 'science', 
      subtitle: 'ISO 22000 Certified', 
      detail: 'Every batch undergoes rigorous laboratory testing before shipment to meet international food safety and export standards. We test for pesticide residue (MRL compliance), aflatoxin levels, microbiological safety including Salmonella-free certification, moisture content, and purity analysis. Full certifications and lab reports provided per importing country\'s regulations — Europe, Middle East, Asia, or North America.',
      highlights: ['MRL Compliant', 'Salmonella-Free', 'Global Certified'],
      color: 'cyan',
      bgImage: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=1200&q=80',
      label: 'QUALITY TESTING',
      labelIcon: 'science',
      description: 'Rigorous testing ensures premium quality standards'
    },
    { 
      id: '03', 
      title: 'Processing', 
      icon: 'inventory_2', 
      subtitle: 'Vacuum Sealed', 
      detail: 'Built to meet international export standards with precision. Every batch undergoes systematic cleaning, grading, density separation, and moisture control to preserve natural aroma and oil content. Comprehensive lab testing backs every shipment with documented quality assurance. We offer bulk export packaging (25kg/50kg), vacuum packing for aroma retention, retail-ready packs, and fully customized private label solutions.',
      highlights: ['Density Graded', 'Vacuum Sealed', 'Private Label'],
      color: 'amber',
      bgImage: 'https://assets.lummi.ai/assets/QmZReNuLf9jLba9eXLQSuNSCpXoHHaSS4ZqD7JAUR3wjgD?auto=format&w=1500',
      label: 'PROCESSING UNIT',
      labelIcon: 'factory',
      description: 'State-of-the-art processing for maximum freshness'
    },
    { 
      id: '04', 
      title: 'Logistics', 
      icon: 'flight_takeoff', 
      subtitle: 'Air & Sea Freight', 
      detail: 'Logistics managed with the same precision as our sourcing. We coordinate with trusted freight partners for both air and sea shipments based on urgency and cost optimization. Every consignment is professionally documented to meet destination-country regulations — including invoice, packing list, certificate of origin, phytosanitary certification, and lab reports. Secure container loading with full shipment tracking worldwide.',
      highlights: ['Air & Sea Freight', 'Full Documentation', 'Global Tracking'],
      color: 'sky',
      bgImage: 'https://images.unsplash.com/photo-1566935843973-aed0ddcb0ecc?q=80&w=1129&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      label: 'GLOBAL SHIPPING',
      labelIcon: 'flight_takeoff',
      description: 'Fast & reliable delivery to any destination worldwide'
    },
  ], []);

  const easeInOutSine = (t: number) => -(Math.cos(Math.PI * t) - 1) / 2;

  const StaticCard = ({ step }: { step: typeof steps[0] }) => (
    <div className="relative w-full h-full overflow-hidden rounded-2xl">
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105" 
        style={{ backgroundImage: `url('${step.bgImage}')` }} 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30" />
      
      <div className="absolute top-4 left-4 bg-white/95 dark:bg-slate-800/95 px-4 py-2 rounded-lg shadow-md z-10">
        <div className="flex items-center gap-2">
          <span className={`material-symbols-outlined text-${step.color}-600`}>{step.labelIcon}</span>
          <span className="text-sm font-mono text-slate-600 dark:text-slate-300 tracking-wide">{step.label}</span>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
        <div className="bg-black/30 backdrop-blur-sm rounded-xl p-4 border border-white/10">
          <h3 className="text-2xl font-display font-bold text-white mb-2">{step.subtitle}</h3>
          <p className="text-white/80 text-sm font-sans">{step.description}</p>
        </div>
      </div>
    </div>
  );

  const travelingImages = useMemo(() => [
    {
      src: 'https://res.cloudinary.com/dlnfi4gab/image/upload/v1769864136/tractor_new_ib0xhf.png',
      alt: 'Tractor - Harvest to Quality Lab',
      transitionStart: 0,
      transitionEnd: 0.375,
      width: 320,
      noFade: true,
      zIndex: 10,
      startX: 73,
      endX: 50,
    },
    {
      src: 'https://res.cloudinary.com/dlnfi4gab/image/upload/v1769864136/truck_new_pwbiom.png',
      alt: 'Truck - Quality Lab to Processing',
      transitionStart: 0.375,
      transitionEnd: 0.625,
      width: 280,
      noFade: true,
      zIndex: 10,
      startX: 73,
      endX: 50,
    },
    {
      src: 'https://res.cloudinary.com/dlnfi4gab/image/upload/v1769863386/plain_new_zpac6i.png',
      alt: 'Plane - Processing to Logistics',
      transitionStart: 0.625,
      transitionEnd: 0.875,
      width: 240,
      noFade: true,
      zIndex: 10,
      startX: 73,
      endX: 50,
    },
  ], []);

  const translateX = horizontalProgress * (steps.length - 1) * -100;

  return (
    <section 
      ref={sectionRef} 
      id="process" 
      className="relative bg-surface-light dark:bg-surface-dark border-t-2 dark:border-white"
      style={{ height: '800vh' }}
    >
      <div 
        ref={stickyRef}
        className="sticky top-0 h-screen overflow-hidden"
      >
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
        
        {/* Traveling Images */}
        <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 10 }}>
          {travelingImages.map((img, i) => {
            const rawProgress = (horizontalProgress - img.transitionStart) / (img.transitionEnd - img.transitionStart);
            const clampedProgress = Math.max(0, Math.min(1, rawProgress));
            const easedProgress = easeInOutSine(clampedProgress);

            const isInTransitionRange = 
              horizontalProgress >= img.transitionStart && 
              horizontalProgress <= img.transitionEnd;
            
            const opacity = isInTransitionRange ? 1 : 0;
            
            const travelDistance = img.startX - img.endX;
            const leftPos = img.startX - (easedProgress * travelDistance);
            const topPos = 50;

            return (
              <div
                key={i}
                className="absolute will-change-transform"
                style={{
                  left: `${leftPos}%`,
                  top: `${topPos}%`,
                  transform: 'translate(-50%, -50%)',
                  opacity: opacity,
                  zIndex: img.zIndex,
                  transition: 'opacity 0.3s ease-out',
                }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-auto pointer-events-none select-none"
                  style={{
                    width: `${img.width}px`,
                    maxWidth: '30vw',
                    filter: 'drop-shadow(0 25px 50px rgba(0,0,0,0.5))',
                  }}
                />
              </div>
            );
          })}
        </div>
        
        {/* Main content */}
        <div className="h-full flex flex-col py-6 px-4 sm:px-6 lg:px-8 relative z-20">
          {/* Header */}
          <div className="text-center mb-4 flex-shrink-0">
            <div className="inline-block border border-slate-400 dark:border-slate-600 bg-white dark:bg-slate-900 px-4 py-1.5 mb-2 rounded-full font-mono text-[10px] tracking-[0.15em] text-slate-600 dark:text-slate-400 shadow-sm">
              HOW IT WORKS
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-slate-900 dark:text-white tracking-[-0.02em]">
              Our Supply Chain
            </h2>
          </div>

          {/* Progress Indicator */}
          <div className="max-w-4xl mx-auto w-full mb-4 flex-shrink-0 px-4">
            <div className="flex items-center justify-between mb-2">
              {steps.map((step, i) => (
                <div key={step.id} className="flex flex-col items-center">
                  <div 
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${
                      activeStep >= i 
                        ? `bg-${step.color}-500 text-white shadow-lg` 
                        : 'bg-slate-200 dark:bg-slate-700 text-slate-400'
                    }`}
                  >
                    <span className="material-symbols-outlined text-lg">{step.icon}</span>
                  </div>
                  <span className={`text-[10px] font-sans font-medium mt-1 transition-all duration-500 ${activeStep >= i ? 'text-slate-700 dark:text-white' : 'text-slate-400'}`}>
                    {step.title}
                  </span>
                </div>
              ))}
            </div>
            <div className="relative h-1 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
              <div 
                className="absolute h-full bg-gradient-to-r from-green-500 via-cyan-500 via-amber-500 to-sky-500 rounded-full transition-all duration-300"
                style={{ width: `${horizontalProgress * 100}%` }}
              />
            </div>
          </div>

          {/* Horizontal Scroll Cards */}
          <div className="flex-1 overflow-hidden relative">
            <div 
              className="flex h-full transition-transform duration-300 ease-out"
              style={{ 
                transform: `translateX(${translateX}vw)`,
                width: `${steps.length * 100}vw`,
              }}
            >
              {steps.map((step, index) => {
                const progress = scrollProgress[index];

                return (
                  <div
                    key={step.id}
                    className="w-screen h-full flex-shrink-0 px-4 sm:px-8 lg:px-16"
                  >
                    <div className="max-w-5xl mx-auto h-full">
                      <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden h-full flex flex-col lg:flex-row">
                        {/* Static Image Area */}
                        <div className="flex-1 lg:flex-[2] p-3 sm:p-4 min-h-[250px] lg:min-h-0 relative z-10">
                          <div className="h-full rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700">
                            <StaticCard step={step} />
                          </div>
                        </div>

                        {/* Info Panel */}
                        <div className={`lg:w-72 xl:w-80 bg-gradient-to-br from-${step.color}-500 to-${step.color}-600 p-4 sm:p-5 flex flex-col justify-between relative z-30 shadow-xl`}>
                          <div className="flex-1 flex flex-col min-h-0">
                            <div className="flex items-center gap-3 mb-3 flex-shrink-0">
                              <div className="w-11 h-11 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                                <span className="material-symbols-outlined text-xl text-white">{step.icon}</span>
                              </div>
                              <div>
                                <div className="text-white/60 text-[10px] font-mono tracking-[0.12em]">STEP {step.id}</div>
                                <h3 className="text-lg font-display font-bold text-white leading-tight">{step.title}</h3>
                              </div>
                            </div>
                            
                            <div className="mb-3 flex-shrink-0">
                              <p className="text-white font-sans font-semibold text-sm">{step.subtitle}</p>
                            </div>

                            <p className="text-white/75 text-xs font-sans leading-relaxed mb-3 flex-1">{step.detail}</p>

                            {/* Highlight Tags */}
                            <div className="flex flex-wrap gap-1.5 mb-3 flex-shrink-0">
                              {step.highlights.map((tag, i) => (
                                <span 
                                  key={i} 
                                  className="inline-flex items-center gap-1 px-2.5 py-1 bg-white/15 backdrop-blur-sm rounded-full text-[10px] font-sans font-medium text-white border border-white/10"
                                >
                                  <span className="material-symbols-outlined" style={{ fontSize: '10px' }}>check_circle</span>
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Progress Footer */}
                          <div className="flex-shrink-0 pt-2 border-t border-white/15">
                            <div className="flex justify-between items-center mb-1.5">
                              <span className="text-white/60 text-[10px] font-sans uppercase tracking-wider">Progress</span>
                              <span className="text-white font-mono font-bold text-sm">{Math.round(progress * 100)}%</span>
                            </div>
                            <div className="h-1.5 bg-white/20 rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-white rounded-full transition-all duration-500"
                                style={{ width: `${progress * 100}%` }}
                              />
                            </div>
                            {progress > 0.9 && (
                              <div className="mt-2 flex items-center justify-center gap-1.5 p-1.5 bg-white/20 backdrop-blur-sm rounded-lg">
                                <span className="material-symbols-outlined text-white text-sm">check_circle</span>
                                <span className="text-white font-sans font-bold text-xs">Complete</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Scroll Hint */}
          <div className="flex items-center justify-center gap-3 mt-4 flex-shrink-0">
            <div className="flex gap-1.5">
              {steps.map((_, i) => (
                <div 
                  key={i} 
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    activeStep === i ? 'bg-primary w-8' : 'bg-slate-300 dark:bg-slate-600 w-1.5'
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-sans flex items-center gap-1">
              <span className="material-symbols-outlined text-sm animate-bounce">keyboard_double_arrow_down</span>
              Scroll to explore
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;