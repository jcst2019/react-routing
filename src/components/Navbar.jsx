import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Inicio</Link> | 
      <Link to="/about">Acerca</Link>
    </nav>
  );
}

export default Navbar;
