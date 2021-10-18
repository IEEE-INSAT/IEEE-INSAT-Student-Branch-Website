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
const MemberTemplate: FC<Props> = ({ Photo, Name, Position, FB, INSTA, Linked }) => {
  return (
    <Slide left>
    <li className= "member" >
    <div className="member-image" >
      <img src={ Photo } />
        < /div>
        < div className = "member-info" >
          <h3>{ Name } < /h3>
          < p > { Position } < /p>
          < div className = "social-link" >
            <FaFacebookSquare className="fab fa-facebook-f" href = { FB } />
              <FaInstagramSquare className="fab fa-twitter" href = { INSTA } />
                <FaLinkedin className="fab fa-linkedin-in" href = { Linked } />
                  </div>
                  < /div>
                  < /li>
                  </Slide>
  );
};

export default MemberTemplate;
