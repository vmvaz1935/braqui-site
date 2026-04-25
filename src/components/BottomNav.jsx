import React from 'react';
import { Layers, Calendar, Zap, BookOpen } from 'lucide-react';

const TABS = [
  { id: 'fases', label: 'Fases', Icon: Layers },
  { id: 'previsao', label: 'Previsão', Icon: Calendar },
  { id: 'exercicios', label: 'Exercícios', Icon: Zap },
  { id: 'orientacoes', label: 'Orientações', Icon: BookOpen },
];

export default function BottomNav({ active, onChange }) {
  return (
    <nav
      aria-label="Navegação"
      className="fixed left-0 right-0 bottom-0 z-40"
      style={{
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(20px) saturate(1.4)',
        WebkitBackdropFilter: 'blur(20px) saturate(1.4)',
        borderTop: '1px solid var(--stroke)',
        paddingBottom: 'var(--safe-bottom)',
      }}
    >
      <div className="max-w-3xl mx-auto flex">
        {TABS.map(({ id, label, Icon }) => {
          const isActive = active === id;
          return (
            <button
              key={id}
              type="button"
              onClick={() => onChange(id)}
              aria-current={isActive ? 'true' : 'false'}
              className="touch-active relative flex-1 flex flex-col items-center justify-center gap-1 py-2.5 transition"
              style={{
                minHeight: 64,
                color: isActive ? 'var(--primary-dark)' : 'var(--text-muted)',
              }}
            >
              {isActive && (
                <span
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: '25%',
                    right: '25%',
                    height: 2.5,
                    background: 'linear-gradient(90deg, var(--primary), var(--primary-dark))',
                    borderRadius: '0 0 4px 4px',
                  }}
                />
              )}
              <Icon
                size={22}
                style={{
                  color: isActive ? 'var(--primary)' : 'var(--text-muted)',
                  opacity: isActive ? 1 : 0.65,
                }}
              />
              <span
                style={{
                  fontFamily: 'Poppins, Inter, sans-serif',
                  fontSize: '0.65rem',
                  fontWeight: isActive ? 700 : 500,
                  letterSpacing: '0.03em',
                  color: isActive ? 'var(--primary-dark)' : 'var(--text-muted)',
                }}
              >
                {label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
