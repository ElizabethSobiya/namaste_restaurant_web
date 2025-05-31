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
  const [isFiltered, setIsFiltered] = useState(false);

  useEffect(() => {
    fetchRestaurantData();
  }, []);

  const fetchRestaurantData = async () => {
    try {
      const data = await fetch(API);
      const resData = await data.json();
      console.log(resData, "data");

      const checkRestaurantData = (resData) => {
        for (let i = 0; i < resData.data.cards.length; i++) {
          const checkData =
            resData.data.cards[i].card?.card?.gridElements?.infoWithStyle
              ?.restaurants;
          if (checkData !== undefined) {
            return checkData;
          }
        }
      };

      const resultData = checkRestaurantData(resData);
      setRestaurants(resultData); // master data
      setFilteredRes(resultData); // current display data
    } catch (error) {
      console.error("Error fetching restaurant data:", error);
    }
  };

  const handleFilterClick = () => {
    if (!isFiltered) {
      const filteredData = restaurant.filter(
        (res) => res?.info?.avgRating > 4.5
      );
      setFilteredRes(filteredData);
      setIsFiltered(true);
    } else {
      setFilteredRes(restaurant); // reset list
      setIsFiltered(false);
    }
  };

  const handleSearch = () => {
    if (!search.trim()) {
      setFilteredRes(restaurant); // if empty, reset to all
      return;
    }

    const searchFilter = restaurant.filter((res) =>
      res?.info?.name.toLowerCase().includes(search.toLowerCase())
    );
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
      <div className="body bg-[#FAF9F6] dark:bg-gray-900 min-h-screen transition-colors duration-300">
        <div className="filter flex flex-row items-center justify-center mb-4 pt-5 gap-4 px-4">
          <div className="relative flex w-full max-w-[50vw]">
            <input
              type="text"
              value={search}
              placeholder="Search restaurants..."
              onChange={(e) => {
                setSearch(e.target.value);
                if (e.target.value === "") {
                  setFilteredRes(restaurant);
                }
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSearch();
              }}
              className="pl-10 pr-4 py-2 w-full rounded-full border border-gray-400 focus:outline-none focus:ring-0 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
            />

            <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600 dark:text-white" />
          </div>

          <div className="flex items-center">
            <button
              className={`flex items-center gap-2 px-5 py-2 rounded-full shadow-md hover:shadow-lg transition 
    ${
      isFiltered
        ? "bg-[#F0F0F5] text-black"
        : "bg-yellow-400 dark:bg-yellow-600 text-black dark:text-white"
    }`}
              onClick={handleFilterClick}
            >
              {isFiltered && (
                <span className="text-black text-sm font-bold">&times;</span>
              )}
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
