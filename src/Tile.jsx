import React from "react";

function Tile(props) {

    
  function handleClick(value) {
    props.addClick();
    props.checkNeighbours(value);
  }

    return (
      <div
        onClick={() => {
          handleClick(props.text);
        }}
        className="image-block"
      >
        <img src={props.picture} alt="puzzle" className="image"/>
      </div>
    );
}

export default Tile;
