import React, { useState } from "react";
import  "./styles.css";

const MyBox = ({ topic, secondary, content, imgLink }) => {
  const [count, setCount] = useState(0);

  return (
    <div className="box-container">
      <div className="upper-container">
        <div className="text-contaner">
          <h1 className="">{topic}</h1>
          <h2 className="">{secondary}</h2>
          <p className="detail">
            {content}
          </p>
        </div>
        <div className="img-container">
          <img
            src={imgLink}
            style={{ maxWidth: 300 }}
          ></img>
        </div>
      </div>
      ``
      <div className="lower-container"></div>
    </div>
  );
};

export default MyBox;
