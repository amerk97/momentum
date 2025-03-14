import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>
      <h1>Login to Momentum</h1>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button>Login</button>
    </div>
  );
};

export default Login;
