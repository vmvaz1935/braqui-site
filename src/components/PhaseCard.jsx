import React from 'react';
import {
  Shield,
  Zap,
  TrendingUp,
  ChevronDown,
  Lightbulb,
  Target,
  Check,
  X,
  Activity,
  AlertOctagon,
} from 'lucide-react';
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
            width: 52,
            height: 52,
            borderRadius: 16,
            background: 'linear-gradient(135deg, var(--primary-soft) 0%, #f0d9b8 100%)',
            color: 'var(--primary-dark)',
            border: '1px solid var(--stroke-strong)',
            boxShadow: isOpen ? '0 4px 14px rgba(183,139,76,0.25)' : 'none',
            transition: 'box-shadow 220ms ease',
          }}
        >
          <Icon size={24} strokeWidth={2} />
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
        <div
          className="shrink-0 flex items-center justify-center"
          style={{
            width: 32,
            height: 32,
            borderRadius: '50%',
            background: isOpen ? 'var(--primary-soft)' : 'transparent',
            color: isOpen ? 'var(--primary-dark)' : 'var(--text-muted)',
            transition: 'background 220ms ease',
          }}
        >
          <ChevronDown
            size={20}
            style={{
              transition: 'transform 280ms cubic-bezier(0.22, 1, 0.36, 1)',
              transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            }}
          />
        </div>
      </button>

      <div className="collapsible" data-open={isOpen}>
        <div className="collapsible-inner">
          <div className="px-4 pb-5 pt-1" style={{ borderTop: '1px solid var(--stroke)' }}>
            {/* Foco da fase */}
            <div
              className="mt-4 mb-5 p-4 rounded-2xl flex items-start gap-3 relative overflow-hidden"
              style={{
                background:
                  'linear-gradient(135deg, var(--surface-soft) 0%, var(--primary-soft) 100%)',
                border: '1px solid var(--stroke-strong)',
              }}
            >
              <div
                className="shrink-0 flex items-center justify-center"
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 12,
                  background: 'rgba(255,255,255,0.85)',
                  color: 'var(--primary-dark)',
                  border: '1px solid var(--stroke-strong)',
                  boxShadow: '0 2px 6px rgba(183,139,76,0.15)',
                }}
              >
                <Lightbulb size={18} strokeWidth={2.2} />
              </div>
              <div style={{ fontSize: '0.92rem', lineHeight: 1.6 }}>
                <div
                  className="uppercase mb-1"
                  style={{
                    fontFamily: 'Poppins, Inter, sans-serif',
                    fontSize: '0.68rem',
                    fontWeight: 700,
                    letterSpacing: '0.06em',
                    color: 'var(--primary-dark)',
                  }}
                >
                  Foco da fase
                </div>
                <div style={{ color: 'var(--text)' }}>{phase.focus}</div>
              </div>
            </div>

            {/* Suas Metas */}
            <SectionHeader icon={Target} title="Suas metas" count={phase.goals.length} />
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
              {phase.goals.map((g, i) => (
                <li
                  key={i}
                  className="relative rounded-2xl p-3.5 pl-4 transition"
                  style={{
                    background: 'var(--surface)',
                    border: '1px solid var(--stroke)',
                    boxShadow: '0 1px 2px rgba(19,19,19,0.03)',
                  }}
                >
                  <span
                    aria-hidden="true"
                    style={{
                      position: 'absolute',
                      left: 0,
                      top: 12,
                      bottom: 12,
                      width: 3,
                      borderRadius: 2,
                      background: 'linear-gradient(to bottom, var(--primary), var(--primary-dark))',
                    }}
                  />
                  <div
                    className="uppercase font-bold mb-1"
                    style={{
                      fontFamily: 'Poppins, Inter, sans-serif',
                      fontSize: '0.68rem',
                      letterSpacing: '0.06em',
                      color: 'var(--primary-dark)',
                    }}
                  >
                    {g.label}
                  </div>
                  <div style={{ color: 'var(--text)', fontSize: '0.9rem', lineHeight: 1.5 }}>
                    {g.text}
                  </div>
                </li>
              ))}
            </ul>

            {/* O que fazer */}
            <SectionHeader icon={Check} title="O que fazer" tone="sage" count={phase.do.length} />
            <ul
              className="rounded-2xl mb-6 overflow-hidden"
              style={{
                background:
                  'linear-gradient(180deg, var(--medical-sage-soft) 0%, rgba(232,240,236,0.55) 100%)',
                border: '1px solid rgba(125,148,137,0.35)',
              }}
            >
              {phase.do.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 px-3.5 py-2.5"
                  style={{
                    borderTop: i === 0 ? 'none' : '1px solid rgba(125,148,137,0.2)',
                    fontSize: '0.92rem',
                    color: 'var(--text)',
                    lineHeight: 1.55,
                  }}
                >
                  <span
                    aria-hidden="true"
                    className="shrink-0 flex items-center justify-center"
                    style={{
                      width: 22,
                      height: 22,
                      borderRadius: '50%',
                      background: 'rgba(125,148,137,0.95)',
                      color: '#fff',
                      marginTop: 1,
                      boxShadow: '0 1px 3px rgba(61,99,88,0.25)',
                    }}
                  >
                    <Check size={13} strokeWidth={3} />
                  </span>
                  <span className="flex-1">
                    <RichText text={item} />
                  </span>
                </li>
              ))}
            </ul>

            {/* O que evitar */}
            <SectionHeader icon={AlertOctagon} title="O que evitar" tone="error" count={phase.avoid.length} />
            <ul
              className="rounded-2xl mb-6 overflow-hidden"
              style={{
                background: 'linear-gradient(180deg, #fef2f2 0%, rgba(254,242,242,0.6) 100%)',
                border: '1px solid rgba(239,68,68,0.25)',
              }}
            >
              {phase.avoid.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 px-3.5 py-2.5"
                  style={{
                    borderTop: i === 0 ? 'none' : '1px solid rgba(239,68,68,0.15)',
                    fontSize: '0.92rem',
                    color: 'var(--text)',
                    lineHeight: 1.55,
                  }}
                >
                  <span
                    aria-hidden="true"
                    className="shrink-0 flex items-center justify-center"
                    style={{
                      width: 22,
                      height: 22,
                      borderRadius: '50%',
                      background: '#dc6262',
                      color: '#fff',
                      marginTop: 1,
                      boxShadow: '0 1px 3px rgba(220,98,98,0.3)',
                    }}
                  >
                    <X size={13} strokeWidth={3} />
                  </span>
                  <span className="flex-1">
                    <RichText text={item} />
                  </span>
                </li>
              ))}
            </ul>

            {/* Exercícios */}
            <SectionHeader icon={Activity} title="Exercícios da fase" count={phase.exercises.length} />
            <div className="flex flex-wrap gap-2">
              {phase.exercises.map((ex, i) => (
                <span
                  key={i}
                  className="font-semibold inline-flex items-center gap-1.5"
                  style={{
                    fontFamily: 'Poppins, Inter, sans-serif',
                    fontSize: '0.78rem',
                    padding: '6px 12px 6px 10px',
                    borderRadius: 999,
                    background:
                      'linear-gradient(135deg, var(--primary-soft) 0%, #f0d9b8 100%)',
                    color: 'var(--primary-dark)',
                    border: '1px solid var(--stroke-strong)',
                    boxShadow: '0 1px 2px rgba(183,139,76,0.15)',
                  }}
                >
                  <Activity size={12} strokeWidth={2.4} />
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

function SectionHeader({ icon: Icon, title, tone, count }) {
  const tokens = {
    sage: {
      color: '#3d6358',
      bg: 'rgba(125,148,137,0.18)',
      iconBg: 'rgba(125,148,137,0.95)',
      iconColor: '#fff',
      barBg: 'linear-gradient(to right, rgba(125,148,137,0.5), transparent)',
    },
    error: {
      color: '#a13030',
      bg: 'rgba(239,68,68,0.10)',
      iconBg: '#dc6262',
      iconColor: '#fff',
      barBg: 'linear-gradient(to right, rgba(239,68,68,0.4), transparent)',
    },
    default: {
      color: 'var(--primary-dark)',
      bg: 'var(--primary-soft)',
      iconBg: 'var(--primary)',
      iconColor: '#fff',
      barBg: 'linear-gradient(to right, var(--stroke-strong), transparent)',
    },
  };
  const t = tokens[tone] || tokens.default;

  return (
    <div className="flex items-center gap-2.5 mb-3">
      <span
        aria-hidden="true"
        className="shrink-0 flex items-center justify-center"
        style={{
          width: 26,
          height: 26,
          borderRadius: 8,
          background: t.iconBg,
          color: t.iconColor,
          boxShadow: '0 2px 6px rgba(0,0,0,0.08)',
        }}
      >
        <Icon size={14} strokeWidth={2.6} />
      </span>
      <h4
        className="uppercase"
        style={{
          fontFamily: 'Poppins, Inter, sans-serif',
          fontSize: '0.78rem',
          fontWeight: 700,
          letterSpacing: '0.07em',
          color: t.color,
        }}
      >
        {title}
      </h4>
      {typeof count === 'number' && count > 0 && (
        <span
          aria-hidden="true"
          className="font-bold"
          style={{
            fontFamily: 'Poppins, Inter, sans-serif',
            fontSize: '0.68rem',
            color: t.color,
            background: t.bg,
            padding: '2px 8px',
            borderRadius: 999,
            minWidth: 22,
            textAlign: 'center',
          }}
        >
          {count}
        </span>
      )}
      <span
        aria-hidden="true"
        className="flex-1 ml-1"
        style={{ height: 1, background: t.barBg }}
      />
    </div>
  );
}
