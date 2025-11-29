import React, { useState } from 'react';
import { ViewState } from './types';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';
import ChatInterface from './components/ChatInterface';
import Sidebar from './components/Sidebar';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>(ViewState.LANDING);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setCurrentView(ViewState.DASHBOARD);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentView(ViewState.LANDING);
  };

  const renderContent = () => {
    switch (currentView) {
      case ViewState.LANDING:
        return <LandingPage onNavigate={setCurrentView} />;
      case ViewState.LOGIN:
        return <LoginPage onLogin={handleLogin} onBack={() => setCurrentView(ViewState.LANDING)} />;
      case ViewState.DASHBOARD:
        return <Dashboard />;
      case ViewState.CHAT:
        return <ChatInterface />;
      default:
        return <LandingPage onNavigate={setCurrentView} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 font-sans selection:bg-brand-500/30 selection:text-brand-100 overflow-x-hidden">
      {/* Global Background Ambient Effects (Only visible when logged in to not conflict with landing) */}
      {isLoggedIn && (
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-brand-900/20 rounded-full blur-[128px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-holo-900/10 rounded-full blur-[128px]" />
        </div>
      )}

      {isLoggedIn && currentView !== ViewState.LOGIN && currentView !== ViewState.LANDING && (
        <Sidebar 
          currentView={currentView} 
          onChangeView={setCurrentView} 
          onLogout={handleLogout}
        />
      )}
      
      <main className={`relative z-10 transition-all duration-500 ease-in-out ${
        isLoggedIn && currentView !== ViewState.LOGIN && currentView !== ViewState.LANDING 
          ? 'ml-20 lg:ml-64' 
          : ''
      }`}>
        {renderContent()}
      </main>
    </div>
  );
};

export default App;