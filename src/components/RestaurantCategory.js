import ItemList from "./ItemsList";

const RestaurantCategory = ({ data, itemList , setItemIndex}) => {
  // console.log(data, 'category')
  const handleClick = () => {
    setItemIndex();
  };
 
  return (
    <>
      <div className="w-6/12 mx-auto p-4 my-4 bg-gray-50 shadow-lg ">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
          <span className="font-bold">
            {data.title} ({data.itemCards.length})
          </span>
          <span >⬇️</span>
        </div>
        {itemList && <ItemList item={data.itemCards} />}
      </div>
    </>
  );
};

export default RestaurantCategory;
