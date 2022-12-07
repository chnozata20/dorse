import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Login.css";
import { useNavigate,} from "react-router-dom";
import EmployerHome from "./EmployerHome";
export default function Login() {
  const [signInUsername, setSignInUsername] = useState("");
  const [signInPassword, setSignInPassword] = useState("");
  const [signUpUsername, setSignUpUsername] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [signUpRepeatPassword, setSignUpRepeatPassword] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [user, setUser] = useState("");
  const navigate = useNavigate();
  const [alert, setAlert] = useState("");

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
      console.log(data.length)
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
        navigate('/selectcargo')
      }
      else{
        setAlert("CHECK YOUR INFORMATION !!!")
      }
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
            Sign In
          </label>
          <input id="tab-2" type="radio" name="tab" className="sign-up" />
          <label htmlFor="tab-2" className="tab">
            Sign Up
          </label>
          <div className="login-form">
            <div className="sign-in-htm">
              <div className="group">
                <label htmlFor="username_signin" className="label">
                  Username
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
                  Password
                </label>
                <input
                  id="password_signin"
                  type="password"
                  className="input"
                  data-type="password"
                  onChange={(event) => setSignInPassword(event.target.value)}
                />
              </div>
              <label className="check" style={{color: "red"}}>
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
                  <span className="icon" /> Keep me Signed in
                </label>
              </div>
              <div className="group">
                <input
                  id="confirm_signin"
                  type="submit"
                  className="button"
                  value="CONFIRM"
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
                <label htmlFor="username_signup" className="label">
                  Username
                </label>
                <input
                  id="username_signup"
                  type="text"
                  className="input"
                  onChange={(event) => setSignUpUsername(event.target.value)}
                />
              </div>
              <div className="group">
                <label htmlFor="password_signup" className="label">
                  Password
                </label>
                <input
                  id="password_signup"
                  type="password"
                  className="input"
                  data-type="password"
                  onChange={(event) => setSignUpPassword(event.target.value)}
                />
              </div>
              <div className="group">
                <label htmlFor="repeat_password_signup" className="label">
                  Repeat Password
                </label>
                <input
                  id="repeat_password_signup"
                  type="password"
                  className="input"
                  data-type="password"
                  onChange={(event) =>
                    setSignUpRepeatPassword(event.target.value)
                  }
                />
              </div>
              <div className="group">
                <label htmlFor="email_signup" className="label">
                  Email Address
                </label>
                <input
                  id="email_signup"
                  type="text"
                  className="input"
                  onChange={(event) => setSignUpEmail(event.target.value)}
                />
              </div>
              <div className="group">
                <input
                  id="confirm_signup"
                  type="submit"
                  className="button"
                  value="CONFIRM"
                />
              </div>
              <div className="hr" />
              <div className="foot-lnk">
                <label htmlFor="tab-1">Already Member?</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
