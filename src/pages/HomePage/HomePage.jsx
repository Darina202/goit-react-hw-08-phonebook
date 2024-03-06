import { Link } from 'react-router-dom';
import styles from './home-page.module.css';
import { useSelector } from 'react-redux';
import { selectIsLogin } from '../../redux/auth/auth-selectors';

const HomePage = () => {
  const isLogin = useSelector(selectIsLogin);

  return (
    <div className={styles.wrapper}>
      {isLogin ? (
        <h1 className={styles.text}>
          To work with your phonebook, go to the{' '}
          <Link to="/contacts" className={styles.link}>
            Phonebook
          </Link>{' '}
          page
        </h1>
      ) : (
        <h1 className={styles.text}>Please log in to continue</h1>
      )}
    </div>
  );
};

export default HomePage;
