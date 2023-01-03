import React from "react";
import "./Navbar.css";
import logo from "./logo.png";
import { Link } from "react-router-dom"
import UserBar from "./UserBar";


export default function Navbar(props){
    return (
      <div style={{display:"flex", width:"73%"}}>
        <div >
        <nav>
          <ul>
            <li>
              <img
                alt="Dorse"
                src={logo}
                style={{
                  height: 100,
                  width: 200,
                }}
              />{" "}
            </li>
            <li>
            <Link to={props.driver === true ? "/selectcargo" : "/employerhome"} state={{ data: props.user}}>Ana Sayfa</Link>
            </li>
            <li>
            <Link to={props.driver === true ? "/selectcargo" : "/employerhome"} state={{ data: props.user}}>Profilim</Link>
            </li>
            <li>
              <Link to={props.driver === true ? "/driverrequests" : "/requests"} state={{ user: props.user, driver: props.driver }}>Kargo İstekleri</Link>
            </li>
          </ul>

        </nav>
        </div>
        <div className="n-userbar">
        <UserBar name={props.user.name} surname={props.user.surname}></UserBar>
        </div>

      </div>
    );
  }
