import "./register.scss";

const Register = () => {
  return (
    <div className='registerContainer'>
      <div className='wrapper'>
        <h1 className='title'>CREATED AN ACCOUNT</h1>
        <form action='' className='form'>
          <input type='text' placeholder='name' />
          <input type='text' placeholder='Lastname' />
          <input type='text' placeholder='Username' />
          <input type='email' placeholder='email' />
          <input type='password' placeholder='password' />
          <input type='password' placeholder='Confrim password' />
          <span className='agreement'>
            By Creating an account, I consent to the proccessing my personal data in accordance with the <b>PRIVACY POLICY</b>
          </span>
          <button className='button'>Create</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
