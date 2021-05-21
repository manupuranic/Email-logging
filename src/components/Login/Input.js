import React from "react";
import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div
      className={`${classes.control} ${
        props.contentIsValid === false ? classes.invalid : ""
      }`}>
      <label htmlFor={props.type}>{props.name}</label>
      <input
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.Blur}
      />
    </div>
  );
};

export default Input;
