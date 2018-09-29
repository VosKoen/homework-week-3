import * as React from "react";

export default function ModelDetails(props) {
  console.log(props);
  return (
    <div>
      {props.models.map(model => (
        <ul>
          <li>Name: {}</li>
          <li>Manufacturer: {model.manufacturer}</li>
          <li>Year: {model.year}</li>
          <li>Origin: {model.origin}</li>
        </ul>
      ))}
    </div>
  );
}
