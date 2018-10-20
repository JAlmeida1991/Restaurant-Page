import React from "react";

import Tomato from "../video/MP4/Tomato.mp4";
import Tomato2 from "../video/OGV/Tomato.ogv";
import Tomato3 from "../video/WEBM/Tomato.webm";

const home = props => {
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          marginTop: "2rem",
          position: "relative",
          fontSize: "4rem",
          color: "#fff",
          zIndex: "1000"
        }}
      >
        John's One Stop Pizza Place
      </h1>
      <p
        style={{
          textAlign: "center",
          marginTop: " 1rem",
          position: "relative",
          fontSize: "2rem",
          color: "#fff",
          zIndex: "1000"
        }}
      >
        We use the freshest tomato sauce sauce to make our Pizza!
      </p>
      <video
        style={{
          position: "fixed",
          right: "0",
          bottom: "0",
          minWidth: "100%",
          minHeight: "100%"
        }}
        muted
        loop
        autoPlay
      >
        <source src={Tomato} type="video/mp4" />
        <source src={Tomato2} type="video/ogv" />
        <source src={Tomato3} type="video/webm" />
      </video>
    </div>
  );
};

export default home;
