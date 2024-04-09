import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { API } from "./utils/Constants";
import Shimmer from "./Shimmer";

function Body() {
  const [ratingFilter, setRatingFilter] = useState([]);

  useEffect(() => {
    fetchRestaurantData();
  }, []);
  const fetchRestaurantData = async () => {
    try {
      const data = await fetch(API);
      const resData = await data.json();

      // Check if resData exists and contains valid data
      if (resData && resData.data && resData.data.cards) {
        const checkData = resData.data.cards.flatMap((card) =>
          card?.card?.card?.gridElements?.infoWithStyle?.restaurants?.map(
            (restaurant) => restaurant.info
          )
        );

        // Check if checkData is not empty
        if (checkData.length > 0) {
          setRatingFilter(checkData);
        } else {
          setRatingFilter([]); // Set an empty array if checkData is empty
        }
      } else {
        setRatingFilter([]); // Set an empty array if resData is undefined or does not contain valid data
      }
    } catch (error) {
      console.error("Error fetching restaurant data:", error);
    }
  };

  const handleFilterClick = () => {
    const filteredData = restaurantList.filter(
      (res) => res.info && res.info.avgRating > 4
    );
    // console.log(restaurantList, 'rating');
    setRatingFilter(filteredData);
  };
  return ratingFilter.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="body">
        <div className="filter">
          <button className="filter-btn" onClick={handleFilterClick}>
            Top Rated Restaurant
          </button>
        </div>
        <div className="resto-container">
          {ratingFilter.map((restaurantData) => {
            // console.log(restaurantData, 'resdarttttaa')
            return (
              // Add return statement here
              <RestaurantCard
                resData={restaurantData}
                key={restaurantData?.id}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Body;
