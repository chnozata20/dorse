import React, { useState } from "react";
import "../styles/AdminPage.css";
import ApEmployer from "../components/ApEmployer";
import ApDriver from "../components/ApDriver";
import ApCargo from "../components/ApCargo";
import ApRequest from "../components/ApRequest";
import ApSystemInfo from "../components/ApSystemInfo";
import ApTrailer from "../components/ApTrailer";
import ApVehicle from "../components/ApVehicle";
import ApMemberRequest from "../components/ApMemberRequest";


export default function AdminPage() {
const [chosen, setChosen] = useState(false);
  return (
    <div className="ap-parent">
      <div className="ap-panel">
        <div className="ap-navbar">
          <div className="ap-admin-text">Admin</div>
        </div>
        <div className="ap-section-panel">
          <div className="ap-button-parent">
            <button className="ap-section-button" onClick={()=>{setChosen("İşverenler")}}>İşverenler</button>
            <button className="ap-section-button" onClick={()=>{setChosen("Şoförler")}}>Şoförler ve Araçları</button>
            <button className="ap-section-button" onClick={()=>{setChosen("Kargolar")}}>Kargolar</button>
            <button className="ap-section-button" onClick={()=>{setChosen("Kargo İstekleri")}}>Kargo İstekleri</button>
            <button className="ap-section-button" onClick={()=>{setChosen("Çekiciler")}}>Çekiciler</button>
            <button className="ap-section-button" onClick={()=>{setChosen("Dorseler")}}>Dorseler</button>
            <button className="ap-section-button" onClick={()=>{setChosen("Üyelik İstekleri")}}>Üyelik İstekleri</button>
            <button className="ap-section-button" onClick={()=>{setChosen("Engellenen Kullanıcılar")}}>
              Engellenen Kullanıcılar
            </button>
            <button className="ap-section-button"  onClick={()=>{setChosen("Sistem Bilgisi")}}>Sistem Bilgisi</button>
          </div>
        </div>
        <div className="ap-display-panel">
            <div className="ap-display-panel-parent">
                {chosen==="İşverenler"?<ApEmployer/>:null}
                {chosen==="Şoförler"?<ApDriver/>:null}
                {chosen==="Kargolar"?<ApCargo/>:null}
                {chosen==="Kargo İstekleri"?<ApRequest/>:null}
                {chosen==="Çekiciler"?<ApVehicle/>:null}
                {chosen==="Sistem Bilgisi"?<ApSystemInfo/>:null}
                {chosen==="Dorseler"?<ApTrailer/>:null}
                {chosen==="Üyelik İstekleri"?<ApMemberRequest/>:null}


            </div>
        </div>
      </div>
    </div>
  );
}
