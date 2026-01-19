import React from 'react';

const Stats: React.FC = () => {
  return (
    <section className="py-16 bg-surface-light dark:bg-surface-dark border-b border-slate-200 dark:border-slate-800 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-10">
        <div className="h-px w-full bg-slate-900 dark:bg-white mb-8"></div>
        <div className="h-px w-full bg-slate-900 dark:bg-white mb-8"></div>
      </div>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Years Experience Card */}
          <div className=" p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 transition-all group rounded-xl shadow-lg hover:shadow-2xl hover:border-primary hover:-translate-y-1">
            <div className="flex justify-between items-start mb-4">
              {/* Icon container */}
              <div className="h-11 w-11 border border-slate-200 dark:border-slate-600 flex items-center justify-center text-slate-900 dark:text-white rounded-xl shadow-md group-hover:shadow-lg group-hover:border-primary group-hover:bg-primary/5 transition-all">
                <span className="material-symbols-outlined text-xl">history</span>
              </div>
              <span className="font-mono text-[9px] text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-full tracking-wide">
                EST 2004
              </span>
            </div>
            
            <div className="flex items-end gap-3 mb-3">
              {/* Number - Display font */}
              <p className="font-display text-5xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                20+
              </p>
              <svg className="w-24 h-10 stroke-slate-400 group-hover:stroke-primary transition-colors" fill="none" strokeWidth="2" viewBox="0 0 100 40">
                <polyline points="0,35 20,25 40,30 60,10 80,20 100,5"></polyline>
              </svg>
            </div>
            
            {/* Label - Sans font */}
            <p className="font-sans text-sm font-semibold text-slate-600 dark:text-slate-400">
              Years of Experience
            </p>
            
            {/* Progress bar */}
            <div className="mt-4 h-2 w-full bg-slate-100 dark:bg-slate-800 overflow-hidden rounded-full">
              <div className="h-full bg-primary w-[80%] rounded-full transition-all"></div>
            </div>
          </div>

          {/* Countries Served Card */}
          <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 transition-all group rounded-xl shadow-lg hover:shadow-2xl hover:border-primary hover:-translate-y-1">
            <div className="flex justify-between items-start mb-4">
              {/* Icon container */}
              <div className="h-11 w-11 border border-slate-200 dark:border-slate-600 flex items-center justify-center text-slate-900 dark:text-white rounded-xl shadow-md group-hover:shadow-lg group-hover:border-primary group-hover:bg-primary/5 transition-all">
                <span className="material-symbols-outlined text-xl">public</span>
              </div>
              <span className="font-mono text-[9px] text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-full tracking-wide">
                GLOBAL REACH
              </span>
            </div>
            
            <div className="flex items-end gap-3 mb-3">
              {/* Number - Display font */}
              <p className="font-display text-5xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                50+
              </p>
              <div className="flex gap-1 items-end h-10 pb-1">
                {/* Bar chart elements */}
                <div className="w-2 bg-slate-300 dark:bg-slate-700 h-[40%] group-hover:bg-primary rounded-full transition-colors"></div>
                <div className="w-2 bg-slate-300 dark:bg-slate-700 h-[60%] group-hover:bg-primary rounded-full transition-colors"></div>
                <div className="w-2 bg-slate-300 dark:bg-slate-700 h-[100%] group-hover:bg-primary rounded-full transition-colors"></div>
              </div>
            </div>
            
            {/* Label - Sans font */}
            <p className="font-sans text-sm font-semibold text-slate-600 dark:text-slate-400">
              Countries Served
            </p>
            
            {/* Indicator bars */}
            <div className="mt-4 flex gap-1">
              <div className="h-2 w-3 bg-slate-900 dark:bg-white rounded-full"></div>
              <div className="h-2 w-3 bg-slate-900 dark:bg-white rounded-full"></div>
              <div className="h-2 w-3 bg-slate-900 dark:bg-white rounded-full"></div>
              <div className="h-2 w-3 bg-slate-900 dark:bg-white opacity-20 rounded-full"></div>
            </div>
          </div>

          {/* Organic Certified Card */}
          <div className=" p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 transition-all group rounded-xl shadow-lg hover:shadow-2xl hover:border-primary hover:-translate-y-1">
            <div className="flex justify-between items-start mb-4">
              {/* Icon container */}
              <div className="h-11 w-11 border border-slate-200 dark:border-slate-600 flex items-center justify-center text-slate-900 dark:text-white rounded-xl shadow-md group-hover:shadow-lg group-hover:border-primary group-hover:bg-primary/5 transition-all">
                <span className="material-symbols-outlined text-xl">verified</span>
              </div>
              <span className="font-mono text-[9px] text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-full tracking-wide">
                CERTIFIED
              </span>
            </div>
            
            <div className="flex items-end gap-3 mb-3">
              {/* Number - Display font */}
              <p className="font-display text-5xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                100%
              </p>
              {/* Circular progress indicator */}
              <div className="w-10 h-10 rounded-full border-4 border-slate-200 dark:border-slate-700 border-t-primary border-r-primary transform rotate-45 group-hover:rotate-180 transition-transform duration-700"></div>
            </div>
            
            {/* Label - Sans font */}
            <p className="font-sans text-sm font-semibold text-slate-600 dark:text-slate-400">
              Organic Certified
            </p>
            
            {/* Status badge */}
            <div className="mt-4 inline-flex items-center gap-1.5 text-[10px] font-mono font-medium text-primary bg-primary/10 px-3 py-1.5 rounded-full border border-primary/20">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="tracking-wide">VERIFIED</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Stats;