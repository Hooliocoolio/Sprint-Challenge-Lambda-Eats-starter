import React from "react";
import {Link} from 'react-router-dom';
import logo from './favicon.jpg';
import splash from './Pizza.jpg';

 const Home = () => {

    return (
    <div className="container">
        <div className="header"><img src={logo} className="App-logo" alt="logo" /><h1>Hoo's Pizza!</h1> </div>
        <div className="splash">
        <img src={splash} className="splash" alt="Hoo's Pizza" />
        </div>
          
        <nav>
          <ul>
            <li>
              <Link to="/"></Link>
            </li>
            <li>
              <Link to="/OrderPizza"><button class="btn">READY TO ORDER</button></Link>
            </li>
            <li>
              <Link to="/Pizza"></Link>
            </li>
          </ul>
        </nav>
    </div>
    );
}


export default Home;