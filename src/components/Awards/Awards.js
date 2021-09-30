import React from "react";
import AwardsData from "./AwardsData";
import "./AwardStyle.css";

const AwardsItem = ({ data }) => (
  <div className="timeline-item">
    <div className="timeline-item-content">
      <span className="tag" style={{ background: data.category.color }}>
        {data.category.tag}
      </span>
      <time>{data.date}</time>
      <p>{data.text}</p>
      {data.link && (
        <a href={data.link.url} target="_blank" rel="noopener noreferrer">
          {data.link.text}
        </a>
      )}
      <span className="circle" />
    </div>
  </div>
);

const Awards = () =>
  AwardsData.length > 0 && (
    <div id="awards" className="timeline-container">
      {AwardsData.map((data, idx) => (
        <AwardsItem data={data} key={idx} />
      ))}
    </div>
  );

export default Awards;
