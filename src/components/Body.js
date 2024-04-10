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

      async function checkRestaurantData(resData) {
        for (let i = 0; i < resData.data.cards.length; i++) {
          const checkData =
            resData.data.cards[i].card?.card?.gridElements?.infoWithStyle
              ?.restaurants;
          if (checkData !== undefined) {
            return checkData;
          }
        }
      }
      const resultData = await checkRestaurantData(resData);
      setRestaurants(resultData);
      setSearch("");
    } catch (error) {
      console.error("Error fetching restaurant data:", error);
    }
  };

  const handleFilterClick = () => {
    const filteredData = restaurant.filter((res) => res?.info?.avgRating > 4);
    setRestaurants(filteredData);
  };
  const filteredRestaurant = () => {
    if (search === "") {
      fetchRestaurantData();
      return;
    }
    const searchFilter = restaurant.filter((resSearch) =>
      resSearch.info.name.toLowerCase().includes(search.toLowerCase())
    );
    console.log(searchFilter, "search");
    setRestaurants(searchFilter);
  };
  
  return restaurant?.info?.length === 0 ? (
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
        {restaurant.map((restaurants) => {
            return (
              <RestaurantCard key={restaurants?.info?.id} {...restaurants?.info} />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Body;
