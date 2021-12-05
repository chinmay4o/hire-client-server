import React from "react";
import map from "../../images/map.svg";

const Map = () => {
  return (
    <div className="map-container">
      <h1>Our Presence</h1>
      <div className="map">
        <iframe
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          allowfullscreen
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBJYwR3_5u-w4IirV3oPGCvnjh9p7ezHmw
&q=Space+Needle,Seattle+WA"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;

<div className="map">
  <img src={map} alt="map" />
</div>;
