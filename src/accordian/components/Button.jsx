import React from 'react'
import Container from './Container.jsx'

function Button(props) {

  var changeColor = (props) => (props.isClicked) ? "change_color" : "";    
  return (
    <li
      onClick={props.handleClick}
      data-button={props.button}
      className={(props.isClicked) ? "change_color btn flex" : "btn flex"}
    >
      {' '}
      <p data-button={props.button}>{props.children}</p>
      <div>
        {!props.isClicked ? (
          <i
            className="fas fa-angle-down icon"
            data-button={props.button}
          ></i>
        ) : (
          <i className="fas fa-angle-up icon" data-button={props.button}></i>
        )}
      </div>
    </li>
  )
}

export default Button
