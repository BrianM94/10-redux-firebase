import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { register } from "../actions/auth";

const RegisterScreen = () => {
  const dispatch = useDispatch();

  const [data, setData] = useState({
    email: "",
    password: "",
    password2: "",
    username: "",
  });

  const { email, username, password, password2 } = data;

  const handleChange = (e) => {
    const value = e.target.value;

    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (email.trim() === "" || !email.trim().includes("@")) {
      return;
    }

    if (username.trim().length < 3) {
      return;
    }

    if (password.trim().length < 6) {
      return;
    } else if (password.trim() !== password2.trim()) {
      return;
    }

    dispatch(register(email, password, username));
  };

  return (
    <div className="container animate__animated animate__zoomInUp">
      <h3>Registrarse</h3>
      <hr />

      <div className="row container">
        <form onSubmit={handleRegister} className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <i className="material-icons prefix">email</i>
              <input
                onChange={handleChange}
                value={email}
                id="icon_prefix1"
                className="materialize-textarea"
                type="email"
                name="email"
              ></input>
              <label htmlFor="icon_prefix1">Email</label>
            </div>

            <div className="input-field col s12">
              <i className="material-icons prefix">account_circle</i>
              <input
                onChange={handleChange}
                value={username}
                id="icon_prefix3"
                className="materialize-textarea"
                type="text"
                name="username"
              ></input>
              <label htmlFor="icon_prefix3">Username</label>
            </div>

            <div className="input-field col s12">
              <i className="material-icons prefix">vpn_key</i>
              <input
                onChange={handleChange}
                value={password}
                id="icon_prefix2"
                className="materialize-textarea"
                type="password"
                name="password"
              ></input>
              <label htmlFor="icon_prefix2">Password</label>
            </div>

            <div className="input-field col s12">
              <i className="material-icons prefix">vpn_key</i>
              <input
                onChange={handleChange}
                value={password2}
                id="icon_prefix4"
                className="materialize-textarea"
                type="password"
                name="password2"
              ></input>
              <label htmlFor="icon_prefix4">Confirm Password</label>
            </div>
          </div>

          <button
            className="btn waves-effect waves-light"
            type="submit"
            name="action"
          >
            Registrarse
            <i className="material-icons right">send</i>
          </button>

          <hr />
          <Link to="/auth/login">Iniciar sesión con una cuenta</Link>
        </form>
      </div>
    </div>
  );
};

export default RegisterScreen;
