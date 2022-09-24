import React from "react";
import "../UI/converseText.css";

const ConverseText = () => {
  return (
    // <div>
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="con_ani">
      <symbol id="s-text">
        <text textAnchor="middle" x="50%" y="50%" dy=".35em">
          Converse
        </text>
      </symbol>

      <use xlinkHref="#s-text" className="text" />
      <use xlinkHref="#s-text" className="text" />
      <use xlinkHref="#s-text" className="text" />
      <use xlinkHref="#s-text" className="text" />
      <use xlinkHref="#s-text" className="text" />
    </svg>
    // </div>
  );
};

export default ConverseText;
