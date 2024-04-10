import React from "react";
import { CLOUD_IMG } from "./utils/Constants";

function RestaurantCard({
  cloudinaryImageId,
  name,
  cuisines,
  areaName,
  sla,
  costForTwo,
  avgRatingString,
}) {
  return (
    <>
      <div className="restaurant-card">
        {/* <img src={CLOUD_IMG + cloudinaryImageId} /> */}
        <h3>{name}</h3>
        <h5>{cuisines.join(", ")}</h5>
        <h5>{areaName}</h5>
        <p>{avgRatingString}/5</p>
        <h4>{sla?.lastMileTravelString ?? "2.0 km"}</h4>
        <h4>{costForTwo ?? "₹200 for two"}</h4>
      </div>
    </>
  );
}

export default RestaurantCard;
