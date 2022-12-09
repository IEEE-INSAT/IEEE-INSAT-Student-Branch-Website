import React from "react";
import "../../assets/styles/components/hexGallery.css";

export default function HexGallery() {
  return (
    <div className="hexagon-gallery">
      <div className="hexagon">
        <div className="hex">
          <img
            alt=""
            src={require("../../assets/images/activities/ss/1.jpg")}
          ></img>
        </div>
        <div className="hex">
          <img
            alt=""
            src={require("../../assets/images/activities/ss/1.jpg")}
          ></img>
        </div>
      </div>
      <div className="hexagon">
        <div className="hex">
          <img
            alt=""
            src={require("../../assets/images/activities/ss/1.jpg")}
          ></img>
        </div>
        <div className="hex">
          <img
            alt=""
            src={require("../../assets/images/activities/ss/1.jpg")}
          ></img>
        </div>
        <div className="hex">
          <img
            alt=""
            src={require("../../assets/images/activities/ss/1.jpg")}
          ></img>
        </div>
      </div>
      <div className="hexagon">
        <div className="hex">
          <img
            alt=""
            src={require("../../assets/images/activities/ss/1.jpg")}
          ></img>
        </div>
        <div className="hex">
          <img
            alt=""
            src={require("../../assets/images/activities/ss/1.jpg")}
          ></img>
        </div>
      </div>
    </div>
  );
}
