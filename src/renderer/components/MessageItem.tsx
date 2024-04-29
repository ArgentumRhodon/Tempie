import { useEffect, useState } from 'react';
import useUsernameByID from '../../hooks/useAccount';
import { Message } from '../../types/Message';

const MessageItem = ({ message }: { message: Message }) => {
  const [username, setUsername] = useState<string>('');
  const getUsernameByID = useUsernameByID();

  useEffect(() => {
    getUsernameByID(message.senderID, (res) => {
      setUsername(res);
    });
  });

  return (
    <p>
      {username}: {message.text}
    </p>
  );
};

export default MessageItem;
