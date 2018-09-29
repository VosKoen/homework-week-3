import * as React from "react";

export default function ModelDetails(props) {
  /*  I am using index in the map function as a key. There is no other unique information available, you can have two identical entries in props.model.
      That is why I use index as a key here, that is always unique. */
  return (
    <div>
      {props.models.map((model,index) => (
        <ul key={index}>
          <li>Name: {model.name}</li>
          <li>Manufacturer: {model.manufacturer}</li>
          <li>Year: {model.year}</li>
          <li>Origin: {model.origin}</li>
        </ul>
      ))}
    </div>
  );
}
