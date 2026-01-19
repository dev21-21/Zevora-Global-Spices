import React, { useState, useRef } from 'react';
import { analyzeImage } from '../services/geminiService';

const ImageAnalyzer: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [analysis, setAnalysis] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
        setAnalysis('');
        setError(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAnalyze = async () => {
    if (!selectedImage) return;

    setLoading(true);
    setAnalysis('');
    setError(null);

    try {
      const result = await analyzeImage(selectedImage);
      setAnalysis(result);
    } catch (err) {
      setError("Failed to analyze image. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <section id="ai-lab" className="py-20 bg-slate-950 text-white relative border-b-2 border-primary/30">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-30"></div>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col md:flex-row gap-12 items-start">
                {/* Left Side: Interface */}
                <div className="w-full md:w-1/2">
                    <div className="inline-block border border-primary text-primary px-3 py-1 font-mono text-xs mb-4 bg-primary/10">
                        AI_MODULE: GEMINI-3-PRO
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black uppercase mb-6 leading-tight">
                        Quality Control <br/><span className="text-primary">AI Lab</span>
                    </h2>
                    <p className="text-slate-400 font-mono text-sm mb-8 leading-relaxed">
                        Upload a sample image of your spice shipment. Our Gemini-powered system will analyze visual quality, identify variety, and generate an inspection report instantly.
                    </p>

                    <div className="p-1 border-2 border-dashed border-slate-700 hover:border-primary transition-colors bg-slate-900/50 group cursor-pointer" onClick={triggerFileInput}>
                        <div className="h-64 flex flex-col items-center justify-center relative overflow-hidden bg-black">
                            {selectedImage ? (
                                <img src={selectedImage} alt="Analysis Target" className="h-full w-full object-contain" />
                            ) : (
                                <>
                                    <span className="material-symbols-outlined text-6xl text-slate-600 group-hover:text-primary transition-colors mb-4">add_a_photo</span>
                                    <span className="font-mono text-xs text-slate-500 group-hover:text-primary">CLICK TO UPLOAD SAMPLE</span>
                                </>
                            )}
                            <input 
                                type="file" 
                                ref={fileInputRef} 
                                onChange={handleFileChange} 
                                className="hidden" 
                                accept="image/*"
                            />
                        </div>
                    </div>

                    <button 
                        onClick={handleAnalyze} 
                        disabled={!selectedImage || loading}
                        className={`w-full mt-4 py-4 font-bold font-mono uppercase tracking-widest flex items-center justify-center gap-3 transition-all ${
                            !selectedImage || loading 
                            ? 'bg-slate-800 text-slate-500 cursor-not-allowed' 
                            : 'bg-primary text-black hover:bg-white hover:shadow-[0_0_20px_rgba(13,242,13,0.5)]'
                        }`}
                    >
                        {loading ? (
                            <>
                                <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></span>
                                PROCESSING_DATA...
                            </>
                        ) : (
                            <>
                                <span className="material-symbols-outlined">analytics</span>
                                RUN_DIAGNOSTICS
                            </>
                        )}
                    </button>
                    {error && <p className="mt-2 text-red-500 font-mono text-xs">{error}</p>}
                </div>

                {/* Right Side: Output Terminal */}
                <div className="w-full md:w-1/2 h-[600px] bg-black border border-slate-700 p-2 relative shadow-2xl font-mono text-sm flex flex-col">
                    <div className="bg-slate-900 p-2 flex justify-between items-center border-b border-slate-800 mb-2">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <span className="text-slate-500 text-xs">TERMINAL_OUTPUT.LOG</span>
                    </div>
                    <div className="flex-1 overflow-y-auto p-4 terminal-scroll font-mono text-green-500/90 leading-relaxed whitespace-pre-wrap">
                        {loading ? (
                            <div className="animate-pulse">
                                &gt; ESTABLISHING UPLINK... OK<br/>
                                &gt; ENCODING IMAGE DATA... OK<br/>
                                &gt; SENDING TO GEMINI NEURAL NET...<br/>
                                &gt; AWAITING RESPONSE...<span className="inline-block w-2 h-4 bg-green-500 ml-1 animate-blink"></span>
                            </div>
                        ) : analysis ? (
                            <div className="typing-effect">
                                <span className="text-white mb-4 block border-b border-white/20 pb-2"> ANALYSIS REPORT GENERATED: {new Date().toLocaleTimeString()}</span>
                                {analysis}
                                <br/><br/>
                                <span className="text-primary">&gt; END_OF_STREAM_</span>
                            </div>
                        ) : (
                            <div className="text-slate-600">
                                &gt; SYSTEM READY.<br/>
                                &gt; WAITING FOR INPUT MEDIA...<br/>
                                &gt; <span className="animate-pulse">_</span>
                            </div>
                        )}
                    </div>
                    {/* Decorative overlay lines */}
                    <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-20 bg-[length:100%_2px,3px_100%]"></div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default ImageAnalyzer;