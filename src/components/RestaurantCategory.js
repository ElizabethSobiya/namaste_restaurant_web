import ItemList from "./ItemsList";

const RestaurantCategory = ({ data, itemList, setItemIndex }) => {
  const handleClick = () => {
    setItemIndex();
  };

  return (
    <div className="w-6/12 mx-auto p-4 my-4 bg-gray-50 dark:bg-gray-800 text-black dark:text-white shadow-lg rounded-lg transition-colors duration-300">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-bold text-lg ">
          {data.title} ({data.itemCards.length})
        </span>
        <span className="text-xl">⬇️</span>
      </div>
      {itemList && <ItemList item={data.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
