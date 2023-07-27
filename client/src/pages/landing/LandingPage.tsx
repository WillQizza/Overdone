import { Component } from "react";
import "./LandingPage.scss";
import LoginForm from "./LoginForm";

class LandingPage extends Component {

  render() {
    return (
      <div>
        <div id="page-content-container">
          <div id="content">
            <h1 className="title heading">Overdone</h1>
            <h2 className="subtitle heading">Cooking has never felt so organized!</h2>
            <button className="button">Login</button>
            <button className="button">Browse</button>
          </div>
          <div id="cooking-preview">
            <div className="image"></div>
            <div className="overlay"></div>
          </div>
          <div id="signin-box">
            <LoginForm />
          </div>
          <div id="container-overlay" className="hidden"></div>
        </div>
      </div>
    );
  }

}

export default LandingPage;