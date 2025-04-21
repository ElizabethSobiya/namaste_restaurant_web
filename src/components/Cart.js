import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemsList";
import { clearCart } from "./utils/createSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch((store) => store.cart.items);
  const handleClear = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4 dark:bg-gray-900 dark:text-white transition-colors duration-300 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">🛒 Your Cart</h1>
      <button
        className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-lg px-4 py-2 mb-6 shadow transition"
        onClick={handleClear}
      >
        Clear Cart
      </button>
      <div>
        <ItemList item={cartItems} />
        {cartItems.length === 0 && (
          <h1 className="mt-4 text-gray-600 dark:text-gray-400">
            Cart is empty, add some items to the cart.
          </h1>
        )}
      </div>
    </div>
  );
};

export default Cart;
