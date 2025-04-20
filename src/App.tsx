import { useState } from 'react';
import { CharacterCreation } from './components/CharacterCreation';

function App() {
  const [started, setStarted] = useState(false);

  return (
    <main className="min-h-screen p-4 flex items-center justify-center">
      {!started ? (
        <CharacterCreation onStart={() => setStarted(true)} />
      ) : (
        <p className="text-xl">🚧 Игровой интерфейс появится здесь…</p>
      )}
    </main>
  );
}
export default App;
