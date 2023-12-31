import { Link, NavLink } from 'react-router-dom';
import './styles.scss';

const PageHeader = () => {
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <Link to="/" className="nav-logo-text">
          <h2>Users Hunter</h2>
        </Link>
        <ul className="main-menu">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/users"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Minha Lista
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default PageHeader;
