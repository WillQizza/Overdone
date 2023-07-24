import { Component } from "react";
import "./LandingPage.scss";

class LandingPage extends Component {
  // 
  render() {
    return (
      <div id="container">
        <div id="content">
          <h1 className="title heading">Overdone</h1>
          <h2 className="subtitle heading">Cooking has never felt so organized!</h2>
          <button>Login</button>
          <button>Browse</button>
        </div>
        <div id="cooking-preview">
          <div className="image"></div>
          <div className="overlay"></div>
        </div>
      </div>
    );
  }

}

export default LandingPage;
