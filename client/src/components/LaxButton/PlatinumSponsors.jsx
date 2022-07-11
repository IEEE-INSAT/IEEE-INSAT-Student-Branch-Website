import React from 'react';
import ReactDOM from 'react-dom';
import lax from 'lax.js';
 
class PlatinumSponsors extends React.Component {

    componentDidMount() {
        this.el = ReactDOM.findDOMNode(this)
        lax.addElement(this.el)
    }
    
    componentWillUnmount() {
        lax.removeElement(this.el)
    }

    render(){
        return (
            <h3 className="lax" data-lax-preset="driftRight">Platinum Sponsors</h3>
        );
    }
}
 
export default PlatinumSponsors;