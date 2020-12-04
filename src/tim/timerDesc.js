import React, { useState } from "react";
import styles from "./timer.css";
import img from "./../imgs/clock.png";

export default function Timer() {
  const [count, setCount] = useState(0);
  const handleSubmit = () => {
    return console.log("submit");
  };

  return (
    <>
      <div
        style={{
          padding: "0",
          width: "200px",
          height: "200px",
          marginLeft: "40%",
          marginTop: "0",

          borderRadius: " 25px"
        }}
      >
        <h1 style={{ marginBottom: "0", marginLeft: "25%", fontSize: "30px" }}>
          {" "}
          Desctop
        </h1>
        <div
          style={{
            padding: "5px",
            width: "200px",
            height: "200px",
            marginLeft: "0",
            marginTop: "0",
            backgroundColor: " gray",
            borderRadius: " 25px"
          }}
        >
          <img
            src={img}
            style={{
              width: "180px",
              height: "180px",
              borderRadius: "25px",
              marginLeft: "10px",
              marginTop: " 5px"
            }}
            alt="img"
          />
        </div>
        <h1 style={{ marginTop: "5px", marginLeft: "25%", fontSize: "30px" }}>
          {" "}
          00:00:00
        </h1>
      </div>
    </>
  );
}
