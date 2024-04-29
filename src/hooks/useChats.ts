import { Chat } from '../types/Chat';

const devURL = 'http://localhost:3000';
const prodURL = 'https://tempie-server-b490ad9cab9b.herokuapp.com';
const targetURL = devURL;

const getChats = async (handler: (res: Chat[]) => void) => {
  const response = await fetch(`${targetURL}/chats`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  });
  const result = await response.json();

  if (handler) handler(result);
};

const createChat = async (handler: (res: Chat) => void) => {
  const response = await fetch(`${targetURL}/chats`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  });

  const result = await response.json();

  if (handler) handler(result);
};

const chatFuncs = { getChats, createChat };

export const useChats = () => chatFuncs;
