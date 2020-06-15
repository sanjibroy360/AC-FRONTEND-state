import React from "react";
import data from "../data.js"

class Para extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            addClass : ""
        }
    }
    getClass = () => {
        if(this.props.isClicked) {
            this.state.addClass = "show_para para";
        } else {
            this.state.addClass = "hide_para para";
        }
        return this.state.addClass;
    };

    
    render() {

        return (
            <div className={this.getClass()}>
                <p>{data[this.props.button]}</p>
            </div>
        )
    
    }
}

export default Para;