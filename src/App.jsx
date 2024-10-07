import { useState } from 'react';
import Background from './components/Background';
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import { GameProvider } from './GameProvider';
import { CardUi } from './ui/cardsDisplayer';
import { MainMenu } from './ui/Menu';
import { WinOrLose } from './ui/WinOrLose';
function App() {
  const [gameStart, setGameStart] = useState({
    started: false,
    difficultyChosen: null,
  });
  return (
    <div className='body'>
      <GameProvider>
        <Background />
        <nav>
          <Navbar gameStart={gameStart} />
        </nav>
        <main className='main-body'>
          {gameStart.started ? (
            <CardUi />
          ) : (
            <MainMenu setGameStart={setGameStart} gameStart={gameStart} />
          )}
          {<WinOrLose />}
        </main>
        <footer>
          <Footer gameStart={gameStart.started} />
        </footer>
      </GameProvider>
    </div>
  );
}

export default App;
