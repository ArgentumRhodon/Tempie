import { useNavigate } from 'react-router-dom';
import { useLogout } from '../../hooks/useAuth';

const LogoutButton = () => {
  const navigate = useNavigate();
  const logout = useLogout();
  const onLogout = () => {
    logout((res) => {
      if (res.redirect) {
        navigate(res.redirect);
      }
    });
  };

  return (
    <button className="btn btn-error" onClick={onLogout}>
      Log Out
    </button>
  );
};

export default LogoutButton;
