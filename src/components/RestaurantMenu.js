import { useEffect, useState } from "react";
import { MENU_API } from "./utils/Constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "./hooks/useRestaurantMenu";

const RestaurantMenu = () => {
  const [restaurantData, setRestaurantData] = useState(null);
  const {resId} = useParams();
  const resInfo = useRestaurantMenu(resId);
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
  const {name, cuisines, costForTwoMessage} = restaurantData?.data?.cards[2]?.card?.card?.info;
  console.log(restaurantData?.data?.cards[2]?.card?.card?.info, 'jjj')
  return  (
    <>
      <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      </div>
      
    </>
  );
};

export default RestaurantMenu;
