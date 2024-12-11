import './login.css';
import { Link } from 'react-router-dom';

function login() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
        login page mf
        </h1>
        <p>
        Username: <input name="username" />
        </p>
        <p>
        Password: <input name="password" />
        </p>
        <p>
        <button className="blackButton">submit</button>
        </p>
        <p>
        <Link to="/">
        <button className="blackButton">home</button>
        </Link>
        </p>
      </header>
    </div>
  );
}

export default login;
