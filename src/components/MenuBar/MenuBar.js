
import "./MenuBar.css";
import logo from "../../images/edu.png";
import { Link } from "react-router-dom";


const MenuBar = () => {
  
  return (
    <div className="MenuBar-container">
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <div className="logo-img">
              <img className="w-75 h-75"  src={logo} alt="" />
              <h1 className='title fs-1'>E-DEMY</h1>
            </div>
          </div>
          <div className="col-md-10">
            <div className="menu-container pt-5 ">
              <ul className="d-flex align-items-end justify-content-end">
                <Link to="/home" className="items">
                  <li>Home</li>
                </Link>
                <Link to='/about' className="items">
                  <li>About</li>
                </Link>
                <Link to='/services' className="items">
                  <li>services</li>
                </Link>
                <Link to='/contact' className="items">
                  <li>Contact</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
