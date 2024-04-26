import { useEffect, useState } from "react";
import { MENU_API } from "./utils/Constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [restaurantData, setRestaurantData] = useState(null);
  const {resId} = useParams();
  console.log(resId, 'id')

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const response = await fetch(MENU_API + resId);
    const json = await response.json();
    console.log(json, 'lll')
    // Set restaurant data
    // const restaurantData = json?.data?.cards?.map(x => x.card)?.
                          //  find(x => x && x.card['@type'] === RESTAURANT_TYPE_KEY)?.card?.info || null;
                           
    setRestaurantData(json);
  }
  if(restaurantData === null){
    return <Shimmer/>
  }
  const {name, cuisines} = restaurantData?.data?.cards[2]?.card?.card?.info;
  console.log(restaurantData?.data?.cards[2]?.card?.card?.info, 'jjj')
  return  (
    <>
      <div className="menu">
        <h1>{name}</h1>
        <h2>{cuisines.join(', ')}</h2>
      </div>
      <div>
        <p>Briyani</p>
        <p>Burger</p>
      </div>
    </>
  );
};

export default RestaurantMenu;
