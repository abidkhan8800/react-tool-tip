import React, { useState } from "react";
import Tooltip from "./Tooltip";
function ToolTipComponent(props) {
  const [showToolTip, setShowToolTip] = useState(false);
  return (
    <div className="center main-container">
      <div
        className="center hover-element"
        onMouseEnter={() => {
          setShowToolTip((prev) => !prev);
        }}
        onMouseLeave={() => {
          setShowToolTip((prev) => !prev);
        }}
      >
        <p> Hover over me! </p>
        {showToolTip && <Tooltip position="right" />}
      </div>
    </div>
  );
}

export default ToolTipComponent;
