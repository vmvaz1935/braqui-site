import React, { useState } from 'react';
import { ChevronDown, Shield, Zap, TrendingUp, AlertCircle, Hand, BookOpen } from 'lucide-react';

const ICONS = { Shield, Zap, TrendingUp, AlertCircle, Hand, BookOpen };

export default function Accordion({ items }) {
  const [openId, setOpenId] = useState(null);

  return (
    <div className="space-y-2.5">
      {items.map((it) => {
        const isOpen = openId === it.id;
        const Icon = ICONS[it.icon] || BookOpen;
        return (
          <div
            key={it.id}
            className="overflow-hidden transition"
            style={{
              background: 'var(--surface)',
              border: `1px solid ${isOpen ? 'var(--stroke-strong)' : 'var(--stroke)'}`,
              borderRadius: 'var(--radius-md)',
              boxShadow: isOpen ? 'var(--shadow-sm)' : 'none',
            }}
          >
            <button
              type="button"
              onClick={() => setOpenId(isOpen ? null : it.id)}
              aria-expanded={isOpen}
              className="touch-active w-full flex items-center gap-3 text-left p-3.5"
            >
              <div
                className="shrink-0 flex items-center justify-center"
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: 10,
                  background: 'var(--primary-soft)',
                  color: 'var(--primary-dark)',
                  border: '1px solid var(--stroke-strong)',
                }}
              >
                <Icon size={18} />
              </div>
              <h4
                className="flex-1 font-semibold"
                style={{
                  fontFamily: 'Poppins, Inter, sans-serif',
                  color: 'var(--text-strong)',
                  fontSize: '0.95rem',
                }}
              >
                {it.title}
              </h4>
              <ChevronDown
                size={20}
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
                <ul
                  className="px-4 pb-4 pt-1 space-y-1.5"
                  style={{ borderTop: '1px solid var(--stroke)' }}
                >
                  {it.items.map((line, i) => (
                    <li
                      key={i}
                      className="flex gap-2"
                      style={{ fontSize: '0.92rem', color: 'var(--text)', lineHeight: 1.6 }}
                    >
                      <span style={{ color: 'var(--primary)', flex: '0 0 auto', marginTop: 4 }}>•</span>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
