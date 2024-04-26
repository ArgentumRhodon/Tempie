import { useEffect, useState } from 'react';
import { useUser } from '../../hooks/useAuth';
import { User } from '../../types/User';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
  const navigate = useNavigate();
  const getUser = useUser();
  const [user, setUser] = useState<User>();

  useEffect(() => {
    getUser((res) => {
      if (res.user) setUser(res.user);
    });
  });

  const onButtonClick = () => {
    navigate('/app');
  };

  return (
    <div className="flex justify-center items-center h-[100vh] text-center">
      <div className="container flex flex-col items-center">
        <h1 className="text-3xl font-semibold text-white mb-5">
          Hello {user?.username ? user?.username : 'User'}!
        </h1>
        <p className="mb-5 max-w-lg">
          Welcome to Tempie, a free chat app for your temporary and permanent
          chatting needs. Click the button below to get started!
        </p>
        <button className="btn btn-primary" onClick={onButtonClick}>
          Start Chatting!
        </button>
      </div>
    </div>
  );
};

export default Welcome;
