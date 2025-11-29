import React, { useState } from 'react';
import { CHANNELS, MOCK_MESSAGES } from '../constants';
import { 
  Hash, 
  Lock, 
  Search, 
  Plus, 
  MoreVertical, 
  Paperclip, 
  Smile, 
  Send,
  Bold,
  Italic,
  Underline,
  Code,
  Link as LinkIcon
} from 'lucide-react';

const ChatInterface: React.FC = () => {
  const [activeChannelId, setActiveChannelId] = useState(CHANNELS[0].id);
  const [messageInput, setMessageInput] = useState('');

  const activeChannel = CHANNELS.find(c => c.id === activeChannelId);

  return (
    <div className="flex h-screen overflow-hidden bg-[#020617]">
      {/* Channels Sidebar (Inner) */}
      <div className="w-72 glass-panel border-r border-white/5 flex flex-col hidden md:flex backdrop-blur-md">
        <div className="p-6 border-b border-white/5">
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-brand-400 transition-colors" />
            <input 
              type="text" 
              placeholder="Search frequency..." 
              className="w-full bg-white/5 border border-white/5 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-brand-500/50 focus:bg-white/10 transition-all"
            />
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4 space-y-8 scrollbar-hide">
          {/* Channel Section */}
          <div>
            <div className="flex items-center justify-between px-3 mb-3 group cursor-pointer">
              <h3 className="text-[11px] font-bold text-slate-500 uppercase tracking-widest group-hover:text-brand-300 transition-colors">Frequencies</h3>
              <Plus className="w-3 h-3 text-slate-500 hover:text-white transition-colors" />
            </div>
            <div className="space-y-1">
              {CHANNELS.map(channel => (
                <button
                  key={channel.id}
                  onClick={() => setActiveChannelId(channel.id)}
                  className={`
                    w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm transition-all duration-200
                    ${activeChannelId === channel.id 
                      ? 'bg-gradient-to-r from-brand-500/20 to-transparent text-white border-l-2 border-brand-500' 
                      : 'text-slate-400 hover:bg-white/5 hover:text-slate-200 border-l-2 border-transparent'
                    }
                  `}
                >
                  <div className="flex items-center gap-3 truncate">
                    {channel.type === 'private' 
                      ? <Lock className={`w-3.5 h-3.5 ${activeChannelId === channel.id ? 'text-brand-400' : 'text-slate-600'}`} /> 
                      : <Hash className={`w-3.5 h-3.5 ${activeChannelId === channel.id ? 'text-brand-400' : 'text-slate-600'}`} />
                    }
                    <span className="truncate font-medium">{channel.name}</span>
                  </div>
                  {channel.unreadCount && (
                    <span className="bg-brand-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded shadow shadow-brand-500/50">
                      {channel.unreadCount}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Direct Messages Section */}
          <div>
            <div className="flex items-center justify-between px-3 mb-3 group cursor-pointer">
              <h3 className="text-[11px] font-bold text-slate-500 uppercase tracking-widest group-hover:text-brand-300 transition-colors">Direct Link</h3>
              <Plus className="w-3 h-3 text-slate-500 hover:text-white transition-colors" />
            </div>
            <div className="space-y-1">
              {['Sam Sameer', 'Sofia Davis', 'Rakesh Sharma'].map((name, i) => (
                <button key={i} className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-slate-400 hover:bg-white/5 hover:text-white transition-all group">
                  <div className="relative">
                    <img src={`https://picsum.photos/id/${i + 50}/50`} className="w-7 h-7 rounded-full bg-slate-800 ring-2 ring-slate-900 group-hover:ring-slate-700" alt="avatar" />
                    <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-500 border-2 border-slate-900 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                  </div>
                  <span className="group-hover:translate-x-1 transition-transform">{name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col bg-[#020617] relative z-0">
         {/* Background pattern inside chat */}
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>

        {/* Chat Header */}
        <header className="h-20 border-b border-white/5 flex items-center justify-between px-8 glass-panel backdrop-blur-xl sticky top-0 z-20">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
               <Hash className="w-5 h-5 text-brand-400" />
            </div>
            <div>
               <h2 className="font-display text-lg font-bold text-white leading-tight">{activeChannel?.name}</h2>
               <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                  <span className="text-slate-500 text-xs font-medium">12 Active Units</span>
               </div>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
             <div className="flex -space-x-3">
                {[1,2,3].map(i => (
                  <img key={i} className="w-9 h-9 rounded-full border-2 border-[#0f172a] shadow-lg" src={`https://picsum.photos/id/${i + 60}/50`} alt="User" />
                ))}
                <div className="w-9 h-9 rounded-full border-2 border-[#0f172a] bg-slate-800 flex items-center justify-center text-xs text-white font-bold">
                  +4
                </div>
             </div>
             <div className="w-px h-8 bg-white/10 mx-2" />
             <div className="flex items-center gap-2">
                <button className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"><Search className="w-5 h-5" /></button>
                <button className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"><MoreVertical className="w-5 h-5" /></button>
             </div>
          </div>
        </header>

        {/* Messages List */}
        <div className="flex-1 overflow-y-auto p-8 space-y-8 relative z-10">
          <div className="flex justify-center my-6">
            <span className="bg-white/5 border border-white/10 text-slate-400 text-xs font-mono px-4 py-1.5 rounded-full backdrop-blur-sm">Today, November 29</span>
          </div>
          
          {MOCK_MESSAGES.map((msg) => (
            <div key={msg.id} className={`flex gap-5 group ${msg.isMe ? 'flex-row-reverse' : ''}`}>
              {!msg.isMe && (
                <img 
                  src={`https://picsum.photos/id/${msg.senderId === 'u2' ? 55 : 65}/50`} 
                  alt="Avatar" 
                  className="w-10 h-10 rounded-full bg-slate-800 object-cover mt-1 ring-2 ring-slate-900 shadow-lg" 
                />
              )}
              
              <div className={`flex flex-col max-w-[65%] ${msg.isMe ? 'items-end' : 'items-start'}`}>
                <div className="flex items-baseline gap-2 mb-2">
                  {!msg.isMe && <span className="font-bold text-white text-sm tracking-wide">{msg.senderId === 'u2' ? 'Sam Sameer' : 'Rakesh Sharma'}</span>}
                  <span className="text-[10px] text-slate-500 font-mono">{msg.timestamp}</span>
                </div>
                <div 
                  className={`
                    px-6 py-4 rounded-3xl text-[15px] leading-relaxed shadow-lg backdrop-blur-sm border
                    ${msg.isMe 
                      ? 'bg-gradient-to-br from-brand-600 to-brand-700 text-white rounded-tr-none border-brand-500/50 shadow-brand-900/20' 
                      : 'bg-white/5 text-slate-200 rounded-tl-none border-white/10 shadow-black/20'
                    }
                  `}
                >
                  {msg.content}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Message Input Area */}
        <div className="p-6 pt-0 relative z-20">
          <div className="glass-panel border border-white/10 rounded-2xl shadow-2xl overflow-hidden focus-within:ring-1 focus-within:ring-brand-500/50 transition-all bg-[#0f172a]/80">
            {/* Toolbar */}
            <div className="flex items-center gap-1 p-2 border-b border-white/5 bg-white/[0.02]">
              <div className="flex gap-1">
                  <button className="p-1.5 text-slate-400 hover:text-white hover:bg-white/5 rounded transition-colors"><Bold className="w-4 h-4" /></button>
                  <button className="p-1.5 text-slate-400 hover:text-white hover:bg-white/5 rounded transition-colors"><Italic className="w-4 h-4" /></button>
                  <button className="p-1.5 text-slate-400 hover:text-white hover:bg-white/5 rounded transition-colors"><Underline className="w-4 h-4" /></button>
              </div>
              <div className="w-px h-4 bg-white/10 mx-2" />
              <div className="flex gap-1">
                <button className="p-1.5 text-slate-400 hover:text-white hover:bg-white/5 rounded transition-colors"><LinkIcon className="w-4 h-4" /></button>
                <button className="p-1.5 text-slate-400 hover:text-white hover:bg-white/5 rounded transition-colors"><Code className="w-4 h-4" /></button>
              </div>
            </div>

            {/* Input */}
            <textarea
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              placeholder={`Transmit to #${activeChannel?.name}...`}
              className="w-full bg-transparent text-white p-4 min-h-[60px] max-h-[150px] focus:outline-none resize-none placeholder-slate-600 font-normal"
            />

            {/* Footer */}
            <div className="flex items-center justify-between p-3 bg-white/[0.02]">
              <div className="flex items-center gap-2">
                <button className="p-2 text-slate-400 hover:text-brand-400 hover:bg-brand-500/10 rounded-full transition-colors">
                  <Plus className="w-5 h-5" />
                </button>
                <button className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-full transition-colors">
                  <Smile className="w-5 h-5" />
                </button>
                <button className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-full transition-colors">
                  <Paperclip className="w-5 h-5" />
                </button>
              </div>
              <button 
                className={`
                  p-2.5 rounded-xl transition-all flex items-center gap-2 font-semibold text-sm
                  ${messageInput.trim() 
                    ? 'bg-brand-500 text-white hover:bg-brand-600 shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 hover:-translate-y-0.5' 
                    : 'bg-white/5 text-slate-500 cursor-not-allowed'
                  }
                `}
                disabled={!messageInput.trim()}
              >
                <span className="hidden sm:block">Send</span>
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;