import { useState } from 'react';
import Background from './components/Background';
import { Card } from './components/Cards/Card';
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import { GameProvider } from './GameProvider';
import { CardUi } from './ui/cardsDisplayer';
import { MainMenu } from './ui/Menu';
function App() {
  const [gameStart, setGameStart] = useState(false);
  return (
    <div className='body'>
      <GameProvider>
        <Background />
        <nav>
          <Navbar />
        </nav>
        <main className='main-body'>
          {gameStart ? <CardUi /> : <MainMenu />}
        </main>
        <footer>
          <Footer />
        </footer>
      </GameProvider>
    </div>
  );
}

export default App;
