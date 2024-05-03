import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { API } from "./utils/Constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineSatus from "./hooks/useOnlineStatus";

function Body() {
  const [restaurant, setRestaurants] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredRes, setFilteredRes] = useState([]);

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
      setFilteredRes(resultData);
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
    // setRestaurants(searchFilter);
    setFilteredRes(searchFilter);
  };
  const onlineStatus = useOnlineSatus();
  if (!onlineStatus) {
    return <h1>Looks like your are offline, connect your internet</h1>;
  }

  return restaurant?.info?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="body">
        <div className="filter flex">
          <div className="search m-4 p-4 ">
            <input
              type="text"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              className="border border-solid border-black"
              value={search}
            />
            <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={filteredRestaurant}>Search</button>

          </div>
          <div className="search m-4 p-4 flex items-center rounded-lg">
          <button className="filter-btn flex px-4 py-2 bg-gray-50" onClick={handleFilterClick}>
            Top Rated Restaurant
          </button>
          </div>
          
        </div>
        <div className="flex flex-wrap pl-2 ">
          {filteredRes.map((restaurants) => {
            return (
              <Link
                key={restaurants?.info?.id}
                to={"/restaurant/" + restaurants?.info?.id}
              >
                <RestaurantCard {...restaurants?.info} />
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Body;
