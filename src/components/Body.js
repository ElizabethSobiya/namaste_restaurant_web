import React from "react";
import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "./utils/Constants";

function Body() {
  return (
    <>
      <div className="body">
        <div className="filter">
          <button className="filter-btn">Top Rated Restaurant</button>
        </div>
        <div className="resto-container">
          {restaurantList.map((restaurantData) => {
            return (  // Add return statement here
              <RestaurantCard
                resData={restaurantData}
                key={restaurantData.info.id}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Body;
