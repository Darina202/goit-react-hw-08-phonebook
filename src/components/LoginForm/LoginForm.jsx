import { useId, useState } from 'react';
import styles from './login-form.module.css';

const INITIAL_STATE = {
  email: '',
  password: '',
};

const LoginForm = ({ onSubmit }) => {
  const [state, setState] = useState({ ...INITIAL_STATE });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ ...state });
    setState({ ...INITIAL_STATE });
  };

  const emailId = useId();
  const passwordId = useId();

  const { email, password } = state;

  return (
    <div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.field}>
          <label htmlFor="emailId">Email</label>
          <input value={email} type="email" name="email" id={emailId} onChange={handleChange} required />
        </div>
        <div className={styles.field}>
          <label htmlFor="passwordId">Password</label>
          <input value={password} type="password" name="password" id={passwordId} onChange={handleChange} required />
        </div>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default LoginForm;
