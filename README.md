# Cartilha do Paciente — Cirurgia Braqui

Site educativo sobre a correção cirúrgica da **braquimetatarsia** (Cirurgia Braqui), com 4 abas:

- **Fases** — 3 fases da recuperação
- **Previsão** — marcos e tempo médio de recuperação
- **Exercícios** — 5 categorias de reabilitação
- **Orientações** — cuidados, cartilha educativa, FAQ, alertas e contatos

Design system idêntico ao [haluxpo.vercel.app](https://haluxpo.vercel.app/) (mesma paleta dourada, mesma tipografia Poppins/Inter, mesmos componentes).

## Stack

- React 19 + Vite 7 (sem TypeScript, JSX puro)
- Tailwind CSS v4 via `@tailwindcss/vite`
- `lucide-react` para ícones
- Fontes Google: Poppins + Inter

## Desenvolvimento

```bash
npm install
npm run dev      # dev server (http://localhost:5173)
npm run build    # build de produção em dist/
npm run preview  # preview do build
```

## Deploy (Vercel)

```bash
npx vercel link
npx vercel --prod
```

`vercel.json` define framework `vite`, `cleanUrls` e cache imutável para `/assets/*` e `/design-system/*`.

## Estrutura

```
braqui_site/
├── public/design-system/assets/   # logos (logo-principal, logo-branca)
├── src/
│   ├── data/                      # phases, timeline, exercises, guidelines, faq, techniques, contacts
│   ├── components/                # Topbar, BottomNav, WelcomeScreen, PhaseCard, ExerciseCategory, etc.
│   │   └── tabs/                  # PhasesTab, PrevisaoTab, ExerciciosTab, OrientacoesTab
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── vercel.json
└── package.json
```

## Conteúdo

Todo o conteúdo médico/educativo da cartilha original é preservado, distribuído nas 4 abas:

- Fases · Previsão · Exercícios · Orientações
- Cartilha educativa, técnicas A vs B, contraindicações, alternativas, jornada, ética CFM
- Mitos e verdades · FAQ · Sinais de alerta · Contatos · Referências

## Marca e ética

- Marca: **Dra. Laice Cunha** — Cirurgiã de Pé e Tornozelo
- Material educativo, sem promessa de resultado, em conformidade com Resolução CFM nº 1.974/2011

---

Versão estática anterior preservada em `index.legacy.html` e `assets_legacy/` (ignorados pelo git).
