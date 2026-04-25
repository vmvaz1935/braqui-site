import React from 'react';
import { Info } from 'lucide-react';

export default function Topbar({ onInfo }) {
  return (
    <header
      className="sticky top-0 z-30 w-full"
      style={{
        background: 'rgba(248, 248, 248, 0.92)',
        backdropFilter: 'blur(20px) saturate(1.4)',
        WebkitBackdropFilter: 'blur(20px) saturate(1.4)',
        borderBottom: '1px solid var(--stroke)',
        paddingTop: 'var(--safe-top)',
      }}
    >
      <div className="max-w-3xl mx-auto px-4 flex items-center justify-between gap-3" style={{ minHeight: 64 }}>
        <div className="flex items-center gap-3 min-w-0">
          <img
            src="/design-system/assets/logo-principal.png.webp"
            alt="Dra. Laice Cunha"
            className="h-9 sm:h-10 w-auto select-none shrink-0"
            draggable="false"
          />
          <div className="leading-tight min-w-0">
            <div
              className="font-bold truncate"
              style={{
                fontFamily: 'Poppins, Inter, sans-serif',
                fontSize: '0.95rem',
                color: 'var(--text-strong)',
              }}
            >
              Guia de Recuperação
            </div>
            <div
              className="uppercase truncate"
              style={{
                fontFamily: 'Poppins, Inter, sans-serif',
                fontSize: '0.62rem',
                letterSpacing: '0.12em',
                fontWeight: 600,
                color: 'var(--text-muted)',
              }}
            >
              Braquimetatarsia
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={onInfo}
          aria-label="Sobre este guia"
          className="touch-active rounded-full flex items-center justify-center shrink-0 transition"
          style={{
            width: 40,
            height: 40,
            color: 'var(--text-muted)',
            border: '1px solid var(--stroke)',
            background: 'rgba(255,255,255,0.7)',
          }}
        >
          <Info size={20} />
        </button>
      </div>
    </header>
  );
}
