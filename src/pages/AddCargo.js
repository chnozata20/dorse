import React, {useState } from 'react'
import { Row } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from '../components/Navbar';
import AddCargoForm from '../components/AddCargoForm';
import { useLocation } from "react-router-dom";



export default function AddCargo() {
  const [cargo,setCargo]=useState(useLocation().state.cargo);
  const user = useLocation().state.user;
  
  return (
    <div>
      <Row>
        <Navbar/>
      </Row>
      <Row>
        {console.log(user)}
  <AddCargoForm user={user} cargo={cargo} setCargo={setCargo} add={cargo===true ? true : false}/>
      </Row>
    </div>
  )
}
