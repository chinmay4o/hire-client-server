import React from 'react'
import search from "../../images/airtel-unlimited-talk.webp"

const Search = () => {
    return (
        <div className="search-container">
            <div className="search-box1">
                <h3>Search Unlimited</h3>

                <button className="search-btn">View Plans </button>
            </div>
            <div className="search-box2">
                <img src={search} alt="" />
            </div>
        </div>
    )
}

export default Search
