import { useState } from 'react';
import { classPresets } from '../data/classes';

interface Props {
  onStart(): void;
}

export const CharacterCreation = ({ onStart }: Props) => {
  const [chosen, setChosen] = useState<keyof typeof classPresets | null>(null);

  return (
    <section className="max-w-md w-full space-y-4">
      <h1 className="text-2xl font-semibold text-center">Выбор класса</h1>
      <ul className="space-y-2">
        {Object.entries(classPresets).map(([id, preset]) => (
          <li key={id}>
            <button
              className={`w-full rounded-xl px-4 py-2 border hover:bg-neutral-800 ${
                chosen === id ? 'bg-neutral-700' : ''
              }`}
              onClick={() => setChosen(id as keyof typeof classPresets)}
            >
              <span className="font-medium">{preset.label}</span>
              <span className="text-sm block opacity-80">
                С&nbsp;{preset.str}, Л&nbsp;{preset.dex}, З&nbsp;{preset.vit}, И&nbsp;{preset.int}
              </span>
            </button>
          </li>
        ))}
      </ul>

      <button
        className="w-full mt-4 bg-green-600 hover:bg-green-700 transition rounded-xl py-2 disabled:opacity-40"
        disabled={!chosen}
        onClick={onStart}
      >
        Начать приключение
      </button>
    </section>
  );
};
