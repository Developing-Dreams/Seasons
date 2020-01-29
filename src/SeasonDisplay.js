import React from "react";
import "./SeasonDisplay.css";

const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth() + 1);
  const { text, iconName } = seasonConfig[season];

  return (
    <div className={`season-diplay ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
};

const seasonConfig = {
  summer: {
    text: "let's Hit the beach",
    iconName: "sun"
  },
  winter: {
    text: "Burr,Its chilly",
    iconName: "snowflake"
  }
};
const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    console.log(lat);
    return lat > 0 ? "winter" : "summer";
  } else {
    console.log(lat);
    return lat > 0 ? "summer" : "winter";
  }
};

export default SeasonDisplay;
