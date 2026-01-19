import React, { useEffect, useRef, useState } from 'react';

const Process: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState<number[]>([0, 0, 0, 0]);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const newProgress = rowRefs.current.map((ref) => {
        if (!ref) return 0;
        const rect = ref.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const elementTop = rect.top;
        const elementHeight = rect.height;
        
        const start = windowHeight * 0.9;
        const end = windowHeight * 0.1 - elementHeight;
        const progress = Math.max(0, Math.min(1, (start - elementTop) / (start - end)));
        
        return progress;
      });
      setScrollProgress(newProgress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const steps = [
    { 
      id: '01', 
      title: 'Harvest', 
      icon: 'agriculture', 
      subtitle: 'Farm Fresh Spices',
      detail: 'Kerala Plantations',
    },
    { 
      id: '02', 
      title: 'Quality Lab', 
      icon: 'science', 
      subtitle: 'ISO 22000 Certified',
      detail: 'Lab Tested & Verified',
    },
    { 
      id: '03', 
      title: 'Processing', 
      icon: 'inventory_2', 
      subtitle: 'Vacuum Sealed',
      detail: 'Individual & Bulk Packs',
    },
    { 
      id: '04', 
      title: 'Logistics', 
      icon: 'flight_takeoff', 
      subtitle: 'Air & Sea Freight',
      detail: 'Worldwide Delivery',
    },
  ];

  // HARVEST ANIMATION - SMOOTH TRACTOR
  const HarvestAnimation = ({ progress }: { progress: number }) => {
    const startX = 100;
    const startY = 5;
    const endX = 2;
    const endY = 120;
    
    const currentX = startX - (progress * (startX - endX));
    const currentY = startY + (progress * (endY - startY));
    
    return (
      <div className="relative w-full h-full overflow-hidden rounded-2xl">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('../images/bg.jpg')`,
          }}
        />
        
        {/* TRACTOR - SMOOTH MOVEMENT */}
        <div 
          className="absolute z-20 will-change-transform"
          style={{ 
            left: `${currentX}%`,
            top: `${currentY}%`,
            width: '400px',
            height: 'auto',
            objectFit: 'contain',
            transform: `translate(-50%, -50%)`,
            transition: 'left 0.15s cubic-bezier(0.25, 0.1, 0.25, 1), top 0.15s cubic-bezier(0.25, 0.1, 0.25, 1)',
          }}
        >
          <img 
            src="../images/tra.png"
            alt="Tractor"
            className="drop-shadow-2xl"
            style={{ 
              filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.4))',
            }}
          />
        </div>
        
        <div className="absolute top-4 left-4 bg-white/95 dark:bg-slate-800/95 px-4 py-2 rounded-lg shadow-md z-30">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-green-600">location_on</span>
            <span className="text-sm font-mono text-slate-600 dark:text-slate-300 tracking-wide">KERALA SPICE FIELDS</span>
          </div>
        </div>
      </div>
    );
  };

  // QUALITY LAB ANIMATION
  const QualityLabAnimation = ({ progress }: { progress: number }) => {
    const qualityChecks = [
      { label: 'Purity Check', icon: 'verified', threshold: 0.3 },
      { label: 'Grade Analysis', icon: 'workspace_premium', threshold: 0.55 },
      { label: 'Certification', icon: 'check_circle', threshold: 0.8 },
    ];
    
    return (
      <div className="relative w-full h-full overflow-hidden rounded-2xl">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=1200&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/80 to-slate-900/70 backdrop-blur-[2px]" />
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-8 md:p-12 z-20">
          <div className="bg-white/98 dark:bg-slate-800/98 rounded-xl shadow-2xl border border-cyan-200 dark:border-cyan-800 w-full max-w-sm sm:max-w-md backdrop-blur-sm">
            
            <div className="border-b border-slate-200 dark:border-slate-700 p-4 sm:p-5 bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-t-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-cyan-500 rounded-lg flex items-center justify-center shadow-lg flex-shrink-0">
                  <span className="material-symbols-outlined text-xl sm:text-2xl text-white">science</span>
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-base sm:text-lg font-bold text-slate-800 dark:text-white truncate">Quality Analysis</h3>
                  <p className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 truncate">ISO 22000:2018</p>
                </div>
              </div>
            </div>
            
            <div className="p-4 sm:p-5 space-y-2.5 sm:space-y-3">
              {qualityChecks.map((check, i) => {
                const isComplete = progress > check.threshold;
                const isActive = progress >= check.threshold - 0.05 && progress <= check.threshold + 0.1;
                
                return (
                  <div 
                    key={i} 
                    className={`relative flex items-center gap-2.5 sm:gap-3 p-2.5 sm:p-3 rounded-lg transition-all duration-500 ${
                      isComplete 
                        ? 'bg-green-50 dark:bg-green-900/20 border border-green-300 dark:border-green-700' 
                        : 'bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600'
                    }`}
                    style={{
                      transform: isActive ? 'scale(1.02)' : 'scale(1)',
                    }}
                  >
                    <div className={`relative flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-500 shadow-md ${
                      isComplete 
                        ? 'bg-green-500' 
                        : 'bg-slate-200 dark:bg-slate-600'
                    }`}>
                      {isComplete ? (
                        <span className={`material-symbols-outlined text-white text-base sm:text-xl ${isActive ? 'animate-bounce' : ''}`}>
                          check
                        </span>
                      ) : (
                        <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-dashed border-slate-400 dark:border-slate-500 rounded-full" />
                      )}
                      
                      {isActive && (
                        <div className="absolute inset-0 rounded-full border-2 border-green-500 animate-ping" />
                      )}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <span className={`material-symbols-outlined text-sm sm:text-base transition-all duration-500 flex-shrink-0 ${
                          isComplete ? 'text-green-600 dark:text-green-500' : 'text-slate-400'
                        }`}>
                          {check.icon}
                        </span>
                        <span className={`font-semibold text-xs sm:text-sm transition-all duration-500 truncate ${
                          isComplete 
                            ? 'text-green-700 dark:text-green-400' 
                            : 'text-slate-600 dark:text-slate-400'
                        }`}>
                          {check.label}
                        </span>
                      </div>
                    </div>
                    
                    <div className={`flex-shrink-0 px-2 py-0.5 sm:py-1 rounded text-[10px] sm:text-xs font-medium transition-all duration-500 ${
                      isComplete 
                        ? 'bg-green-500 text-white' 
                        : 'bg-slate-200 dark:bg-slate-600 text-slate-500 dark:text-slate-400'
                    }`}>
                      {isComplete ? 'Pass' : 'Wait'}
                    </div>
                  </div>
                );
              })}
            </div>
            
            <div className="border-t border-slate-200 dark:border-slate-700 p-4 sm:p-5 bg-slate-50 dark:bg-slate-800/50 rounded-b-xl">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] sm:text-xs font-medium text-slate-600 dark:text-slate-400">Overall Progress</span>
                <span className="text-xs sm:text-sm font-bold text-cyan-600 dark:text-cyan-400">{Math.round(progress * 100)}%</span>
              </div>
              <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full relative overflow-hidden"
                  style={{ 
                    width: `${progress * 100}%`,
                    transition: 'width 0.3s ease-out',
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
                </div>
              </div>
              
              {progress > 0.9 && (
                <div className="mt-3 flex items-center justify-center gap-1.5 sm:gap-2 p-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg animate-pulse">
                  <span className="material-symbols-outlined text-white text-base sm:text-lg">verified</span>
                  <span className="font-bold text-xs sm:text-sm text-white">APPROVED</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  // PROCESSING ANIMATION - SMOOTH BOX
  const ProcessingAnimation = ({ progress }: { progress: number }) => {
    const startX = 100;
    const startY = 70;
    const endX = 0;
    const endY = 40;
    
    const currentX = startX + (progress * (endX - startX));
    const currentY = startY + (progress * (endY - startY));
    
    return (
      <div className="relative w-full h-full overflow-hidden rounded-2xl">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('../images/boxbg.jpg')`,
          }}
        />
        
        {/* BOX - SMOOTH MOVEMENT */}
        <div 
          className="absolute z-20"
          style={{ 
            left: `${currentX}%`,
            top: `${currentY}%`,
            width: '700px',
            height: 'auto',
            objectFit: 'contain',
            transform: `translate(-50%, -50%)`,
            transition: 'left 0.15s cubic-bezier(0.25, 0.1, 0.25, 1), top 0.15s cubic-bezier(0.25, 0.1, 0.25, 1)',
          }}
        >
          <div className="relative">
            <img 
              src="../images/box.png"
              alt="Package"
              style={{ filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.4))' }}
            />
          </div>
        </div>
        
        <div className="absolute top-4 left-4 bg-white/95 dark:bg-slate-800/95 px-4 py-2 rounded-lg shadow-md z-30">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-amber-600">factory</span>
            <span className="text-sm font-mono text-slate-600 dark:text-slate-300 tracking-wide">PROCESSING UNIT</span>
          </div>
        </div>
      </div>
    );
  };

  // LOGISTICS ANIMATION - SMOOTH AIRPLANE
  const LogisticsAnimation = ({ progress }: { progress: number }) => {
    const startX = 50;
    const startY = 150;
    const endX = 30;
    const endY = -100;
    
    const currentX = startX + (progress * (endX - startX));
    const currentY = startY + (progress * (endY - startY));
    
    return (
      <div className="relative w-full h-full overflow-hidden rounded-2xl">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('../images/aerobg.jpg')`,
          }}
        />
        
        {/* AIRPLANE - SMOOTH MOVEMENT */}
        <div 
          className="absolute z-20"
          style={{ 
            left: `${currentX}%`,
            top: `${currentY}%`,
            width: '400px',
            height: 'auto',
            objectFit: 'contain',
            transform: `translate(-50%, -50%)`,
            transition: 'left 0.15s cubic-bezier(0.25, 0.1, 0.25, 1), top 0.15s cubic-bezier(0.25, 0.1, 0.25, 1)',
          }}
        >
          <img 
            src="../images/aeroimg.png"
            alt="Airplane"
            className="drop-shadow-2xl"
            style={{ filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.3))' }}
          />
        </div>
        
        <div 
          className="absolute z-30"
          style={{ left: `${startX}%`, top: `${startY}%`, transform: 'translate(-50%, -50%)' }}
        >
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-green-500 rounded-full shadow-lg animate-pulse" />
            <div className="bg-white/95 dark:bg-slate-800/95 px-3 py-1.5 rounded-lg shadow-md">
              <span className="text-[10px] font-mono font-bold text-green-600">🇮🇳 INDIA</span>
            </div>
          </div>
        </div>
        
        <div 
          className="absolute z-30"
          style={{ 
            left: `${endX}%`, 
            top: `${endY}%`, 
            transform: 'translate(-50%, -50%)',
            opacity: progress > 0.6 ? 1 : 0.4,
            transition: 'opacity 0.3s ease-out',
          }}
        >
          <div className="flex items-center gap-2">
            <div className="bg-white/95 dark:bg-slate-800/95 px-3 py-1.5 rounded-lg shadow-md">
              <span className="text-[10px] font-mono font-bold text-sky-600">🌍 WORLDWIDE</span>
            </div>
            <div className={`w-5 h-5 bg-sky-500 rounded-full shadow-lg ${progress > 0.6 ? 'animate-pulse' : ''}`} />
          </div>
        </div>
        
        <div className="absolute top-4 left-4 bg-white/95 dark:bg-slate-800/95 rounded-xl p-4 shadow-lg z-30">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-sky-500">flight_takeoff</span>
              <span className="text-sm font-mono font-bold text-slate-700 dark:text-slate-300">SPICE-AIR 747</span>
            </div>
            <div className="text-xs text-slate-500 space-y-1">
              <div className="flex justify-between gap-4">
                <span>Altitude:</span>
                <span className="font-mono font-medium">35,000 ft</span>
              </div>
              <div className="flex justify-between gap-4">
                <span>Speed:</span>
                <span className="font-mono font-medium">560 mph</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const animations = [HarvestAnimation, QualityLabAnimation, ProcessingAnimation, LogisticsAnimation];

  return (
    <section ref={sectionRef} id="process" className="py-20 bg-surface-light dark:bg-surface-dark relative border-t-2 border-slate-900 dark:border-white">
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20 relative">
          <div className="inline-block border border-slate-400 dark:border-slate-600 bg-white dark:bg-slate-900 px-4 py-2 mb-4 rounded-full font-mono text-[10px] tracking-[0.15em] text-slate-600 dark:text-slate-400 shadow-sm">
            HOW IT WORKS
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-[-0.02em]">
            Our Supply Chain
          </h2>
        </div>

        <div className="relative space-y-8 md:space-y-0">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 bg-gradient-to-b from-green-500 via-cyan-500 via-amber-500 to-sky-500 rounded-full opacity-30" />
          
          {steps.map((step, index) => {
            const isEven = index % 2 === 0;
            const progress = scrollProgress[index];
            const AnimationComponent = animations[index];
            
            return (
              <div
                key={step.id}
                ref={(el) => (rowRefs.current[index] = el)}
                className="relative"
              >
                <div className="hidden md:grid md:grid-cols-2 md:gap-0 min-h-[550px]">
                  <div className={`relative ${!isEven ? 'border-r-2 border-dashed border-slate-300 dark:border-slate-600' : ''}`}>
                    {isEven ? (
                      <div className="h-full p-8 pr-12">
                        <div className="h-full rounded-2xl overflow-hidden shadow-2xl border-2 border-slate-200 dark:border-slate-700">
                          <AnimationComponent progress={progress} />
                        </div>
                      </div>
                    ) : (
                      <div className="h-full flex items-center justify-end p-8 pr-12">
                        <StepCard step={step} progress={progress} align="right" />
                      </div>
                    )}
                  </div>
                  
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                    <div className="relative">
                      <div 
                        className="w-16 h-16 rounded-full bg-white dark:bg-slate-900 border-4 border-primary shadow-xl flex items-center justify-center"
                        style={{ 
                          transform: `scale(${0.8 + progress * 0.2})`,
                          transition: 'transform 0.3s ease-out',
                        }}
                      >
                        <span className="font-mono text-xl font-bold text-primary">{step.id}</span>
                      </div>
                      <div 
                        className="absolute inset-0 rounded-full border-4 border-primary animate-ping opacity-25"
                        style={{ animationDuration: '2s' }}
                      />
                    </div>
                  </div>
                  
                  <div className={`relative ${isEven ? 'border-l-2 border-dashed border-slate-300 dark:border-slate-600' : ''}`}>
                    {isEven ? (
                      <div className="h-full flex items-center justify-start p-8 pl-12">
                        <StepCard step={step} progress={progress} align="left" />
                      </div>
                    ) : (
                      <div className="h-full p-8 pl-12">
                        <div className="h-full rounded-2xl overflow-hidden shadow-2xl border-2 border-slate-200 dark:border-slate-700">
                          <AnimationComponent progress={progress} />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="md:hidden space-y-6 pb-12">
                  <div className="flex justify-center">
                    <div className="w-12 h-12 rounded-full bg-white dark:bg-slate-900 border-4 border-primary shadow-lg flex items-center justify-center">
                      <span className="font-mono text-lg font-bold text-primary">{step.id}</span>
                    </div>
                  </div>
                  
                  <div className="h-96 rounded-2xl overflow-hidden shadow-xl border-2 border-slate-200 dark:border-slate-700">
                    <AnimationComponent progress={progress} />
                  </div>
                  
                  <StepCard step={step} progress={progress} align="center" />
                  
                  {index < steps.length - 1 && (
                    <div className="flex justify-center">
                      <div className="w-1 h-12 bg-gradient-to-b from-primary to-primary/30 rounded-full" />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 border border-slate-300 dark:border-slate-700 p-6 bg-white/70 dark:bg-slate-900/70 backdrop-blur-md hidden md:block rounded-2xl shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h4 className="font-sans text-sm font-semibold text-slate-700 dark:text-slate-300">
              Delivery Timeline
            </h4>
            <span className="flex items-center gap-2 bg-green-50 dark:bg-green-900/20 px-3 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="font-mono text-[10px] font-medium text-green-600 dark:text-green-400 tracking-wide">
                EFFICIENCY: 98.4%
              </span>
            </span>
          </div>
          
          <div className="relative h-24 w-full bg-slate-100 dark:bg-slate-800 overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700">
            <div className="absolute bottom-0 left-0 w-full h-full flex items-end px-3 gap-2">
              {[20, 40, 30, 60, 50, 80, 70, 90].map((h, i) => (
                <div 
                  key={i} 
                  className="bg-primary w-full rounded-t-lg transition-all hover:opacity-80"
                  style={{ height: `${h}%`, opacity: 0.3 + (i * 0.08) }}
                />
              ))}
            </div>
            <div className="absolute top-1/2 left-0 w-full h-px bg-red-500/50 border-t border-dashed border-red-500" />
            <div className="absolute top-1/2 right-3 -translate-y-1/2 text-[9px] font-mono font-medium text-red-600 dark:text-red-400 bg-white/90 dark:bg-slate-800/90 px-2 py-1 rounded-md border border-red-200 dark:border-red-800 tracking-wide">
              TARGET
            </div>
          </div>
          
          <div className="flex justify-between mt-3 px-3">
            {['Week 1', 'Week 2', 'Week 3', 'Week 4'].map((week, i) => (
              <span key={i} className="font-sans text-[10px] text-slate-500 dark:text-slate-400">
                {week}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const StepCard = ({ 
  step, 
  progress, 
  align 
}: { 
  step: { id: string; title: string; icon: string; subtitle: string; detail: string }; 
  progress: number;
  align: 'left' | 'right' | 'center';
}) => (
  <div 
    className={`${
      align === 'right' ? 'text-right' : align === 'left' ? 'text-left' : 'text-center'
    }`}
    style={{ 
      opacity: Math.min(progress * 2, 1),
      transform: `translateY(${(1 - Math.min(progress * 2, 1)) * 30}px)`,
      transition: 'opacity 0.4s ease-out, transform 0.4s ease-out',
    }}
  >
    <div className={`inline-flex items-center gap-2 mb-4 ${align === 'right' ? 'flex-row-reverse' : ''}`}>
      <span className="px-3 py-1 bg-primary/10 dark:bg-primary/20 rounded-full font-mono text-xs font-bold text-primary tracking-wider">
        STEP {step.id}
      </span>
      <div className="w-8 h-px bg-primary" />
    </div>
    
    <div 
      className={`w-20 h-20 rounded-2xl bg-slate-100 dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-600 flex items-center justify-center mb-6 shadow-lg hover:bg-primary hover:border-primary group ${
        align === 'right' ? 'ml-auto' : align === 'center' ? 'mx-auto' : ''
      }`}
      style={{ 
        transform: `rotate(${(1 - progress) * -10}deg)`,
        transition: 'transform 0.4s ease-out, background-color 0.3s, border-color 0.3s',
      }}
    >
      <span className="material-symbols-outlined text-4xl text-slate-600 dark:text-slate-400 group-hover:text-slate-900 transition-colors">
        {step.icon}
      </span>
    </div>
    
    <h3 className="font-display text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-3">
      {step.title}
    </h3>
    
    <p className="font-sans text-lg text-slate-700 dark:text-slate-300 font-medium mb-2">
      {step.subtitle}
    </p>
    
    <p className="font-sans text-slate-500 dark:text-slate-400">
      {step.detail}
    </p>
    
    <div className={`mt-6 flex items-center gap-3 ${align === 'right' ? 'justify-end' : align === 'center' ? 'justify-center' : ''}`}>
      <div className="w-24 h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
        <div 
          className="h-full bg-primary rounded-full"
          style={{ 
            width: `${progress * 100}%`,
            transition: 'width 0.3s ease-out',
          }}
        />
      </div>
      <span className="font-mono text-xs text-slate-500 dark:text-slate-400">
        {Math.round(progress * 100)}%
      </span>
    </div>
  </div>
);

export default Process;