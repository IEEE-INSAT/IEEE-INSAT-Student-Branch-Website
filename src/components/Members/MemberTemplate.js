import React, { FC } from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin
} from "react-icons/fa";
import "./style.css";
import Slide from "react-reveal/Slide";

interface Props {
  Photo: string;
  Name: string;
  Position: string;
  FB: string;
  INSTA: string;
  Linked: string;
}
const MemberTemplate = ({ Photo, Name, Position, FB, INSTA, Linked }) => {
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
              <FaFacebookSquare className="fab fa-facebook" />
            </a>
            <a href={INSTA} target="_blank" rel="noreferrer">
              <FaInstagramSquare className="fab fa-instagram" />
            </a>
            <a href={Linked} target="_blank" rel="noreferrer">
              <FaLinkedin className="fab fa-linkedin-in" />
            </a>
          </div>
        </div>
      </li>
    </Slide>
  );
};

export default MemberTemplate;
