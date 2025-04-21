import React, { useContext, useEffect, useState } from "react";
import RestaurantCard, { promotedRestaurant } from "./RestaurantCard";
import { API } from "./utils/Constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineSatus from "./hooks/useOnlineStatus";
import userContext from "./hooks/useContext";
import { CiSearch } from "react-icons/ci";

function Body() {
  const [restaurant, setRestaurants] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredRes, setFilteredRes] = useState([]);

  const PromotedResCard = promotedRestaurant(RestaurantCard);

  const { setUserName, loggedInUser } = useContext(userContext);

  useEffect(() => {
    fetchRestaurantData();
  }, []);

  const fetchRestaurantData = async () => {
    try {
      const data = await fetch(API);
      const resData = await data.json();
      console.log(resData, "data");
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
      // console.log(resultData, 'res')
      setRestaurants(resultData);
      setFilteredRes(resultData);
      setSearch("");
    } catch (error) {
      console.error("Error fetching restaurant data:", error);
    }
  };

  const handleFilterClick = () => {
    const filteredData = restaurant.filter((res) => res?.info?.avgRating > 4);
    console.log(filteredData, "resfilter");
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
      <div className="body bg-white dark:bg-gray-900 min-h-screen transition-colors duration-300">
        <div className="filter flex flex-wrap items-center justify-center mb-4 pt-5 gap-4">
          <div className="relative items-center">
            <input
              type="text"
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") filteredRestaurant();
              }}
              className="pl-10 pr-4 py-2 w-130 rounded-full border border-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
              value={search}
              placeholder="Search restaurants..."
            />
            <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600 dark:text-white" />
          </div>

          <div className="flex items-center">
            <button
              className="px-4 py-2 bg-yellow-400 dark:bg-yellow-600 text-black dark:text-white rounded-full shadow-md hover:shadow-lg transition"
              onClick={handleFilterClick}
            >
              🌟 Top Rated
            </button>
          </div>
        </div>

        <div className="flex flex-wrap pl-2 text-black dark:text-white">
          {filteredRes.map((restaurants) => (
            <Link
              key={restaurants?.info?.id}
              to={"/restaurant/" + restaurants?.info?.id}
            >
              {restaurants?.info?.hasBestsellerItems ? (
                <PromotedResCard {...restaurants?.info} />
              ) : (
                <RestaurantCard {...restaurants?.info} />
              )}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default Body;
