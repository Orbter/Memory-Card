import logo from '../../assets/one-piece-logo.svg';
import '../../style/navbar.css';
function Navbar() {
  return (
    <div className='navbar'>
      <div className='logo-container'>
        <img className='logo' src={logo} />
      </div>
    </div>
  );
}
export { Navbar };
