import { Link, Outlet } from 'react-router-dom';
import { LogoutButton } from '../components';
import { SyntheticEvent, createContext, useEffect, useState } from 'react';
import { User } from '../../types/User';
import { useUser } from '../../hooks/useAuth';
import { Chat } from '../../types/Chat';
import { useChats } from '../../hooks/useChats';
import { Message } from '../../types/Message';
import { useMessages } from '../../hooks/useMessages';

const defUser: User = {
  username: '[Error with user]',
  _id: '[Error with user]',
  friends: [],
};

export const UserContext = createContext<User>(defUser);

const App = () => {
  const [chats, setChats] = useState<Chat[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [openChat, setOpenChat] = useState<Chat>();
  const [user, setUser] = useState<User>(defUser);
  const getUser = useUser();
  const chatFuncs = useChats();
  const msgFuncs = useMessages();

  useEffect(() => {
    getUser((res) => {
      if (res.user) setUser(res.user);
    });
    chatFuncs.getChats((res) => {
      if (res) setChats(res);
    });
  }, []);

  useEffect(() => {
    if (openChat) {
      msgFuncs.getMessages(openChat._id, (res) => {
        if (res) setMessages(res);
      });
    }
  }, [openChat]);

  const onChannelButtonClick = () => {
    chatFuncs.createChat((res) => {
      chatFuncs.getChats((res) => {
        if (res) setChats(res);
      });
    });
  };

  const onMsgSend = (e: SyntheticEvent<HTMLFormElement>) => {
    if (openChat) {
      msgFuncs.sendMessage(openChat._id, e, (res) => {
        msgFuncs.getMessages(openChat._id, (res) => {
          if (res) setMessages(res);
        });
      });
    }
  };

  return (
    <UserContext.Provider value={user}>
      <div className="drawer drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content p-4 flex flex-col h-[100vh]">
          {messages.map((msg) => (
            <p>{msg.text}</p>
          ))}

          <form action="" className="mt-auto" onSubmit={onMsgSend}>
            {openChat && (
              <input
                type="text"
                className="input input-bordered w-full"
                placeholder="Send a message"
                name="text"
              />
            )}
          </form>

          {/* <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label> */}
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* <Link to="/app/friends" className="btn btn-neutral">
              Friends
            </Link> */}
            <div className="divider font-semibold text-xl">Chats</div>
            {chats.map((chat) => (
              <button
                key={chat._id}
                className="btn btn-neutral"
                onClick={() => setOpenChat(chat)}
              >
                {chat.name}
              </button>
            ))}
            <li className="mt-auto">
              {/* <LogoutButton /> */}
              <button
                className="btn btn-secondary"
                onClick={onChannelButtonClick}
              >
                Add Your Own Chat
              </button>
            </li>
          </ul>
        </div>
      </div>
    </UserContext.Provider>
  );
};

export default App;
