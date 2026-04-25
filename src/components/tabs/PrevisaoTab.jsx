import React from 'react';
import { Calendar, ShieldCheck } from 'lucide-react';
import TimelineMilestones from '../TimelineMilestones.jsx';
import RecoveryTimeCard from '../RecoveryTimeCard.jsx';
import { timeline, recoveryTimeTiles, risks } from '../../data/timeline.js';

export default function PrevisaoTab() {
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
          Previsão de Recuperação
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
          Estimativa de quando você poderá retomar atividades. Consulte sua cirurgiã para prazos específicos.
        </p>
        <p
          className="mt-1"
          style={{ color: 'var(--text-muted)', fontSize: '0.82rem' }}
        >
          *A liberação progressiva de calçados e atividades depende da consolidação óssea. Controle radiográfico no retorno.
        </p>
      </header>

      <div
        className="rounded-3xl p-5 sm:p-6 mb-5"
        style={{
          background: 'var(--surface)',
          border: '1px solid var(--stroke)',
          boxShadow: 'var(--shadow-sm)',
        }}
      >
        <div className="flex items-center gap-2.5 mb-4">
          <Calendar size={20} style={{ color: 'var(--primary-dark)' }} />
          <h3
            className="font-bold uppercase"
            style={{
              fontFamily: 'Poppins, Inter, sans-serif',
              fontSize: '0.78rem',
              letterSpacing: '0.08em',
              color: 'var(--primary-dark)',
            }}
          >
            Marcos da Recuperação
          </h3>
        </div>
        <TimelineMilestones items={timeline} />
      </div>

      <div className="mb-5">
        <RecoveryTimeCard tiles={recoveryTimeTiles} />
      </div>

      <div
        className="rounded-3xl p-5 sm:p-6"
        style={{
          background: 'var(--surface)',
          border: '1px solid var(--stroke)',
          boxShadow: 'var(--shadow-sm)',
        }}
      >
        <div className="flex items-center gap-2.5 mb-4">
          <ShieldCheck size={20} style={{ color: 'var(--medical-sage)' }} />
          <h3
            className="font-bold uppercase"
            style={{
              fontFamily: 'Poppins, Inter, sans-serif',
              fontSize: '0.78rem',
              letterSpacing: '0.08em',
              color: '#3d6358',
            }}
          >
            Riscos e como são prevenidos
          </h3>
        </div>
        <div className="overflow-x-auto -mx-1 px-1">
          <table className="clean-table">
            <thead>
              <tr>
                <th>Possível desfecho</th>
                <th>Como reduzimos a chance</th>
              </tr>
            </thead>
            <tbody>
              {risks.map((r, i) => (
                <tr key={i}>
                  <td style={{ color: 'var(--text-strong)', fontWeight: 600 }}>{r.risk}</td>
                  <td>{r.prevention}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
