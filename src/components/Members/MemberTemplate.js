import React from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin
} from "react-icons/fa";
import "./MemberTemplate.css";
import Flip from "react-reveal/Flip";

const MemberTemplate = ({ Photo, Name, Position, FB, INSTA, Linked }) => {
  return (
    <Flip left>
      <div className="col">
        <div className="card h-100 shadow-sm">
          <div className="text-center">
            <div className="img-hover-zoom img-hover-zoom--colorize">
              <img className="shadow" src={Photo} alt={Photo} />
            </div>
          </div>

          <div className="card-body">
            <div className="clearfix mb-3"></div>

            <div className="my-2 text-center">
              <h1>{Name}</h1>
            </div>
            <div className="mb-3">
              <h2 className="text-uppercase text-center role">{Position}</h2>
            </div>
            <div className="box">
              <div>
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <FaFacebookSquare className="fab" />
                  </li>
                  <li className="list-inline-item">
                    <FaInstagramSquare className="fab" />
                  </li>
                  <li className="list-inline-item">
                    <FaLinkedin className="fab" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Flip>
  );
};

export default MemberTemplate;
