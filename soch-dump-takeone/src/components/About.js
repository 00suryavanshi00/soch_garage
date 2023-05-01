import { Component } from "react"
import { Link } from "react-router-dom"
import "./About.css"

class About extends Component {
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
            <ul id="about" className={this.state.clicked ? "#about active" : "#about"}>

              <li>
                {/* <a href="index.html">
                  Home
                </a> */}
                <Link className="home" to="/" >Home</Link>
              </li>


              <li>
                {/* <a href="index.html">Stories</a> */}
                <Link className="stories" to="/stories" >Stories</Link>
              </li>


              <li>
                <Link className="active" href="index.html">About Us</Link>
                {/* <Link className="about" to="/about" >About</Link> */}
              </li>


              {/* <button className="log" >Login</button> */}
              {/* <Link className="log" to="/land" >Login</Link> */}
              <li>
              <a href="index.html">Settings</a>
              </li>

              
            </ul>
          </div>
          {/* <div id="mobile" onClick={this.handleClick}>
            <i
              id="bar"
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div> */}
        </nav>
        <div className="bout" >
            <p>
              ABOUT AIISH
            </p>
          </div>

          {/* <Link className="ist" to="/about">
            <img src={"D:\aiish\soch_garage\soch-dump-takeone\src\images\image 23.png"} />
          </Link> */}
    </>    
    );
  }
};

export default About;