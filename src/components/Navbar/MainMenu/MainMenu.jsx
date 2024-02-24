import { NavLink } from 'react-router-dom';
import styles from './main-menu.module.css';
import menuItems from './menu-items';
import { selectIsLogin } from '../../../redux/auth/auth-selectors';
import { useSelector } from 'react-redux';

const MainMenu = () => {
  const isLogin = useSelector(selectIsLogin);
  const filterMenu = !isLogin
    ? menuItems.filter(item => !item.private)
    : menuItems;

  const elements = filterMenu.map(({ id, to, text }) => (
    <li key={id}>
      <NavLink className={styles.link} to={to}>
        {text}
      </NavLink>
    </li>
  ));

  return (
    <div>
      <ul className={styles.menu}>{elements}</ul>
    </div>
  );
};

export default MainMenu;
