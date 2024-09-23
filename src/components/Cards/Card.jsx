import '../../style/card.css';
import luffyTest from '../../assets/luffy-test.png';
function Card() {
  return (
    <div className='card'>
      <div className='card-image'>
        <img src={luffyTest} className='photo-card'></img>
      </div>
    </div>
  );
}
export { Card };
