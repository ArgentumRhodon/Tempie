interface ServerToClientEvents {
  'incoming message': () => void;
}

interface ClientToServerEvents {
  'send message': () => void;
  'room change': (chatID: string) => void;
}

interface InterServerEvents {
  ping: () => void;
}

interface SocketData {
  name: string;
  age: number;
}

export {
  ServerToClientEvents,
  ClientToServerEvents,
  InterServerEvents,
  SocketData,
};
