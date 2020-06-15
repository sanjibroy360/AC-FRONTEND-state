import React from "react";
import Button from "./Button.jsx";
import Para from "./Para.jsx";

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "javascript": false,
            "react": false,
            "node": false,
        }
    };

    handleClick = (event,props) => {
        var key = event.target.attributes.getNamedItem('data-button').value;
        
        return this.setState({[key]: !this.state[key]});
        
    }

    render() {
        return(
        <ul className="btn_wrapper">
            <Button handleClick={this.handleClick} button="javascript" isClicked={this.state.javascript}>Javascript</Button>
            <Para button="javascript" isClicked={this.state.javascript}/>

            <Button handleClick={this.handleClick} button="react" isClicked={this.state.javascript}>React</Button>
            <Para button="react" isClicked={this.state.react}/>

            <Button handleClick={this.handleClick} button="node" isClicked={this.state.javascript}>Node</Button>
            <Para button="node" isClicked={this.state.node}/>
        </ul>)
    }
}

export default Container;