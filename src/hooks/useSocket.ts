import { io, Socket } from 'socket.io-client';
import { ClientToServerEvents, ServerToClientEvents } from '../types/Socket';
const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io(
  'http://localhost:3000',
  {
    withCredentials: true,
  },
);

const useSocket = () => socket;

export default useSocket;
