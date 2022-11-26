import React from "react";
import TurkeyMap from "turkey-map-react";
import "antd/dist/antd.min.css";
import { Tooltip } from "antd";

function changeCargo(props,name) {
  fetch("http://localhost:3000/cargo/city/".concat(name))
      .then((res) => {
        console.log("http://localhost:3000/cargo/city/".concat(name))

        if (res.ok && res.status === 200) {
          return res.json();
        }
      })
      .then((data) => {
        props.setCargo(data);
      })
      .catch((err) => console.log(err));
}
export default function MapChart(props) {
  return (
    <div>
      <TurkeyMap
        onClick={({ name }) => {
          props.setCurrentCity(name);
          changeCargo(props,name);
        }}
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
