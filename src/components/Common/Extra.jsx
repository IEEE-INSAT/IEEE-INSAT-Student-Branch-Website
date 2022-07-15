import React from "react";
import Zoom from "react-reveal/Zoom";
import { Link } from "react-router-dom";
class Extra extends React.Component {
  state = {
    term: ""
  };

  render() {
    return (
      <section className="subscribe-area">
        <div className="container">
          <Zoom right>
            <div className="subscribe-inner">
              <span>Need to tell us something?</span>
              <h2>Feel Free to Express yourself!</h2>

              <Link to="/contact" className="btn btn-primary">
                Contact Page
              </Link>
              <div id="validator-newsletter" className="form-result"></div>
            </div>
          </Zoom>
        </div>
      </section>
    );
  }
}

export default Extra;
