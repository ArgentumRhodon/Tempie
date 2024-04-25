import { Link } from 'react-router-dom';
import { LogoutButton, UserInfo } from '../components';

const Chat = () => {
  return (
    <>
      <UserInfo />
      <LogoutButton />
    </>
  );
};

export default Chat;
