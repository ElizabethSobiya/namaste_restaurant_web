import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemsList";
import { clearCart } from "./utils/createSlice";
import { useState } from "react";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const cartItemsArray = Object.values(cartItems);
  const dispatch = useDispatch();
  const [suggestion, setSuggestion] = useState("");
  const [noContact, setNoContact] = useState(false);

  const handleClear = () => dispatch(clearCart());

  const itemTotal = cartItemsArray.reduce((acc, item) => {
    const price = Number(item.price) || 0;
    const qty = Number(item.quantity) || 0;
    return acc + price * qty;
  }, 0);

  const deliveryFee = 46;
  const gst = itemTotal * 0.15;
  const total = itemTotal + deliveryFee + gst;

  return (
    <div
      className={`m-4 p-4 dark:bg-gray-900 dark:text-white transition-colors duration-300  ${
        cartItemsArray.length > 0
          ? "grid grid-cols-1 md:grid-cols-3 gap-4"
          : "flex items-center justify-center"
      }`}
    >
      {/* Left column - Cart and controls */}
      <div
        className={`md:col-span-2 ${
          cartItemsArray.length === 0
            ? "col-span-full flex justify-center items-center h-[80vh]"
            : ""
        }`}
      >
        {cartItemsArray.length === 0 ? (
          <h1 className="text-xl md:text-xl text-center max-w-md text-gray-600 dark:text-gray-400">
            😔 Oops! Your cart is empty. Add some tasty items to cheer us up!
          </h1>
        ) : (
          <>
            <h1 className="text-2xl font-bold mb-4">🛒 Your Cart</h1>

            <ItemList item={cartItemsArray} />

            <button
              className="bg-[#FF5200] text-white font-semibold rounded-lg px-4 py-2 mb-6 shadow transition"
              onClick={handleClear}
            >
              Clear Cart
            </button>
          </>
        )}
      </div>

      {/* Right column - Summary (only show if cart has items) */}
      {cartItemsArray.length > 0 && (
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg h-fit text-gray-600 dark:text-gray-400">
          <h2 className="text-xl font-bold mb-2 text-black dark:text-white">
            Order Summary
          </h2>

          <div className="text-green-600 font-medium mb-2">
            Pepsi 475ml — FREE
          </div>

          <textarea
            placeholder="Any suggestions? We will pass it on..."
            className="w-full border rounded p-2 text-sm text-gray-600 dark:text-white dark:bg-gray-700 mb-4"
            value={suggestion}
            onChange={(e) => setSuggestion(e.target.value)}
          />

          <label className="flex items-start gap-2 text-sm mb-4">
            <input
              type="checkbox"
              className="mt-1"
              checked={noContact}
              onChange={() => setNoContact(!noContact)}
            />
            Opt in for No-contact Delivery. Partner will safely place the order
            outside your door.
          </label>

          {/* Billing Section */}
          <div className="border-t pt-4 text-sm space-y-2">
            <div className="flex justify-between">
              <span>Item Total</span>
              <span>₹{isNaN(itemTotal) ? "0.00" : itemTotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery Fee</span>
              <span>₹{deliveryFee}</span>
            </div>
            <div className="flex justify-between">
              <span>GST & Other Charges</span>
              <span>₹{isNaN(gst) ? "0.00" : gst.toFixed(2)}</span>
            </div>
            <hr />
            <div className="flex justify-between font-bold text-lg text-black dark:text-white">
              <span>To Pay</span>
              <span>₹{isNaN(total) ? "0.00" : total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
