export const aboutCondition = {
  intro:
    'É comum ouvir: "tenho um dedinho que some dentro do sapato", "meu 4º dedo é curtinho desde criança", "ninguém percebe, mas me incomoda há anos". Se você se reconhece nessas falas, esta cartilha é para você.',
  whatIs:
    'Braquimetatarsia (brachy = curto; metatarsia = metatarso) é o encurtamento congênito ou adquirido de um ou mais metatarsos em relação aos demais. Afeta com maior frequência o 4º metatarso e, muitas vezes, é bilateral.',
  signs: [
    'O 4º dedo fica "mais curto" e pode parecer que "some" no sapato',
    'A paciente retira o dedo para calçar sandália fechada',
    'Surgem calos e dor nos metatarsos vizinhos (sobrecarga)',
    'O sapato de bico fino ou salto acentua o desconforto',
  ],
};

export const causes = [
  { title: 'Congênita', text: 'Mais comum — placas de crescimento que fecham mais cedo' },
  { title: 'Pós-traumática', text: 'Fratura consolidada com encurtamento' },
  { title: 'Pós-infecciosa', text: 'Sequela de osteomielite' },
  { title: 'Iatrogênica', text: 'Rara — após cirurgia prévia' },
];

export const whyTreat = {
  intro: 'A decisão vem por três eixos combinados:',
  axes: [
    { label: 'Funcional', text: 'Dor, calo, sobrecarga, dificuldade de calçar' },
    { label: 'Mecânico', text: 'Redistribuição inadequada do peso na marcha' },
    { label: 'Emocional', text: 'Vergonha, evitar praia, escolher sapato pela ocultação, autoestima afetada há anos' },
  ],
  ethics:
    'Nesta clínica, a Braqui é indicada quando há componente funcional (dor, calo, sobrecarga, limitação em sapato) e/ou impacto emocional significativo e persistente. Caso a caso, respeitando o Código de Ética Médica e a Resolução CFM nº 1.974/2011.',
};

export const techniques = {
  optionA: {
    title: 'A) Alongamento agudo com enxerto ósseo',
    bullets: [
      'Em um único tempo cirúrgico, o metatarso é cortado e alongado na hora com um enxerto ósseo (da crista ilíaca ou do calcâneo da própria paciente)',
      'Fixação com mini-placa, parafusos ou fios',
      'Indicado para encurtamentos menores (geralmente ≤ ~1 cm). Dado a ser validado pelo cirurgião',
    ],
  },
  optionB: {
    title: 'B) Alongamento gradual com mini-fixador externo',
    bullets: [
      'Calotasia / distração osteogênica: o metatarso é cortado e o osso é alongado milímetro a milímetro ao longo de semanas',
      'Distração típica: ~0,5 mm/dia, em 4 ajustes de 0,125 mm. Parâmetros a serem validados pelo cirurgião',
      'Indicado para encurtamentos maiores ou para preservar vascularização e tecidos moles',
    ],
  },
  comparisonTable: {
    headers: ['Aspecto', 'Alongamento agudo', 'Alongamento gradual (fixador)'],
    rows: [
      ['Tempo de cirurgia', 'Único ato', 'Único ato + ajustes domiciliares'],
      ['Ganho de comprimento', 'Limitado', 'Maior (respeita tecidos moles)'],
      ['Enxerto', 'Sim (área doadora)', 'Não (osso novo se forma)'],
      ['Fixador externo visível', 'Não', 'Sim (semanas a meses)'],
      ['Tempo total', 'Mais curto', 'Mais longo'],
      ['Risco de rigidez', 'Se ganho agressivo', 'Menor se bem dosada'],
      ['Risco específico', 'Não consolidação do enxerto', 'Infecção no trajeto dos pinos'],
      ['Cicatriz', 'Do pé + área doadora', 'Pé + pequenas marcas dos pinos'],
    ],
  },
};

export const contraindications = {
  absolute: [
    'Placas de crescimento abertas (adolescentes em crescimento ativo)',
    'Infecção ativa no pé',
    'Vasculopatia grave',
    'Diabetes descompensada',
  ],
  relative: [
    'Tabagismo ativo (reduz muito a formação óssea)',
    'Doença reumatológica em atividade',
    'Alterações de coagulação',
    'Expectativa de pós-operatório curto demais',
  ],
};

export const alternatives = [
  'Palmilhas com elevação do dedo curto',
  'Órteses em silicone para preencher o vão e proteger calos',
  'Ajuste de calçado',
  'Fisioterapia para alívio da sobrecarga',
];

export const journey = [
  '**Avaliação inicial** — anamnese, exame clínico, radiografias com carga',
  '**Plano cirúrgico personalizado** — escolha da técnica (agudo x gradual), estimativa de tempo e de retorno',
  '**Preparo pré-operatório** — exames laboratoriais, avaliação cardiológica quando indicada, controle de fatores de risco (glicemia, tabagismo)',
  '**Cirurgia** — em hospital acreditado, com time completo',
  '**Acompanhamento pós + fisioterapia** — retornos programados + fisioterapia estruturada até a consolidação final',
];

export const howToChoose = [
  '**RQE** em Ortopedia/Traumatologia com área de atuação em **pé e tornozelo**',
  'Filiação à **SBMCP/ABTPé**',
  'Experiência específica em **osteotomias do antepé e alongamento ósseo**',
  '**Hospital acreditado** e equipe multidisciplinar',
  '**Avaliação individualizada** — nunca pacote pronto, nunca promessa de resultado',
];

export const ethicsBlock = [
  'A indicação cirúrgica é sempre ancorada em **componente funcional e/ou emocional persistente**',
  'Não divulgamos **"antes e depois"** nem garantimos resultado: é vedado pelo Código de Ética Médica',
  'Seguimos a **Resolução CFM nº 1.974/2011** e atualizações sobre publicidade médica',
];

export const references = [
  { label: 'SBMCP/ABTPé', url: 'https://abtpe.org.br' },
  { label: 'AOFAS — FootCareMD', url: 'https://www.footcaremd.org' },
  { label: 'CFM — Resolução nº 1.974/2011', url: 'https://portal.cfm.org.br' },
  { label: 'CFM — Código de Ética Médica', url: 'https://portal.cfm.org.br' },
  { label: 'PubMed — brachymetatarsia correction', url: 'https://pubmed.ncbi.nlm.nih.gov' },
  { label: 'SciELO Brasil — Revista Brasileira de Ortopedia', url: 'https://www.scielo.br' },
];
