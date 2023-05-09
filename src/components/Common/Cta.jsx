import React from "react";
class Cta extends React.Component {
  render() {
    return (
      <section className="cta-area">
        <div className="container">
          <div className="row h-100 align-items-center">
            <div className="col-lg-8">
              <h3>Check Out Our Biggest Event So Far!</h3>
            </div>

            <div className="col-lg-4 text-right">
              <a
                href="//r8syp.ieee.tn/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                Check out SYP!
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Cta;
