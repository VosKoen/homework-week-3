import React, { Component } from "react";
import "./App.css";

const data = {
  "Ivel Z3": {
    manufacturer: "Ivasim",
    year: 1969,
    origin: "Croatia"
  },
  "Bally Astrocade": {
    manufacturer: "Bally Consumer Products",
    year: 1977,
    origin: "USA"
  },
  "Sord M200 Smart Home Computer": {
    manufacturer: "Sord Computer Corporation",
    year: 1971,
    origin: "Japan"
  },
  "Commodore 64": {
    manufacturer: "Commodore",
    year: 1982,
    origin: "USA"
  }
};

const pcModels = Object.keys(data);

class App extends Component {
  render() {
    if (!pcModels)
      return (
        <div className="App">
          <p>Loading...</p>
        </div>
      );

    if (pcModels)
      return (
        <div className="App">
          <select>
            <option value="">-- pick a model --</option>
            {pcModels.map(model => <option value={model}>{model} ({data[model].year})</option>)}
          </select>
        </div>
      );
  }
}

export default App;
