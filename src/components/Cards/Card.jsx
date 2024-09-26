import { useEffect, useRef } from 'react';

import '../../style/card.css';
import luffyTest from '../../assets/luffy-test.png';
import VanillaTilt from 'vanilla-tilt';

function Card() {
  const cardRef = useRef(null);
  useEffect(() => {
    VanillaTilt.init(cardRef.current);
    return () => cardRef.current.vanillaTilt.destroy();
  }, []);

  return (
    <div className="card" ref={cardRef}>
      <div className="card-image">
        <img src={luffyTest} className="photo-card"></img>
      </div>
    </div>
  );
}
export { Card };
