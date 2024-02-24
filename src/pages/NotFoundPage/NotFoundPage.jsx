import { Link } from 'react-router-dom';
import styles from './not-found-page.module.css';

const NotFoundPage = () => {
  return (
    <div>
      <h1>Not Found Page</h1>
      <Link to="/" className={styles.link}>
        To home page
      </Link>
    </div>
  );
};

export default NotFoundPage;
