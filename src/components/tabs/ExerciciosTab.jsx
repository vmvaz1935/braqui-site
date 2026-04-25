import React, { useState } from 'react';
import ExerciseCategory from '../ExerciseCategory.jsx';
import { exerciseCategories } from '../../data/exercises.js';

export default function ExerciciosTab() {
  const [openId, setOpenId] = useState(exerciseCategories[0]?.id);

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
          Exercícios
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
          Progressão recomendada por fase. Sempre realizar com supervisão de fisioterapeuta e respeitando a liberação
          médica.
        </p>
      </header>

      <div className="space-y-3">
        {exerciseCategories.map((c) => (
          <ExerciseCategory
            key={c.id}
            category={c}
            isOpen={openId === c.id}
            onToggle={() => setOpenId(openId === c.id ? null : c.id)}
          />
        ))}
      </div>
    </section>
  );
}
