import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { CLOUD_IMG } from "./utils/Constants";
import { addItems, removeItem } from "./utils/createSlice";

const ItemList = ({ item }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [expandedIds, setExpandedIds] = useState({});

  const toggleExpand = (id) => {
    setExpandedIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="space-y-6 px-4 py-4">
      {item.map((items, index) => {
        const { id, name, price, defaultPrice, description, imageId, ratings } =
          items.card.info;

        const finalPrice = price ? price / 100 : defaultPrice / 100;
        const rating = ratings?.aggregatedRating?.rating;
        const isExpanded = expandedIds[id] || false;

        const descriptionLimit = 25; // you can tweak this number

        const words = description?.split(" ") || [];
        const shouldTruncate = words.length > descriptionLimit;
        const visibleText =
          shouldTruncate && !isExpanded
            ? words.slice(0, descriptionLimit).join(" ") + "..."
            : description;

        const quantity = cartItems[id]?.quantity || 0;

        return (
          <div
            key={id}
            className={`flex justify-between items-start p-4 transition ${
              item.length - 1 !== index
                ? "border-b border-gray-200 dark:border-gray-700"
                : ""
            }`}
          >
            {/* Left Content */}
            <div className="w-8/12 pr-4 text-left">
              <h3 className="font-semibold text-[17px] text-gray-900 dark:text-white">
                {name}
              </h3>

              <p className="text-[15px] mt-[2px] text-gray-800 dark:text-gray-300 font-medium">
                ₹{finalPrice}
              </p>

              {rating && (
                <p className="text-sm text-[#1BA672] font-medium mt-1 flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3 h-3 fill-[#1BA672]"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 .587l3.668 7.431 8.2 1.193-5.934 5.782 1.4 8.165L12 18.896l-7.334 3.862 1.4-8.165L.132 9.211l8.2-1.193z" />
                  </svg>

                  {rating}
                </p>
              )}

              <p
                className="text-sm mt-1 leading-snug whitespace-pre-line break-words"
                style={{ color: "rgba(2, 6, 12, 0.6)" }}
              >
                {visibleText}
                {shouldTruncate && (
                  <button
                    className="ml-2 font-medium"
                    style={{ color: "rgba(2, 6, 12, 0.6)" }}
                    onClick={() => toggleExpand(id)}
                  >
                    {isExpanded ? "View Less" : "View More"}
                  </button>
                )}
              </p>
            </div>

            {/* Right Content */}
            <div className="w-3/12 flex flex-col items-center relative">
              <div className="w-[90px] h-[90px] overflow-hidden rounded-md">
                <img
                  src={CLOUD_IMG + imageId}
                  alt={name}
                  className="w-full h-full object-cover transform hover:scale-105 transition duration-300"
                />
              </div>

              {quantity === 0 ? (
                <button
                  className="mt-2 w-[80px] py-[6px] text-sm font-semibold rounded-sm bg-white text-[#1BA672] border border-[#1BA672] hover:bg-green-50"
                  onClick={() => dispatch(addItems(items))}
                >
                  ADD
                </button>
              ) : (
                <div className="mt-2 flex items-center gap-2 border border-green-600 px-2.5 py-1 rounded-sm">
                  <button
                    onClick={() => dispatch(removeItem(items))}
                    className="text-green-600 font-bold text-lg"
                  >
                    -
                  </button>
                  <span className="text-green-700 font-semibold text-sm">
                    {quantity}
                  </span>
                  <button
                    onClick={() => dispatch(addItems(items))}
                    className="text-green-600 font-bold text-lg"
                  >
                    +
                  </button>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
