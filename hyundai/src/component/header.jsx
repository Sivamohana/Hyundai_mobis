import React from "react";
import { Link } from "react-router-dom";
import '../styles/home.css';
//import{FaHome} from "react-icons/fa";


const Header = () => {
    return (
        <div className="sum">
            
        {/* <img src="./Assets/logomobis.png" alt="Hyundai mobis logo" height="30px" width="100px" className="logo1"/> */}
     <div className="sd1">Hyundai <span>Mobis   </span></div>
 <nav className="item" >
    <ul className="ul">
      <li >
      <Link to="/" id="header1">Home </Link>
      </li>
      <li >
      <Link to="/sample" id="header1">Report</Link>
      </li>
      <li >
      <Link to="/sampleimplement" id="header1">DataUpdate</Link>
      </li>
      <li >
      <Link to="/showdetails" id="header1">ShowDetails</Link>
      </li>
         {/* <li >
      <Link to="/dashboard" id="header1">Dashboard</Link>
      </li> */}
      {/* <li >
      <Link to="/about" id="header1">Implementation</Link>
      </li> */}
    </ul>
</nav>
</div>
    )
}

export default Header;