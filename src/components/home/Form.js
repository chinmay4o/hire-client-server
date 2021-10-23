import React from "react";

const Form = () => {

  const submitHandler = (e) => {
    e.preventDefault();
  }
  
  return (
    <div className="form-container">
      <div className="circle">{/* grey */}</div>

      <h2>
        Recharge and pay bills{" "}
        <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
      </h2>

      <form className="form-box2">
        <input type="text" name="name" placeholder="Name" className="input1" />
        <input
          type="text"
          name="ph-number"
          placeholder="Number"
          className="input2"
        />

        <button onClick={submitHandler}>Recharge</button>
      </form>
    </div>
  );
};

export default Form;
