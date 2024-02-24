import RegisterForm from 'components/RegisterForm/RegisterForm';
import styles from './register-page.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { signupUser } from '../../redux/auth/auth-operations';
import {
  selectAuthError,
  selectAuthLoading,
} from '../../redux/auth/auth-selectors';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const authLoading = useSelector(selectAuthLoading);
  const authError = useSelector(selectAuthError);

  const handleSubmit = data => {
    dispatch(signupUser(data));
  };

  return (
    <div>
      <h1>Please sing up</h1>
      {authLoading && <p>Register in progres</p>}
      <RegisterForm onSubmit={handleSubmit} />
      {authError && <p>{authError}</p>}
    </div>
  );
};

export default RegisterPage;
