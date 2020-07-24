import React from 'react';
import './Switch.css';

const Switch = (props) => {

    const {form, handleChange} = props

  return (
    <>
      <input
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
        value={form.glutenFree}
        onChange={handleChange}
      />
      <label
        className="react-switch-label"
        htmlFor={`react-switch-new`}
      >
        <span className={`react-switch-button`} />
      </label>
    </>
  );
};

export default Switch;