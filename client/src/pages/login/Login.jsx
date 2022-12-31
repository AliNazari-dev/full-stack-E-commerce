import "./login.scss";

const Login = () => {
  return (
    <div className='loginContainer'>
      <div className='wrapper'>
        <h1 className='title'>LOGIN TO ACCOUNT</h1>
        <form action='' className='form'>
          <input type='text' placeholder='Username' />
          <input type='password' placeholder='password' />
          <button className='button'>LOGIN</button>
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
