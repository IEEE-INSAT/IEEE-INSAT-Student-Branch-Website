import React from "react";
import { Link } from "react-router-dom";

class NotFound extends React.Component {
  render() {
    return (
      <div className="error-area">
        <div className="d-table">
          <div className="d-table-cell">
            <h1>
              GO <span> BACK </span>
              <span> !</span>
            </h1>
            <h3>ERROR!</h3>
            <p>
              The page you were searching for is invalid.
            </p>
            <Link
              to="/"
              className="btn btn-primary"
              onClick={this.toggleNavbar}
            >
              Return
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default NotFound;
