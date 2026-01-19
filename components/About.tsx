import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-background-dark border-b-4 border-double border-slate-200">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-1/2 relative">
            {/* Main image container - rounded */}
            <div className="border-2 border-slate-900 dark:border-white p-2 bg-slate-100 dark:bg-slate-900 rotate-1 rounded-xl overflow-hidden shadow-lg">
              <div className="grid grid-cols-2 gap-2">
                <div className="space-y-2">
                  {/* Images - rounded */}
                  <div className="h-48 w-full bg-cover bg-center filter contrast-125 border border-slate-400 rounded-lg hover:grayscale-0 transition-all duration-500" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAc69EfsBfzF8nZAdeOU9OJfOJ843naIhNw2x95Zkn3edD9gBoNiozotZzOGllZdetf9_vsVBFSS_rHref7O47zlxG0VBo3sykVMr5HY0QQesOYIFQMfwpLteLMDW360WyobQiquNvwOy5rr82eoWU62VNLg6CO0gKNmiot4mVJcqUn0J9HvLiM1ZNbXs0z309dcSIg80rLRoHpkdckK02zkNfs0VXK8BWbm554bPKhQk-jn6ToMLJ0x2VrsMBHfI-YQecqOzIW3mc-')" }}></div>
                  <div className="h-64 w-full bg-cover bg-center filter contrast-125 border border-slate-400 rounded-lg hover:grayscale-0 transition-all duration-500" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDi6g36sbjc6coOwlab1YGK0WlDvFNOhFFvTw4vRL2xnQ0n5SihExICygQeeOfBJqiZ1IEmjJwypNmmCjq6w4nfIdxvv4WUmPgZhGlq-Z1pxDWLzaqQBskKAFrCX8rZ4lAV-BDLKszPHevmH3kNZMXj_gPh26OBMX0EYvJNYnYhvN6dvbCmP2UVqptG5pqqo_HkZaOeCrpGwYMTp1GNtcdYSd0n6saBDA8oDXNKoThGbsWglsXuRWhhzOB_EyB3CzTrD7DENzlPLMoB')" }}></div>
                </div>
                <div className="space-y-2 pt-8">
                  <div className="h-64 w-full bg-cover bg-center filter contrast-125 border border-slate-400 rounded-lg hover:grayscale-0 transition-all duration-500" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuARW4n64fAHzgyaZfSiWjFHSkXQgpLEsgHTorMtro9PykHZck0G2EsfftYJKAAh5IU2PvVm0bYo0azdQDUNHVKKQhtwS1yVFNfafPk-lYvIZVYTXJ0npRjaf3Ev037Bi_xcK5MHWMJFjD8PPo66ng1DHQLUF_AlUuS6lem2SwDBjVvcDQNMdArFgt5IMotNfx959JxP4rne07TTTJPw6FnsYZZ-WoDUPV6NiAOzoFmAGLT_Vn1dJ0EeCAHUfgImebRJ82ow1bhCFwqd')" }}></div>
                  <div className="h-48 w-full bg-cover bg-center filter contrast-125 border border-slate-400 rounded-lg hover:grayscale-0 transition-all duration-500" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAR5CxcKtZL6i0fbhS2yLDzOzjhNA6tK24t6MCwX0m-t6GYH-Dh7sAdPNiC2n2X8CThKi_NCoj-D3b60xZEERRMWB7jgE4BY0--qKI8VyH8AyFavmK9AFP93ws751w7buTxSIukARaFR1eMsc8w94fXc92kUvKlbRhlopJjvOuefRIO2Nj5pkmFVxm5SU8H3XYy_yydxZF6HwyJcU3MLhFStd17PGC0d3z3aart-oDHTPlMfZVp6VvczPdiq3rCC7uaP3HPl20YSKOM')" }}></div>
                </div>
              </div>
            </div>
            
            {/* AUTHENTIC STAMP DESIGN */}
            <div className="absolute bottom-6 -right-6 transform -rotate-12 pointer-events-none">
              <div className="relative w-36 h-36">
                {/* Outer ring with distressed effect */}
                <svg 
                  viewBox="0 0 200 200" 
                  className="absolute inset-0 w-full h-full"
                  style={{ filter: 'url(#stamp-rough)' }}
                >
                  <defs>
                    <filter id="stamp-rough">
                      <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="5" result="noise"/>
                      <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" xChannelSelector="R" yChannelSelector="G"/>
                    </filter>
                  </defs>
                  
                  {/* Outer circle */}
                  <circle 
                    cx="100" 
                    cy="100" 
                    r="95" 
                    fill="none" 
                    stroke="#dc2626" 
                    strokeWidth="4"
                    strokeDasharray="2 1"
                    opacity="0.9"
                  />
                  
                  {/* Second circle */}
                  <circle 
                    cx="100" 
                    cy="100" 
                    r="88" 
                    fill="none" 
                    stroke="#dc2626" 
                    strokeWidth="2"
                    opacity="0.85"
                  />
                  
                  {/* Inner circle */}
                  <circle 
                    cx="100" 
                    cy="100" 
                    r="82" 
                    fill="none" 
                    stroke="#dc2626" 
                    strokeWidth="1"
                    opacity="0.7"
                  />
                  
                  {/* Top curved text path */}
                  <defs>
                    <path 
                      id="topTextPath" 
                      d="M 30 100 A 70 70 0 0 1 170 100"
                      fill="none"
                    />
                    <path 
                      id="bottomTextPath" 
                      d="M 170 100 A 70 70 0 0 1 30 100"
                      fill="none"
                    />
                  </defs>
                  
                  {/* Top text - CERTIFIED ORIGIN */}
                  <text 
                    fill="#dc2626" 
                    fontSize="14" 
                    fontFamily="Georgia, serif"
                    fontWeight="bold"
                    letterSpacing="3"
                  >
                    <textPath href="#topTextPath" startOffset="50%" textAnchor="middle">
                      CERTIFIED ORIGIN
                    </textPath>
                  </text>
                  
                  {/* Bottom text - KERALA INDIA */}
                  <text 
                    fill="#dc2626" 
                    fontSize="12" 
                    fontFamily="Georgia, serif"
                    fontWeight="bold"
                    letterSpacing="4"
                  >
                    <textPath href="#bottomTextPath" startOffset="50%" textAnchor="middle">
                      ★ KERALA • INDIA ★
                    </textPath>
                  </text>
                  
                  {/* Center star decorations */}
                  <text x="35" y="105" fill="#dc2626" fontSize="16" opacity="0.9">★</text>
                  <text x="155" y="105" fill="#dc2626" fontSize="16" opacity="0.9">★</text>
                  
                  {/* Center content */}
                  <text 
                    x="100" 
                    y="92" 
                    textAnchor="middle" 
                    fill="#dc2626" 
                    fontSize="11" 
                    fontFamily="Georgia, serif"
                    fontWeight="bold"
                    letterSpacing="1"
                  >
                    PREMIUM
                  </text>
                  <text 
                    x="100" 
                    y="108" 
                    textAnchor="middle" 
                    fill="#dc2626" 
                    fontSize="16" 
                    fontFamily="Georgia, serif"
                    fontWeight="bold"
                  >
                    SPICES
                  </text>
                  <text 
                    x="100" 
                    y="122" 
                    textAnchor="middle" 
                    fill="#dc2626" 
                    fontSize="9" 
                    fontFamily="monospace"
                    opacity="0.8"
                  >
                    EST. 2004
                  </text>
                  
                  {/* Decorative lines */}
                  <line x1="60" y1="75" x2="140" y2="75" stroke="#dc2626" strokeWidth="1" opacity="0.6"/>
                  <line x1="65" y1="128" x2="135" y2="128" stroke="#dc2626" strokeWidth="1" opacity="0.6"/>
                </svg>
                
                {/* Ink texture overlay */}
                <div 
                  className="absolute inset-0 rounded-full mix-blend-multiply opacity-20"
                  style={{
                    background: 'radial-gradient(ellipse at 30% 30%, transparent 0%, rgba(220, 38, 38, 0.3) 50%, transparent 70%)',
                  }}
                />
                
                {/* Worn/faded spots */}
                <div className="absolute top-4 right-6 w-3 h-3 bg-white/40 rounded-full blur-sm" />
                <div className="absolute bottom-8 left-4 w-2 h-4 bg-white/30 rounded-full blur-sm rotate-45" />
                <div className="absolute top-12 left-8 w-2 h-2 bg-white/25 rounded-full blur-sm" />
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            {/* Section label */}
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-10 bg-primary"></span>
              <span className="text-primary font-mono text-[11px] font-medium tracking-[0.15em]">ABOUT US</span>
            </div>
            
            {/* Main heading - Display font */}
            <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mt-2 mb-6 leading-[1.1] tracking-[-0.02em]">
              Rooted in Tradition.<br/>
              <span className="text-primary">Connected Globally.</span>
            </h2>
            
            {/* Mission box - rounded */}
            <div className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 border-l-2 border-primary pl-5 bg-slate-50 dark:bg-white/5 py-4 pr-5 rounded-r-xl">
              <span className="text-primary font-sans font-semibold">Our Mission:</span><br/>
              <span className="font-sans">At ZEVORA, we are committed to ethical sourcing, organic integrity, and long-term partnerships. Our focus is not only on supplying spices, but on delivering reliability, transparency, and value across the entire supply chain.</span>
            </div>
            
            {/* Description - Sans font */}
            <p className="font-sans text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8 ">
              ZEVORA GLOBAL SPICES is a Kerala-based organic spice sourcing and export company established in 2015, delivering premium quality spices from India to global markets. We work directly with 150+ organic farmers across more than 100 acres of organic farmland, ensuring quality, traceability, fair pricing, and export-ready bulk, branded, and private-label packaging supported by an experienced team.
            </p>
            
            {/* Chart Section - rounded */}
            <div className="mb-8 p-6 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-slate-700 rounded-2xl">
              <h4 className="font-mono text-[10px] font-medium tracking-[0.15em] mb-6 text-slate-500">
                ANNUAL EXPORT VOLUME (METRIC TONS)
              </h4>
              
              {/* Chart Container */}
              <div className="relative">
                {/* Bars - rounded tops */}
                <div className="flex items-end gap-3 h-32 w-full border-b border-slate-300 dark:border-slate-600">
                  {[
                    { height: 30, year: '2020' },
                    { height: 45, year: '2021' },
                    { height: 40, year: '2022' },
                    { height: 60, year: '2023' },
                    { height: 80, year: '2024' },
                    { height: 95, year: '2025', current: true },
                  ].map((item, i) => (
                    <div 
                      key={i} 
                      className={`flex-1 relative group cursor-pointer transition-all duration-300 rounded-t-lg ${
                        item.current 
                          ? 'bg-primary hover:bg-primary/80' 
                          : 'bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-600'
                      }`} 
                      style={{ height: `${item.height}%` }}
                    >
                      {/* Tooltip on hover - rounded */}
                      <span className={`absolute -top-9 left-1/2 -translate-x-1/2 text-[10px] font-mono font-medium px-2.5 py-1 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg ${
                        item.current 
                          ? 'bg-primary text-slate-900' 
                          : 'bg-slate-800 text-white'
                      }`}>
                        {item.height} MT
                      </span>
                    </div>
                  ))}
                </div>
                
                {/* Year Labels - Separate Row */}
                <div className="flex gap-3 mt-3">
                  {['2020', '2021', '2022', '2023', '2024', '2025'].map((year, i) => (
                    <div 
                      key={i} 
                      className={`flex-1 text-center text-[10px] font-mono tracking-wide ${
                        year === '2025' 
                          ? 'text-primary font-semibold' 
                          : 'text-slate-400'
                      }`}
                    >
                      {year}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Checklist - professional styling */}
            <ul className="space-y-4">
              {[
                'Direct Farm Sourcing from Kerala',
                'ISO 22000 Certified Processing Facility',
                'Eco-Friendly & Sustainable Practices',
                'FSSAI & Organic Certified Products'
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-4 group">
                  <div className="w-6 h-6 border-2 border-primary flex items-center justify-center group-hover:bg-primary transition-colors duration-300 rounded-md">
                    <svg className="w-3.5 h-3.5 text-primary group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-sans text-slate-700 dark:text-slate-300 text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;