import React from 'react';

function Button(props) {
    return <button onClick={props.handleClick} className="counter_btn">{props.children}</button>
}

export default Button;