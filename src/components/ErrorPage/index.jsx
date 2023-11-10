import { HomePage } from '../../pages/HomePage';
import '../../pages/HomePage/style.css';
import { Link } from 'react-router-dom';

export const ErrorPage = () => {
  return (
    <main>
      <div className="error_page">
        <h2> Tady nic není</h2>
        <p>Asi jste se spletli</p>
      </div>
    </main>
  );
};
