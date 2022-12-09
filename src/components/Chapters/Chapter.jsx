import React from "react";
import "../../assets/styles/components/chapter.scss";
export default function Chapter(props) {
  const classname = "chapter-cell " + props.name;
  const fbLink = "//www.facebook.com/INSAT." + props.name;
  const webLink = "//" + props.name.toString().toLowerCase() + "-insat.ieee.tn";

  return (
    <div className={classname}>
      <img
        alt="1"
        src={require("../../assets/images/chapters/" +
          props.name +
          "-white.png")}
        className="cs"
      />
      <div className="social-media">
        <ul className="icon-list">
          <li>
            <a href={fbLink}>
              <i className="fab icofont-facebook"></i>
            </a>
          </li>
          <li>
            <a href={webLink}>
              <i className="fab icofont-web"></i>
            </a>
          </li>
          <li>
            <a href={props.instaLink}>
              <i className="fab icofont-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
