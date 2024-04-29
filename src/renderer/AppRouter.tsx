import {
  MemoryRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from 'react-router-dom';
import { Login, Signup, Chat, App } from './pages';
import 'tailwindcss/tailwind.css';
import { useEffect } from 'react';

const Sentinel = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/auth/login');
  }, []);

  return <></>;
};

export default function AppRouter() {
  return (
    <>
      <Router>
        <Routes>
          {/*Authentication paths*/}
          <Route path="/" element={<Sentinel />} />
          <Route path="auth">
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
          </Route>
          {/*In-app paths*/}
          <Route path="app" element={<App />}>
            {/* <Route path="friends" element={<Friends />} /> */}
          </Route>
        </Routes>
      </Router>
    </>
  );
}
