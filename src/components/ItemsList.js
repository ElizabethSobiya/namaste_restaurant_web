import { useDispatch } from "react-redux";
import { CLOUD_IMG } from "./utils/Constants";
import { addItems } from "./utils/createSlice";

const ItemList = ({ item }) => {
  const dispatch = useDispatch();

  const handleAddItem = (items) => {
    dispatch(addItems(items));
    console.log(items);
  };

  return (
    <div>
      {item.map((items) => (
        <div
          className="text-black dark:text-white p-2 m-2 border-gray-200 dark:border-gray-700 border-b-[1px] text-left flex justify-between transition-colors duration-300"
          key={items.card.info.id}
        >
          <div className="py-2 w-9/12">
            <span>{items?.card?.info?.name}</span>
            <span>
              {" "}
              - ₹
              {items?.card?.info?.price
                ? items?.card?.info?.price / 100
                : items?.card?.info?.defaultPrice / 100}{" "}
            </span>
            <p className="text-xs dark:text-gray-300">
              {items?.card?.info?.description}
            </p>
          </div>
          <div className="w-3/12 p-4 flex flex-col items-center">
            <img
              className="w-full rounded-sm"
              src={CLOUD_IMG + items?.card?.info?.imageId}
              alt=""
            />
            <button
              className="mt-2 px-2 py-1 shadow-md bg-yellow-500 hover:bg-yellow-600 text-black font-semibold text-xs rounded-sm transition"
              onClick={() => handleAddItem(items)}
            >
              Add +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
