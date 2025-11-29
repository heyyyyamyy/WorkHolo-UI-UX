import React from 'react';
import { Aperture, ArrowLeft, Lock, Mail } from 'lucide-react';

interface LoginPageProps {
  onLogin: () => void;
  onBack: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin, onBack }) => {
  return (
    <div className="flex h-screen bg-[#020617] overflow-hidden">
      {/* Left Panel - Visuals */}
      <div className="hidden lg:flex w-1/2 relative flex-col justify-between p-16 border-r border-white/5 overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 bg-dark-950 z-0">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-brand-600/20 to-holo-600/20 rounded-full blur-[100px] animate-pulse-slow" />
           <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 mix-blend-overlay"></div>
           
           {/* Decorative Lines */}
           <div className="absolute top-0 left-0 w-full h-full opacity-20">
             <div className="absolute top-[20%] left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-500 to-transparent" />
             <div className="absolute bottom-[30%] left-0 w-full h-px bg-gradient-to-r from-transparent via-holo-500 to-transparent" />
             <div className="absolute top-0 right-[20%] h-full w-px bg-gradient-to-b from-transparent via-white to-transparent opacity-10" />
           </div>
        </div>
        
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-holo-500 flex items-center justify-center shadow-lg shadow-brand-500/20">
               <Aperture className="w-6 h-6 text-white" />
            </div>
            <span className="font-display font-bold text-2xl text-white tracking-tight">WorkHolo</span>
          </div>
        </div>

        <div className="relative z-10 max-w-lg glass-card p-8 rounded-2xl border-l-4 border-l-brand-500">
          <blockquote className="space-y-6">
            <p className="text-2xl font-medium text-white leading-relaxed font-display">
              "The interface isn't just a tool; it's an extension of our collective intelligence. WorkHolo defines the next era of collaboration."
            </p>
            <footer className="flex items-center gap-4">
              <img src="https://picsum.photos/id/64/100/100" className="w-12 h-12 rounded-full border-2 border-brand-500" alt="Sofia" />
              <div>
                <div className="font-bold text-white">Sofia Davis</div>
                <div className="text-sm text-brand-300">VP of Engineering, TechFlow</div>
              </div>
            </footer>
          </blockquote>
        </div>
        
        <div className="relative z-10 text-slate-500 text-sm font-mono">
          SYSTEM_ID: WH-2024-X // SECURE_CONNECTION
        </div>
      </div>

      {/* Right Panel - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 relative bg-[#020617]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-900/20 via-dark-950 to-dark-950 z-0 pointer-events-none"></div>

        <button 
          onClick={onBack}
          className="absolute top-10 left-10 flex items-center gap-2 text-slate-500 hover:text-white transition-colors z-20 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Orbit
        </button>

        <div className="w-full max-w-[400px] relative z-10">
          <div className="text-center space-y-3 mb-10">
            <h1 className="font-display text-4xl font-bold text-white tracking-tight">Welcome Back</h1>
            <p className="text-slate-400">Authenticate to access your workspace console.</p>
          </div>

          <form onSubmit={(e) => { e.preventDefault(); onLogin(); }} className="space-y-6">
            <div className="space-y-2 group">
              <label className="text-xs font-semibold text-brand-300 uppercase tracking-wider ml-1" htmlFor="email">Identity</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-brand-400 transition-colors" />
                <input 
                  id="email"
                  type="email" 
                  placeholder="name@company.com" 
                  className="w-full bg-slate-900/50 border border-slate-800 rounded-xl pl-12 pr-4 py-4 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-transparent transition-all hover:bg-slate-900/80"
                  defaultValue="amaan@example.com"
                />
              </div>
            </div>
            
            <div className="space-y-2 group">
              <label className="text-xs font-semibold text-brand-300 uppercase tracking-wider ml-1" htmlFor="password">Passkey</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-brand-400 transition-colors" />
                <input 
                  id="password"
                  type="password" 
                  placeholder="••••••••" 
                  className="w-full bg-slate-900/50 border border-slate-800 rounded-xl pl-12 pr-4 py-4 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-transparent transition-all hover:bg-slate-900/80"
                />
              </div>
            </div>

            <div className="pt-4">
              <button 
                type="submit"
                className="w-full btn-holo text-white font-bold py-4 rounded-xl shadow-lg shadow-brand-600/20 transition-all active:scale-[0.98] relative overflow-hidden group"
              >
                <span className="relative z-10">Initialize Session</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>
            </div>
          </form>

          <p className="text-center text-sm text-slate-500 mt-8">
            New unit? <a href="#" className="text-brand-400 hover:text-white hover:underline underline-offset-4 transition-colors">Request Access</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;