import React from "react";

const Home = props => (
  <React.Fragment>
    <div className="home">
      <div className=" pepperoni-1" />
      <div className=" pepperoni-2" />
      <div className=" pepperoni-3" />
      <div className=" pepperoni-4" />
      <div className=" pepperoni-5" />
      <div className=" pepperoni-6" />
      <div className=" pepperoni-7" />
      <div className=" pepperoni-8" />
      <div className=" pepperoni-9" />

      <div className=" pepperoni-10" />
      <div className=" pepperoni-11" />
      <div className=" pepperoni-12" />
      <div className=" pepperoni-13" />
      <div className=" pepperoni-14" />
      <div className=" pepperoni-15" />

      <h1 className="home-title">John's One Stop Pizza Place</h1>
      <p
        style={{
          textAlign: "center",
          marginTop: " 1rem",
          position: "relative",
          fontSize: "2rem",
          color: "#111"
        }}
      >
        We use the freshest ingredients to make our Pizza!
      </p>
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          hieght: "100%",
          opacity: ".8",
          overflow: "hidden",
          zIndex: "-1"
        }}
      />
    </div>
  </React.Fragment>
);

export default Home;
