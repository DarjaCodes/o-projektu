import { Link, Outlet } from 'react-router-dom';
import '../pages/HomePage/style.css';

export const App = () => {
  return (
    <>
      <nav>
        <div className="navbar-nav">
          <div className="nav-link">
            <Link to="/home">Domů</Link>
          </div>
          <div className="nav-link active" aria-current="page">
            <Link to="/onas">O nás</Link>
          </div>
          <div className="nav-link">
            <Link to="/oprojektu">O projektu</Link>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};
