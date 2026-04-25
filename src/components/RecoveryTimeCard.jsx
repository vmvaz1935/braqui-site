import React from 'react';
import { Clock } from 'lucide-react';

export default function RecoveryTimeCard({ tiles }) {
  return (
    <div
      className="recovery-gradient rounded-3xl p-5 sm:p-6 text-white"
      style={{ boxShadow: '0 18px 40px rgba(154, 114, 57, 0.28)' }}
    >
      <div className="flex items-center gap-2.5 mb-1">
        <Clock size={20} className="text-white/85" />
        <h3
          className="uppercase font-bold text-white"
          style={{
            fontFamily: 'Poppins, Inter, sans-serif',
            fontSize: '0.78rem',
            letterSpacing: '0.08em',
          }}
        >
          Tempo Médio de Recuperação
        </h3>
      </div>
      <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.85)' }} className="mb-4">
        Estimativas — variam por técnica e evolução individual
      </p>

      <div className="grid grid-cols-3 gap-2 sm:gap-3">
        {tiles.map((t, i) => (
          <div
            key={i}
            className="rounded-2xl text-center p-3 sm:p-4 flex flex-col justify-between"
            style={{
              background: 'rgba(255, 255, 255, 0.16)',
              border: '1px solid rgba(255,255,255,0.18)',
              backdropFilter: 'blur(6px)',
              minHeight: 110,
            }}
          >
            <div
              className="font-bold text-white leading-none mb-1.5"
              style={{
                fontFamily: 'Poppins, Inter, sans-serif',
                fontSize: 'clamp(1.05rem, 3.6vw, 1.4rem)',
                letterSpacing: '-0.01em',
              }}
            >
              {t.duration}
            </div>
            <div
              className="text-white/90"
              style={{ fontSize: 'clamp(0.7rem, 2vw, 0.78rem)', lineHeight: 1.35 }}
            >
              {t.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
