import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";
import video from "./1.mp4";
export default class login extends Component {
  render() {
    return (
      <div className="bg">
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
                  <input id="username_signin" type="text" className="input" />
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
                  />
                </div>
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
                    defaultValue="Sign In"
                    value="CONFIRM"
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
                  <input id="username_signup" type="text" className="input" />
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
                  />
                </div>
                <div className="group">
                  <label htmlFor="email_signup" className="label">
                    Email Address
                  </label>
                  <input id="email_signup" type="text" className="input" />
                </div>
                <div className="group">
                  <input
                    id="confirm_signup"
                    type="submit"
                    className="button"
                    defaultValue="Sign Up"
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
}
