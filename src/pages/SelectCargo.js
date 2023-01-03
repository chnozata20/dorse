import React, { useEffect, useState } from "react";
import MapChart from "../components/MapChart";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/SelectCargo.css";
import CustomizedTable from "../components/CustomizedTable";
import { Row, Col } from "reactstrap";
import Navbar from "../components/Navbar";
import Chatbot from "../components/Chatbot";
import MinimizeChat from "../components/MinimizeChat";
import { useLocation } from "react-router-dom";

export default function SelectCargo() {
  const [currentCity, setCurrentCity] = useState("all");
  const [cargo, setCargo] = useState(false);
  const [chosen, setChosen] = useState(0);
  const [chat, setChat] = useState(false);
  const user = useLocation().state.data;

  useEffect(() => {
    fetch("http://localhost:3000/cargo/all")
      .then((res) => {
        if (res.ok && res.status === 200) {
          return res.json();
        }
      })
      .then((data) => {
        setCargo(data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <div className="navbarRelative">
        <Navbar user={user} driver={true}/>
      </div>
      <hr></hr>

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
            <CustomizedTable user={user} driver={true} cargo={cargo} chosen={chosen} setChosen={setChosen} />
          </div>
        </Col>
      </Row>
      {chat === true ? <Chatbot chat={chat} setChat={setChat}/> : <MinimizeChat setChat={setChat}/>}

      
    </div>
  );
}
