import React from "react";
import ReactDOM from "react-dom";
import lax from "lax.js";

class LaxButton extends React.Component {
  componentDidMount() {
    this.el = ReactDOM.findDOMNode(this);
    lax.addElement(this.el);
  }

  componentWillUnmount() {
    lax.removeElement(this.el);
  }

  render() {
    return (
      <a
        href={this.props.link}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary lax"
        data-lax-preset="driftLeft"
      >
        {this.props.buttonText}
      </a>
    );
  }
}

LaxButton.defaultProps = {
  buttonText: "",
  link: ""
};

export default LaxButton;
