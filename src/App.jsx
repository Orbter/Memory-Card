import { useState } from 'react';
import Background from './components/Background';
import { Card } from './components/Cards/Card';
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
function App() {
  return (
    <div className='body'>
      <Background />
      <nav>
        <Navbar />
      </nav>
      <main className='main-body'>
        <Card />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
