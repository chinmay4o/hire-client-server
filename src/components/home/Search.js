import React from "react";
import search from "../../images/airtel-unlimited-talk.webp";
import boy from "../../img2/boy 1.png";
import { useHistory } from "react-router-dom";

const Search = () => {
  const history = useHistory();

  return (
    <div className="search-container">
      <div className="search-box1">
        <h3>Search Unlimited </h3>

        <button className="search-btn" onClick={() => history.push("/plans")}>
          View Plans <i class="fa fa-long-arrow-right" aria-hidden="true"></i>{" "}
        </button>
      </div>
      <div className="search-box2">
        <img src={boy} alt="" />
      </div>
    </div>
  );
};

export default Search;
