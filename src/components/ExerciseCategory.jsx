import React from 'react';
import { ChevronDown, Activity } from 'lucide-react';

const PALETTES = {
  sage: {
    bg: 'rgba(125,148,137,0.10)',
    border: 'rgba(125,148,137,0.35)',
    accent: '#3d6358',
    pillBg: 'rgba(255,255,255,0.7)',
  },
  blue: {
    bg: 'rgba(74,124,138,0.10)',
    border: 'rgba(74,124,138,0.35)',
    accent: '#2f5b67',
    pillBg: 'rgba(255,255,255,0.7)',
  },
  beige: {
    bg: 'rgba(183,139,76,0.10)',
    border: 'rgba(183,139,76,0.30)',
    accent: 'var(--primary-dark)',
    pillBg: 'rgba(255,255,255,0.7)',
  },
  cream: {
    bg: '#fdf6ea',
    border: 'rgba(214,168,95,0.35)',
    accent: '#a06f2a',
    pillBg: 'rgba(255,255,255,0.7)',
  },
  orange: {
    bg: 'rgba(200,127,74,0.10)',
    border: 'rgba(200,127,74,0.35)',
    accent: '#a05a2c',
    pillBg: 'rgba(255,255,255,0.7)',
  },
};

export default function ExerciseCategory({ category, isOpen, onToggle }) {
  const p = PALETTES[category.color] || PALETTES.sage;

  return (
    <div
      className="overflow-hidden transition"
      style={{
        background: p.bg,
        border: `1px solid ${p.border}`,
        borderRadius: 'var(--radius-lg)',
        boxShadow: isOpen ? 'var(--shadow-md)' : 'var(--shadow-sm)',
      }}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="touch-active w-full flex items-center gap-4 text-left p-4"
      >
        <div
          className="shrink-0 flex items-center justify-center"
          style={{
            width: 44,
            height: 44,
            borderRadius: 12,
            background: 'rgba(255,255,255,0.8)',
            color: p.accent,
            border: `1px solid ${p.border}`,
          }}
        >
          <Activity size={20} />
        </div>
        <div className="flex-1 min-w-0">
          <h3
            className="font-bold mb-1.5"
            style={{
              fontFamily: 'Poppins, Inter, sans-serif',
              color: 'var(--text-strong)',
              fontSize: '1rem',
              lineHeight: 1.25,
            }}
          >
            {category.title}
          </h3>
          <span
            className="inline-block uppercase"
            style={{
              fontFamily: 'Poppins, Inter, sans-serif',
              fontSize: '0.65rem',
              fontWeight: 700,
              letterSpacing: '0.05em',
              color: p.accent,
              background: p.pillBg,
              border: `1px solid ${p.border}`,
              padding: '4px 10px',
              borderRadius: 999,
            }}
          >
            {category.period}
          </span>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <span
            className="font-bold"
            style={{
              fontFamily: 'Poppins, Inter, sans-serif',
              fontSize: '0.92rem',
              padding: '5px 11px',
              borderRadius: 999,
              background: 'rgba(255,255,255,0.85)',
              color: p.accent,
              border: `1px solid ${p.border}`,
              minWidth: 32,
              textAlign: 'center',
            }}
          >
            {category.items.length}
          </span>
          <ChevronDown
            size={20}
            style={{
              color: p.accent,
              transition: 'transform 220ms ease',
              transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            }}
          />
        </div>
      </button>

      <div className="collapsible" data-open={isOpen}>
        <div className="collapsible-inner">
          <div className="px-4 pb-5 pt-1" style={{ borderTop: `1px solid ${p.border}` }}>
            <ul className="mt-4 space-y-2.5">
              {category.items.map((it, i) => (
                <li
                  key={i}
                  className="rounded-xl p-3"
                  style={{
                    background: 'rgba(255,255,255,0.85)',
                    border: `1px solid ${p.border}`,
                  }}
                >
                  <div
                    className="font-bold mb-1"
                    style={{
                      fontFamily: 'Poppins, Inter, sans-serif',
                      fontSize: '0.92rem',
                      color: 'var(--text-strong)',
                    }}
                  >
                    {it.name}
                  </div>
                  <div style={{ fontSize: '0.88rem', color: 'var(--text)', lineHeight: 1.55 }}>{it.description}</div>
                </li>
              ))}
            </ul>
            <p
              className="italic mt-4"
              style={{ fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: 1.55 }}
            >
              *Realizar com supervisão de fisioterapeuta. Frequência e progressão variam por paciente.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
