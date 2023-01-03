import React, { useEffect, useRef, useState } from "react";
import "../styles/ApDriver.css";

export default function ApEmployer() {
  const [employer, setEmployer] = useState(false);
  const [deleteAlert, setDeleteAlert] = useState(false);

    useEffect(() => {
        fetch("http://localhost:3000/employer/all")
          .then((res) => {
            if (res.ok && res.status === 200) {
              return res.json();
            }
          })
          .then((data) => {
            setEmployer(data);
          })
          .catch((err) => console.log(err));
      }, [deleteAlert]);
      function Delete(id) {
        // DELETE request using fetch with error handling
        fetch('http://localhost:3000/employer/'.concat(id), { method: 'DELETE' })
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
      {employer === false
        ? null
        : employer.map((driver, index) =>
              <div key={index} className="ap-parent-box">
                <div className="ap-box-1">
                  <div className="ap-container">
                    <ul className="ap-responsive-table">
                    <li className="ap-table-header">
                        <div className="ap-ol ap-col-1">Kullanıcı Adı</div>
                        <div className="ap-col ap-col-2">Şifre</div>
                      </li>
                      <li className="ap-table-row">
                        <div className="ap-col ap-col-1" data-label="name">
                          {driver.username}
                        </div>
                        <div className="ap-col ap-col-2" data-label="surname">
                          {driver.password}
                        </div>
                      </li>
                      <li className="ap-table-header">
                        <div className="ap-ol ap-col-1">İsim</div>
                        <div className="ap-col ap-col-2">Soyisim</div>
                        <div className="ap-col ap-col-3">Telefon Numarası</div>
                      </li>
                      <li className="ap-table-row">
                        <div className="ap-col ap-col-1" data-label="name">
                          {driver.name}
                        </div>
                        <div className="ap-col ap-col-2" data-label="surname">
                          {driver.surname}
                        </div>
                        <div className="ap-col ap-col-3" data-label="phoneNumber">
                          {driver.phoneNumber}
                        </div>
                      </li>
                      <li className="ap-table-header">
                        <div className="ap-col ap-col-1">Puan</div>
                        <div className="ap-col ap-col-2">Şirket İsmi</div>
                        <div className="ap-col ap-col-3">E-mail</div>
                      </li>
                      <li className="ap-table-row">
                        <div className="ap-col ap-col-1" data-label="point">
                          {driver.point}
                        </div>
                        <div
                          className="ap-col ap-col-2"
                          data-label="driverLicenceNumber"
                        >
                          {driver.bussinesName}
                        </div>
                        <div className="ap-col ap-col-3" data-label="email">
                          {driver.email}
                        </div>
                      </li>
                      <li className="ap-table-header">
                        <div className="ap-col ap-col-1">Doğum Günü</div>
                      </li>
                      <li className="ap-table-row">
                        <div className="ap-col ap-col-1" data-label="plate">
                          {driver.birthdate}
                        </div>
                        
                      </li>
                      
                      
                    </ul>
                  </div>
                </div>
                <button className="ap-delete-button" onClick={()=>{Delete(driver.id)}}>Delete Event</button>

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
