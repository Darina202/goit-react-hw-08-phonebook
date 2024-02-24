import LoginForm from 'components/LoginForm/LoginForm';
// import styles from './login-page.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../redux/auth/auth-operations';
import {
  selectAuthError,
  selectAuthLoading,
} from '../../redux/auth/auth-selectors';

const LoginPage = () => {
  const dispatch = useDispatch();
  const authLoading = useSelector(selectAuthLoading);
  const authError = useSelector(selectAuthError);

  const handleSubmit = data => {
    dispatch(loginUser(data));
  };

  return (
    <div>
      {authLoading && <p>Register in progres</p>}
      <LoginForm onSubmit={handleSubmit} />
      {authError && <p>{authError}</p>}
    </div>
  );
};

export default LoginPage;
