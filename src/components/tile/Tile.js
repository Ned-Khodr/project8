import React from "react";

export const Tile = ( {name, description} ) => {

  // console.log(Object.values(description))
  return (
    <div className="tile-container">
      <p className="tile-title">{name}</p>
      {Object.values(description).map((value, index) => (
        <p className="tile" key={index}>{value}</p>
      ))}
    </div>
  );
};
