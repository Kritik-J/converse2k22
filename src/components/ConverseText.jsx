import React from "react";
import "../UI/converseText.css";

const ConverseText = () => {
  return (
    <div className="converse-text">
       <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="con_ani">
        {/* Symbol */}
        <symbol id="s-text">
          <text textAnchor="middle" x="50%" y="50%" dy=".35em">
            Converse
          </text>
        </symbol>
        {/* Duplicate symbols */}
        <use xlinkHref="#s-text" className="text" />
        <use xlinkHref="#s-text" className="text" />
        <use xlinkHref="#s-text" className="text" />
        <use xlinkHref="#s-text" className="text" />
        <use xlinkHref="#s-text" className="text" />
      </svg>

      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="con_ani_2">
        {/* Symbol */}
        <symbol id="sm-text">
          <text textAnchor="middle" x="50%" y="50%" dy=".35em">
            2k22
          </text>
        </symbol>
        {/* Duplicate symbols */}
        <use xlinkHref="#sm-text" className="text2" />
        <use xlinkHref="#sm-text" className="text2" />
        <use xlinkHref="#sm-text" className="text2" />
        <use xlinkHref="#sm-text" className="text2" />
        <use xlinkHref="#sm-text" className="text2" />
      </svg>
    </div>
  );
};

export default ConverseText;
