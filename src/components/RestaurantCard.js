import React from "react";
import { CLOUD_IMG } from "./utils/Constants";

function RestaurantCard({ resData }) {
  return (
    <>
      <div className="restaurant-card">
        {/* <img src={CLOUD_IMG + resData?.cloudinaryImageId} className="resto-logo" alt="" /> */}
        <h3>{resData?.name}</h3>
        <h4>{resData?.locality}</h4>
        <p>{resData?.avgRating}/5</p>
        <p>{resData?.sla.deliveryTime}min</p>
        <p>{resData?.costForTwo}</p>
      </div>
    </>
  );
}

export default RestaurantCard;
