import React from 'react'
import map from "../../images/home_map.png"

const Map = () => {
    return (
        <div className="map-container"> 
            <h1>Our Presence</h1>

            <div className="map">
                <img src={map} alt="map" />
            </div>
        </div>
    )
}

export default Map
