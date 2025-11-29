import React from 'react';
import { ViewState } from '../types';
import { ShieldCheck, Users, Zap, ArrowRight, Aperture, CheckCircle2, Box, Layers, Play } from 'lucide-react';

interface LandingPageProps {
  onNavigate: (view: ViewState) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onNavigate }) => {
  return (
    <div className="relative min-h-screen bg-[#020617] overflow-hidden selection:bg-brand-500/30 selection:text-white">
      {/* Animated Background Blobs */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-20%] left-[20%] w-[800px] h-[800px] bg-brand-600/20 rounded-full blur-[120px] animate-blob mix-blend-screen" />
        <div className="absolute bottom-[-20%] right-[10%] w-[600px] h-[600px] bg-holo-500/10 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-screen" />
        <div className="absolute top-[40%] left-[-20%] w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px] animate-blob animation-delay-4000 mix-blend-screen" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
      </div>

      {/* Navbar */}
      <header className="container mx-auto px-6 py-6 flex items-center justify-between relative z-20">
        <div className="flex items-center gap-3">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-holo-500 shadow-lg shadow-brand-500/20">
             <Aperture className="w-6 h-6 text-white" />
          </div>
          <span className="font-display font-bold text-2xl tracking-tight text-white">
            Work<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-holo-300">Holo</span>
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-10 text-sm font-medium text-slate-400">
          <a href="#" className="hover:text-white transition-colors">Product</a>
          <a href="#" className="hover:text-white transition-colors">Solutions</a>
          <a href="#" className="hover:text-white transition-colors">Pricing</a>
        </nav>
        <div className="flex items-center gap-4">
          <button 
            onClick={() => onNavigate(ViewState.LOGIN)}
            className="text-slate-300 hover:text-white font-medium text-sm transition-colors px-4"
          >
            Log in
          </button>
          <button 
            onClick={() => onNavigate(ViewState.LOGIN)}
            className="relative overflow-hidden group bg-white text-black px-6 py-2.5 rounded-lg font-semibold text-sm transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
          >
            <span className="relative z-10">Get Started</span>
            <div className="absolute inset-0 bg-gradient-to-r from-brand-200 to-holo-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-24 pb-40 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-brand-300 text-xs font-medium mb-8 backdrop-blur-md shadow-lg shadow-brand-500/5 hover:border-brand-500/30 transition-colors cursor-default">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
          </span>
          Introducing WorkHolo OS 2.0
        </div>
        
        <h1 className="font-display text-6xl md:text-8xl font-bold text-white mb-8 tracking-tight leading-[1.1] max-w-5xl mx-auto">
          Synchronize Your <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-white to-holo-300 animate-gradient-x">Digital Workforce.</span>
        </h1>
        
        <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
          A hyper-connected workspace operating system. Orchestrate teams, channels, and real-time presence in a unified holographic interface.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button 
            onClick={() => onNavigate(ViewState.LOGIN)}
            className="btn-holo text-white px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 group min-w-[200px]"
          >
            Launch Console
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white rounded-xl font-medium text-lg transition-all border border-white/10 backdrop-blur-md flex items-center gap-3 min-w-[200px] justify-center hover:border-white/20">
            <Play className="w-5 h-5 fill-current" />
            Watch Demo
          </button>
        </div>

        {/* Floating UI Elements Mockup */}
        <div className="mt-24 relative max-w-5xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent z-10 h-full w-full pointer-events-none"></div>
          <div className="glass-card rounded-2xl p-2 border border-white/10 shadow-2xl shadow-brand-900/40 transform rotate-x-12 perspective-1000">
            <div className="bg-dark-950/80 rounded-xl overflow-hidden aspect-[16/9] relative">
               {/* Abstract UI representation */}
               <div className="absolute top-0 left-0 w-64 h-full border-r border-white/5 p-4 flex flex-col gap-4">
                  <div className="w-8 h-8 rounded-lg bg-white/10 mb-4" />
                  <div className="w-full h-8 rounded bg-white/5" />
                  <div className="w-full h-8 rounded bg-white/5" />
                  <div className="w-3/4 h-8 rounded bg-white/5" />
               </div>
               <div className="absolute top-0 right-0 left-64 h-16 border-b border-white/5 flex items-center px-6 gap-4">
                  <div className="w-32 h-6 rounded bg-white/5" />
                  <div className="ml-auto flex gap-2">
                     <div className="w-8 h-8 rounded-full bg-brand-500/20" />
                     <div className="w-8 h-8 rounded-full bg-holo-500/20" />
                  </div>
               </div>
               <div className="absolute top-24 left-72 p-6 flex gap-4">
                   <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-500 to-holo-500" />
                   <div className="bg-white/5 p-4 rounded-2xl rounded-tl-none border border-white/10 max-w-md">
                      <div className="w-64 h-2 bg-white/20 rounded mb-2" />
                      <div className="w-48 h-2 bg-white/10 rounded" />
                   </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-6 py-24 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold text-white mb-4">
            System Architecture
          </h2>
          <p className="text-slate-400">Engineered for speed, security, and scalability.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Neural Admin Core",
              desc: "Pre-configured admin controls with AI-assisted setup.",
              icon: ShieldCheck,
              gradient: "from-emerald-500 to-teal-500"
            },
            {
              title: "Identity Matrix",
              desc: "Create unlimited users with granular role-based access.",
              icon: Users,
              gradient: "from-blue-500 to-indigo-500"
            },
            {
              title: "Quantum Roles",
              desc: "Flexible permission hierarchy for security.",
              icon: Zap,
              gradient: "from-amber-500 to-orange-500"
            },
            {
              title: "Hyper-Channels",
              desc: "Encrypted public and private channels for focused flux.",
              icon: Layers,
              gradient: "from-purple-500 to-pink-500"
            },
            {
              title: "Smart Signals",
              desc: "Notify team members instantly with holographic alerts.",
              icon: CheckCircle2,
              gradient: "from-pink-500 to-rose-500"
            },
            {
              title: "Infinite Archives",
              desc: "Searchable history of every digital interaction.",
              icon: Box,
              gradient: "from-cyan-500 to-blue-500"
            }
          ].map((feature, i) => (
            <div key={i} className="group glass-card p-8 rounded-2xl hover:bg-white/5 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 shadow-lg shadow-white/5 group-hover:scale-110 transition-transform duration-500`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-brand-300 transition-colors">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 bg-[#020617] relative z-10">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Aperture className="w-5 h-5 text-brand-500" />
            <span className="text-slate-300 font-semibold">WorkHolo OS</span>
          </div>
          <p>&copy; 2024 Spectrum Tech World. All systems nominal.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;