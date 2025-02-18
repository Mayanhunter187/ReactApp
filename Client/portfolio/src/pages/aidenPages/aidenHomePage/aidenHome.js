
import { Link } from 'react-router-dom';
import './aidenHome.css';



function AidenHome() {
  return (
    <div>
      <header className="home-header">
      <h1><Link to = "/"><button className="standardButton">Return to home page</button></Link></h1>   
      <h2><Link to = "https://google.com"><button className="standardButton">Google</button></Link></h2>
      <h2><Link to = "https://www.linkedin.com/in/aiden-dunaway"><button className="standardButton">Linkedin(TawdEST)</button></Link></h2>
      </header>
      </div>
  );
}
export default AidenHome; 