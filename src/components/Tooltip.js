import React from "react";

export default function Tooltip(props) {
  let {
    position = "right",
    message = "Thanks for hovering! I'm a tooltip."
  } = props;

  return (
    <div className={`hover-container container-${position}`}>
      <div className={`icon ${position}`}></div>
      <div className="tool-tip">{message}</div>
    </div>
  );
}
