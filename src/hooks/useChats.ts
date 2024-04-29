import { SyntheticEvent } from 'react';
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

const createChat = async (
  e: SyntheticEvent<HTMLFormElement>,
  handler: (res: Chat) => void,
) => {
  e.preventDefault();
  const target = e.target as typeof e.target & {
    name: { value: string };
  };

  const name = target.name.value;

  target.name.value = '';

  const response = await fetch(`${targetURL}/chats`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name }),
    credentials: 'include',
  });

  const result = await response.json();

  if (handler) handler(result);
};

const chatFuncs = { getChats, createChat };

export const useChats = () => chatFuncs;
