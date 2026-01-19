import React from 'react';
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { name: 'Q1', value: 40 },
  { name: 'Q2', value: 65 },
  { name: 'Q3', value: 50 },
  { name: 'Q4', value: 85 },
  { name: 'NOW', value: 95 },
];

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden border-b-2 border-slate-900 dark:border-white">
      {/* Grid overlay */}
      <div className="absolute inset-0 pointer-events-none z-10" style={{ backgroundImage: 'linear-gradient(rgba(13, 242, 13, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(13, 242, 13, 0.05) 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
      
      {/* Corner label */}
      <div className="absolute bottom-10 right-10 font-mono text-[10px] text-primary/70 z-20 hidden lg:block tracking-[0.2em] uppercase">
        Plantation View
      </div>

      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-slate-900/60 z-10"></div>
        <div className="w-full h-full bg-cover bg-center bg-no-repeat filter grayscale contrast-125" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB5ZTTOY3BTlZ5ICTGqmaaO5cueBTH1D2aBxpRblut5Xck5rYK3uUunMfpBXrXYFHg3PHpEqsUrMSI0dtRbW-rUjLv4vReS19aZFsAJmxvi7Kir_U9HvXHCd2j32S9TtzksA-XvzYIosn_3N7hf-5aOVHVyOspE2hARqORCBgLk9UJ2L1L5S6wDgG1ic9n_vikFSY03sQ6Sd6X8CUIcuQ48-kTjp93GJ1bMDtjrUkziCyP1VmC5Thot3QE9KRVoq0qWmaQJpiejaK2n')" }}></div>
      </div>

      <div className="relative z-20 w-full max-w-[1400px] px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 relative">
            {/* Corner decoration */}
            <div className="absolute -left-6 -top-6 w-12 h-12 border-l-4 border-t-4 border-primary opacity-50 rounded-tl-lg"></div>
            
            {/* Status badge - Professional mono font */}
            <div className="inline-flex items-center border border-primary/40 bg-slate-900/80 px-5 py-2.5 text-[11px] font-mono text-primary backdrop-blur-md mb-8 shadow-lg rounded-full tracking-[0.12em]">
              <span className="animate-pulse w-2 h-2 bg-primary rounded-full mr-3"></span>
              EXPORTING TO 50+ COUNTRIES
            </div>
            
            {/* Main heading - Clean, professional display font */}
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-[1.0] tracking-[-0.03em]">
              Authentic<br/>
              <span className="text-primary">Kerala Spices</span>
            </h1>
            
            {/* Subheading - Professional, readable */}
            <p className="font-sans text-xl sm:text-2xl md:text-3xl font-medium text-white/75 mb-10 tracking-[-0.01em]">
              Global Supply Chain Excellence
            </p>
            
            {/* Info box - Technical details with mono font */}
            <div className="max-w-xl bg-black/30 backdrop-blur-md p-6 border border-white/10 rounded-2xl mb-10">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="text-center sm:text-left">
                  <p className="font-mono text-[10px] text-slate-500 uppercase tracking-[0.15em] mb-1">Source</p>
                  <p className="font-sans text-sm text-white font-medium">Idukki Hills</p>
                </div>
                <div className="text-center sm:text-left">
                  <p className="font-mono text-[10px] text-slate-500 uppercase tracking-[0.15em] mb-1">Grade</p>
                  <p className="font-sans text-sm text-white font-medium">Premium Export</p>
                </div>
                <div className="text-center sm:text-left">
                  <p className="font-mono text-[10px] text-slate-500 uppercase tracking-[0.15em] mb-1">Type</p>
                  <p className="font-sans text-sm text-white font-medium">Organic Certified</p>
                </div>
              </div>
            </div>

            {/* CTA buttons - Professional, clear call-to-action */}
            <div className="flex flex-wrap gap-4">
              <a 
                href="#products" 
                className="h-14 px-10 flex items-center justify-center bg-primary text-slate-900 font-sans font-semibold text-sm hover:bg-white transition-all duration-300 shadow-lg hover:shadow-2xl rounded-xl"
              >
                View Products
              </a>
              <a 
                href="/brochure/ZEVORA GLOBAL SPICES.pdf" 
          download='ZEVORA GLOBAL SPICES.pdf'
                className="h-14 px-10 flex items-center justify-center gap-2 border-2 border-white/70 text-white font-sans font-medium text-sm hover:bg-white hover:text-slate-900 transition-all duration-300 rounded-xl"
              >
                <span className="material-symbols-outlined text-lg">download</span>
                Download Brochure
              </a>
            </div>
          </div>

          {/* Chart container */}
          <div className="lg:col-span-4 hidden lg:block relative">
            <div className="bg-slate-900/90 border border-slate-700/50 p-6 backdrop-blur-xl shadow-2xl relative overflow-hidden group hover:border-primary/50 transition-all duration-300 rounded-2xl">
              {/* Live badge */}
              <div className="absolute top-4 right-4 flex items-center gap-1.5 font-mono text-[9px] text-slate-400 tracking-[0.15em] bg-slate-800/60 px-2.5 py-1 rounded-full">
                <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span>
                LIVE
              </div>
              
              {/* Chart title */}
              <h3 className="text-white font-sans font-semibold text-sm mb-5 pb-3 border-b border-slate-700/50">
                Market Demand Index
              </h3>
              
              {/* Chart */}
              <div className="h-40 w-full mb-3">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data}>
                    <XAxis 
                      dataKey="name" 
                      tick={{fill: '#64748b', fontSize: 10}} 
                      tickLine={false} 
                      axisLine={false} 
                    />
                    <Tooltip 
                      cursor={{fill: 'transparent'}}
                      contentStyle={{ 
                        backgroundColor: '#0f172a', 
                        borderColor: '#334155', 
                        color: '#fff', 
                        fontSize: '12px', 
                        borderRadius: '12px',
                        padding: '10px 14px',
                        boxShadow: '0 10px 40px rgba(0,0,0,0.3)'
                      }}
                    />
                    <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                      {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.name === 'NOW' ? '#0df20d' : '#475569'} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              
              {/* Chart labels */}
              <div className="flex justify-between font-mono text-[9px] text-slate-500 tracking-[0.12em]">
                <span>LOW</span>
                <span>PEAK VOLUME</span>
              </div>
            </div>
            
            {/* Decorative circle */}
            <div className="absolute -bottom-12 -right-12 w-48 h-48 border border-dashed border-primary/30 rounded-full flex items-center justify-center animate-[spin_20s_linear_infinite]">
              <div className="w-40 h-40 border border-dotted border-white/20 rounded-full"></div>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;