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

      // Calculate how far through the section we've scrolled
      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / scrollableDistance));
      setHorizontalProgress(progress);

      // Calculate individual step progress
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

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const steps = useMemo(() => [
    { id: '01', title: 'Harvest', icon: 'agriculture', subtitle: 'Farm Fresh Spices', detail: 'Kerala Plantations', color: 'green' },
    { id: '02', title: 'Quality Lab', icon: 'science', subtitle: 'ISO 22000 Certified', detail: 'Lab Tested & Verified', color: 'cyan' },
    { id: '03', title: 'Processing', icon: 'inventory_2', subtitle: 'Vacuum Sealed', detail: 'Individual & Bulk Packs', color: 'amber' },
    { id: '04', title: 'Logistics', icon: 'flight_takeoff', subtitle: 'Air & Sea Freight', detail: 'Worldwide Delivery', color: 'sky' },
  ], []);

  const lerp = (start: number, end: number, progress: number) => start + progress * (end - start);

  const movingStyle = (x: number, y: number) => ({
    left: `${x}%`, top: `${y}%`,
    transform: 'translate(-50%, -50%)',
    transition: 'left 0.1s ease-out, top 0.1s ease-out',
  });

  const AnimationWrapper = ({ bg, children, label, labelIcon, labelColor = 'green' }: any) => (
    <div className="relative w-full h-full overflow-hidden rounded-2xl">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${bg}')` }} />
      {children}
      <div className="absolute top-4 left-4 bg-white/95 dark:bg-slate-800/95 px-4 py-2 rounded-lg shadow-md z-30">
        <div className="flex items-center gap-2">
          <span className={`material-symbols-outlined text-${labelColor}-600`}>{labelIcon}</span>
          <span className="text-sm font-mono text-slate-600 dark:text-slate-300 tracking-wide">{label}</span>
        </div>
      </div>
    </div>
  );

  const HarvestAnimation = ({ progress }: { progress: number }) => (
    <AnimationWrapper bg="https://res.cloudinary.com/dlnfi4gab/image/upload/v1768828455/bg_hxyh3k.jpg" label="KERALA SPICE FIELDS" labelIcon="location_on">
      <div className="absolute z-20 will-change-transform" style={{ ...movingStyle(lerp(100, 2, progress), lerp(5, 120, progress)), width: '400px' }}>
        <img src="https://res.cloudinary.com/dlnfi4gab/image/upload/v1768828456/tra_mmokoi.png" alt="Tractor" style={{ filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.4))' }} />
      </div>
    </AnimationWrapper>
  );

  const QualityLabAnimation = ({ progress }: { progress: number }) => {
    const checks = [
      { label: 'Purity Check', icon: 'verified', threshold: 0.3 },
      { label: 'Grade Analysis', icon: 'workspace_premium', threshold: 0.55 },
      { label: 'Certification', icon: 'check_circle', threshold: 0.8 },
    ];

    return (
      <div className="relative w-full h-full overflow-hidden rounded-2xl">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=1200&q=80')` }}>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/80 to-slate-900/70 backdrop-blur-[2px]" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center p-4 z-20">
          <div className="bg-white/98 dark:bg-slate-800/98 rounded-xl shadow-2xl border border-cyan-200 dark:border-cyan-800 w-full max-w-xs backdrop-blur-sm">
            <div className="border-b border-slate-200 dark:border-slate-700 p-3 bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-t-xl">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center shadow-lg">
                  <span className="material-symbols-outlined text-lg text-white">science</span>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-800 dark:text-white">Quality Analysis</h3>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400">ISO 22000:2018</p>
                </div>
              </div>
            </div>
            <div className="p-3 space-y-2">
              {checks.map((check, i) => {
                const isComplete = progress > check.threshold;
                const isActive = progress >= check.threshold - 0.05 && progress <= check.threshold + 0.1;
                return (
                  <div key={i} className={`flex items-center gap-2 p-2 rounded-lg transition-all duration-300 ${isComplete ? 'bg-green-50 dark:bg-green-900/20 border border-green-300 dark:border-green-700' : 'bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600'}`}>
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center ${isComplete ? 'bg-green-500' : 'bg-slate-200 dark:bg-slate-600'}`}>
                      {isComplete ? <span className={`material-symbols-outlined text-white text-xs ${isActive ? 'animate-bounce' : ''}`}>check</span> : <div className="w-2 h-2 border border-dashed border-slate-400 rounded-full" />}
                    </div>
                    <span className={`text-xs font-medium ${isComplete ? 'text-green-700 dark:text-green-400' : 'text-slate-500'}`}>{check.label}</span>
                    <div className={`ml-auto px-1.5 py-0.5 rounded text-[9px] font-medium ${isComplete ? 'bg-green-500 text-white' : 'bg-slate-200 dark:bg-slate-600 text-slate-400'}`}>{isComplete ? 'Pass' : 'Wait'}</div>
                  </div>
                );
              })}
            </div>
            <div className="p-3 border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 rounded-b-xl">
              <div className="flex justify-between mb-1">
                <span className="text-[10px] text-slate-500">Progress</span>
                <span className="text-xs font-bold text-cyan-600">{Math.round(progress * 100)}%</span>
              </div>
              <div className="h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-200" style={{ width: `${progress * 100}%` }} />
              </div>
              {progress > 0.9 && (
                <div className="mt-2 flex items-center justify-center gap-1 p-1.5 bg-green-500 rounded-lg animate-pulse">
                  <span className="material-symbols-outlined text-white text-sm">verified</span>
                  <span className="text-xs font-bold text-white">APPROVED</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const ProcessingAnimation = ({ progress }: { progress: number }) => (
    <AnimationWrapper bg="https://res.cloudinary.com/dlnfi4gab/image/upload/v1768828455/boxbg_zio8eu.jpg" label="PROCESSING UNIT" labelIcon="factory" labelColor="amber">
      <div className="absolute z-20" style={{ ...movingStyle(lerp(100, 0, progress), lerp(70, 40, progress)), width: '500px' }}>
        <img src="https://res.cloudinary.com/dlnfi4gab/image/upload/v1768828455/box_khtoll.png" alt="Package" style={{ filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.4))' }} />
      </div>
    </AnimationWrapper>
  );

  const LogisticsAnimation = ({ progress }: { progress: number }) => {
    const [startX, startY, endX, endY] = [50, 150, 30, -100];
    return (
      <div className="relative w-full h-full overflow-hidden rounded-2xl">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://res.cloudinary.com/dlnfi4gab/image/upload/v1768828455/aerobg_ajdch7.jpg')` }} />
        <div className="absolute z-20" style={{ ...movingStyle(lerp(startX, endX, progress), lerp(startY, endY, progress)), width: '300px' }}>
          <img src="https://res.cloudinary.com/dlnfi4gab/image/upload/v1768828455/aeroimg_je0lsg.png" alt="Airplane" style={{ filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.3))' }} />
        </div>
        <div className="absolute top-4 left-4 bg-white/95 dark:bg-slate-800/95 rounded-xl p-3 shadow-lg z-30">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-sky-500">flight_takeoff</span>
            <span className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300">SPICE-AIR 747</span>
          </div>
        </div>
      </div>
    );
  };

  const animations = [HarvestAnimation, QualityLabAnimation, ProcessingAnimation, LogisticsAnimation];

  // Calculate the horizontal translation
  const translateX = horizontalProgress * (steps.length - 1) * -100;

  return (
    <section 
      ref={sectionRef} 
      id="process" 
      className="relative bg-surface-light dark:bg-surface-dark border-t-2 border-slate-900 dark:border-white"
      style={{ height: '300vh' }} // Tall section for scroll distance
    >
      {/* Sticky Container */}
      <div 
        ref={stickyRef}
        className="sticky top-0 h-screen overflow-hidden"
      >
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
        
        <div className="h-full flex flex-col py-6 px-4 sm:px-6 lg:px-8">
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
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                      activeStep >= i 
                        ? `bg-${step.color}-500 text-white shadow-lg` 
                        : 'bg-slate-200 dark:bg-slate-700 text-slate-400'
                    }`}
                  >
                    <span className="material-symbols-outlined text-lg">{step.icon}</span>
                  </div>
                  <span className={`text-[10px] font-medium mt-1 transition-all ${activeStep >= i ? 'text-slate-700 dark:text-white' : 'text-slate-400'}`}>
                    {step.title}
                  </span>
                </div>
              ))}
            </div>
            <div className="relative h-1 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
              <div 
                className="absolute h-full bg-gradient-to-r from-green-500 via-cyan-500 via-amber-500 to-sky-500 rounded-full transition-all duration-100"
                style={{ width: `${horizontalProgress * 100}%` }}
              />
            </div>
          </div>

          {/* Horizontal Scroll Cards */}
          <div className="flex-1 overflow-hidden relative">
            <div 
              className="flex h-full transition-transform duration-100 ease-out"
              style={{ 
                transform: `translateX(${translateX}vw)`,
                width: `${steps.length * 100}vw`,
              }}
            >
              {steps.map((step, index) => {
                const progress = scrollProgress[index];
                const AnimationComponent = animations[index];

                return (
                  <div
                    key={step.id}
                    className="w-screen h-full flex-shrink-0 px-4 sm:px-8 lg:px-16"
                  >
                    <div className="max-w-5xl mx-auto h-full">
                      <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden h-full flex flex-col lg:flex-row">
                        {/* Animation Area */}
                        <div className="flex-1 lg:flex-[2] p-3 sm:p-4 min-h-[250px] lg:min-h-0">
                          <div className="h-full rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700">
                            <AnimationComponent progress={progress} />
                          </div>
                        </div>

                        {/* Info Panel */}
                        <div className={`lg:w-72 xl:w-80 bg-gradient-to-br from-${step.color}-500 to-${step.color}-600 p-4 sm:p-6 flex flex-col justify-between`}>
                          <div>
                            <div className="flex items-center gap-3 mb-4">
                              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                                <span className="material-symbols-outlined text-2xl text-white">{step.icon}</span>
                              </div>
                              <div>
                                <div className="text-white/70 text-xs font-mono">STEP {step.id}</div>
                                <h3 className="text-xl font-bold text-white">{step.title}</h3>
                              </div>
                            </div>
                            <div className="space-y-2 mb-4">
                              <p className="text-white font-medium">{step.subtitle}</p>
                              <p className="text-white/70 text-sm">{step.detail}</p>
                            </div>
                          </div>

                          <div>
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-white/70 text-xs">Progress</span>
                              <span className="text-white font-bold font-mono">{Math.round(progress * 100)}%</span>
                            </div>
                            <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-white rounded-full transition-all duration-200"
                                style={{ width: `${progress * 100}%` }}
                              />
                            </div>
                            {progress > 0.9 && (
                              <div className="mt-3 flex items-center justify-center gap-2 p-2 bg-white/20 backdrop-blur-sm rounded-lg">
                                <span className="material-symbols-outlined text-white">check_circle</span>
                                <span className="text-white font-bold text-sm">Complete</span>
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
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    activeStep === i ? 'bg-primary w-8' : 'bg-slate-300 dark:bg-slate-600 w-1.5'
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
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
