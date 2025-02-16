
import { Link } from 'react-router-dom';
import './kianHome.css';
import home from '../../homePage/home';



function KianHome() {
  return (
    <div>
      <header className="home-header">
      <h1><Link to = "/">Return to home page</Link></h1>   
      </header>
      </div>
  );
}
export default KianHome;
