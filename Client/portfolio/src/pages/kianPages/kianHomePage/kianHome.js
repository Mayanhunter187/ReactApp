
import { Link } from 'react-router-dom';
import './kianHome.css';



function KianHome() {
  return (
    <div>
      <header className="home-header">
      <h1><Link to = "/"><button className="standardButton">Return to home page</button></Link></h1>   
      </header>
      </div>
  );
}
export default KianHome;
