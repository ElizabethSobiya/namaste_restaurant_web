import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "./hooks/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [itemIndex, setItemIndex] = useState(0);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center px-4 dark:bg-gray-900 dark:text-white min-h-screen transition-colors duration-300">
      <h1 className="font-bold py-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg mb-4">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>

      {Array.isArray(categories) &&
        categories.map((category, index) => (
          <RestaurantCategory
            data={category?.card?.card}
            key={category?.card?.card?.title}
            itemList={index === itemIndex}
            setItemIndex={() => setItemIndex(index)}
          />
        ))}
    </div>
  );
};

export default RestaurantMenu;
