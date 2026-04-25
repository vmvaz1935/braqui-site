import React from 'react';

export default function TimelineMilestones({ items }) {
  return (
    <div className="relative pl-7">
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 6,
          bottom: 6,
          left: 8,
          width: 2,
          background:
            'repeating-linear-gradient(to bottom, var(--primary) 0px, var(--primary) 4px, transparent 4px, transparent 8px)',
          opacity: 0.55,
        }}
      />
      <ul className="space-y-5">
        {items.map((m, i) => (
          <li key={i} className="relative">
            <span
              aria-hidden="true"
              style={{
                position: 'absolute',
                left: -27,
                top: 6,
                width: 18,
                height: 18,
                borderRadius: '50%',
                background: 'var(--primary)',
                boxShadow: '0 0 0 4px var(--primary-soft), 0 0 0 5px var(--primary)',
              }}
            />
            <div
              className="font-bold uppercase mb-2"
              style={{
                fontFamily: 'Poppins, Inter, sans-serif',
                fontSize: '0.75rem',
                color: 'var(--primary-dark)',
                letterSpacing: '0.05em',
              }}
            >
              {m.period}
            </div>
            <div className="flex flex-wrap gap-1.5">
              {m.pills.map((pill, j) => (
                <span
                  key={j}
                  style={{
                    fontFamily: 'Poppins, Inter, sans-serif',
                    fontSize: '0.78rem',
                    padding: '5px 12px',
                    borderRadius: 999,
                    background: 'var(--surface-soft)',
                    color: 'var(--text)',
                    border: '1px solid var(--stroke)',
                  }}
                >
                  {pill}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
