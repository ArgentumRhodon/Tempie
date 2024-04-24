import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from './pages';
import 'tailwindcss/tailwind.css';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}
