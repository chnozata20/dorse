import React, { useState } from "react";
import MapChart from "../components/MapChart";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/SelectCargo.css";
import CustomizedTable from "../components/CustomizedTable";
import { Row, Col } from "reactstrap";
import Navbar from "../components/Navbar";

export default function SelectCargo() {
  const [currentCity, setCurrentCity] = useState("all");
  const [cargo, setCargo] = useState(false);

  return (
    <div>
      <h1>{currentCity}</h1>
      <div className="navbarRelative">
        <Navbar />
        <hr></hr>
      </div>

      <Row>
        <Col xs="6">
          <div className="mapRelative">
            <MapChart
              setCurrentCity={setCurrentCity}
              setCargo={setCargo}
              currentCity={currentCity}
            />
          </div>
        </Col>
        <Col xs="6">
          <div className="tableRelative">
            <CustomizedTable setCargo={setCargo} cargo={cargo} />
          </div>
        </Col>
      </Row>
    </div>
  );
}
