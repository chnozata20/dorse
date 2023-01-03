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
  const user = useLocation().state.data;
  const navigate = useNavigate();
  const [chosen, setChosen] = useState(0);
  const [deleteAlert, setDeleteAlert] = useState(false);

  function DeleteCargo(id){
        // DELETE request using fetch with error handling
        fetch('http://localhost:3000/cargo/'.concat(id), { method: 'DELETE' })
        .then(async response => {
            const data = await response.json();
            // check for error response
            if (!response.ok) {
                // get error message from body or default to response status
                const error = (data && data.message) || response.status;
                return Promise.reject(error);
            }else{
             setDeleteAlert(true);
            }
        })
        .catch(error => {
            console.error('There was an error!', error);
        });
  }

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
  }, [deleteAlert]);
  return (
    <div>
      <div className="navbarRelative">
        <Navbar user={user} driver={false}/>
      </div>
      <hr></hr>
      <Row>
        <Col xs="10">
          <CustomizedTable 
            user={user}
            driver={false}
            cargo={cargo}
            chosen={chosen}
            setChosen={setChosen}
          />
        </Col>
        <Col xs="2">
          <div className="parent-button-position">
            <button
              className="Example-btn1 "
              onClick={() => {
                navigate("/addcargo", { state: { user, cargo:true } });
              }}
            >
              Kargo Ekle
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
              Kargo Güncelle
            </button>

            <button
              className="Example-btn1 color3"
              onClick={() => {
                DeleteCargo(chosen);
              }}
            >
              Kargo Sil
            </button>
          </div>
        </Col>
      </Row>
      {deleteAlert === true ? (
        <div className="alertOk">
          <span
            className="closebtn"
            onClick={() => {
              setDeleteAlert(false);
            }}
          >
            ×
          </span>
          İstek Başarıyla Silindi!
        </div>
      ) : null}
    </div>
  );
}
