import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div>
        <img src="" alt="Logo" />
      </div>
      <nav>
        <ul className="nav-datos">
          <li>
            <Link className="nav-link" to="/datos">
              DATOS
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;