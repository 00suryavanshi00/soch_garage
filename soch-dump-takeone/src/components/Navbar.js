import { Component } from "react";
import "./Navbar.css";
import {Link} from "react-router-dom"

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <>
        <nav>
          <Link className="logo" href="index.html">
            {/* <img src="./images/lgo.svg" />x */}
          </Link>

          <div>
            <ul id="navbar" className={this.state.clicked ? "#navbar active" : "#navbar"}>

              <li>
                <Link className="active" href="index.html">
                  Home
                </Link>
              </li>


              <li>
                {/* <a href="index.html">Stories</a> */}
                <Link className="stories" to="/stories" >Stories</Link>
              </li>


              <li>
                {/* <a href="index.html">About</a> */}
                <Link className="about" to="/about" >About</Link>
              </li>


              {/* <button className="log" >Login</button> */}
              <Link className="log" to="/land" >Login</Link>

              
            </ul>
          </div>
          <div id="mobile" onClick={this.handleClick}>
            <i
              id="bar"
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
