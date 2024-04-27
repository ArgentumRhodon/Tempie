import { Link, Outlet } from 'react-router-dom';
import { LogoutButton } from '../components';

const App = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet />

        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          <Link to="/app/friends" className="btn btn-neutral">
            Friends
          </Link>
          <div className="divider">Chats</div>
          <Link to="/app/chat" className="btn btn-neutral">
            Chat
          </Link>
          <li className="mt-auto">
            <LogoutButton />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default App;
