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
      {item.map((items) => {
        const { id, name, price, defaultPrice, description, imageId, ratings } = items.card.info;

        const finalPrice = price ? price / 100 : defaultPrice / 100;
        const rating = ratings?.aggregatedRating?.rating;
        const isExpanded = expandedIds[id] || false;

        const words = description?.split(" ") || [];
        const shouldTruncate = words.length > 80;
        const visibleText = shouldTruncate && !isExpanded ? words.slice(0, 80).join(" ") + "..." : description;

        const quantity = cartItems[id]?.quantity || 0;

        return (
          <div
            key={id}
            className="flex justify-between items-start bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm p-4 transition hover:shadow-md"
          >
            {/* Left Content */}
            <div className="w-8/12 pr-4 text-left">
              <h3 className="font-semibold text-[17px] text-gray-900 dark:text-white">{name}</h3>

              <p className="text-[15px] mt-[2px] text-gray-800 dark:text-gray-300 font-medium">
                ₹{finalPrice}
              </p>

              {rating && (
                <p className="text-sm text-green-600 font-medium mt-1 flex items-center gap-1">
                  <span>⭐</span>
                  {rating}
                </p>
              )}

              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 leading-snug whitespace-pre-line break-words">
                {visibleText}
                {shouldTruncate && (
                  <button
                    className="text-yellow-600 font-medium ml-2 underline"
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
                  className="mt-2 w-[80px] py-[6px] text-sm font-semibold rounded-sm bg-white text-green-600 border border-green-600 hover:bg-green-50"
                  onClick={() => dispatch(addItems(items))}
                >
                  ADD
                </button>
              ) : (
                <div className="mt-2 flex items-center gap-2 border border-green-600 px-2 py-1 rounded-sm">
                  <button
                    onClick={() => dispatch(removeItem(items))}
                    className="text-green-600 font-bold text-lg"
                  >
                    -
                  </button>
                  <span className="text-green-700 font-semibold text-sm">{quantity}</span>
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
