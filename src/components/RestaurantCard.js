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
      <div
        data-testid="resCard"
        className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200"
      >
        <img
          className="rounded-lg h-auto"
          src={CLOUD_IMG + cloudinaryImageId}
        />
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <h5>{cuisines.join(", ")}</h5>
        <h5>{areaName}</h5>
        <p>{avgRatingString}/5</p>
        <h4>{sla?.lastMileTravelString ?? "2.0 km"}</h4>
        <h4>{costForTwo ?? "₹200 for two"}</h4>
      </div>
    </>
  );
}

//// hoc for restaurant card with promoted label

export const promotedRestaurant = (RestaurantCard) => {
  return (props) => {
    return (
      <>
        <label
          className="absoulte bg-black text-white p-2 m-2 rounded-lg"
          htmlFor=""
        >
          Promoted
        </label>
        <RestaurantCard {...props} />
      </>
    );
  };
};

export default RestaurantCard;
