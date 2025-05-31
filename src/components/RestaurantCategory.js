import ItemList from "./ItemsList";

const RestaurantCategory = ({ data, itemList, setItemIndex }) => {

  const handleClick = () => {
    setItemIndex();
  };

  return (
    <div className="w-6/12 mx-auto p-4 py-4 text-black dark:text-white rounded-lg transition-colors duration-300">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-bold text-lg">
          {data.title} ({data?.itemCards?.length})
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-gray-700 dark:text-gray-300 ml-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      {itemList && <ItemList item={data?.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
