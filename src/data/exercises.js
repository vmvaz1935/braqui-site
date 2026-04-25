export const exerciseCategories = [
  {
    id: 'mobilizacao-inicial',
    title: 'Mobilização Inicial',
    period: 'A PARTIR DAS PRIMEIRAS 48-72H — APENAS QUANDO LIBERADO PELA EQUIPE',
    color: 'sage',
    items: [
      {
        name: 'Mobilização do tornozelo',
        description:
          'Movimentos suaves de flexão e extensão do tornozelo, com o pé apoiado, sem dor. Realizar em séries curtas, várias vezes ao dia.',
      },
      {
        name: 'Movimento dos dedos não operados',
        description:
          'Flexionar e estender ativamente os demais dedos do pé, mantendo a circulação e prevenindo rigidez por imobilização.',
      },
      {
        name: 'Bombeamento ativo dos dedos',
        description:
          'Movimentos rítmicos de abrir e fechar os dedos, ajudando no controle do edema e na prevenção de trombose.',
      },
    ],
  },
  {
    id: 'alongamentos',
    title: 'Alongamentos',
    period: 'A PARTIR DA SEMANA 2 — INTEGRADOS À FISIOTERAPIA',
    color: 'blue',
    items: [
      {
        name: 'Alongamento da cápsula MTF',
        description:
          'Alongamento suave e progressivo da articulação metatarsofalângica do dedo operado, sob orientação do fisioterapeuta, para prevenir rigidez.',
      },
      {
        name: 'Alongamento dos dedos vizinhos',
        description:
          'Mobilização passiva dos dedos adjacentes ao operado para preservar amplitude e padrão de marcha.',
      },
      {
        name: 'Alongamento de panturrilha em descarga',
        description:
          'Realizado sentado ou deitado, com auxílio de toalha ou faixa, sem carga sobre o pé operado.',
      },
      {
        name: 'Mobilização do tornozelo em todas as direções',
        description:
          'Inversão, eversão, dorsiflexão e plantiflexão do tornozelo, dentro do limite de conforto.',
      },
    ],
  },
  {
    id: 'mobilizacao-dedo',
    title: 'Mobilização do Dedo Operado',
    period: 'A PARTIR DA SEMANA 2 — ESSENCIAL CONTRA RIGIDEZ',
    color: 'beige',
    items: [
      {
        name: 'Mobilização passiva do dedo',
        description:
          'O fisioterapeuta movimenta o dedo operado em flexão e extensão, dentro do limite de conforto, várias vezes por sessão.',
      },
      {
        name: 'Mobilização ativa do dedo',
        description:
          'Você movimenta ativamente o dedo, sem carga, dentro da amplitude liberada — fundamental para evitar aderências.',
      },
      {
        name: 'Mobilização global do antepé',
        description:
          'Trabalho de mobilidade do retropé, mediopé e antepé como conjunto, mantendo a função articular preservada.',
      },
    ],
  },
  {
    id: 'treino-funcional',
    title: 'Treino Funcional',
    period: 'A PARTIR DO MÊS 2-3 — APÓS LIBERAÇÃO RADIOGRÁFICA',
    color: 'cream',
    items: [
      {
        name: 'Treino de marcha em superfície plana',
        description:
          'Reeducação do padrão de pisada com tênis largo confortável, sob supervisão. Início com base estável e progressão gradual.',
      },
      {
        name: 'Equilíbrio em apoio bipodal',
        description:
          'Trabalho de equilíbrio com os dois pés apoiados, em superfícies estáveis e progredindo para superfícies instáveis.',
      },
      {
        name: 'Fortalecimento progressivo de pé e tornozelo',
        description:
          'Exercícios resistidos com faixa elástica, controlando carga e amplitude conforme tolerância e consolidação radiográfica.',
      },
      {
        name: 'Exercícios proprioceptivos',
        description:
          'Estímulo do sistema proprioceptivo do pé operado, importante para retorno seguro a atividades funcionais.',
      },
    ],
  },
  {
    id: 'avancados',
    title: 'Reabilitação Avançada',
    period: 'A PARTIR DOS 6 MESES — RETORNO PROGRESSIVO ÀS ATIVIDADES',
    color: 'orange',
    items: [
      {
        name: 'Equilíbrio em apoio unipodal',
        description:
          'Trabalho de equilíbrio em apoio sobre o pé operado, em superfícies progressivamente instáveis.',
      },
      {
        name: 'Treino de impacto controlado',
        description:
          'Introdução gradual de saltos baixos e atividades de impacto, somente após liberação radiográfica e clínica.',
      },
      {
        name: 'Reabilitação para corrida e esporte',
        description:
          'Programa específico para retorno a corrida e modalidades esportivas, respeitando o ritmo de consolidação.',
      },
      {
        name: 'Adaptação ao calçado fechado e ao salto',
        description:
          'Progressão do tênis largo → tênis comum → calçado fechado → salto baixo, conforme avaliação clínica.',
      },
    ],
  },
];
