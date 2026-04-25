import React, { useState } from 'react';
import {
  BookOpen,
  Calendar as CalendarIcon,
  AlertTriangle,
  Phone,
  MessageCircle,
  Mail,
  Globe,
  MapPin,
  Stethoscope,
  Activity,
  HelpCircle,
  ChevronDown,
  Heart,
  Shield,
  Sparkles,
} from 'lucide-react';
import Accordion from '../Accordion.jsx';
import RichText from '../RichText.jsx';
import { generalGuidelines, dailyActivities, warnings } from '../../data/guidelines.js';
import { faq, myths } from '../../data/faq.js';
import {
  aboutCondition,
  causes,
  whyTreat,
  techniques,
  contraindications,
  alternatives,
  journey,
  howToChoose,
  ethicsBlock,
  references,
} from '../../data/techniques.js';
import { contacts } from '../../data/contacts.js';

function SectionTitle({ icon: Icon, title, color = 'var(--primary-dark)', subtitle }) {
  return (
    <div className="mb-3">
      <div className="flex items-center gap-2 uppercase mb-1" style={{ color }}>
        {Icon && <Icon size={18} />}
        <h3
          className="font-bold"
          style={{
            fontFamily: 'Poppins, Inter, sans-serif',
            fontSize: '0.78rem',
            letterSpacing: '0.07em',
          }}
        >
          {title}
        </h3>
      </div>
      {subtitle && (
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{subtitle}</p>
      )}
    </div>
  );
}

function Card({ children, style, className = '' }) {
  return (
    <div
      className={`rounded-3xl p-5 sm:p-6 ${className}`}
      style={{
        background: 'var(--surface)',
        border: '1px solid var(--stroke)',
        boxShadow: 'var(--shadow-sm)',
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function Expandable({ icon: Icon, title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="overflow-hidden"
      style={{
        background: 'var(--surface)',
        border: `1px solid ${open ? 'var(--stroke-strong)' : 'var(--stroke)'}`,
        borderRadius: 'var(--radius-md)',
        boxShadow: open ? 'var(--shadow-sm)' : 'none',
      }}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="touch-active w-full flex items-center gap-3 text-left p-3.5"
      >
        {Icon && (
          <div
            className="shrink-0 flex items-center justify-center"
            style={{
              width: 36,
              height: 36,
              borderRadius: 10,
              background: 'var(--primary-soft)',
              color: 'var(--primary-dark)',
              border: '1px solid var(--stroke-strong)',
            }}
          >
            <Icon size={18} />
          </div>
        )}
        <h4
          className="flex-1 font-semibold"
          style={{
            fontFamily: 'Poppins, Inter, sans-serif',
            color: 'var(--text-strong)',
            fontSize: '0.95rem',
          }}
        >
          {title}
        </h4>
        <ChevronDown
          size={20}
          style={{
            color: open ? 'var(--primary-dark)' : 'var(--text-muted)',
            transition: 'transform 220ms ease',
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        />
      </button>
      <div className="collapsible" data-open={open}>
        <div className="collapsible-inner">
          <div className="px-4 pb-4 pt-3" style={{ borderTop: '1px solid var(--stroke)' }}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function OrientacoesTab() {
  return (
    <section className="px-4 pt-5 pb-3 max-w-3xl mx-auto animate-fadeIn space-y-5">
      <header>
        <h2
          className="font-bold mb-1.5"
          style={{
            fontFamily: 'Poppins, Inter, sans-serif',
            fontSize: 'clamp(1.4rem, 4vw, 1.75rem)',
            color: 'var(--text-strong)',
            letterSpacing: '-0.015em',
          }}
        >
          Orientações
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
          Cuidados gerais, cartilha educativa, perguntas frequentes e contatos da equipe.
        </p>
      </header>

      {/* Orientações Gerais */}
      <Card>
        <SectionTitle
          icon={BookOpen}
          title="Orientações Gerais"
          subtitle="Toque em cada item para ver os detalhes"
        />
        <Accordion items={generalGuidelines} />
      </Card>

      {/* AVD */}
      <Card>
        <SectionTitle
          icon={Activity}
          title="Atividades de Vida Diária"
          subtitle="Como adaptar a rotina nas semanas e meses após a cirurgia"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {dailyActivities.map((a, i) => (
            <div
              key={i}
              className="rounded-xl p-3.5"
              style={{
                background: 'var(--surface-soft)',
                border: '1px solid var(--stroke)',
              }}
            >
              <div
                className="font-bold mb-1"
                style={{
                  fontFamily: 'Poppins, Inter, sans-serif',
                  color: 'var(--primary-dark)',
                  fontSize: '0.88rem',
                }}
              >
                {a.title}
              </div>
              <div style={{ fontSize: '0.88rem', color: 'var(--text)', lineHeight: 1.55 }}>
                {a.text}
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Cartilha Educativa */}
      <Card>
        <SectionTitle
          icon={Sparkles}
          title="Cartilha Educativa"
          subtitle="Sobre a braquimetatarsia, técnicas e decisão cirúrgica"
        />
        <div className="space-y-2.5">
          <Expandable icon={BookOpen} title="O que é braquimetatarsia">
            <p
              className="italic mb-3"
              style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6 }}
            >
              {aboutCondition.intro}
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--text)', lineHeight: 1.7 }} className="mb-3">
              {aboutCondition.whatIs}
            </p>
            <ul className="space-y-1.5">
              {aboutCondition.signs.map((s, i) => (
                <li key={i} className="flex gap-2" style={{ fontSize: '0.92rem', color: 'var(--text)' }}>
                  <span style={{ color: 'var(--primary)', flex: '0 0 auto' }}>•</span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </Expandable>

          <Expandable icon={Heart} title="Causas">
            <ul className="space-y-2">
              {causes.map((c, i) => (
                <li
                  key={i}
                  className="rounded-lg p-3"
                  style={{ background: 'var(--surface-soft)', border: '1px solid var(--stroke)' }}
                >
                  <div
                    className="font-bold mb-0.5"
                    style={{
                      fontFamily: 'Poppins, Inter, sans-serif',
                      color: 'var(--primary-dark)',
                      fontSize: '0.85rem',
                    }}
                  >
                    {c.title}
                  </div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--text)' }}>{c.text}</div>
                </li>
              ))}
            </ul>
          </Expandable>

          <Expandable icon={HelpCircle} title="Por que tratar">
            <p style={{ fontSize: '0.95rem', color: 'var(--text)', lineHeight: 1.7 }} className="mb-3">
              {whyTreat.intro}
            </p>
            <ul className="space-y-2 mb-3">
              {whyTreat.axes.map((a, i) => (
                <li
                  key={i}
                  className="rounded-lg p-3"
                  style={{ background: 'var(--surface-soft)', border: '1px solid var(--stroke)' }}
                >
                  <div
                    className="uppercase font-bold mb-0.5"
                    style={{
                      fontFamily: 'Poppins, Inter, sans-serif',
                      fontSize: '0.7rem',
                      letterSpacing: '0.05em',
                      color: 'var(--primary-dark)',
                    }}
                  >
                    {a.label}
                  </div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--text)' }}>{a.text}</div>
                </li>
              ))}
            </ul>
            <div
              className="rounded-lg p-3"
              style={{ background: 'var(--medical-sage-soft)', border: '1px solid rgba(125,148,137,0.35)' }}
            >
              <div
                className="font-bold uppercase mb-1"
                style={{
                  fontFamily: 'Poppins, Inter, sans-serif',
                  fontSize: '0.7rem',
                  letterSpacing: '0.05em',
                  color: '#3d6358',
                }}
              >
                Indicação ética
              </div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text)', lineHeight: 1.6 }}>
                {whyTreat.ethics}
              </div>
            </div>
          </Expandable>

          <Expandable icon={Activity} title="Técnica cirúrgica (minimamente invasiva)">
            {techniques.intro && (
              <div
                className="rounded-lg p-3 mb-3"
                style={{
                  background: 'var(--medical-sage-soft)',
                  border: '1px solid rgba(125,148,137,0.35)',
                }}
              >
                <div style={{ fontSize: '0.92rem', color: 'var(--text)', lineHeight: 1.65 }}>
                  <RichText text={techniques.intro} />
                </div>
              </div>
            )}
            <div className="space-y-3 mb-3">
              <div
                className="rounded-lg p-3"
                style={{ background: 'var(--surface-soft)', border: '1px solid var(--stroke)' }}
              >
                <div
                  className="font-bold mb-2"
                  style={{
                    fontFamily: 'Poppins, Inter, sans-serif',
                    color: 'var(--primary-dark)',
                    fontSize: '0.92rem',
                  }}
                >
                  {techniques.optionA.title}
                </div>
                <ul className="space-y-1.5">
                  {techniques.optionA.bullets.map((b, i) => (
                    <li key={i} className="flex gap-2" style={{ fontSize: '0.9rem', color: 'var(--text)' }}>
                      <span style={{ color: 'var(--primary)', flex: '0 0 auto' }}>•</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className="rounded-lg p-3"
                style={{ background: 'var(--surface-soft)', border: '1px solid var(--stroke)' }}
              >
                <div
                  className="font-bold mb-2"
                  style={{
                    fontFamily: 'Poppins, Inter, sans-serif',
                    color: 'var(--primary-dark)',
                    fontSize: '0.92rem',
                  }}
                >
                  {techniques.optionB.title}
                </div>
                <ul className="space-y-1.5">
                  {techniques.optionB.bullets.map((b, i) => (
                    <li key={i} className="flex gap-2" style={{ fontSize: '0.9rem', color: 'var(--text)' }}>
                      <span style={{ color: 'var(--primary)', flex: '0 0 auto' }}>•</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="overflow-x-auto -mx-1 px-1">
              <table className="clean-table">
                <thead>
                  <tr>
                    {techniques.comparisonTable.headers.map((h, i) => (
                      <th key={i}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {techniques.comparisonTable.rows.map((row, i) => (
                    <tr key={i}>
                      {row.map((cell, j) => (
                        <td key={j} style={j === 0 ? { color: 'var(--text-strong)', fontWeight: 600 } : {}}>
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {techniques.note && (
              <p
                className="italic mt-3"
                style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.6 }}
              >
                <RichText text={techniques.note} />
              </p>
            )}
          </Expandable>

          <Expandable icon={AlertTriangle} title="Contraindicações">
            <div
              className="font-bold uppercase mb-2"
              style={{
                fontFamily: 'Poppins, Inter, sans-serif',
                fontSize: '0.72rem',
                letterSpacing: '0.06em',
                color: 'var(--error)',
              }}
            >
              Absolutas
            </div>
            <ul className="space-y-1.5 mb-4">
              {contraindications.absolute.map((c, i) => (
                <li key={i} className="flex gap-2" style={{ fontSize: '0.92rem', color: 'var(--text)' }}>
                  <span style={{ color: 'var(--error)', flex: '0 0 auto' }}>•</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
            <div
              className="font-bold uppercase mb-2"
              style={{
                fontFamily: 'Poppins, Inter, sans-serif',
                fontSize: '0.72rem',
                letterSpacing: '0.06em',
                color: 'var(--warning)',
              }}
            >
              Relativas
            </div>
            <ul className="space-y-1.5">
              {contraindications.relative.map((c, i) => (
                <li key={i} className="flex gap-2" style={{ fontSize: '0.92rem', color: 'var(--text)' }}>
                  <span style={{ color: 'var(--warning)', flex: '0 0 auto' }}>•</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </Expandable>

          <Expandable icon={HelpCircle} title="Alternativas não cirúrgicas">
            <ul className="space-y-1.5">
              {alternatives.map((a, i) => (
                <li key={i} className="flex gap-2" style={{ fontSize: '0.92rem', color: 'var(--text)' }}>
                  <span style={{ color: 'var(--primary)', flex: '0 0 auto' }}>•</span>
                  <span>{a}</span>
                </li>
              ))}
            </ul>
            <p
              className="mt-3 italic"
              style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.6 }}
            >
              Funcionam para alguns casos, mas não corrigem a anatomia.
            </p>
          </Expandable>

          <Expandable icon={CalendarIcon} title="Sua jornada conosco">
            <ol className="space-y-2">
              {journey.map((step, i) => (
                <li
                  key={i}
                  className="rounded-lg p-3 flex gap-3"
                  style={{ background: 'var(--surface-soft)', border: '1px solid var(--stroke)' }}
                >
                  <span
                    className="font-bold shrink-0 flex items-center justify-center"
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: '50%',
                      background: 'var(--primary)',
                      color: '#fff',
                      fontFamily: 'Poppins, Inter, sans-serif',
                      fontSize: '0.85rem',
                    }}
                  >
                    {i + 1}
                  </span>
                  <div style={{ fontSize: '0.92rem', color: 'var(--text)', lineHeight: 1.6 }}>
                    <RichText text={step} />
                  </div>
                </li>
              ))}
            </ol>
          </Expandable>

          <Expandable icon={Stethoscope} title="Como escolher o profissional">
            <ul className="space-y-1.5">
              {howToChoose.map((c, i) => (
                <li key={i} className="flex gap-2" style={{ fontSize: '0.92rem', color: 'var(--text)' }}>
                  <span style={{ color: 'var(--primary)', flex: '0 0 auto' }}>•</span>
                  <span>
                    <RichText text={c} />
                  </span>
                </li>
              ))}
            </ul>
          </Expandable>

          <Expandable icon={Shield} title="Aspectos éticos (CFM)">
            <ul className="space-y-1.5">
              {ethicsBlock.map((c, i) => (
                <li key={i} className="flex gap-2" style={{ fontSize: '0.92rem', color: 'var(--text)' }}>
                  <span style={{ color: 'var(--primary)', flex: '0 0 auto' }}>•</span>
                  <span>
                    <RichText text={c} />
                  </span>
                </li>
              ))}
            </ul>
          </Expandable>
        </div>
      </Card>

      {/* Mitos */}
      <Card>
        <SectionTitle icon={Sparkles} title="Mitos e verdades" />
        <div className="space-y-2">
          {myths.map((m, i) => (
            <details key={i} className="faq-item">
              <summary>{m.q}</summary>
              <div className="faq-body">
                <RichText text={m.a} />
              </div>
            </details>
          ))}
        </div>
      </Card>

      {/* FAQ */}
      <Card>
        <SectionTitle icon={HelpCircle} title="Perguntas Frequentes" />
        <div className="space-y-2">
          {faq.map((f, i) => (
            <details key={i} className="faq-item">
              <summary>{f.q}</summary>
              <div className="faq-body">
                <RichText text={f.a} />
              </div>
            </details>
          ))}
        </div>
      </Card>

      {/* Sinais de alerta */}
      <div
        className="rounded-3xl p-5 sm:p-6"
        style={{
          background: '#fef2f2',
          border: '1px solid rgba(239,68,68,0.25)',
        }}
      >
        <div className="flex items-center gap-2.5 mb-3" style={{ color: '#a13030' }}>
          <AlertTriangle size={20} />
          <h3
            className="font-bold uppercase"
            style={{
              fontFamily: 'Poppins, Inter, sans-serif',
              fontSize: '0.78rem',
              letterSpacing: '0.07em',
            }}
          >
            Sinais de Alerta — entre em contato imediatamente
          </h3>
        </div>
        <ul className="space-y-1.5">
          {warnings.map((w, i) => (
            <li key={i} className="flex gap-2" style={{ fontSize: '0.92rem', color: 'var(--text)' }}>
              <span style={{ color: '#c14848', flex: '0 0 auto', lineHeight: 1.55 }}>•</span>
              <span>{w}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Contatos */}
      <Card style={{ background: 'var(--surface-soft)' }}>
        <SectionTitle icon={Phone} title="Contatos e Informações" />
        <div className="space-y-2.5">
          <ContactRow
            icon={Phone}
            label={contacts.doctor.role}
            value={contacts.doctor.name}
            href={contacts.phone.href}
          />
          <ContactRow
            icon={Activity}
            label={`Fisioterapeuta · ${contacts.physio.crefito}`}
            value={contacts.physio.name}
          />
          <ContactRow
            icon={MessageCircle}
            label="WhatsApp / Telefone"
            value={contacts.phone.label}
            href={contacts.phone.whatsapp}
            external
          />
          <ContactRow
            icon={Mail}
            label="E-mail"
            value={contacts.email.label}
            href={contacts.email.href}
          />
          <ContactRow
            icon={Globe}
            label="Site"
            value={contacts.site.label}
            href={contacts.site.href}
            external
          />
          <ContactRow icon={MapPin} label="Endereço" value={contacts.address} />
        </div>
      </Card>

      {/* Referências */}
      <Card>
        <SectionTitle icon={BookOpen} title="Referências e leituras de apoio" />
        <ul className="space-y-1.5">
          {references.map((r, i) => (
            <li key={i}>
              <a
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
                style={{
                  fontSize: '0.92rem',
                  color: 'var(--primary-dark)',
                  textDecoration: 'underline',
                }}
              >
                <span style={{ color: 'var(--primary)' }}>›</span>
                {r.label}
              </a>
            </li>
          ))}
        </ul>
        <p
          className="italic mt-3"
          style={{ fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: 1.55 }}
        >
          Material educativo. Não substitui consulta médica nem acompanhamento individualizado.
        </p>
      </Card>
    </section>
  );
}

function ContactRow({ icon: Icon, label, value, href, external }) {
  const content = (
    <div
      className="flex items-start gap-3 rounded-xl p-3"
      style={{
        background: 'var(--surface)',
        border: '1px solid var(--stroke)',
      }}
    >
      <div
        className="shrink-0 flex items-center justify-center"
        style={{
          width: 36,
          height: 36,
          borderRadius: 10,
          background: 'var(--primary-soft)',
          color: 'var(--primary-dark)',
          border: '1px solid var(--stroke-strong)',
        }}
      >
        <Icon size={18} />
      </div>
      <div className="min-w-0 flex-1">
        <div
          className="uppercase font-bold mb-0.5"
          style={{
            fontFamily: 'Poppins, Inter, sans-serif',
            fontSize: '0.66rem',
            letterSpacing: '0.06em',
            color: 'var(--primary-dark)',
          }}
        >
          {label}
        </div>
        <div
          className="font-medium"
          style={{ fontSize: '0.95rem', color: 'var(--text-strong)', lineHeight: 1.45 }}
        >
          {value}
        </div>
      </div>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className="touch-active block"
      >
        {content}
      </a>
    );
  }
  return content;
}
