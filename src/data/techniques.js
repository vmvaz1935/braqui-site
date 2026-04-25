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
  intro:
    'Na nossa clínica, a correção é realizada por **técnica minimamente invasiva (MIS)**, com mini-incisões de 3–5 mm e **fixação interna**. Não utilizamos fixador externo, não há ajustes diários em casa nem cuidados com pinos visíveis.',
  optionA: {
    title: 'A) MIS com alongamento agudo + enxerto',
    bullets: [
      'Em um único tempo cirúrgico, o metatarso é cortado por mini-incisões e alongado de imediato',
      'Quando necessário, é interposto enxerto ósseo (autólogo do calcâneo ou substituto sintético)',
      'Fixação interna com mini-placa, parafusos ou fios',
      'Indicado para encurtamentos pequenos e moderados, com pele e tecidos moles em boas condições',
    ],
  },
  optionB: {
    title: 'B) MIS com osteotomia em deslizamento / encurtamento dos vizinhos',
    bullets: [
      'Em casos selecionados, em vez de alongar o metatarso curto, encurtam-se levemente os vizinhos para reequilibrar a curva metatársica',
      'Realizada por mini-incisões, com fresa específica e fixação interna',
      'Indicada quando há sobrecarga importante dos metatarsos adjacentes ou quando o alongamento puro não é a melhor estratégia',
      'Evita áreas doadoras de enxerto e tem recuperação tipicamente mais simples',
    ],
  },
  comparisonTable: {
    headers: ['Aspecto', 'MIS (técnica usada aqui)', 'Cirurgia aberta convencional'],
    rows: [
      ['Incisão', 'Mini-incisões de 3–5 mm', 'Incisão única, mais ampla'],
      ['Fixação', 'Interna (placa, parafusos, fios)', 'Interna (placa/parafusos)'],
      ['Fixador externo', 'Não utilizado', 'Pode ser usado em algumas técnicas'],
      ['Agressão a tecidos moles', 'Mínima', 'Maior'],
      ['Edema e dor pós-operatória', 'Tipicamente menores', 'Tipicamente maiores'],
      ['Cicatrizes', 'Pequenas e discretas', 'Maior'],
      ['Tempo de internação', 'Geralmente bem curto', 'Geralmente curto'],
      ['Reabilitação', 'Início precoce, fisioterapia desde cedo', 'Início conforme protocolo'],
    ],
  },
  note:
    '*A escolha entre as opções é individualizada e definida pela cirurgiã com base no exame clínico, radiografias com carga e expectativa funcional da paciente.*',
};

export const contraindications = {
  absolute: [
    'Placas de crescimento abertas (adolescentes em crescimento ativo)',
    'Infecção ativa no pé',
    'Vasculopatia grave',
    'Diabetes descompensada',
  ],
  relative: [
    'Tabagismo ativo (reduz muito a cicatrização e a formação óssea)',
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
  '**Plano cirúrgico personalizado** — escolha da técnica MIS adequada, estimativa de tempo e de retorno',
  '**Preparo pré-operatório** — exames laboratoriais, avaliação cardiológica quando indicada, controle de fatores de risco (glicemia, tabagismo)',
  '**Cirurgia minimamente invasiva** — em hospital acreditado, com time completo',
  '**Acompanhamento pós + fisioterapia** — retornos programados + fisioterapia estruturada até a consolidação final',
];

export const howToChoose = [
  '**RQE** em Ortopedia/Traumatologia com área de atuação em **pé e tornozelo**',
  'Filiação à **SBMCP/ABTPé**',
  'Experiência específica em **cirurgia minimamente invasiva (MIS) do antepé**',
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
  { label: 'PubMed — minimally invasive forefoot surgery', url: 'https://pubmed.ncbi.nlm.nih.gov' },
  { label: 'SciELO Brasil — Revista Brasileira de Ortopedia', url: 'https://www.scielo.br' },
];
