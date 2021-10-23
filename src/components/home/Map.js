import React from 'react'
import map from "../../images/map.svg"

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
