import React, { FC } from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaMailBulk
} from "react-icons/fa";
import "./style.css";
import Slide from "react-reveal/Slide";

const MemberTemplate = ({
  Photo,
  Name,
  Position,
  FB,
  INSTA,
  Linked,
  IEEEMail
}) => {
  return (
    <Slide left>
      <li className="member">
        <div className="member-image">
          <img src={Photo} />
        </div>
        <div className="member-info">
          <h3>{Name} </h3>
          <p> {Position} </p>
          <div className="social-link">
            <a href={FB} target="_blank" rel="noreferrer">
              <FaFacebookSquare className="fab" />
            </a>
            <a href={INSTA} target="_blank" rel="noreferrer">
              <FaInstagramSquare className="fab" />
            </a>
            <a href={Linked} target="_blank" rel="noreferrer">
              <FaLinkedin className="fab" />
            </a>
            <a href={IEEEMail} target="_blank" rel="noreferrer">
              <FaMailBulk className="fab" />
            </a>
          </div>
        </div>
      </li>
    </Slide>
  );
};

export default MemberTemplate;
