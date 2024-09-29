import { useEffect, useRef } from 'react';

import '../../style/card.css';
import VanillaTilt from 'vanilla-tilt';

function Card(imgUrl) {
  const cardRef = useRef(null);
  useEffect(() => {
    VanillaTilt.init(cardRef.current);
    return () => cardRef.current.vanillaTilt.destroy();
  }, []);

  return (
    <div className="card" ref={cardRef}>
      <div className="card-image">
        <img src={imgUrl} className="photo-card"></img>
      </div>
    </div>
  );
}
export { Card };
