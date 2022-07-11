import React from 'react';
import ReactDOM from 'react-dom';
import lax from 'lax.js';
 
class LaxDiv extends React.Component {

    componentDidMount() {
        this.el = ReactDOM.findDOMNode(this)
        lax.addElement(this.el)
    }
    
    componentWillUnmount() {
        lax.removeElement(this.el)
    }

    render(){
        return (
            <div className="bg-title lax" data-lax-preset={this.props.dataPreset} >
                {this.props.text}
            </div>
        );
    }
}

LaxDiv.defaultProps = {
    text: 'Speakers',
    dataPreset: 'driftRight'
};
 
export default LaxDiv;