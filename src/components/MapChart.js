import React, { Component } from "react";
import TurkeyMap from "turkey-map-react";
import "antd/dist/antd.min.css";
import { Tooltip } from "antd";

export default class MapChart extends Component {
  render() {
    return (
      <div>
        <TurkeyMap
          cityWrapper={(cityComponent, cityData) => (
            <Tooltip
              title={`${cityData.plateNumber} - ${cityData.name}`}
              key={cityData.id}
            >
              {cityComponent}
            </Tooltip>
          )}
        />
      </div>
    );
  }
}
