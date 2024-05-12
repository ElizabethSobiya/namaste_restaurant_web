import { CLOUD_IMG } from "./utils/Constants";

const ItemList = ({ item }) => {
  console.log(item, "items");
  return (
    <>
      <div>
        {item.map((items) => (
          <div
            className="text-black p-2 m-2 border-gray-200 border-b-[1px] text-left flex justify-between"
            key={items.card.info.id}
          >
            <div className="py-2 w-9/12">
              <span className="">{items?.card?.info?.name}</span>
              <span>
                {" "}
                - ₹
                {items?.card?.info?.price
                  ? items?.card?.info?.price / 100
                  : items?.card?.info?.defaultPrice / 100}{" "}
              </span>
              <p className="text-xs">{items?.card?.info?.description}</p>
            </div>
            <div className="w-3/12 p-4">
              {/* <div className=""> */}
                <img
                  className="w-full rounded-sm"
                  src={CLOUD_IMG + items?.card?.info?.imageId}
                  alt=""
                />
              {/* </div> */}
              <div className="absoulte ">
                <button className="p-1 shadow-lg bg-green-700 text-white  text-xs rounded-sm">
                  Add +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ItemList;
