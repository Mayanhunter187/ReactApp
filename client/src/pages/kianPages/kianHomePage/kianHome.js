import { Link } from 'react-router-dom';
import './kianHome.css';

function KianHome() {
  return (
    <div>
      <header className="home-header">
      <h1><Link to = "/"><button className="standardButton">Return to the home page</button></Link></h1> 
      <h1><Link to = "/kianProject"><button className="standardButton">check out my projects!</button></Link></h1> 
      </header>
      </div>
  );
}
export default KianHome;
