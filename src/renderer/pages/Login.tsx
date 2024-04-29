import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useLogin } from '../../hooks/useAuth';
import { SyntheticEvent } from 'react';

const Login = () => {
  const navigate = useNavigate();
  const login = useLogin();
  const onLogin = (e: SyntheticEvent<HTMLFormElement>) => {
    login(e, (res) => {
      if (res.redirect) {
        navigate(res.redirect);
      }
    });
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center h-[100vh]">
        <div className="card w-96">
          <form
            className="card-body text-center items-center bg-base-200 shadow-lg rounded-lg"
            onSubmit={onLogin}
          >
            <h2 className="card-title mb-6">Login</h2>
            <input
              type="text"
              placeholder="Username"
              name="username"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              className="input input-bordered w-full max-w-xs"
            />
            <button className="btn btn-primary w-full max-w-xs" type="submit">
              Log In
            </button>
            <Link to="/auth/signup" className="link link-primary mt-6">
              Don't have an account?
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
