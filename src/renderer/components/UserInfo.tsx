import { useEffect, useState } from 'react';
import { User } from '../../types/User';
import { useUser } from '../../hooks/useAuth';

const UserInfo = () => {
  const [user, setUser] = useState<User>({
    username: '',
    email: '',
    _id: '',
  });

  const getUser = useUser();

  useEffect(() => {
    getUser((res) => {
      if (res.user) {
        setUser(res.user);
      }
    });
  }, []);

  return (
    <div>
      <h1>Email: {user.email}</h1>
      <h1>Username: {user.username}</h1>
      <h1>User ID: {user._id}</h1>
    </div>
  );
};

export default UserInfo;
