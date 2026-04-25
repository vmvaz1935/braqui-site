import React, { useEffect, useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen.jsx';
import Topbar from './components/Topbar.jsx';
import BottomNav from './components/BottomNav.jsx';
import PhasesTab from './components/tabs/PhasesTab.jsx';
import PrevisaoTab from './components/tabs/PrevisaoTab.jsx';
import ExerciciosTab from './components/tabs/ExerciciosTab.jsx';
import OrientacoesTab from './components/tabs/OrientacoesTab.jsx';

export default function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [activeTab, setActiveTab] = useState('fases');

  useEffect(() => {
    if (!showWelcome) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [showWelcome, activeTab]);

  if (showWelcome) {
    return <WelcomeScreen onStart={() => setShowWelcome(false)} />;
  }

  return (
    <div className="min-h-screen flex flex-col" style={{ paddingBottom: 'calc(72px + var(--safe-bottom))' }}>
      <Topbar onInfo={() => setShowWelcome(true)} />
      <main className="flex-1">
        {activeTab === 'fases' && <PhasesTab />}
        {activeTab === 'previsao' && <PrevisaoTab />}
        {activeTab === 'exercicios' && <ExerciciosTab />}
        {activeTab === 'orientacoes' && <OrientacoesTab />}
      </main>
      <BottomNav active={activeTab} onChange={setActiveTab} />
    </div>
  );
}
