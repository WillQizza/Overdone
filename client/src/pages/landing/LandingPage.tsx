import { Component } from "react";
import "./LandingPage.scss";

class LandingPage extends Component {
  // 
  render() {
    return (
      <div id="container">
        <div id="content">
          <h1 className="title heading">Overcooked</h1>
          <h2 className="subtitle heading">Cooking has never been so organized!</h2>
          <button>Login</button>
          <button>Browse</button>
        </div>
        <div id="cooking-preview">
          <div className="overlay"></div>
        </div>
      </div>
    );
  }

}

export default LandingPage;
