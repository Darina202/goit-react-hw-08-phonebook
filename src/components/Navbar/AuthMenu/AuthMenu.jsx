import { NavLink } from 'react-router-dom';
import styles from './auth-menu.module.css';

const AuthMenu = () => {
  return (
    <div>
      <ul className={styles.menu}>
        <li>
          <NavLink className={styles.link} to="/register">
            Register
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.link} to="/login">
            Log In
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default AuthMenu;
