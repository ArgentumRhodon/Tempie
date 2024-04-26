import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { Login, Signup, Chat, Welcome } from './pages';
import 'tailwindcss/tailwind.css';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/app" element={<Chat />} />
        <Route path="/welcome" element={<Welcome />} />
      </Routes>
    </Router>
  );
}
