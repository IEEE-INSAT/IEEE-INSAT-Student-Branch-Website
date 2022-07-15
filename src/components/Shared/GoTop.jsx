import React from "react";

class GoTop extends React.Component {
  state = {
    intervalId: 0,
    thePosition: false
  };

  componentDidMount() {
    this._isMounted = true;
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        this.setState({ thePosition: true });
      } else {
        this.setState({ thePosition: false });
      }
    });
    window.scrollTo(0, 0);
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  onScrollStep = () => {
    if (window.pageYOffset === 0) {
      clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
  };

  scrollToTop = () => {
    let intervalId = setInterval(this.onScrollStep, this.props.delayInMs);
    this.setState({ intervalId: intervalId });
  };

  renderGoTopIcon = () => {
    if (this.state.thePosition) {
      return (
        <div className="back-to-top" onClick={this.scrollToTop}>
          UP
        </div>
      );
    }
  };

  render() {
    return <React.Fragment>{this.renderGoTopIcon()}</React.Fragment>;
  }
}

export default GoTop;
