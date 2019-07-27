import React from "react";

// required props: text, onClick
// Optional props: className, icon

const Button = props => {
  if (props.className && props.icon) {
    return (
      <button className={props.className} onClick={props.handleClick}>
        <img className="i-btn-icon" src={props.icon} alt={props.text} />
        {props.text}
      </button>
    );
  }
  if (props.className) {
    return (
      <button className={props.className} onClick={props.handleClick}>
        {props.text}
      </button>
    );
  }
  if (props.icon) {
    return (
      <button className="i-btn" onClick={props.handleClick}>
        <img className="i-btn-icon" src={props.icon} alt={props.text} />
        {props.text}
      </button>
    );
  }
  return (
    <button className="i-btn" onClick={props.handleClick}>
      {props.text}
    </button>
  );
};

export default Button;
