import React from "react";
import './DataAlbum.css'

function Data(props) {
  return (
    <div className="containerData">
      <img src={props.img} />
      <p className="legend">{props.content}</p>
    </div>
  );
}

export default Data;
