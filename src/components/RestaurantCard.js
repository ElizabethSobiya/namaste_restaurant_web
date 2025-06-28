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
  const isLoading = !name || !cloudinaryImageId;

  return isLoading ? (
    <div className="m-4 p-4 w-[250px] h-[330px] flex justify-center items-center bg-white dark:bg-gray-800 rounded-lg shadow">
      <div className="loader border-4 border-gray-300 border-t-[#FF5200] rounded-full w-10 h-10 animate-spin"></div>
    </div>
  ) : (
    <div
      data-testid="resCard"
      className="m-4 p-4 w-[250px] rounded-lg bg-white shadow-md hover:bg-yellow-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-black dark:text-white transition-colors duration-300"
    >
      <img
        className="rounded-lg h-40 w-full object-cover"
        src={CLOUD_IMG + cloudinaryImageId}
        alt={name}
      />
      <h3 className="font-bold py-2 text-lg truncate">{name}</h3>
      <h5 className="truncate">{cuisines.join(", ")}</h5>
      <h5>{areaName}</h5>
      <p>{avgRatingString}/5</p>
      <h4>{sla?.lastMileTravelString ?? "2.0 km"}</h4>
      <h4>{costForTwo ?? "₹200 for two"}</h4>
    </div>
  );
}

export const promotedRestaurant = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded-md z-10">
          Promoted
        </span>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
