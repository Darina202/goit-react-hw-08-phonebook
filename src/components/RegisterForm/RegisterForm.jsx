import { useId, useState } from 'react';
import styles from './register-form.module.css';

const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
};

const RegisterForm = ({ onSubmit }) => {
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

  const nameId = useId();
  const emailId = useId();
  const passwordId = useId();

  const { name, email, password } = state;

  return (
    <div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.field}>
          <label htmlFor="nameId">Username</label>
          <input
            value={name}
            name="name"
            id={nameId}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="emailId">Email</label>
          <input
            value={email}
            type="email"
            name="email"
            id={emailId}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="passwordId">Password</label>
          <input
            value={password}
            type="password"
            name="password"
            id={passwordId}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className={styles.btn}>
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
