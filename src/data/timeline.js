export const timeline = [
  {
    period: 'Até o retorno (~5-7 dias)',
    pills: ['Curativo intacto', 'Pé elevado', 'Início da distração após latência'],
  },
  {
    period: 'Semana 2-4',
    pills: [
      'Distração em progressão (~0,5 mm/dia)',
      'Início da fisioterapia',
      'Home office possível',
      'Curativo dos pinos diário',
    ],
  },
  {
    period: 'Semana 6-8',
    pills: [
      'Conclusão da distração (na maioria dos casos)',
      'Início da consolidação óssea',
      'Liberação de tarefas domésticas leves',
    ],
  },
  {
    period: '2-3 meses',
    pills: [
      'Controle radiográfico',
      'Retirada do fixador (com osso maduro)',
      'Início do tênis largo',
    ],
  },
  {
    period: '3-4 meses',
    pills: [
      'Tênis confortável de uso diário',
      'Atividade física de baixo impacto (com liberação)',
      'Sandália comum',
    ],
  },
  {
    period: '6 meses',
    pills: [
      'Calçado fechado de uso regular',
      'Salto baixo conforme avaliação',
      'Atividade física de maior impacto (com liberação)',
    ],
  },
  {
    period: '12 meses',
    pills: [
      'Alta funcional',
      'Cicatrizes maduras',
      'Resultado final consolidado',
    ],
  },
];

export const recoveryTimeTiles = [
  { duration: '2-3 meses', description: 'Retirada do fixador externo' },
  { duration: '3-6 meses', description: 'Calçado e atividade de baixo / médio impacto' },
  { duration: '12 meses', description: 'Alta funcional completa' },
];

export const risks = [
  { risk: 'Infecção no trajeto dos pinos', prevention: 'Limpeza diária, inspeção e comunicação precoce de qualquer sinal' },
  { risk: 'Consolidação lenta / pseudoartrose', prevention: 'Não fumar, controlar diabetes e manter dosagem correta da distração' },
  { risk: 'Rigidez da articulação MTF', prevention: 'Fisioterapia contínua, alongamento e mobilização precoce' },
  { risk: 'Alteração de sensibilidade', prevention: 'Técnica cuidadosa — a maioria melhora com o tempo' },
  { risk: 'Quebra ou afrouxamento de pino', prevention: 'Respeitar orientações de proteção e retornos' },
  { risk: 'Cicatriz hipertrófica', prevention: 'Proteção solar, silicone e massagem quando liberados' },
  { risk: 'Trombose venosa', prevention: 'Deambulação precoce permitida, hidratação e profilaxia quando indicada' },
  { risk: 'Consolidação antes do ganho desejado', prevention: 'Acompanhamento radiográfico próximo' },
];
