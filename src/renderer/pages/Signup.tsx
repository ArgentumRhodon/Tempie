import { Link, useNavigate } from 'react-router-dom';
import { useSignup } from '../../hooks/useAuth';
import { SyntheticEvent } from 'react';

const Signup = () => {
  const navigate = useNavigate();
  const signup = useSignup();
  const onSignup = (e: SyntheticEvent<HTMLFormElement>) => {
    signup(e, (res) => {
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
            onSubmit={onSignup}
          >
            <h2 className="card-title mb-6">Signup</h2>
            <input
              type="text"
              placeholder="Username"
              name="username"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="password"
              placeholder="Password"
              name="password1"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              name="password2"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              className="btn btn-primary w-full max-w-xs"
              type="submit"
              value={'Sign Up'}
            />
            <Link to="/auth/login" className="link link-primary mt-6">
              Already have an account?
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
