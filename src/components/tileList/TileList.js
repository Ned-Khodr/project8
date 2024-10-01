import React from "react";
import { Tile } from "../tile/Tile"
// import { render } from "enzyme";

export const TileList = ( { objects } ) => {
  if (!objects) {
    return <ul></ul>
  }
  
  return (
    <div>
      <ul>
        {objects.map(({ name, ...rest }, index) => (
          <Tile 
            name={name} 
            description={rest} 
            key={index}
          />
        ))}
      </ul>
    </div>

  );
};
