import { useDispatch, useSelector } from 'react-redux';
import styles from './user-menu.module.css';
import { selectUser } from '../../../redux/auth/auth-selectors';
import { logoutUser } from '../../../redux/auth/auth-operations';

const UserMenu = () => {
  const userName = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <div className={styles.menu}>
      <p>{userName.name}</p>
      <button
        type="button"
        onClick={() => {
          dispatch(logoutUser());
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
