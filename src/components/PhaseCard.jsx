import React from 'react';
import { Shield, Zap, TrendingUp, ChevronDown, Lightbulb, CheckCircle2, XCircle, Activity } from 'lucide-react';
import RichText from './RichText.jsx';

const ICONS = { Shield, Zap, TrendingUp };

export default function PhaseCard({ phase, isOpen, onToggle }) {
  const Icon = ICONS[phase.icon] || Shield;

  return (
    <div
      className="overflow-hidden transition"
      style={{
        background: 'var(--surface)',
        border: `1px solid ${isOpen ? 'var(--stroke-strong)' : 'var(--stroke)'}`,
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
            width: 48,
            height: 48,
            borderRadius: 14,
            background: 'var(--primary-soft)',
            color: 'var(--primary-dark)',
            border: '1px solid var(--stroke-strong)',
          }}
        >
          <Icon size={22} strokeWidth={2} />
        </div>
        <div className="flex-1 min-w-0">
          <h3
            className="font-bold mb-2"
            style={{
              fontFamily: 'Poppins, Inter, sans-serif',
              color: 'var(--text-strong)',
              fontSize: '1.05rem',
              lineHeight: 1.25,
            }}
          >
            {phase.title}
          </h3>
          <span
            className="inline-block uppercase"
            style={{
              fontFamily: 'Poppins, Inter, sans-serif',
              fontSize: '0.68rem',
              fontWeight: 700,
              letterSpacing: '0.05em',
              color: 'var(--primary-dark)',
              background: 'var(--primary-soft)',
              border: '1px solid var(--stroke-strong)',
              padding: '4px 12px',
              borderRadius: 999,
            }}
          >
            {phase.period}
          </span>
        </div>
        <ChevronDown
          size={22}
          style={{
            color: isOpen ? 'var(--primary-dark)' : 'var(--text-muted)',
            transition: 'transform 220ms ease',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            flex: '0 0 auto',
          }}
        />
      </button>

      <div className="collapsible" data-open={isOpen}>
        <div className="collapsible-inner">
          <div className="px-4 pb-5 pt-1" style={{ borderTop: '1px solid var(--stroke)' }}>
            <div
              className="mt-4 mb-4 p-3.5 rounded-xl flex items-start gap-2.5"
              style={{
                background: 'var(--surface-soft)',
                border: '1px solid var(--stroke)',
              }}
            >
              <Lightbulb size={18} style={{ color: 'var(--primary-dark)', flex: '0 0 auto', marginTop: 2 }} />
              <div style={{ fontSize: '0.92rem', lineHeight: 1.55 }}>
                <strong style={{ color: 'var(--primary-dark)' }}>Foco da fase:</strong>{' '}
                <span style={{ color: 'var(--text)' }}>{phase.focus}</span>
              </div>
            </div>

            <SectionLabel icon={CheckCircle2} text="Suas Metas" />
            <ul className="space-y-2 mb-5">
              {phase.goals.map((g, i) => (
                <li
                  key={i}
                  className="rounded-xl p-3"
                  style={{
                    background: 'var(--surface-soft)',
                    border: '1px solid var(--stroke)',
                  }}
                >
                  <div
                    className="uppercase font-bold mb-0.5"
                    style={{
                      fontFamily: 'Poppins, Inter, sans-serif',
                      fontSize: '0.68rem',
                      letterSpacing: '0.05em',
                      color: 'var(--primary-dark)',
                    }}
                  >
                    {g.label}
                  </div>
                  <div style={{ color: 'var(--text)', fontSize: '0.92rem', lineHeight: 1.55 }}>{g.text}</div>
                </li>
              ))}
            </ul>

            <SectionLabel icon={Zap} text="O que fazer" tone="sage" />
            <ul
              className="rounded-xl p-3.5 mb-5 space-y-1.5"
              style={{ background: 'var(--medical-sage-soft)', border: '1px solid rgba(125,148,137,0.35)' }}
            >
              {phase.do.map((item, i) => (
                <li key={i} className="flex gap-2" style={{ fontSize: '0.92rem', color: 'var(--text)' }}>
                  <span style={{ color: '#5d7a6f', flex: '0 0 auto', lineHeight: 1.55 }}>•</span>
                  <RichText text={item} />
                </li>
              ))}
            </ul>

            <SectionLabel icon={XCircle} text="O que evitar" tone="error" />
            <ul
              className="rounded-xl p-3.5 mb-5 space-y-1.5"
              style={{ background: '#fef2f2', border: '1px solid rgba(239,68,68,0.25)' }}
            >
              {phase.avoid.map((item, i) => (
                <li key={i} className="flex gap-2" style={{ fontSize: '0.92rem', color: 'var(--text)' }}>
                  <span style={{ color: '#c14848', flex: '0 0 auto', lineHeight: 1.55 }}>•</span>
                  <RichText text={item} />
                </li>
              ))}
            </ul>

            <SectionLabel icon={Activity} text="Exercícios" />
            <div className="flex flex-wrap gap-1.5">
              {phase.exercises.map((ex, i) => (
                <span
                  key={i}
                  className="font-semibold"
                  style={{
                    fontFamily: 'Poppins, Inter, sans-serif',
                    fontSize: '0.78rem',
                    padding: '5px 12px',
                    borderRadius: 999,
                    background: 'var(--primary-soft)',
                    color: 'var(--primary-dark)',
                    border: '1px solid var(--stroke-strong)',
                  }}
                >
                  {ex}
                </span>
              ))}
            </div>

            <p
              className="italic mt-4"
              style={{ fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: 1.55 }}
            >
              *Exercícios específicos dependem da técnica cirúrgica e da liberação do cirurgião e fisioterapeuta.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionLabel({ icon: Icon, text, tone }) {
  const colorMap = {
    sage: '#3d6358',
    error: '#a13030',
    default: 'var(--primary-dark)',
  };
  const color = colorMap[tone] || colorMap.default;
  return (
    <div className="flex items-center gap-2 uppercase mb-2" style={{ color }}>
      <Icon size={16} />
      <span
        style={{
          fontFamily: 'Poppins, Inter, sans-serif',
          fontSize: '0.72rem',
          fontWeight: 700,
          letterSpacing: '0.06em',
        }}
      >
        {text}
      </span>
    </div>
  );
}
