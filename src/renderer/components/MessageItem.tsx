import { useEffect, useState } from 'react';
import useUsernameByID from '../../hooks/useAccount';
import { Message } from '../../types/Message';

const MessageItem = ({ message }: { message: Message }) => {
  return (
    <p className="my-1">
      <span className="text-primary">{message.senderName}</span>: {message.text}
    </p>
  );
};

export default MessageItem;
