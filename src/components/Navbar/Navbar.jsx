import { useSelector } from 'react-redux';
import AuthMenu from './AuthMenu/AuthMenu';
import MainMenu from './MainMenu/MainMenu';
import UserMenu from './UserMenu/UserMenu';
import styles from './navbar.module.css';
import { selectIsLogin } from '../../redux/auth/auth-selectors';

const Navbar = () => {
  const isLogin = useSelector(selectIsLogin);

  return (
    <div className={styles.navbar}>
      <MainMenu />
      {isLogin ? <UserMenu /> : <AuthMenu />}
    </div>
  );
};

export default Navbar;
