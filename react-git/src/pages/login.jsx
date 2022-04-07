import React from "react";
import { useCookies } from "react-cookie";
import axios from "axios";

const Login = (props) => {
  const [cookies, setCookie] = useCookies(["token"]);

  const onsubmit = (e) => {
    e.preventDefault();
    const username = e.target[0].value;
    const password = e.target[1].value;

    axios
      .get(
        `https://www.call2all.co.il/ym/api/Login?username=${username}&password=${password}`
      )
      .then((res) => {
        if (res.data.responseStatus === "OK") {
          setCookie("token", res.data.token, { path: "/" });
        } else {
          alert(res.data.masseges);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>"ניהול מערכת טלפונים מבית "ימות המשיח</h1>
      <h2>התחברות למערכת</h2>
      <form onSubmit={onsubmit}>
        <div className="form-group">
          <label htmlFor="didnumber">מספר מערכת</label>
          <input
            type="number"
            className="form-control"
            id="didnumber"
            placeholder="מספר מערכת"
          />
        </div>
        <div className="form-group">
          <label htmlFor="Password">סיסמת ניהול</label>
          <input
            type="password"
            className="form-control"
            id="Password"
            placeholder="סיסמת ניהול"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          התחבר
        </button>
      </form>
    </div>
  );
};

Login.propTypes = {};

export default Login;
