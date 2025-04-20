export const classPresets = {
  warrior: { label: 'Воин', str: 5, dex: 3, vit: 4, int: 2 },
  rogue:   { label: 'Вор',  str: 4, dex: 5, vit: 3, int: 2 },
  bard:    { label: 'Бард', str: 3, dex: 2, vit: 5, int: 4 },
  shaman:  { label: 'Шаман',str: 2, dex: 3, vit: 4, int: 5 }
} as const;

export type ClassId = keyof typeof classPresets;
