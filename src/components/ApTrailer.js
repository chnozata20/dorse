import React, { useEffect, useRef, useState } from "react";
import "../styles/ApDriver.css";

export default function ApTrailer() {
  const [driver, setDriver] = useState(false);
  const [deleteAlert, setDeleteAlert] = useState(false);
  

  useEffect(() => {
    fetch("http://localhost:3000/trailer/all")
      .then((res) => {
        if (res.ok && res.status === 200) {
          return res.json();
        }
      })
      .then((data) => {
        setDriver(data);
        console.log("worked")
      })
      .catch((err) => console.log(err));
  },[deleteAlert]);
  function Delete(id) {
     // DELETE request using fetch with error handling
     fetch('http://localhost:3000/trailer/'.concat(id), { method: 'DELETE' })
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
      {driver === false
        ? null
        : driver.map((driver, index) => (
            <div key={index} className="ap-parent-box">
              <div className="ap-box-1">
                <div className="ap-container">
                  <ul className="ap-responsive-table">
                    <li className="ap-table-header">
                      <div className="ap-col ap-col-1">Dorse Tipi</div>
                      <div className="ap-col ap-col-2">Dorse Marka</div>
                      <div className="ap-col ap-col-3">Dorse Kapasitesi</div>
                    </li>
                    <li className="ap-table-row">
                      <div
                        className="ap-col ap-col-1"
                        data-label="trailer_type"
                      >
                        {driver.type}
                      </div>
                      <div
                        className="ap-col ap-col-2"
                        data-label="trailerModel"
                      >
                        {driver.model}
                      </div>
                      <div
                        className="ap-col ap-col-3"
                        data-label="trailer_capacity"
                      >
                        {driver.capacity}
                      </div>
                    </li>
                    <li className="ap-table-header">
                      <div className="ap-col ap-col-1">Dorse Genişliği</div>
                      <div className="ap-col ap-col-2">Dorse Uzunluğu</div>
                    </li>
                    <li className="ap-able-row">
                      <div
                        className="ap-col ap-col-1"
                        data-label="trailerWidth"
                      >
                        {driver.width}
                      </div>
                      <div
                        className="ap-col ap-col-2"
                        data-label="trailerLength"
                      >
                        {driver.length}
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <button className="ap-delete-button" onClick={()=>{Delete(driver.id)}}>Delete Event</button>

              <hr
                style={{ border: "5px solid blue", borderRadius: "5px" }}
              ></hr>
            </div>
          ))}
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
