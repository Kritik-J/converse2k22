import { Component } from "react";
import '../UI/homepage.css';

const HomePage =() =>{

    return(

        <div className="homepage">
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
        </div>
    )
}
export default HomePage;

