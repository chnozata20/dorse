import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Login.css";
import { useNavigate,} from "react-router-dom";
import EmployerHome from "./EmployerHome";
export default function Login() {
  const [signInUsername, setSignInUsername] = useState("");
  const [signInPassword, setSignInPassword] = useState("");
  const [signUpName, setSignUpName] = useState(null);
  const [signUpSurname, setSignUpSurname] = useState(null);
  const [signUpPhoneNunmber, setSignUpPhoneNumber] = useState(null);
  const [signUpEmail, setSignUpEmail] = useState(null);
  const [user, setUser] = useState("");
  const navigate = useNavigate();
  const [alert, setAlert] = useState("");
  const [alertSignUp, setAlertSignUp] = useState("");
  const [memberRequestAlert, setMemberRequestAlert] = useState(false);

  function SignInConfirm() {
    fetch("http://localhost:3000/employer/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: signInUsername , password: signInPassword}),
    })
    .then((res) => {
      if (res.ok && res.status === 200) {
        return res.json();
      }
    })
    .then((data) => {
      if(data.length!==0){
        setUser(data);
        navigate('/employerhome', { state: {data}})
      }
    })
    .catch((err) => console.log(err));
    fetch("http://localhost:3000/driver/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: signInUsername , password: signInPassword}),
    })
    .then((res) => {
      if (res.ok && res.status === 200) {
        return res.json();
      }
    })
    .then((data) => {
      if(data.length!==0){
        setUser(data);
        navigate('/selectcargo', { state: {data}})
      }
      else{
        setAlert("BİLGİLERİNİZİ KONTROL EDİP TEKRAR DENEYİNİZ !!!")
      }
    })
    .catch((err) => console.log(err));
  }
  function MemberRequest(){
    fetch("http://localhost:3000/memberrequest/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: signUpName,
        surname: signUpSurname,
        phone_number: signUpPhoneNunmber,
        email: signUpEmail,
      }),
    })
      .then((res) => {
        if (res.ok && res.status === 200) {
          setMemberRequestAlert(true);
          return res.json();
        }
      })
      .then((data) => {
        setAlertSignUp("BİLGİLERİNİZİ KONTROL EDİP TEKRAR DENEYİNİZ !!!")
      })
      .catch((err) => console.log(err));
  }
  return (
    <div className="bg">
      {console.log("start")}
      {/* <video autoPlay muted loop id="myVideo">
          <source src={video} type="video/mp4" />
        </video> */}
      <div className="login-wrap">
        <div className="login-html">
          <input
            id="tab-1"
            type="radio"
            name="tab"
            className="sign-in"
            defaultChecked
          />
          <label htmlFor="tab-1" className="tab">
            GİRİŞ
          </label>
          <input id="tab-2" type="radio" name="tab" className="sign-up" />
          <label htmlFor="tab-2" className="tab" >
            Üyelik Formu
          </label>
          <div className="login-form">
            <div className="sign-in-htm">
              <div className="group">
                <label htmlFor="username_signin" className="label">
                  Kullanıcı Adı
                </label>
                <input
                  id="username_signin"
                  type="text"
                  className="input"
                  onChange={(event) => setSignInUsername(event.target.value)}
                />
              </div>
              <div className="group">
                <label htmlFor="password_signin" className="label">
                  Şifre
                </label>
                <input
                  id="password_signin"
                  type="password"
                  className="input"
                  data-type="password"
                  onChange={(event) => setSignInPassword(event.target.value)}
                />
              </div>
              <label className="check" style={{color: "red", textAlign:"center"}}>
                   {alert}
                </label>
              <div className="group">
                <input
                  id="check"
                  type="checkbox"
                  className="check"
                  defaultChecked
                />
                
                <label htmlFor="check">
                  <span className="icon" /> Oturumumu Açık Tut
                </label>
              </div>
              <div className="group">
                <input
                  id="confirm_signin"
                  type="submit"
                  className="button"
                  value="Giriş"
                  onClick={() => {
                    SignInConfirm();
                  }}
                />
              </div>
              <div className="hr" />
              <div className="foot-lnk">
                <a href="#forgot">Forgot Password?</a>
              </div>
            </div>
            <div className="sign-up-htm">
              <div className="group">
                <label htmlFor="name" className="label">
                  İsim
                </label>
                <input
                  id="name_input"
                  type="text"
                  className="input"
                  onChange={(event) => setSignUpName(event.target.value)}
                />
              </div>
              <div className="group">
                <label htmlFor="surname" className="label">
                  Soyisim
                </label>
                <input
                  id="surname_input"
                  type="text"
                  className="input"
                  onChange={(event) => setSignUpSurname(event.target.value)}
                />
              </div>
              <div className="group">
                <label htmlFor="phone_number" className="label">
                  Telefon Numarası
                </label>
                <input
                  id="phone_number_input"
                  type="text"
                  className="input"
                  onChange={(event) =>
                    setSignUpPhoneNumber(event.target.value)
                  }
                />
              </div>
              <div className="group">
                <label htmlFor="email_signup" className="label">
                  Email Adresi
                </label>
                <input
                  id="email_input"
                  type="text"
                  className="input"
                  onChange={(event) => setSignUpEmail(event.target.value)}
                />
              </div>
              <label className="check" style={{color: "red", textAlign:"center"}}>
                   {alertSignUp}
                </label>
              <div className="group">
                <input
                  id="confirm_signup"
                  type="submit"
                  className="button"
                  value="Gönder"
                  onClick={() => {
                    MemberRequest();
                  }}
                />
              </div>
              <label style = {{color:"white", textAlign:"center", marginTop:"0%",fontSize:"125%", fontWeight:"bolder", textDecoration:"underline", lineHeight:"150%"}}className="label">
                  FORMU DOLDURDDUKTAN SONRA SİZİNLE İLETİŞİME GEÇİLECEKTİR.
                </label>
                
            </div>
          </div>
        </div>
      </div>
      {memberRequestAlert === true ? (
        <div className="alertOk">
          <span
            className="closebtn"
            onClick={() => {
              setMemberRequestAlert(false);
            }}
          >
            ×
          </span>
          Üyelik isteğiniz alınmıştır. En kısa sürede sizinle iletişime geçeceğiz.
        </div>
      ) : null}
    </div>
  );
}
