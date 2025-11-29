import React from 'react';
import { ViewState } from '../types';
import { 
  LayoutDashboard, 
  MessageSquare, 
  Users, 
  Calendar, 
  Settings, 
  LogOut,
  Aperture
} from 'lucide-react';

interface SidebarProps {
  currentView: ViewState;
  onChangeView: (view: ViewState) => void;
  onLogout: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentView, onChangeView, onLogout }) => {
  const menuItems = [
    { id: ViewState.DASHBOARD, label: 'Dashboard', icon: LayoutDashboard },
    { id: ViewState.CHAT, label: 'Communication', icon: MessageSquare },
    { id: 'ATTENDANCE', label: 'Attendance', icon: Calendar, disabled: true },
    { id: 'TEAM', label: 'Team', icon: Users, disabled: true },
  ];

  return (
    <aside className="fixed left-0 top-0 h-full w-20 lg:w-64 glass-panel border-r border-white/5 flex flex-col z-50 transition-all duration-300 backdrop-blur-md">
      {/* Brand */}
      <div className="h-20 flex items-center justify-center lg:justify-start lg:px-8 border-b border-white/5">
        <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-holo-500 shadow-lg shadow-brand-500/20">
          <Aperture className="w-6 h-6 text-white" />
        </div>
        <span className="hidden lg:block ml-4 font-display font-bold text-xl tracking-tight text-white">
          Work<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-holo-300">Holo</span>
        </span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-8 px-4 space-y-2">
        {menuItems.map((item) => {
          const isActive = currentView === item.id;
          const Icon = item.icon;
          
          return (
            <button
              key={item.label}
              onClick={() => !item.disabled && onChangeView(item.id as ViewState)}
              disabled={item.disabled}
              className={`
                w-full flex items-center justify-center lg:justify-start px-3 py-3.5 rounded-xl transition-all duration-300 group relative overflow-hidden
                ${isActive 
                  ? 'bg-white/5 text-white shadow-lg shadow-brand-500/10 border border-white/10' 
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
                }
                ${item.disabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}
              `}
            >
              {isActive && (
                <div className="absolute inset-0 bg-gradient-to-r from-brand-500/10 to-transparent opacity-100" />
              )}
              
              <Icon className={`w-5 h-5 relative z-10 transition-transform duration-300 ${isActive ? 'text-brand-400 scale-110' : 'group-hover:scale-110'}`} />
              <span className={`hidden lg:block ml-3 text-sm font-medium relative z-10 tracking-wide ${isActive ? 'text-white' : ''}`}>
                {item.label}
              </span>
              
              {isActive && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-brand-400 rounded-r-full shadow-[0_0_10px_rgba(139,92,246,0.5)]" />
              )}
            </button>
          );
        })}
      </nav>

      {/* Bottom Actions */}
      <div className="p-4 border-t border-white/5 space-y-2 bg-gradient-to-t from-dark-950/50 to-transparent">
        <button className="w-full flex items-center justify-center lg:justify-start px-3 py-3 rounded-xl text-slate-400 hover:bg-white/5 hover:text-white transition-all">
          <Settings className="w-5 h-5" />
          <span className="hidden lg:block ml-3 text-sm font-medium">Settings</span>
        </button>
        <button 
          onClick={onLogout}
          className="w-full flex items-center justify-center lg:justify-start px-3 py-3 rounded-xl text-slate-400 hover:bg-red-500/10 hover:text-red-400 transition-all group"
        >
          <LogOut className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="hidden lg:block ml-3 text-sm font-medium">Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;