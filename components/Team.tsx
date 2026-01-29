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
    name: 'Rajesh Menon',
    role: 'CEO & Founder',
    department: 'Executive',
    experience: 'Industry Veteran',
    image: 'https://res.cloudinary.com/dlnfi4gab/image/upload/v1769429549/founder_yglwmf.jpg',
    status: 'ACTIVE',
    specialization: 'Global Trade Strategy',
    imagePosition: 'center 27%',
    bio: 'The Founder of Zevora Global Spices brings a strong execution-driven vision to the global spice trade, with a clear focus on delivering premium Indian spices to GCC markets. With deep involvement in sourcing from India\'s key spice regions, he has built Zevora on the principles of quality integrity, regulatory discipline, and long-term buyer partnerships.',
    highlights: [
      'Deep involvement in sourcing from India\'s key spice regions',
      'Focus on export compliance and consistent grading',
      'Buyer-specific customization expertise in premium cardamom',
      'Strategic bridge between Indian sourcing and GCC import requirements'
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
    bio: 'The Managing Director of Zevora Global Spices holds a Master\'s degree in Logistics and brings 3 years of professional experience in international logistics operations, with hands-on exposure across European markets. His background provides strong expertise in supply chain optimization, export logistics, freight coordination, and cross-border trade compliance.',
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
    bio: 'Our Head of Quality & Compliance brings over 8 years of specialized experience in spice quality and regulatory compliance, spanning both India and GCC markets. He has worked with the Spices Board of India for 2 years, gaining deep expertise in sourcing standards, grading, and statutory quality control, followed by 6 years in the GCC as Head of Handling and Head of research work.',
    highlights: [
      '2 years with Spices Board of India',
      '6 years in GCC overseeing food safety & regulatory approvals',
      'UAE and GCC food regulations expertise',
      'End-to-end compliance & buyer audits specialist'
    ]
  }
];

const Team: React.FC = () => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  return (
    <section id="team" className="relative w-full py-16 lg:py-24 bg-slate-950 overflow-hidden border-b-2 border-slate-900 dark:border-white">
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
        {/* Header */}
        <div className="mb-12 lg:mb-20 relative text-center">
          {/* Badge */}
          <div className="inline-flex items-center border border-primary/50 bg-primary/10 px-4 py-2 text-[9px] md:text-[10px] font-mono text-primary backdrop-blur-md mb-6 rounded-full tracking-[0.15em]">
            <span className="animate-pulse w-1.5 h-1.5 md:w-2 md:h-2 bg-primary rounded-full mr-2 md:mr-3" />
            THE PEOPLE BEHIND ZEVORA
          </div>
          
          {/* Heading */}
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-[1.1] tracking-[-0.02em]">
            Meet Our<br/>
            <span className="text-primary">Leadership Team</span>
          </h2>
          
          {/* Subtitle */}
          <p className="font-sans text-sm md:text-base text-slate-400 max-w-xl mx-auto leading-relaxed">
            A dedicated team of industry experts driving Zevora's mission to deliver 
            premium Indian spices to global markets.
          </p>
        </div>

        {/* Stats Bar - Compact for tablet */}
        <div className="grid grid-cols-4 gap-2 md:gap-3 mb-10 lg:mb-16">
          {[
            { label: 'Experience', value: '10+ Yrs', icon: '📊' },
            { label: 'Markets', value: 'GCC & EU', icon: '🌍' },
            { label: 'Certified', value: 'ISO | FSSAI', icon: '✓' },
            { label: 'Focus', value: 'Spice Export', icon: '🌿' },
          ].map((stat, index) => (
            <div key={index} className="bg-slate-900/60 border border-slate-800 p-3 md:p-4 lg:p-6 text-center hover:border-primary/50 transition-all rounded-xl lg:rounded-2xl">
              <div className="text-base md:text-lg lg:text-2xl mb-1">{stat.icon}</div>
              <div className="font-display text-xs md:text-sm lg:text-xl font-bold text-primary mb-0.5">
                {stat.value}
              </div>
              <div className="font-sans text-[8px] md:text-[9px] lg:text-[10px] text-slate-500 font-medium tracking-wide uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Team Grid - Mobile & Tablet View */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-4 lg:hidden">
          {teamMembers.map((member) => (
            <div 
              key={member.id}
              className="bg-slate-900/90 border border-slate-800 backdrop-blur-md relative overflow-hidden group hover:border-primary/50 transition-all duration-300 rounded-2xl"
            >
              {/* Image Container - Fixed height with proper positioning */}
              <div className="relative  md:h-40 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  style={{ objectPosition: member.imagePosition || 'center 20%' }}
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />
                
                {/* Experience badge */}
                <div className="absolute top-2 left-2 bg-primary/90 text-slate-900 px-2 py-0.5 rounded-full font-sans text-[9px] md:text-[8px] font-bold">
                  {member.experience}
                </div>

                {/* Department badge */}
                <div className="absolute bottom-2 left-2 right-2">
                  <span className="inline-flex items-center gap-1 bg-slate-900/80 backdrop-blur-sm px-2 py-0.5 rounded-md">
                    <span className="w-1 h-1 bg-primary rounded-full" />
                    <span className="font-mono text-[7px] md:text-[6px] text-primary tracking-wider uppercase">
                      {member.department}
                    </span>
                  </span>
                </div>
              </div>
              
              {/* Info Section - Compact */}
              <div className="p-3 md:p-3">
                {/* Name & Role */}
                <h3 className="font-sans text-white text-sm md:text-xs font-bold mb-0.5">
                  {member.name}
                </h3>
                <p className="font-sans text-primary text-xs md:text-[10px] font-medium mb-2">
                  {member.role}
                </p>

                {/* Short Bio - Truncated */}
                <p className="font-sans text-slate-400 text-[10px] md:text-[9px] leading-relaxed mb-2 line-clamp-2 md:line-clamp-2">
                  {member.bio}
                </p>

                {/* Key Highlights - Compact */}
                <div className="space-y-1 mb-2">
                  {member.highlights.slice(0, 2).map((highlight, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-start gap-1 text-[9px] md:text-[8px] text-slate-300"
                    >
                      <span className="text-primary flex-shrink-0">→</span>
                      <span className="line-clamp-1">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Specialization */}
                <div className="pt-2 border-t border-slate-800">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <span className="font-mono text-[7px] text-slate-500 block tracking-wide uppercase">Specialization</span>
                      <span className="font-sans text-[9px] md:text-[8px] text-white font-medium truncate block">{member.specialization}</span>
                    </div>
                    {member.education && (
                      <div className="flex-1 min-w-0 text-right">
                        <span className="font-mono text-[7px] text-slate-500 block tracking-wide uppercase">Education</span>
                        <span className="font-sans text-[8px] md:text-[7px] text-slate-300 truncate block">{member.education}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Expand Button */}
                <button 
                  onClick={() => setExpandedCard(expandedCard === member.id ? null : member.id)}
                  className="w-full mt-2 py-1.5 border border-slate-700 text-slate-400 font-sans text-[9px] md:text-[8px] font-medium rounded-lg hover:border-primary/50 hover:text-primary transition-colors"
                >
                  {expandedCard === member.id ? 'Show Less' : 'Read More'}
                </button>

                {/* Expanded Content */}
                {expandedCard === member.id && (
                  <div className="mt-2 pt-2 border-t border-slate-800">
                    <p className="font-sans text-slate-400 text-[9px] leading-relaxed mb-2">
                      {member.bio}
                    </p>
                    <div className="space-y-1">
                      {member.highlights.map((highlight, idx) => (
                        <div 
                          key={idx} 
                          className="flex items-start gap-1 text-[8px] text-slate-300 bg-slate-800/50 px-2 py-1 rounded"
                        >
                          <span className="text-primary flex-shrink-0">→</span>
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Desktop View - Full Layout */}
        <div className="hidden lg:block space-y-8">
          {teamMembers.map((member, index) => (
            <div 
              key={member.id}
              className="bg-slate-900/80 border border-slate-800 backdrop-blur-md relative overflow-hidden group hover:border-primary/50 transition-all duration-500 rounded-3xl"
            >
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-primary/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-tl-3xl" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-primary/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-br-3xl" />
              
              <div className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                {/* Image Section */}
                <div className="relative w-2/5 min-h-[400px] overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    style={{ objectPosition: member.imagePosition || 'center 20%' }}
                  />
                  {/* Overlay gradient */}
                  <div className={`absolute inset-0 ${
                    index % 2 === 0 
                      ? 'bg-gradient-to-r from-transparent via-slate-900/30 to-slate-900' 
                      : 'bg-gradient-to-l from-transparent via-slate-900/30 to-slate-900'
                  }`} />
                  
                  {/* Experience badge */}
                  <div className="absolute top-4 left-4 bg-primary/90 text-slate-900 px-3 py-1.5 rounded-full font-sans text-xs font-bold">
                    {member.experience}
                  </div>
                </div>

                {/* Content Section */}
                <div className="w-3/5 p-10 flex flex-col justify-center">
                  {/* Department tag */}
                  <div className="inline-flex items-center gap-2 mb-4">
                    <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                    <span className="font-mono text-[10px] text-primary tracking-[0.2em] uppercase">
                      {member.department}
                    </span>
                  </div>

                  {/* Name & Role */}
                  <h3 className="font-display text-3xl font-bold text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="font-sans text-primary text-lg font-semibold mb-5">
                    {member.role}
                  </p>

                  {/* Bio */}
                  <p className="font-sans text-slate-400 leading-relaxed mb-6 text-sm">
                    {member.bio}
                  </p>

                  {/* Highlights */}
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {member.highlights.map((highlight, idx) => (
                      <div 
                        key={idx} 
                        className="flex items-start gap-2 text-xs text-slate-300 bg-slate-800/50 px-3 py-2 rounded-lg border border-slate-700/50 hover:border-primary/30 transition-colors"
                      >
                        <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Specialization badges */}
                  <div className="flex items-center gap-3 pt-5 border-t border-slate-800">
                    <div className="bg-slate-800 border border-slate-700 px-4 py-2 rounded-xl">
                      <span className="font-mono text-[9px] text-slate-500 block tracking-wide">SPECIALIZATION</span>
                      <span className="font-sans text-sm text-white font-medium">{member.specialization}</span>
                    </div>
                    {member.education && (
                      <div className="bg-slate-800 border border-slate-700 px-4 py-2 rounded-xl">
                        <span className="font-mono text-[9px] text-slate-500 block tracking-wide">EDUCATION</span>
                        <span className="font-sans text-sm text-white font-medium">{member.education}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA - Compact on tablet */}
        <div className="mt-12 lg:mt-20 text-center">
          <div className="inline-block bg-slate-900/80 border border-slate-800 rounded-2xl lg:rounded-3xl p-6 lg:p-12 max-w-3xl w-full">
            <div className="font-mono text-[9px] lg:text-[10px] text-primary tracking-[0.2em] mb-3">
              PARTNER WITH US
            </div>
            <h3 className="font-display text-xl lg:text-3xl font-bold text-white mb-3">
              Ready to Source Premium Spices?
            </h3>
            <p className="font-sans text-slate-400 text-xs lg:text-sm mb-6 max-w-xl mx-auto">
              Our leadership team is committed to building long-term partnerships 
              with buyers who value quality, compliance, and reliability.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="#contact"><button className="px-6 lg:px-8 py-2.5 lg:py-3 bg-primary text-slate-900 font-sans font-semibold text-xs lg:text-sm rounded-xl hover:bg-primary/90 transition-colors" >
                Contact Our Team
              </button></a>
              <a href="#products"><button className="px-6 lg:px-8 py-2.5 lg:py-3 border border-slate-700 text-white font-sans font-semibold text-xs lg:text-sm rounded-xl hover:border-primary/50 hover:text-primary transition-colors">
                View Our Products
              </button></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;