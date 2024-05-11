import ItemList from "./ItemsList";

const RestaurantCategory = ({ data }) => {
  // console.log(data, 'category')
  return (
    <>
      <div className="w-6/12 mx-auto p-4 my-4 shadow-lg ">
        <div className="flex justify-between">
          <span>
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        <ItemList item={data.itemCards} />
      </div>
    </>
  );
};

export default RestaurantCategory;
