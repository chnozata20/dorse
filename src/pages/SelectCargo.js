import React, { Component } from "react";
import MapChart from "../components/MapChart";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SelectCargo.css";
import CustomizedTable from "../components/CustomizedTable";
import { Row, Col } from "reactstrap";
import Navbar from "../components/Navbar";

export default class SelectCargo extends Component {
  render() {
    return (
      <div >
    

        <div className="navbarRelative">
          <Navbar />
          <hr></hr>
        </div>

        <Row>
          <Col xs="6">
            <div className="mapRelative">
              <MapChart />
            </div>
          </Col>
          <Col xs="6">
            <div className="tableRelative">
              <CustomizedTable />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
