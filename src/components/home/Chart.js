import React, { useState } from "react";
import search from "../../images/airtel-unlimited-talk.webp";
import InnerChart from "./InnerChart";
import InnerChart1 from "./InnerChart1";
import InnerChart2 from "./InnerChart2";

const Chart = () => {
  const [value, setValue] = useState("");
  const [text, setText] = useState("");

  const submitHandler = (e) => {
    setValue(text);
    console.log(value);
  };

  const changeHandler = (e) => {
    document.getElementById("a").style.background = "white";
    document.getElementById("a").style.color = "black";
    document.getElementById("b").style.background = "white";
    document.getElementById("b").style.color = "black";
    document.getElementById("c").style.background = "#fff";
    document.getElementById("c").style.color = "#000";  
    e.target.style.background = "#ff4d00";
    e.target.style.color = "#fff";
    setText(e.target.innerText);
  };

  return (
    <div className="chart-container">
      <div className="box1">
        <h3>Compare our trending plans </h3>

        <p onClick={(e) => changeHandler(e)} id="a">
          Download a video 300MB
        </p>
        <p onClick={(e) => changeHandler(e)} id="b">
          Download HD video 2GB
        </p>
        <p onClick={(e) => changeHandler(e)} id="c">
          Download 4k movie 5GB
        </p>
        <button className="chart-btn" onClick={submitHandler}>
          Compare
        </button>
        <div className="ans">
          **select anyone from above and click on compare
        </div>
      </div>

      <div className="box2">
        {value === "Download HD video 2GB" ? (
          <InnerChart1 />
        ) : value === "Download 4k movie 5GB" ? (
          <InnerChart2 />
        ) : (
          <InnerChart />
        )}
      </div>
    </div>
  );
};

export default Chart;

// <span className="dot1"></span>
// <span className="dot2"></span>
// <span className="dot3"></span>
// <span className="linex"></span>
// <span className="linex1"></span>
// <span className="linex2"></span>
// <span className="linex3"></span>
// <span className="liney"></span>
