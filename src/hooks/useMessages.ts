import { SyntheticEvent } from 'react';
import { Message } from '../types/Message';

const devURL = 'http://localhost:3000';
const prodURL = 'https://tempie-server-b490ad9cab9b.herokuapp.com';
const targetURL = devURL;

const getMessages = async (
  chatID: string,
  handler: (res: Message[]) => void,
) => {
  const response = await fetch(`${targetURL}/messages/${chatID}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  });
  const result = await response.json();

  if (handler) handler(result);
};

const sendMessage = async (
  chatID: string,
  e: SyntheticEvent<HTMLFormElement>,
  handler: (res: Message) => void,
) => {
  e.preventDefault();
  const target = e.target as typeof e.target & {
    text: { value: string };
  };

  const text = target.text.value;
  target.text.value = '';

  const response = await fetch(`${targetURL}/messages`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ chatID, text }),
    credentials: 'include',
  });

  const result = await response.json();

  if (handler) handler(result);

  return false;
};

const msgFuncs = { getMessages, sendMessage };

export const useMessages = () => msgFuncs;
