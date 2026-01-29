import React, { useState, useEffect } from 'react';

const SystemBar: React.FC = () => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    // Function to update time
    const updateTime = () => {
      const time = new Date().toLocaleTimeString('en-US', { 
        hour12: false, 
        hour: '2-digit', 
        minute: '2-digit',
        second: '2-digit'
      });
      setCurrentTime(time);
    };

    // Update immediately on mount
    updateTime();

    // Update every second
    const interval = setInterval(updateTime, 1000);

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-slate-900 text-slate-400 font-mono text-[10px] py-1.5 px-4 sm:px-6 lg:px-8 border-b border-slate-800 overflow-hidden whitespace-nowrap flex justify-between items-center z-50 relative">
      {/* Left side - System status */}
      <div className="flex items-center gap-4">
        <span className="flex items-center gap-1.5">
          <span className="relative">
            <span className="absolute inset-0 w-2 h-2 bg-green-500 rounded-full animate-ping opacity-75"></span>
            <span className="relative block w-2 h-2 bg-green-500 rounded-full"></span>
          </span>
          <span className="text-green-500 font-semibold tracking-wide">LIVE</span>
        </span>
        <span className="text-slate-600">|</span>
        <span className="hidden sm:inline tracking-wide">
          Kochi, Kerala
        </span>
        <span className="text-primary font-semibold tracking-wider">
          {currentTime} IST
        </span>
      </div>
      
      {/* Right side - Business info */}
      <div className="flex items-center gap-4">
        {/* <span className="hidden md:inline text-slate-500 tracking-wide">
          Export License: #8892
        </span> */}
        <span className="text-slate-600 hidden md:inline">|</span>
        <span className="flex items-center gap-1.5">
          <span className="text-primary font-semibold">50+</span>
          <span className="text-slate-500">Countries</span>
        </span>
      </div>
    </div>
  );
};

export default SystemBar;