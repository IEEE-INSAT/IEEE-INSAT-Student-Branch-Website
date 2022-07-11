import React from "react";
import { Link } from "react-router-dom";

class MainBanner extends React.Component {
  render() {
    return (
      <div className="page-title-area item-bg2">
        <div className="container">
          <h1>{this.props.bannerTitle}</h1>
          <span>{this.props.bannerDescription}</span>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>{this.props.section}</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default MainBanner;
