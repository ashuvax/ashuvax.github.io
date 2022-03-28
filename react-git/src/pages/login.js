import React from 'react'
import PropTypes from 'prop-types'
import { Alert } from 'bootstrap'

const login = props => {
    const onsubmit = (e) => {
        alert('Login Successful')
        console.log(e)
    }

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
}

login.propTypes = {

}

export default login