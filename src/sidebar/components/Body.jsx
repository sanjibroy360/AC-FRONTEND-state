import React from 'react';
import data from "../data.js"

function Body(props) {
  
  return (
    <div className="txt_wrapper">
      <h2 className="title">
        {data[props.activeMenu].title}{' '}
      </h2>
      <p className="content">
        {data[props.activeMenu].content}
      </p>
    </div>
  )
}

export default Body;
