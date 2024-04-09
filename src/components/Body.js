import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { API } from "./utils/Constants";
import Shimmer from "./Shimmer";

function Body() {
  const [restaurant, setRestaurants] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchRestaurantData();
  }, []);
  const fetchRestaurantData = async () => {
    try {
      const data = await fetch(API);
      const resData = await data.json();

      async function checkRestaurantData(resData){
        for(let i=0; i < resData.data.cards.length; i++){
          const checkData = resData.data.cards[i].card?.card?.card?.card?.gridElements?.infoWithStyle?.restaurants
          if (checkData !== undefined) {
            return checkData;
          }
        }
      }
      const resultData = checkRestaurantData(resData);

      // if (resData && resData.data && resData.data.cards) {
      //   const checkData = resData.data.cards.flatMap((card) =>
      //     card?.card?.card?.gridElements?.infoWithStyle?.restaurants?.map(
      //       (restaurant) => restaurant.info
      //     )
      //   );

        if (resultData.length > 0) {
          setRestaurants(resultData);
        } else {
          setRestaurants([]);
        }
      
    } catch (error) {
      console.error("Error fetching restaurant data:", error);
    }
  };

  const handleFilterClick = () => {
    const filteredData = restaurant.filter((res) => res?.avgRating > 4);
    setRestaurants(filteredData);
  };
  const filteredRestaurant = () => {
    console.log(restaurant?.id, 'name');
    const searchFilter = restaurant.filter((resSearch)=> resSearch?.name.toLowerCase().includes(search))
    console.log(searchFilter, "search");
    setRestaurants(searchFilter);
  };
  return restaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="body">
        <div className="filter">
          <div className="search">
            <input
              type="text"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              className="search"
              value={search}
            />
            <button onClick={filteredRestaurant}>Search</button>
          </div>
          <button className="filter-btn" onClick={handleFilterClick}>
            Top Rated Restaurant
          </button>
        </div>
        <div className="resto-container">
          {restaurant.map((restaurantData) => {
            // console.log(restaurantData, 'resdarttttaa')
            return (
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
