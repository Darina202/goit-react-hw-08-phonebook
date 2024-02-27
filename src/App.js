import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { currentUser } from './redux/auth/auth-operations';

import { AppRoutes } from './components/App';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentUser());
  }, []);

  return (
    <div className="App">
      <AppRoutes />
    </div>
  );
}

export default App;
