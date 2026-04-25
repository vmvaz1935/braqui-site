import React, { useState } from 'react';
import PhaseCard from '../PhaseCard.jsx';
import { phases } from '../../data/phases.js';

export default function PhasesTab() {
  const [openId, setOpenId] = useState(1);

  return (
    <section className="px-4 pt-5 pb-3 max-w-3xl mx-auto animate-fadeIn">
      <header className="mb-5">
        <h2
          className="font-bold mb-1.5"
          style={{
            fontFamily: 'Poppins, Inter, sans-serif',
            fontSize: 'clamp(1.4rem, 4vw, 1.75rem)',
            color: 'var(--text-strong)',
            letterSpacing: '-0.015em',
          }}
        >
          Fases da Recuperação
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
          Cada fase tem objetivos e cuidados específicos. Acompanhe a progressão clínica e respeite as orientações da
          equipe.
        </p>
      </header>

      <div className="space-y-3">
        {phases.map((p) => (
          <PhaseCard
            key={p.id}
            phase={p}
            isOpen={openId === p.id}
            onToggle={() => setOpenId(openId === p.id ? null : p.id)}
          />
        ))}
      </div>
    </section>
  );
}
