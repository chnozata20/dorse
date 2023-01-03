import React, { useEffect, useRef, useState } from "react";
import "../styles/ApDriver.css";
import rightArrow from "./rightArrow.png";

export default function ApRequest() {
  const [request, setRequest] = useState(false);
  const [deleteAlert, setDeleteAlert] = useState(false);

  function ConfirmRq(request) {
    fetch("http://localhost:3000/cargorequest/".concat(request.request_id), {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id_cargo_requests: request.request_id,
        cargo_id: request.cargoId,
        driver_id: request.driver_id,
        status: 1, //confirm status
      }),
    })
      .then((res) => {
        if (res.ok && res.status === 200) {
          return res.json();
        }
      })
      .then((data) => {
        setDeleteAlert(true);
      })
      .catch((err) => console.log(err));
  }
  function DeleteRq(request) {
    fetch("http://localhost:3000/cargorequest/".concat(request.request_id), {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id_cargo_requests: request.request_id,
        cargo_id: request.cargoId,
        driver_id: request.driver_id,
        status: 2, //delete status
      }),
    })
      .then((res) => {
        if (res.ok && res.status === 200) {
          return res.json();
        }
      })
      .then((data) => {
        console.log("set delete alert true");
        setDeleteAlert(true);
      })
      .catch((err) => console.log(err));
  }









    useEffect(() => {
        fetch("http://localhost:3000/cargorequest/all")
          .then((res) => {
            if (res.ok && res.status === 200) {
              return res.json();
            }
          })
          .then((data) => {
            setRequest(data);
          })
          .catch((err) => console.log(err));
      }, [deleteAlert]);
      function Delete(id) {
        // DELETE request using fetch with error handling
        fetch('http://localhost:3000/cargorequest/'.concat(id), { method: 'DELETE' })
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
  return (
    <div>
      {request === false
        ? null
        : request.map((request, index) =>
        <div key={index} className="parent-box">
        <div className="box-1">
          <div className="container">
            <h2>{request.request_id}-ŞOFÖR VE ARACININ BİLGİLERİ</h2>
            <ul className="responsive-table">
              <li className="table-header">
                <div className="col col-1">İsim</div>
                <div className="col col-2">Soyisim</div>
                <div className="col col-3">Telefon Numarası</div>
              </li>
              <li className="table-row">
                <div className="col col-1" data-label="name">
                  {request.name}
                </div>
                <div className="col col-2" data-label="surname">
                  {request.surname}
                </div>
                <div className="col col-3" data-label="phoneNumber">
                  {request.phoneNumber}
                </div>
              </li>
              <li className="table-header">
                <div className="col col-1">Puan</div>
                <div className="col col-2">Sürücü Lisans Numarası</div>
                <div className="col col-3">E-mail</div>
              </li>
              <li className="table-row">
                <div className="col col-1" data-label="point">
                  {request.point}
                </div>
                <div
                  className="col col-2"
                  data-label="driverLicenceNumber"
                >
                  {request.driverLicenceNumber}
                </div>
                <div className="col col-3" data-label="email">
                  {request.email}
                </div>
              </li>
              <li className="table-header">
                <div className="col col-1">Çekici Plakası</div>
                <div className="col col-2">Çekici Şase Numarası</div>
                <div className="col col-3">Çekici Marka</div>
              </li>
              <li className="table-row">
                <div className="col col-1" data-label="plate">
                  {request.plate}
                </div>
                <div className="col col-2" data-label="chassisNumber">
                  {request.chassisNumber}
                </div>
                <div className="col col-3" data-label="model">
                  {request.model}
                </div>
              </li>
              <li className="table-header">
                <div className="col col-1">Çekici Model</div>
                <div className="col col-2">Dorse Marka</div>
                <div className="col col-3">Dorse Tipi</div>
              </li>
              <li className="table-row">
                <div className="col col-1" data-label="brand">
                  {request.brand}
                </div>
                <div className="col col-2" data-label="trailerModel">
                  {request.trailer_model}
                </div>
                <div className="col col-3" data-label="trailerType">
                  {request.trailer_type}
                </div>
              </li>
              <li className="table-header">
                <div className="col col-1">Dorse Genişliği</div>
                <div className="col col-2">Dorse Uzunluğu</div>
                <div className="col col-3">Dorse Kapasitesi</div>
              </li>
              <li className="table-row">
                <div className="col col-1" data-label="trailerWidth">
                  {request.trailer_width}
                </div>
                <div className="col col-2" data-label="trailerLength">
                  {request.trailer_length}
                </div>
                <div
                  className="col col-3"
                  data-label="trailer_capacity"
                >
                  {request.trailer_capacity}
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="box-image">
          <img
            alt="Right Arrow"
            src={rightArrow}
            style={{
              width: "70%",
              display: "block",
            }}
          />
        </div>

        {request.status === 0 ? <>
          <button
          className="request-btn1 "
          style={{ marginTop: "16%" }}
          onClick={() => {
            ConfirmRq(request)
          }}
        >
          Onayla
        </button>
        <button
          className="request-btn1 request-color2"
          style={{ marginTop: "24.5%" }}
          onClick={() => {
            DeleteRq(request)
          }}
        >
          SİL
        </button>
        </> : request.status === 1 ? <>
        <button
          className="request-btn1 request-color2"
          style={{ marginTop: "24.5%" }}
          onClick={() => {
            DeleteRq(request)
          }}
        >
          SİL
        </button> </> : request.status ===2 ? <>
        <button
          className="request-btn1 "
          style={{ marginTop: "16%" }}
          onClick={() => {
            ConfirmRq(request)
          }}
        >
          Onayla
        </button> </> : null}
        
        

        <div className="box-2">
          <div className="container">
            <h2>{request.request_id}-KARGO BİLGİLERİ</h2>
            <ul className="responsive-table">
              <li className="table-header">
                <div className="col col-1">No</div>
                <div className="col col-2">Yükleme Noktası</div>
                <div className="col col-3">İndirme Noktası</div>
              </li>
              <li className="table-row">
                <div className="col col-1" data-label="cargoId">
                  {request.cargoId}
                </div>
                <div className="col col-2" data-label="startCity">
                  {request.startCity}
                </div>
                <div className="col col-3" data-label="endCity">
                  {request.endCity}
                </div>
              </li>
              <li className="table-header">
                <div className="col col-1">Yükleme Tarihi</div>
                <div className="col col-2">İndirme Tarihi</div>
                <div className="col col-3">Fiyat</div>
              </li>
              <li className="table-row">
                <div className="col col-1" data-label="startDate">
                  {request.startDate}
                </div>
                <div className="col col-2" data-label="endDate">
                  {request.endDate}
                </div>
                <div className="col col-3" data-label="price">
                  {request.price}
                </div>
              </li>
              <li className="table-header">
                <div className="col col-1">Mesafe</div>
                <div className="col col-2">Araç Tipi</div>
                <div className="col col-3">Dorse Tipi</div>
              </li>
              <li className="table-row">
                <div className="col col-1" data-label="distance">
                  {request.distance}
                </div>
                <div className="col col-2" data-label="vehicleType">
                  {request.vehicleType}
                </div>
                <div className="col col-3" data-label="trailerType">
                  {request.trailerType}
                </div>
              </li>
              <li className="table-header">
                <div className="col col-1">En</div>
                <div className="col col-2">Boy</div>
                <div className="col col-3">Yükseklik</div>
              </li>
              <li className="table-row">
                <div className="col col-1" data-label="width">
                  {request.width}
                </div>
                <div className="col col-2" data-label="lenght">
                  {request.lenght}
                </div>
                <div className="col col-3" data-label="height">
                  {request.height}
                </div>
              </li>
              <li className="table-header">
                <div className="col col-1">Kargo Tipi</div>
                <div className="col col-2">Ödeme Tipi</div>
              </li>
              <li className="table-row">
                <div className="col col-1" data-label="cargoType">
                  {request.cargoType}
                </div>
                <div className="col col-2" data-label="paymentType">
                  {request.paymentType}
                </div>
              </li>
            </ul>
          </div>
        </div>
        <button className="ap-delete-button" onClick={()=>{Delete(request.request_id)}}>Delete Event</button>

                <hr style={{border: "5px solid blue",
  borderRadius: "5px"}}></hr>

              </div>
          )}
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
          İstek Başarılı!
        </div>
      ) : null}
    </div>
  );
}
