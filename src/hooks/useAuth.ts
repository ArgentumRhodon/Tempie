import { SyntheticEvent } from 'react';
import { User } from '../types/User';

const devURL = 'http://localhost:3000';
const prodURL = 'https://tempie-server-b490ad9cab9b.herokuapp.com';
const targetURL = devURL;

const login = async (
  e: SyntheticEvent<HTMLFormElement>,
  handler: (res: { redirect: string }) => void,
) => {
  e.preventDefault();
  const target = e.target as typeof e.target & {
    email: { value: string };
    password: { value: string };
  };

  const email = target.email.value;
  const password = target.password.value;

  const response = await fetch(`${targetURL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
    credentials: 'include',
  });

  const result = await response.json();

  if (handler) handler(result);

  return false;
};

const signup = async (
  e: SyntheticEvent<HTMLFormElement>,
  handler: (res: { redirect: string }) => void,
) => {
  e.preventDefault();
  const target = e.target as typeof e.target & {
    email: { value: string };
    username: { value: string };
    password: { value: string };
  };

  const email = target.email.value;
  const username = target.username.value;
  const password = target.password.value;

  const response = await fetch(`${targetURL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, username, password }),
    credentials: 'include',
  });

  const result = await response.json();

  if (handler) handler(result);

  return false;
};

const logout = async (handler: (res: { redirect: string }) => void) => {
  const response = await fetch(`${targetURL}/logout`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  });

  const result = await response.json();

  if (handler) handler(result);

  return false;
};

const getUser = async (handler: (res: { user: User }) => void) => {
  const response = await fetch(`${targetURL}/user`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  });

  const result = await response.json();

  if (handler) handler(result);

  return false;
};

const useLogin = () => login;
const useSignup = () => signup;
const useLogout = () => logout;
const useUser = () => getUser;

export { useLogin, useSignup, useLogout, useUser };
