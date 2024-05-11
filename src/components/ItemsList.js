const ItemList = ({ item }) => {
  console.log(item, "items");
  return (
    <>
      <div>
        {item.map((items) => (
          <div className="text-black p-2 m-2 border-gray-200 border-b-[1px] text-left">
            <div>
              <span className="p-2">{items?.card?.info?.name}</span>
              <span>{items?.card?.info?.price}</span>
              <p className="text-xs">{items?.card?.info?.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ItemList;
