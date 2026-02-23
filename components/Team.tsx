import React, { useState } from 'react';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  experience: string;
  image: string;
  status: 'ACTIVE' | 'FIELD' | 'REMOTE';
  specialization: string;
  bio: string;
  highlights: string[];
  education?: string;
  imagePosition?: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 'EMP-001',
    name: 'Paul Joseph',
    role: 'CEO & Founder',
    department: 'Executive',
    experience: 'Industry Veteran',
    image: 'https://res.cloudinary.com/dlnfi4gab/image/upload/v1769429549/founder_yglwmf.jpg',
    status: 'ACTIVE',
    specialization: 'Global Trade Strategy',
    imagePosition: 'center 27%',
    bio: 'The Founder of Zevora Global Spices brings a strong execution-driven vision to the global spice trade, with a clear focus on delivering premium Indian spices to GCC markets.',
    highlights: [
      'Deep involvement in sourcing from India\'s key spice regions',
      'Focus on export compliance and consistent grading',
      'Buyer-specific customization expertise',
      'Strategic bridge between Indian sourcing and GCC requirements'
    ]
  },
  {
    id: 'EMP-002',
    name: 'Nikhil Paul',
    role: 'Managing Director',
    department: 'Operations & Logistics',
    experience: '3+ Years',
    image: 'https://res.cloudinary.com/dlnfi4gab/image/upload/v1769429549/md_ir9c07.jpg',
    status: 'ACTIVE',
    specialization: 'Supply Chain & Logistics',
    education: 'Master\'s in Logistics',
    imagePosition: 'center 30%',
    bio: 'The Managing Director holds a Master\'s degree in Logistics and brings 3 years of professional experience in international logistics operations across European markets.',
    highlights: [
      'Master\'s degree in Logistics',
      'International logistics operations across European markets',
      'Supply chain optimization & freight coordination',
      'Cross-border trade compliance expertise'
    ]
  },
  {
    id: 'EMP-003',
    name: 'Sajo Joseph',
    role: 'Head of Quality & Compliance',
    department: 'Quality Control',
    experience: '8+ Years',
    image: 'https://res.cloudinary.com/dlnfi4gab/image/upload/v1769429549/quality_pi2wjv.jpg',
    status: 'ACTIVE',
    specialization: 'Regulatory Compliance',
    imagePosition: 'center 25%',
    bio: 'Our Head of Quality & Compliance brings over 8 years of specialized experience in spice quality and regulatory compliance, spanning both India and GCC markets.',
    highlights: [
      '2 years with Spices Board of India',
      '6 years in GCC overseeing food safety',
      'UAE and GCC food regulations expertise',
      'End-to-end compliance specialist'
    ]
  }
];

const Team: React.FC = () => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  return (
    <section id="team" className="relative w-full py-16 lg:py-20 bg-slate-950 overflow-hidden border-b-2 border-slate-900 dark:border-white">
      {/* Grid overlay */}
      <div 
        className="absolute inset-0 pointer-events-none z-0" 
        style={{ 
          backgroundImage: 'linear-gradient(rgba(13, 242, 13, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(13, 242, 13, 0.03) 1px, transparent 1px)', 
          backgroundSize: '50px 50px' 
        }}
      />

      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-64 h-64 border border-dashed border-primary/20 rounded-full hidden lg:block" />
      <div className="absolute bottom-20 left-20 w-32 h-32 border border-dotted border-white/10 rounded-full hidden lg:block" />
      
      {/* Technical annotations */}
      <div className="absolute top-10 left-10 font-mono text-[9px] text-primary/70 z-20 hidden lg:block tracking-[0.15em]">
        LEADERSHIP TEAM
      </div>
      <div className="absolute top-10 right-10 font-mono text-[9px] text-primary/70 z-20 hidden lg:block tracking-[0.15em]">
        ZEVORA GLOBAL SPICES
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - More Compact */}
        <div className="mb-10 lg:mb-14 relative text-center">
          {/* Badge */}
          <div className="inline-flex items-center border border-primary/50 bg-primary/10 px-4 py-2 text-[9px] md:text-[10px] font-mono text-primary backdrop-blur-md mb-4 rounded-full tracking-[0.15em]">
            <span className="animate-pulse w-1.5 h-1.5 md:w-2 md:h-2 bg-primary rounded-full mr-2 md:mr-3" />
            THE PEOPLE BEHIND ZEVORA
          </div>
          
          {/* Heading */}
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 leading-[1.1] tracking-[-0.02em]">
            Meet Our <span className="text-primary">Leadership Team</span>
          </h2>
          
          {/* Subtitle */}
          <p className="font-sans text-sm md:text-base text-slate-400 max-w-xl mx-auto leading-relaxed">
            A dedicated team of industry experts driving Zevora's mission to deliver 
            premium Indian spices to global markets.
          </p>
        </div>

        {/* Stats Bar - Compact */}
        <div className="grid grid-cols-4 gap-2 md:gap-3 mb-8 lg:mb-12">
          {[
            { label: 'Experience', value: '10+ Yrs', icon: '📊' },
            { label: 'Markets', value: 'World wide / Globally', icon: '🌍' },
            { label: 'Certified', value: 'ISO | FSSAI', icon: '✓' },
            { label: 'Focus', value: 'Spice Export', icon: '🌿' },
          ].map((stat, index) => (
            <div key={index} className="bg-slate-900/60 border border-slate-800 p-2 md:p-3 lg:p-4 text-center hover:border-primary/50 transition-all rounded-xl">
              <div className="text-sm md:text-base lg:text-xl mb-1">{stat.icon}</div>
              <div className="font-display text-[10px] md:text-xs lg:text-sm font-bold text-primary mb-0.5">
                {stat.value}
              </div>
              <div className="font-sans text-[7px] md:text-[8px] lg:text-[9px] text-slate-500 font-medium tracking-wide uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View (< 768px) - FULL IMAGE SIZE */}
        <div className="grid grid-cols-1 gap-4 md:hidden">
          {teamMembers.map((member) => (
            <div 
              key={member.id}
              className="bg-slate-900/90 border border-slate-800 backdrop-blur-md relative overflow-hidden group hover:border-primary/50 transition-all duration-300 rounded-2xl"
            >
              {/* Image Container - Full Size with Aspect Ratio */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  style={{ objectPosition: member.imagePosition || 'center top' }}
                />
                {/* Gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                
                {/* Experience badge */}
                <div className="absolute top-3 left-3 bg-primary text-slate-900 px-2.5 py-1 rounded-full font-sans text-[10px] font-bold shadow-lg">
                  {member.experience}
                </div>

                {/* Department badge */}
                <div className="absolute top-3 right-3 flex items-center gap-1 bg-slate-900/80 backdrop-blur-sm px-2 py-1 rounded-full">
                  <span className="w-1 h-1 bg-primary rounded-full animate-pulse" />
                  <span className="font-mono text-[7px] text-primary tracking-wider uppercase">
                    {member.department}
                  </span>
                </div>

                {/* Name & Role - Overlay at bottom of image */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-slate-900 via-slate-900/95 to-transparent">
                  <h3 className="font-display text-xl font-bold text-white mb-1 leading-tight drop-shadow-lg">
                    {member.name}
                  </h3>
                  <p className="font-sans text-primary text-sm font-semibold">
                    {member.role}
                  </p>
                </div>
              </div>
              
              {/* Info Section - Compact */}
              <div className="p-4">
                {/* Bio */}
                <p className="font-sans text-slate-400 text-xs leading-relaxed mb-3">
                  {member.bio}
                </p>

                {/* Key Highlights - Top 2 */}
                <div className="space-y-1.5 mb-3">
                  {member.highlights.slice(0, 2).map((highlight, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-start gap-2 text-[10px] text-slate-300 bg-slate-800/50 px-2.5 py-1.5 rounded-lg"
                    >
                      <span className="text-primary flex-shrink-0 mt-0.5">→</span>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Specialization */}
                <div className="mb-3 bg-slate-800/50 px-3 py-2 rounded-lg border border-slate-700/50">
                  <span className="font-mono text-[8px] text-slate-500 block tracking-wide uppercase mb-0.5">Specialization</span>
                  <span className="font-sans text-xs text-white font-medium">{member.specialization}</span>
                </div>

                {/* Expand Button */}
                <button 
                  onClick={() => setExpandedCard(expandedCard === member.id ? null : member.id)}
                  className="w-full py-2 border border-slate-700 text-slate-400 font-sans text-xs font-medium rounded-lg hover:border-primary/50 hover:text-primary transition-colors flex items-center justify-center gap-2"
                >
                  <span>{expandedCard === member.id ? 'Show Less' : 'Read More'}</span>
                  <span className="material-symbols-outlined text-sm">
                    {expandedCard === member.id ? 'expand_less' : 'expand_more'}
                  </span>
                </button>

                {/* Expanded Content */}
                {expandedCard === member.id && (
                  <div className="mt-3 pt-3 border-t border-slate-800 space-y-2">
                    {/* All Highlights */}
                    {member.highlights.slice(2).map((highlight, idx) => (
                      <div 
                        key={idx} 
                        className="flex items-start gap-2 text-[10px] text-slate-300 bg-slate-800/50 px-2.5 py-1.5 rounded-lg"
                      >
                        <span className="text-primary flex-shrink-0 mt-0.5">→</span>
                        <span>{highlight}</span>
                      </div>
                    ))}
                    
                    {/* Education if available */}
                    {member.education && (
                      <div className="bg-slate-800/50 px-3 py-2 rounded-lg border border-slate-700/50">
                        <span className="font-mono text-[8px] text-slate-500 block tracking-wide uppercase mb-0.5">Education</span>
                        <span className="font-sans text-xs text-white font-medium">{member.education}</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Tablet View (768px - 1024px) - Full Image Display */}
        <div className="hidden md:grid lg:hidden grid-cols-3 gap-4">
          {teamMembers.map((member) => (
            <div 
              key={member.id}
              className="bg-slate-900/90 border border-slate-800 backdrop-blur-md relative overflow-hidden group hover:border-primary/50 transition-all duration-300 rounded-2xl flex flex-col"
            >
              {/* Image Container - Aspect Ratio for Full Image */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  style={{ objectPosition: member.imagePosition || 'center top' }}
                />
                {/* Subtle overlay at bottom for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                
                {/* Experience badge */}
                <div className="absolute top-3 left-3 bg-primary text-slate-900 px-2.5 py-1 rounded-full font-sans text-[10px] font-bold shadow-lg">
                  {member.experience}
                </div>

                {/* Name & Role overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-slate-900 via-slate-900/90 to-transparent">
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                    <span className="font-mono text-[8px] text-primary tracking-wider uppercase">
                      {member.department}
                    </span>
                  </div>
                  <h3 className="font-display text-white text-base font-bold leading-tight">
                    {member.name}
                  </h3>
                  <p className="font-sans text-primary text-xs font-medium">
                    {member.role}
                  </p>
                </div>
              </div>
              
              {/* Info Section - Compact */}
              <div className="p-3 flex-1 flex flex-col">
                {/* Bio */}
                <p className="font-sans text-slate-400 text-[10px] leading-relaxed mb-2 line-clamp-3">
                  {member.bio}
                </p>

                {/* Key Highlights */}
                <div className="space-y-1 mb-3 flex-1">
                  {member.highlights.slice(0, 2).map((highlight, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-start gap-1.5 text-[9px] text-slate-300"
                    >
                      <span className="text-primary flex-shrink-0 mt-0.5">→</span>
                      <span className="line-clamp-1">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Specialization */}
                <div className="pt-2 border-t border-slate-800 mt-auto">
                  <span className="font-mono text-[7px] text-slate-500 block tracking-wide uppercase">Specialization</span>
                  <span className="font-sans text-[10px] text-white font-medium">{member.specialization}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop View (> 1024px) - Compact Single Window Cards */}
        <div className="hidden lg:grid grid-cols-3 gap-5">
          {teamMembers.map((member) => (
            <div 
              key={member.id}
              className="bg-slate-900/80 border border-slate-800 backdrop-blur-md relative overflow-hidden group hover:border-primary/50 transition-all duration-500 rounded-2xl flex flex-col"
            >
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-primary/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-tl-2xl z-10" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-primary/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-br-2xl z-10" />
              
              {/* Image Section - Fixed Aspect Ratio */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  style={{ objectPosition: member.imagePosition || 'center 20%' }}
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent" />
                
                {/* Experience badge */}
                <div className="absolute top-4 left-4 bg-primary text-slate-900 px-3 py-1 rounded-full font-sans text-xs font-bold shadow-lg">
                  {member.experience}
                </div>

                {/* Department tag */}
                <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-slate-900/80 backdrop-blur-sm px-2.5 py-1 rounded-full">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                  <span className="font-mono text-[9px] text-primary tracking-wider uppercase">
                    {member.department}
                  </span>
                </div>

                {/* Name overlay at bottom of image */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="font-display text-2xl font-bold text-white mb-1 drop-shadow-lg">
                    {member.name}
                  </h3>
                  <p className="font-sans text-primary text-sm font-semibold">
                    {member.role}
                  </p>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-5 flex-1 flex flex-col">
                {/* Bio */}
                <p className="font-sans text-slate-400 text-sm leading-relaxed mb-4">
                  {member.bio}
                </p>

                {/* Highlights */}
                <div className="grid grid-cols-1 gap-1.5 mb-4 flex-1">
                  {member.highlights.map((highlight, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-start gap-2 text-xs text-slate-300 bg-slate-800/50 px-3 py-2 rounded-lg border border-slate-700/50 hover:border-primary/30 transition-colors"
                    >
                      <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                      <span className="line-clamp-1">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Specialization badges */}
                <div className="flex items-center gap-2 pt-4 border-t border-slate-800 mt-auto">
                  <div className="bg-slate-800 border border-slate-700 px-3 py-2 rounded-lg flex-1">
                    <span className="font-mono text-[8px] text-slate-500 block tracking-wide uppercase">Specialization</span>
                    <span className="font-sans text-xs text-white font-medium">{member.specialization}</span>
                  </div>
                  {member.education && (
                    <div className="bg-slate-800 border border-slate-700 px-3 py-2 rounded-lg flex-1">
                      <span className="font-mono text-[8px] text-slate-500 block tracking-wide uppercase">Education</span>
                      <span className="font-sans text-xs text-white font-medium">{member.education}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 lg:mt-14 text-center">
          <div className="inline-block bg-slate-900/80 border border-slate-800 rounded-2xl p-6 lg:p-8 max-w-2xl w-full">
            <div className="font-mono text-[9px] lg:text-[10px] text-primary tracking-[0.2em] mb-2">
              PARTNER WITH US
            </div>
            <h3 className="font-display text-lg lg:text-2xl font-bold text-white mb-2">
              Ready to Source Premium Spices?
            </h3>
            <p className="font-sans text-slate-400 text-xs lg:text-sm mb-5 max-w-lg mx-auto">
              Our leadership team is committed to building long-term partnerships 
              with buyers who value quality, compliance, and reliability.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="#contact">
                <button className="px-6 py-2.5 bg-primary text-slate-900 font-sans font-semibold text-xs lg:text-sm rounded-xl hover:bg-primary/90 transition-colors">
                  Contact Our Team
                </button>
              </a>
              <a href="#products">
                <button className="px-6 py-2.5 border border-slate-700 text-white font-sans font-semibold text-xs lg:text-sm rounded-xl hover:border-primary/50 hover:text-primary transition-colors">
                  View Our Products
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;