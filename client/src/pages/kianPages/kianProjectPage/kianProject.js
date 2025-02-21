
import { Link } from 'react-router-dom';

function kianProject() {
  return (
    <div>
      <header className="home-header">
      <h1><Link to = "/kianHome"><button className="standardButton">Return to my home page</button></Link></h1>   
      </header>
      </div>
  );
}
export default kianProject;