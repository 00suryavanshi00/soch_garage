import { Component } from "react"
import { Link } from "react-router-dom"
import "./About.css"
// import image23 from ".image23.png"

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

          <div className="cont" >
            <p>
            The All India Institute of Speech and Hearing popularly known as AIISH is a pioneer national organization advancing the causes of human resource development, research, clinical care and public education on communication disorders. The institute was established in the year 1966 as an autonomous institute fully funded by the Ministry of Health and Family Welfare, Government of India.
            Situated in a lush green campus of 32 acres adjacent to the University of Mysore in Manasagangothri, Mysore, it is a unique institute in the Asian sub-continent which houses eleven departments having state-of-the-art facilities to offer inter-disciplinary research and training to the students, Ladies hostel, Administrative, Academic, Clinical buildings and the Knowledge park along with a well equipped Library and Information Centre. There are two additional campuses one is named as Panchvati and the other newly endowed campus is at Varuna, Mysuru.
            </p>
          </div>

          {/* <img src="../images/image23.png" alt="AIISH"/> */}
          <div className="img" >

          </div>

          {/* <Link className="ist" to="/about">
            <img src={"D:\aiish\soch_garage\soch-dump-takeone\src\images\image 23.png"} />
          </Link> */}
    </>    
    );
  }
};

export default About;