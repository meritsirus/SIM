/*  Стандартное описание сущностей игры «Странник, изгоняющий мрак»  */

export type ClassId = 'warrior' | 'rogue' | 'bard' | 'shaman';

export interface Attributes {
  strength: number;
  dexterity: number;
  vitality: number;
  intellect: number;
}

export interface DerivedStats {
  attack: string;      // «2K+3»  – код броска
  defence: number;
  hp: number;          // ЖС
  mp: number;          // МЭ
}

export interface Item {
  id: string;
  name: string;
  weight: number;
  tags: string[];      // "consumable" | "quest" | …
  description?: string;
}

export interface Weapon extends Item {
  kind: 'weapon';
  attackBonus: string; // «+1K» или «+3»
  damage: number;
  allowedClasses?: ClassId[];
}

export interface Armor extends Item {
  kind: 'armor';
  defenceBonus: number;
  mpPenalty?: number;
  allowedClasses?: ClassId[];
}

export interface Consumable extends Item {
  kind: 'consumable';
  effect: string;      // id эффекта
  charges?: number;
}

export interface Spell {
  id: string;
  name: string;
  cost: number;        // МЭ
  text: string;        // механика «человеческим языком»
}

export interface Effect {
  id: string;
  name: string;
  modifies: Partial<Attributes & { defence: number; attack: string }>;
  duration: 'perm' | 'battle' | number; // число ходов / бросков
}

export interface Enemy {
  id: string;
  name: string;
  attack: string;
  defence: number;
  hp: number;
  damage: number | string; // может быть «perCheck» etc.
  xp: number;              // бонус за победу
  description?: string;
}

export interface ShopEntry {
  itemId: string;
  price: number;
}

export interface City {
  id: string;
  name: string;
  description: string;
  shop: ShopEntry[];
  tavern?: boolean;
  modifiers?: Record<string, unknown>; // особые правила
}

export interface MapLocation {
  id: string;
  name: string;
  kind: 'city' | 'legendary' | 'poi';   // point‑of‑interest
  coords: [number, number];             // % от шир/выс карты
}

export interface DiceEvent {
  id: string;
  title: string;
  text: string;
  options?: { label: string; goto: string }[];
  enemies?: string[];          // id врагов
  rewards?: string[];          // id предметов
  effect?: string;             // id эффекта
}

export type DirectPathEvent   = DiceEvent & { table: 1 | 2 | 3 | 4 | 5 | 6 };
export type TavernEvent      = DiceEvent & { table: 1 | 2 | 3 | 4 | 5 | 6 };
export type FreePathEvent    = DiceEvent & { index: number }; // 1‑121
