import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomizedTable from "../components/CustomizedTable";
import "../styles/EmployerHome.css";
import UserBar from "../components/UserBar";

export default function EmployerHome() {
  const [cargo, setCargo] = useState(false);
  const user = useLocation().state.data[0];
  const navigate = useNavigate();
  const [chosen, setChosen] = useState(0);

  useEffect(() => {
    fetch("http://localhost:3000/cargo/employerid/".concat(user.id))
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
      <UserBar />
      <div className="navbarRelative">
        <Navbar />
        <hr></hr>
      </div>
      <Row>
        <Col xs="9">
          <CustomizedTable 
            cargo={cargo}
            chosen={chosen}
            setChosen={setChosen}
          />
        </Col>
        <Col xs="3">
          <div className="parent-button-position">
            <button
              className="Example-btn1 "
              onClick={() => {
                navigate("/addcargo", { state: { user, cargo:true } });
              }}
            >
              Add Cargo
            </button>

            <button
              className="Example-btn1 color2"
              onClick={() => {
                fetch("http://localhost:3000/cargo/".concat(chosen))
                  .then((res) => {
                    if (res.ok && res.status === 200) {
                      return res.json();
                    }
                  })
                  .then((cargo) => {
                    console.log(cargo)
                    navigate("/addcargo", { state: { user, cargo } });
                  })
                  .catch((err) => console.log(err));
              }}
            >
              Update Cargo
            </button>

            <button
              className="Example-btn1 color3"
              onClick={() => {
                navigate("/addcargo", { state: { user } });
              }}
            >
              Delete Cargo
            </button>
          </div>
        </Col>
      </Row>
    </div>
  );
}
