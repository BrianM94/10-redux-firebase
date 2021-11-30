import React, { useState } from "react";
import { useDispatch } from "react-redux";

import GoogleButton from "react-google-button";
import { Link } from "react-router-dom";

import { googleLogin, emailAndPasswordLogin } from "../actions/auth";

const LoginScreen = () => {
  const dispatch = useDispatch();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = data;

  const handleChange = (e) => {
    const value = e.target.value;

    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  const handleGoogleLogin = () => {
    dispatch(googleLogin());
  };

  const handleEmailLogin = (e) => {
    e.preventDefault();

    if (email.trim() === "" || !email.trim().includes("@")) {
      return;
    }

    if (password.trim().length < 6) {
      return;
    }

    dispatch(emailAndPasswordLogin(email, password));
  };

  return (
    <div className="container animate__animated animate__zoomInUp">
      <h3>Iniciar sesión</h3>
      <hr />

      <div className="row container">
        <form onSubmit={handleEmailLogin} className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <i className="material-icons prefix">email</i>
              <input
                onChange={handleChange}
                value={email}
                name="email"
                id="icon_prefix1"
                className="materialize-textarea"
                type="email"
              ></input>
              <label htmlFor="icon_prefix1">Email</label>
            </div>

            <div className="input-field col s12">
              <i className="material-icons prefix">vpn_key</i>
              <input
                onChange={handleChange}
                value={password}
                name="password"
                id="icon_prefix2"
                className="materialize-textarea"
                type="password"
              ></input>
              <label htmlFor="icon_prefix2">Password</label>
            </div>
          </div>

          <div className="row">
            <div className="col s6">
              <button
                className="btn waves-effect waves-light"
                type="submit"
                name="action"
              >
                Iniciar Sesión
                <i className="material-icons right">send</i>
              </button>
            </div>

            <div className="col s6">
              <Link className="" to="/auth/register">
                Registrarse en la plataforma
              </Link>
            </div>
          </div>
          <hr />

          <GoogleButton onClick={handleGoogleLogin} />
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
