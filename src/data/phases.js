export const phases = [
  {
    id: 1,
    icon: 'Shield',
    title: '1. Pós-operatório Imediato',
    period: 'Semanas 0-2',
    focus:
      'Proteção da cirurgia minimamente invasiva, controle de dor e edema. As mini-incisões (3–5 mm) ficam protegidas pelo curativo simples, sem fixador externo. A fixação é interna (fios, parafusos ou mini-placa) e não aparece por fora.',
    goals: [
      { label: 'Curativo', text: 'Manter limpo, seco e intacto até o retorno' },
      { label: 'Dor e edema', text: 'Controle com analgesia, repouso e elevação' },
      { label: 'Carga', text: 'Sem pisar ou parcial apenas com sandália pós-operatória' },
      { label: 'Locomoção', text: 'Apoio de muletas / andador conforme orientação' },
    ],
    do: [
      'Manter o pé elevado acima do nível do coração sempre que possível',
      'Tomar a medicação prescrita nos horários certos',
      'Manter o curativo seco — não molhar até o retorno',
      'Usar a sandália pós-operatória em qualquer deslocamento',
      'Movimentar suavemente o tornozelo e os dedos não operados',
    ],
    avoid: [
      'Molhar o curativo no banho',
      'Pisar descalça, mesmo em casa',
      'Permanecer longos períodos com o pé pendente (sem elevação)',
      'Fumar — reduz drasticamente a cicatrização e a formação óssea',
      'Aplicar pomadas, cremes ou substâncias sem orientação',
    ],
    exercises: [
      'Mobilização suave do tornozelo',
      'Movimento dos dedos não operados',
      'Bombeamento ativo (controle de edema)',
    ],
  },
  {
    id: 2,
    icon: 'Zap',
    title: '2. Cicatrização e Início da Reabilitação',
    period: 'Semanas 2-6',
    focus:
      'Retirada dos pontos e troca para um curativo mais leve. O foco passa a ser preservar a mobilidade do dedo operado e iniciar a fisioterapia. A carga sobre o pé é liberada de forma progressiva, conforme a técnica e a evolução radiográfica.',
    goals: [
      { label: 'Pontos', text: 'Retirados em consultório por volta de 14 dias' },
      { label: 'Mobilidade', text: 'Preservar o movimento do dedo operado (essencial)' },
      { label: 'Fisioterapia', text: 'Iniciar mobilização e cuidados com cicatriz' },
      { label: 'Atividades básicas', text: 'Retomar home office e tarefas domésticas leves' },
    ],
    do: [
      'Iniciar a fisioterapia conforme orientação da equipe',
      'Realizar mobilização ativa e passiva do dedo dentro do conforto',
      'Manter elevação do pé em períodos de repouso',
      'Trocar o curativo conforme orientação após a retirada dos pontos',
      'Progredir a carga somente conforme liberação clínica',
    ],
    avoid: [
      'Negligenciar a fisioterapia — risco real de rigidez do dedo',
      'Dirigir antes da liberação médica',
      'Atividades de impacto (correr, pular, academia tradicional)',
      'Calçados apertados ou de bico fino',
      'Permanecer longos períodos em pé ou caminhar longas distâncias',
    ],
    exercises: [
      'Mobilização passiva e ativa do dedo operado',
      'Alongamento da cápsula MTF',
      'Mobilização do tornozelo e dedos vizinhos',
      'Cuidados iniciais com a cicatriz (após liberação)',
    ],
  },
  {
    id: 3,
    icon: 'TrendingUp',
    title: '3. Consolidação e Retorno Funcional',
    period: 'Mês 2-6+ (alta funcional em 6-12 meses)',
    focus:
      'O osso completa a consolidação e a paciente retoma o calçado convencional, atividade física e salto de forma progressiva. Em alguns casos, fios temporários de fixação (K-wire) são retirados em procedimento simples de consultório, sem nova cirurgia formal.',
    goals: [
      { label: 'Consolidação', text: 'Resistência óssea adequada para retomar carga total' },
      { label: 'Retirada de fios', text: 'Quando indicado, em consultório, após liberação radiográfica' },
      { label: 'Fortalecimento', text: 'Recompor musculatura do pé e tornozelo' },
      { label: 'Calçado', text: 'Retorno progressivo: tênis largo → fechado → salto' },
    ],
    do: [
      'Comparecer aos controles clínicos e radiográficos programados',
      'Manter a fisioterapia ao longo de toda a fase',
      'Progredir a carga e a atividade conforme orientação da equipe',
      'Proteger a cicatriz do sol por pelo menos 6 meses',
      'Hidratar e massagear a cicatriz quando liberada',
    ],
    avoid: [
      'Impacto precoce (corrida, salto, esportes de explosão)',
      'Pular consultas de controle radiográfico',
      'Negligenciar a fisioterapia — risco real de rigidez permanente',
      'Salto alto antes de 6 meses',
      'Atividade aquática (praia/piscina) antes da cicatriz fechada e estável',
    ],
    exercises: [
      'Fortalecimento progressivo do pé e tornozelo',
      'Treino de marcha e equilíbrio',
      'Reabilitação global do antepé',
      'Retorno gradual à corrida e ao esporte',
    ],
  },
];
