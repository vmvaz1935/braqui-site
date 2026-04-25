export const phases = [
  {
    id: 1,
    icon: 'Shield',
    title: '1. Proteção Inicial e Início da Distração',
    period: 'Semanas 0-2',
    focus:
      'Proteção da cirurgia, controle de dor e edema. O curativo deve permanecer intacto e o início da distração ocorre após o período de latência típico de ~5–7 dias.',
    goals: [
      { label: 'Curativo e pinos', text: 'Limpeza e proteção diárias até liberação' },
      { label: 'Dor e edema', text: 'Controle com analgesia, repouso e elevação' },
      { label: 'Carga', text: 'Sem pisar ou parcial apenas com bota/sandália específica' },
      { label: 'Distração', text: 'Iniciar ajustes conforme prescrição (~0,5 mm/dia)' },
    ],
    do: [
      'Manter o pé elevado acima do nível do coração sempre que possível',
      'Realizar os ajustes do fixador exatamente nos horários indicados',
      'Limpar diariamente o trajeto dos pinos conforme protocolo',
      'Registrar os ajustes em um caderno ou ficha de acompanhamento',
      'Movimentar suavemente o tornozelo e os dedos não operados',
    ],
    avoid: [
      'Molhar o fixador externo',
      'Manipular ou afrouxar os pinos sem indicação',
      'Pisar sem a proteção indicada (bota / sandália)',
      'Fumar — reduz drasticamente a formação óssea',
      'Aplicar pomadas, cremes ou substâncias sem orientação',
    ],
    exercises: [
      'Mobilização suave do tornozelo',
      'Movimento dos dedos não operados',
    ],
  },
  {
    id: 2,
    icon: 'Zap',
    title: '2. Distração em Progressão',
    period: 'Semanas 2-8',
    focus:
      'Distração em andamento — o osso novo (regenerado) começa a se formar no vão. Você já está habituada à rotina do fixador. O foco é alcançar o ganho de comprimento planejado, evitando rigidez do dedo operado.',
    goals: [
      { label: 'Alongamento', text: 'Atingir o ganho de comprimento planejado' },
      { label: 'Pinos', text: 'Manter o trajeto sem sinais de infecção' },
      { label: 'Mobilidade', text: 'Preservar o movimento do dedo operado (fisioterapia essencial)' },
      { label: 'Atividades básicas', text: 'Retomar home office e tarefas domésticas leves' },
    ],
    do: [
      'Continuar a distração e curativos dos pinos conforme prescrição',
      'Iniciar fisioterapia com foco em mobilidade do dedo operado',
      'Manter elevação do pé em períodos de repouso',
      'Registrar qualquer sinal de infecção no trajeto dos pinos',
      'Executar mobilização passiva e ativa do dedo conforme orientação',
    ],
    avoid: [
      'Pular ajustes do fixador (risco de consolidação precoce)',
      'Dirigir antes da liberação médica',
      'Atividades de impacto (correr, pular, academia tradicional)',
      'Calçados inadequados que pressionem o fixador',
      'Permanecer longos períodos em pé ou caminhar longas distâncias',
    ],
    exercises: [
      'Mobilização passiva e ativa do dedo operado',
      'Alongamento da cápsula articular MTF',
      'Mobilização do tornozelo e dedos vizinhos',
    ],
  },
  {
    id: 3,
    icon: 'TrendingUp',
    title: '3. Consolidação, Retirada do Fixador e Retorno',
    period: 'Mês 2-6+ (alta funcional em 12 meses)',
    focus:
      'Fim da distração e início da consolidação. O fixador é mantido até que a radiografia confirme maturação óssea adequada. Depois, é removido em procedimento simples e, em alguns casos, trocado por mini-placa de proteção.',
    goals: [
      { label: 'Consolidação', text: 'Resistência óssea adequada para retomar carga' },
      { label: 'Retirada do fixador', text: 'Após liberação radiográfica do cirurgião' },
      { label: 'Fortalecimento', text: 'Recompor musculatura do pé e tornozelo' },
      { label: 'Calçado', text: 'Retorno progressivo: tênis largo → fechado → salto' },
    ],
    do: [
      'Comparecer aos controles radiográficos programados',
      'Manter a fisioterapia ao longo de toda a fase',
      'Progressão de carga conforme orientação da equipe',
      'Proteção solar das cicatrizes e marcas dos pinos por pelo menos 6 meses',
      'Hidratação e massagem da cicatriz quando liberadas',
    ],
    avoid: [
      'Impacto precoce (corrida, salto, esportes de explosão)',
      'Pular consultas de controle radiográfico',
      'Negligenciar a fisioterapia — risco real de rigidez permanente',
      'Salto alto antes de 6 meses',
      'Atividade aquática (praia/piscina) antes da retirada e cicatrização',
    ],
    exercises: [
      'Fortalecimento progressivo do pé e tornozelo',
      'Treino de marcha e equilíbrio',
      'Reabilitação global do antepé',
    ],
  },
];
