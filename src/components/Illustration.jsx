import React from 'react';

/**
 * Illustration — wrapper padronizado para as ilustrações da cartilha.
 * Aplica fundo cream/dourado suave, borda arredondada e lazy loading.
 */
export default function Illustration({
  src,
  alt,
  aspectRatio = '4 / 3',
  rounded = 16,
  bg = 'linear-gradient(135deg, var(--surface-soft) 0%, var(--primary-soft) 100%)',
  className = '',
  style = {},
  fit = 'cover',
  decorative = false,
}) {
  if (!src) return null;
  return (
    <div
      className={`overflow-hidden ${className}`}
      style={{
        aspectRatio,
        borderRadius: rounded,
        background: bg,
        border: '1px solid var(--stroke)',
        ...style,
      }}
    >
      <img
        src={src}
        alt={decorative ? '' : alt || ''}
        aria-hidden={decorative ? 'true' : undefined}
        loading="lazy"
        decoding="async"
        draggable="false"
        style={{
          width: '100%',
          height: '100%',
          objectFit: fit,
          display: 'block',
        }}
      />
    </div>
  );
}
