import { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <>
        <nav>
          <a className="logo" href="index.html">
            {/* <img src="./images/lgo.svg" />x */}
          </a>

          <div>
            <ul id="navbar" className={this.state.clicked ? "#navbar active" : "#navbar"}>

              <li>
                <a className="active" href="index.html">
                  Home
                </a>
              </li>


              <li>
                <a href="index.html">Stories</a>
              </li>


              <li>
                <a href="index.html">About</a>
              </li>


              <li>
                <a href="index.html">Settings</a>
              </li>

              
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