import React from 'react';
import { AlertCircle, ChevronDown } from 'lucide-react';

export default function WelcomeScreen({ onStart }) {
  return (
    <div
      className="welcome-gradient min-h-screen w-full flex flex-col items-center justify-center px-5 py-10 animate-fadeIn"
      style={{ paddingTop: 'calc(var(--safe-top) + 40px)', paddingBottom: 'calc(var(--safe-bottom) + 40px)' }}
    >
      <div className="w-full max-w-md flex flex-col items-center text-center">
        <img
          src="/design-system/assets/logo-branca.png.webp"
          alt="Dra. Laice Cunha"
          className="w-44 sm:w-56 mb-7 select-none"
          draggable="false"
        />

        <h1
          className="font-bold text-white leading-tight mb-4"
          style={{
            fontFamily: 'Poppins, Inter, sans-serif',
            letterSpacing: '-0.02em',
            fontSize: 'clamp(1.8rem, 6vw, 3rem)',
          }}
        >
          Recuperação Após
          <br />
          Cirurgia Braqui
        </h1>

        <p
          className="text-white/90 mb-7"
          style={{ fontSize: 'clamp(0.95rem, 2.2vw, 1.05rem)', maxWidth: '34ch' }}
        >
          Orientações para uma recuperação segura e eficaz após a correção da braquimetatarsia
        </p>

        <div
          className="bg-white rounded-2xl p-5 text-left w-full mb-8"
          style={{
            borderLeft: '4px solid #d6a85f',
            boxShadow: '0 12px 30px rgba(0,0,0,0.12)',
          }}
        >
          <div className="flex items-start gap-2.5 mb-2">
            <AlertCircle
              size={20}
              style={{ color: 'var(--primary-dark)', flex: '0 0 auto', marginTop: '2px' }}
            />
            <h3
              className="font-bold uppercase"
              style={{
                color: 'var(--primary-dark)',
                fontFamily: 'Poppins, Inter, sans-serif',
                fontSize: '0.85rem',
                letterSpacing: '0.04em',
              }}
            >
              IMPORTANTE
            </h3>
          </div>
          <p style={{ color: 'var(--text)', fontSize: '0.92rem', lineHeight: 1.6 }}>
            Este material é educativo e geral. Sempre siga as orientações específicas da sua cirurgiã, pois o plano
            de recuperação varia conforme a técnica cirúrgica utilizada e suas condições individuais.
          </p>
        </div>

        <button
          type="button"
          onClick={onStart}
          className="touch-active inline-flex items-center justify-center gap-2 rounded-full transition"
          style={{
            background: 'rgba(0, 0, 0, 0.18)',
            color: '#fff',
            fontFamily: 'Poppins, Inter, sans-serif',
            fontWeight: 600,
            fontSize: '1rem',
            padding: '14px 38px',
            border: '1px solid rgba(255,255,255,0.25)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            boxShadow: '0 8px 20px rgba(0,0,0,0.12)',
            letterSpacing: '0.01em',
          }}
        >
          Começar
          <ChevronDown size={18} />
        </button>
      </div>
    </div>
  );
}
