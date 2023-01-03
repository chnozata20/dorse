import React, { useEffect, useRef, useState } from "react";
import "../styles/ApDriver.css";

export default function ApCargo() {
  const [cargo, setCargo] = useState(false);
  const [deleteAlert, setDeleteAlert] = useState(false);

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
      }, [deleteAlert]);
      function Delete(id) {
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
  return (
    <div>
      {cargo === false
        ? null
        : cargo.map((driver, index) =>
              <div key={index} className="ap-parent-box">
                <div className="ap-box-1">
                  <div className="ap-container">
                    <ul className="ap-responsive-table">
                    <li className="ap-table-header">
                        <div className="ap-ol ap-col-1">Başlangıç Tarihi</div>
                        <div className="ap-col ap-col-2">Bitiş Tarihi</div>
                        <div className="ap-col ap-col-3">Araç Tipi</div>
                      </li>
                      <li className="ap-table-row">
                        <div className="ap-col ap-col-1" data-label="startDate">
                          {driver.startDate}
                        </div>
                        <div className="ap-col ap-col-2" data-label="endDate">
                          {driver.endDate}
                        </div>
                        <div className="ap-col ap-col-3" data-label="vehicleType">
                          {driver.vehicleType}
                        </div>
                      </li>
                      <li className="ap-table-header">
                        <div className="ap-col ap-col-1">Dorse Tipi</div>
                        <div className="ap-col ap-col-2">Tonaj</div>
                        <div className="ap-col ap-col-3">Hacim</div>
                      </li>
                      <li className="ap-table-row">
                        <div className="ap-col ap-col-1" data-label="trailerType">
                          {driver.trailerType}
                        </div>
                        <div
                          className="ap-col ap-col-2"
                          data-label="tonnage"
                        >
                          {driver.tonnage}
                        </div>
                        <div className="ap-col ap-col-3" data-label="volume">
                          {driver.volume}
                        </div>
                      </li>
                      <li className="ap-table-header">
                        <div className="ap-col ap-col-1">Kargo Tipi</div>
                        <div className="ap-col ap-col-2">Ödeme Tipi</div>
                        <div className="ap-col ap-col-3">Fiyat</div>
                      </li>
                      <li className="ap-table-row">
                        <div className="ap-col ap-col-1" data-label="cargoType">
                          {driver.cargoType}
                        </div>
                        <div className="ap-col ap-col-2" data-label="paymentType">
                          {driver.paymentType}
                        </div>
                        <div className="ap-col ap-col-3" data-label="price">
                          {driver.price}
                        </div>
                      </li>
                      <li className="ap-table-header">
                        <div className="ap-col ap-col-1">Mesafe</div>
                        <div className="ap-col ap-col-2">Genişlik</div>
                        <div className="ap-col ap-col-3">Uzunluk</div>
                      </li>
                      <li className="ap-table-row">
                        <div className="ap-col ap-col-1" data-label="distance">
                          {driver.distance}
                        </div>
                        <div className="ap-col ap-col-2" data-label="width">
                          {driver.width}
                        </div>
                        <div className="ap-col ap-col-3" data-label="lenght">
                          {driver.lenght}
                        </div>
                      </li>
                      <li className="ap-table-header">
                        <div className="ap-col ap-col-1">Yükseklik</div>
                        <div className="ap-col ap-col-2">Başlangıç Şehri</div>
                        <div className="ap-col ap-col-3">Başlangıç İlçesi</div>
                      </li>
                      <li className="ap-able-row">
                        <div className="ap-col ap-col-1" data-label="height">
                          {driver.height}
                        </div>
                        <div className="ap-col ap-col-2" data-label="startCity">
                          {driver.startCity}
                        </div>
                        <div
                          className="ap-col ap-col-3"
                          data-label="startCountie"
                        >
                          {driver.startCountie}
                        </div>
                      </li>



                      <li className="ap-table-header">
                        <div className="ap-col ap-col-1">Başlangıç Mahallesi</div>
                        <div className="ap-col ap-col-2">Başlangıç Caddesi</div>
                        <div className="ap-col ap-col-3">Başlangıç No</div>
                      </li>
                      <li className="ap-able-row">
                        <div className="ap-col ap-col-1" data-label="startNeighbourhood">
                          {driver.startNeighbourhood}
                        </div>
                        <div className="ap-col ap-col-2" data-label="startStreet">
                          {driver.startStreet}
                        </div>
                        <div
                          className="ap-col ap-col-3"
                          data-label="startNo"
                        >
                          {driver.startNo}
                        </div>
                      </li><li className="ap-table-header">
                        <div className="ap-col ap-col-1">Bitiş Şehri</div>
                        <div className="ap-col ap-col-2">Bitiş İlçesi</div>
                        <div className="ap-col ap-col-3">Bitiş Mahallesi</div>
                      </li>
                      <li className="ap-able-row">
                        <div className="ap-col ap-col-1" data-label="endCity">
                          {driver.endCity}
                        </div>
                        <div className="ap-col ap-col-2" data-label="endCountie">
                          {driver.endCountie}
                        </div>
                        <div
                          className="ap-col ap-col-3"
                          data-label="endNeighbourhood"
                        >
                          {driver.endNeighbourhood}
                        </div>
                      </li><li className="ap-table-header">
                        <div className="ap-col ap-col-1">Bitiş Caddesi</div>
                        <div className="ap-col ap-col-2">Bitiş No</div>
                      </li>
                      <li className="ap-able-row">
                        <div className="ap-col ap-col-1" data-label="endStreet">
                          {driver.endStreet}
                        </div>
                        <div className="ap-col ap-col-2" data-label="endNo">
                          {driver.endNo}
                        </div>
                        
                      </li>
                    </ul>
                  </div>
                </div>
                <button className="ap-delete-button" onClick={()=>{Delete(driver.cargoId)}}>Delete Event</button>

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
          İstek Başarıyla Silindi!
        </div>
      ) : null}
    </div>
  );
}
