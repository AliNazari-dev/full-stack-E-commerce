import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./login.scss";
import { login } from "../../redux/apiCalls";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleLogin = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
    
  };
  return (
    <div className='loginContainer'>
      <div className='wrapper'>
        <h1 className='title'>LOGIN TO ACCOUNT</h1>
        <form action='' className='form'>
          <input
            type='text'
            placeholder='Username'
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <input
            type='password'
            placeholder='password'
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button className='button' onClick={handleLogin} disabled={isFetching}>
            LOGIN
          </button>
          {error && <span className='error'> Something went Wrong .... try again </span>}
          <a href='' className='link'>
            forgot my password !
          </a>
          <a href='' className='link'>
            Create Account
          </a>
          <a href='' className='link'></a>
        </form>
      </div>
    </div>
  );
};

export default Login;
