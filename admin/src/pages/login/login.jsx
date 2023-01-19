import "./login.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/apiCalls";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };
  return (
    <div className='loginContainer'>
      <input className='input' type='text' placeholder='username' onChange={(e) => setUsername(e.target.value)} />
      <input className='input' type='password' placeholder='password' onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleClick}>Login</button>
    </div>
  );
}

export default Login;
