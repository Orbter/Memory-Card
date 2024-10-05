import { useContext } from 'react';
import { GameContext } from '../../GameProvider';
function Rounds() {
  const gameMemory = useContext(GameContext);
  const { rounds, totalRounds } = gameMemory;

  return (
    <div className='round-container'>
      {rounds} / {totalRounds}
    </div>
  );
}

export { Rounds };
