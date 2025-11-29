import React, { useState, useEffect } from 'react';
import { CURRENT_USER, STATS, MOCK_USERS } from '../constants';
import { Clock, Coffee, Video, CheckCircle, Circle, MoreVertical, Hand } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, CartesianGrid } from 'recharts';

const Dashboard: React.FC = () => {
  const [time, setTime] = useState(new Date());
  const [isPunchedIn, setIsPunchedIn] = useState(false);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    let interval: any;
    if (isPunchedIn) {
      interval = setInterval(() => setDuration(prev => prev + 1), 1000);
    }
    return () => clearInterval(interval);
  }, [isPunchedIn]);

  const formatDuration = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const chartData = [
    { name: 'Mon', hours: 8.5 },
    { name: 'Tue', hours: 7.2 },
    { name: 'Wed', hours: 9.0 },
    { name: 'Thu', hours: 6.5 },
    { name: 'Fri', hours: 8.0 },
    { name: 'Sat', hours: 4.0 },
    { name: 'Sun', hours: 0 },
  ];

  return (
    <div className="p-6 lg:p-10 space-y-8 max-w-[1600px] mx-auto">
      {/* Header */}
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/5">
        <div>
          <h1 className="font-display text-4xl font-bold text-white flex items-center gap-3">
            Hello, {CURRENT_USER.name} <Hand className="text-amber-400 animate-bounce" />
          </h1>
          <p className="text-slate-400 mt-2 text-lg">Your workspace metrics are stable.</p>
        </div>
        <div className="text-right hidden md:block glass-panel px-6 py-3 rounded-xl border border-white/10">
          <div className="text-3xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-holo-300">
            {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
          </div>
          <div className="text-slate-400 text-xs font-medium uppercase tracking-widest mt-1">
            {time.toLocaleDateString([], { weekday: 'long', month: 'long', day: 'numeric' })}
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Attendance Card */}
        <div className="lg:col-span-2 space-y-8">
          <div className="glass-card rounded-3xl p-10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-30 pointer-events-none">
              <Clock className="w-64 h-64 text-brand-900/50 -mr-16 -mt-16 blur-sm" />
            </div>
            
            <div className="relative z-10">
               <h2 className="font-display text-2xl font-bold text-white mb-2">Time Tracking</h2>
               <p className="text-slate-400 mb-10 max-w-md">Initialize your work session. System tracks productivity metrics in real-time.</p>

               <div className="flex flex-col sm:flex-row items-center gap-8">
                <button 
                  onClick={() => setIsPunchedIn(!isPunchedIn)}
                  className={`
                    w-full sm:w-auto px-10 py-5 rounded-2xl font-bold text-lg transition-all shadow-xl active:scale-95 flex items-center justify-center gap-3 relative overflow-hidden
                    ${isPunchedIn 
                      ? 'bg-transparent border border-red-500/50 text-red-400 hover:bg-red-500/10' 
                      : 'btn-holo text-white'
                    }
                  `}
                >
                  <div className={`w-3 h-3 rounded-full ${isPunchedIn ? 'bg-red-500 animate-pulse' : 'bg-white'}`} />
                  {isPunchedIn ? 'Terminate Session' : 'Initiate Session'}
                </button>
                
                {isPunchedIn && (
                  <div className="flex flex-col border-l-2 border-white/10 pl-8">
                    <span className="text-[10px] text-brand-300 uppercase tracking-widest font-bold mb-1">Elapsed Time</span>
                    <span className="text-4xl font-mono text-white tracking-wider drop-shadow-lg shadow-brand-500/50">{formatDuration(duration)}</span>
                  </div>
                )}
               </div>
            </div>
          </div>

          {/* Activity Chart */}
          <div className="glass-panel rounded-3xl p-8 border border-white/5">
            <div className="flex items-center justify-between mb-8">
               <h3 className="font-display text-xl font-bold text-white">Weekly Productivity</h3>
               <select className="bg-white/5 border border-white/10 rounded-lg px-3 py-1 text-xs text-slate-300 focus:outline-none">
                  <option>This Week</option>
                  <option>Last Week</option>
               </select>
            </div>
            
            <div className="h-72 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1e293b" />
                  <XAxis 
                    dataKey="name" 
                    stroke="#64748b" 
                    fontSize={12} 
                    tickLine={false} 
                    axisLine={false} 
                    dy={10}
                  />
                  <YAxis 
                    stroke="#64748b" 
                    fontSize={12} 
                    tickLine={false} 
                    axisLine={false} 
                    tickFormatter={(value) => `${value}h`}
                  />
                  <Tooltip 
                    cursor={{fill: '#1e293b', opacity: 0.5}}
                    contentStyle={{ backgroundColor: 'rgba(15, 23, 42, 0.9)', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '12px', color: '#fff', backdropFilter: 'blur(8px)' }}
                    itemStyle={{ color: '#c4b5fd' }}
                  />
                  <Bar dataKey="hours" radius={[6, 6, 0, 0]} barSize={40}>
                    {chartData.map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`} 
                        fill={entry.hours > 0 ? 'url(#barGradient)' : '#1e293b'} 
                        stroke={entry.hours > 0 ? 'rgba(139, 92, 246, 0.5)' : 'transparent'}
                      />
                    ))}
                  </Bar>
                  <defs>
                    <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#8b5cf6" stopOpacity={0.8}/>
                      <stop offset="100%" stopColor="#8b5cf6" stopOpacity={0.2}/>
                    </linearGradient>
                  </defs>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Side Panel - Team & Stats */}
        <div className="space-y-8">
          <div className="glass-panel rounded-3xl p-8 border border-white/5 h-full">
            <h3 className="font-display text-xl font-bold text-white mb-2">Team Uplink</h3>
            <p className="text-slate-400 text-sm mb-8">Live monitoring of unit status.</p>

            <div className="grid grid-cols-2 gap-4 mb-10">
              {STATS.map((stat, i) => {
                const Icon = stat.icon === 'Coffee' ? Coffee : stat.icon === 'Video' ? Video : stat.icon === 'CheckCircle' ? CheckCircle : Circle;
                // Override colors for theme
                let iconColor = 'text-slate-500';
                let valueColor = 'text-white';
                let glow = '';

                if (stat.label === 'Available') {
                    iconColor = 'text-emerald-400';
                    glow = 'shadow-[0_0_15px_rgba(52,211,153,0.3)]';
                } else if (stat.label === 'On Break') {
                    iconColor = 'text-brand-400';
                } else if (stat.label === 'In Meeting') {
                    iconColor = 'text-holo-400';
                }

                return (
                  <div key={i} className={`bg-white/5 p-5 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors ${glow}`}>
                    <div className="flex justify-between items-start mb-3">
                      <Icon className={`w-5 h-5 ${iconColor}`} />
                    </div>
                    <div className="text-slate-400 text-xs font-medium uppercase tracking-wider mb-1">{stat.label}</div>
                    <div className={`text-2xl font-bold font-display ${valueColor}`}>
                      {stat.value}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="space-y-4">
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Active Units</h4>
              {MOCK_USERS.map(user => (
                <div key={user.id} className="flex items-center justify-between group cursor-pointer p-3 rounded-xl hover:bg-white/5 transition-all border border-transparent hover:border-white/5">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <img src={user.avatar} alt={user.name} className="w-11 h-11 rounded-full bg-slate-800 object-cover ring-2 ring-slate-900 group-hover:ring-brand-500/50 transition-all" />
                      <span className={`absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full border-2 border-slate-900 ${
                        user.status === 'online' ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]' : 
                        user.status === 'busy' ? 'bg-red-500' : 'bg-slate-500'
                      }`} />
                    </div>
                    <div>
                      <div className="text-white font-medium text-sm group-hover:text-brand-300 transition-colors">{user.name}</div>
                      <div className="text-slate-500 text-xs font-mono">{user.role.toUpperCase()}</div>
                    </div>
                  </div>
                  <button className="text-slate-600 hover:text-white opacity-0 group-hover:opacity-100 transition-all">
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;