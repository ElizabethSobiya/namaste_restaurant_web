import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "./hooks/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  console.log(resId, "id");
  console.log(resInfo, "jjj");
  if (resInfo === null) {
    return <Shimmer />;
  }
  // const { name, cuisines, costForTwoMessage } =
  //   resInfo?.data?.cards[2]?.card?.card?.info;

  // const{itemCard} = resInfo?.data?.cards[4]?.groupCard
  return (
    <>
      {/* <div className="text-center">
        <h1 className="font-bold my-6 text-2xl">{name}</h1>
        <p className="font-bold text-lg">
          {cuisines.join(", ")} - {costForTwoMessage}
        </p>
      </div> */}
    </>
  );
};

export default RestaurantMenu;
