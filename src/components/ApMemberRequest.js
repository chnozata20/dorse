import React, { useEffect, useRef, useState } from "react";
import "../styles/ApDriver.css";

export default function ApMemberRequest() {
  const [employer, setEmployer] = useState(false);
  const [deleteAlert, setDeleteAlert] = useState(false);

    useEffect(() => {
        fetch("http://localhost:3000/memberrequest/all")
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
        fetch('http://localhost:3000/memberrequest/'.concat(id), { method: 'DELETE' })
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
                        <div className="ap-ol ap-col-1">İsim</div>
                        <div className="ap-col ap-col-2">Soyisim</div>
                      </li>
                      <li className="ap-table-row">
                        <div className="ap-col ap-col-1" data-label="name">
                          {driver.name}
                        </div>
                        <div className="ap-col ap-col-2" data-label="surname">
                          {driver.surname}
                        </div>
                      </li>
                      <li className="ap-table-header">
                        <div className="ap-ol ap-col-1">Telefon Numarası</div>
                        <div className="ap-col ap-col-2">Email</div>
                      </li>
                      <li className="ap-table-row">
                        <div className="ap-col ap-col-1" data-label="phone_number">
                          {driver.phone_number}
                        </div>
                        <div className="ap-col ap-col-2" data-label="email">
                          {driver.email}
                        </div>
                      </li>                     
                      
                    </ul>
                  </div>
                </div>
                <button className="ap-delete-button" onClick={()=>{Delete(driver.idmember_request_id)}}>Delete Event</button>

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
