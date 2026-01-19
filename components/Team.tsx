import React from 'react';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  experience: string;
  image: string;
  status: 'ACTIVE' | 'FIELD' | 'REMOTE';
  specialization: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 'EMP-001',
    name: 'Rajesh Menon',
    role: 'CEO & Founder',
    department: 'Executive',
    experience: '25+ Years',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face',
    status: 'ACTIVE',
    specialization: 'Global Trade'
  },
  {
    id: 'EMP-002',
    name: 'Priya Sharma',
    role: 'Head of Operations',
    department: 'Operations',
    experience: '18+ Years',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face',
    status: 'ACTIVE',
    specialization: 'Supply Chain'
  },
  {
    id: 'EMP-003',
    name: 'Arun Nair',
    role: 'Quality Director',
    department: 'Quality Control',
    experience: '15+ Years',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
    status: 'FIELD',
    specialization: 'Certification'
  },
  {
    id: 'EMP-004',
    name: 'Maya Krishnan',
    role: 'Export Manager',
    department: 'Logistics',
    experience: '12+ Years',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face',
    status: 'ACTIVE',
    specialization: 'Int\'l Shipping'
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'ACTIVE':
      return 'bg-green-500/10 text-green-600 border-green-500/20';
    case 'FIELD':
      return 'bg-amber-500/10 text-amber-600 border-amber-500/20';
    case 'REMOTE':
      return 'bg-blue-500/10 text-blue-600 border-blue-500/20';
    default:
      return 'bg-slate-500/10 text-slate-400 border-slate-500/20';
  }
};

const getStatusLabel = (status: string) => {
  switch (status) {
    case 'ACTIVE':
      return 'Available';
    case 'FIELD':
      return 'On Site';
    case 'REMOTE':
      return 'Remote';
    default:
      return status;
  }
};

const Team: React.FC = () => {
  return (
    <section id="team" className="relative w-full py-24 bg-slate-950 overflow-hidden border-b-2 border-slate-900 dark:border-white">
      {/* Grid overlay */}
      <div 
        className="absolute inset-0 pointer-events-none z-0" 
        style={{ 
          backgroundImage: 'linear-gradient(rgba(13, 242, 13, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(13, 242, 13, 0.03) 1px, transparent 1px)', 
          backgroundSize: '50px 50px' 
        }}
      ></div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-64 h-64 border border-dashed border-primary/20 rounded-full hidden lg:block"></div>
      <div className="absolute bottom-20 left-20 w-32 h-32 border border-dotted border-white/10 rounded-full hidden lg:block"></div>
      
      {/* Technical annotations - Professional mono */}
      <div className="absolute top-10 left-10 font-mono text-[9px] text-primary/70 z-20 hidden lg:block tracking-[0.15em]">
        LEADERSHIP TEAM
      </div>
      <div className="absolute top-10 right-10 font-mono text-[9px] text-primary/70 z-20 hidden lg:block tracking-[0.15em]">
        TEAM SIZE: {teamMembers.length}
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 relative">
          {/* Corner decorations */}
          <div className="absolute -left-6 -top-6 w-12 h-12 border-l-4 border-t-4 border-primary opacity-50 rounded-tl-lg"></div>
          <div className="absolute -right-6 -bottom-6 w-12 h-12 border-r-4 border-b-4 border-primary opacity-50 hidden sm:block rounded-br-lg"></div>
          
          {/* Badge - Professional styling */}
          <div className="inline-flex items-center border border-primary/50 bg-primary/10 px-4 py-2 text-[10px] font-mono text-primary backdrop-blur-md mb-8 rounded-full tracking-[0.1em]">
            <span className="animate-pulse w-2 h-2 bg-primary rounded-full mr-3"></span>
            OUR TEAM
          </div>
          
          {/* Heading - Display font */}
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-[1.05] tracking-[-0.02em]">
            Meet Our<br/>
            <span className="text-primary">Leadership Team</span>
          </h2>
          
          {/* Info box - Sans font */}
          <div className="max-w-xl bg-black/40 backdrop-blur-sm p-5 border border-white/20 mt-6 rounded-xl">
            <div className="space-y-2">
              <p className="font-sans text-sm text-slate-300">
                <span className="text-primary font-semibold">→</span> Combined Experience: 150+ Years
              </p>
              <p className="font-sans text-sm text-slate-300">
                <span className="text-primary font-semibold">→</span> Specialization: Spice Trade & Export
              </p>
              <p className="font-sans text-sm text-slate-300">
                <span className="text-primary font-semibold">→</span> Certifications: ISO 22000 | FSSAI | Organic
              </p>
            </div>
          </div>
        </div>

        {/* Stats Bar - Professional presentation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { label: 'Team Size', value: '45+' },
            { label: 'Countries', value: '50+' },
            { label: 'Experience', value: '15 Yrs' },
            { label: 'Languages', value: '12+' },
          ].map((stat, index) => (
            <div key={index} className="bg-slate-900/60 border border-slate-700 p-5 text-center hover:border-primary transition-all rounded-2xl hover:bg-slate-900/80">
              {/* Value - Display font */}
              <div className="font-display text-2xl md:text-3xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              {/* Label - Sans font */}
              <div className="font-sans text-[10px] text-slate-400 font-medium tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <div 
              key={member.id} 
              className="bg-slate-900/90 border border-slate-700 backdrop-blur-md relative overflow-hidden group hover:border-primary transition-all duration-300 hover:shadow-[0_0_30px_rgba(13,242,13,0.15)] rounded-2xl"
            >
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-primary/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-tl-lg"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-primary/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-br-lg"></div>
              
              {/* Member ID - Technical mono */}
              {/* <div className="absolute top-3 right-3 font-mono text-[9px] text-slate-500 z-10 bg-slate-900/80 px-2 py-1 rounded-md tracking-wide">
                {member.id}
              </div> */}
              
              {/* Image Container */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-t-2xl">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover filter  group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" 
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent"></div>
                
                {/* Status badge - Professional style */}
                {/* <div className={`absolute top-3 left-3 px-2.5 py-1 font-sans text-[10px] font-semibold rounded-lg border backdrop-blur-sm ${getStatusColor(member.status)}`}>
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
                    {getStatusLabel(member.status)}
                  </span>
                </div> */}
                
                {/* Hover effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent animate-pulse"></div>
                </div>
              </div>
              
              {/* Info Section - Professional fonts */}
              <div className="p-4 relative">
                {/* Name - Sans font */}
                <h3 className="font-sans text-white text-sm font-bold mb-1">
                  {member.name}
                </h3>
                {/* Role - Sans font */}
                <p className="font-sans text-primary text-xs font-medium mb-3">
                  {member.role}
                </p>
                
                <div className="border-t border-slate-700/50 pt-3 space-y-2">
                  {/* Department */}
                  <div className="flex justify-between text-[10px]">
                    <span className="font-sans text-slate-500">Department</span>
                    <span className="font-sans text-slate-300 font-medium">{member.department}</span>
                  </div>
                  {/* Experience */}
                  <div className="flex justify-between text-[10px]">
                    <span className="font-sans text-slate-500">Experience</span>
                    <span className="font-sans text-slate-300 font-medium">{member.experience}</span>
                  </div>
                  {/* Specialization */}
                  <div className="flex justify-between text-[10px]">
                    <span className="font-sans text-slate-500">Expertise</span>
                    <span className="font-sans text-primary/80 font-medium">{member.specialization}</span>
                  </div>
                </div>
                
                {/* Hover action - Professional button */}
                {/* <div className="mt-4 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                  <button className="w-full py-2.5 border border-primary text-primary font-sans text-[11px] font-semibold hover:bg-primary hover:text-slate-900 transition-colors rounded-xl">
                    View Profile
                  </button>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;