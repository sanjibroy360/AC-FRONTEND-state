import React from "react";

function ToggleButton(props) {
    return <button onClick={props.handleClick} className="toggle_btn">{props.children}</button>
}

export default ToggleButton;