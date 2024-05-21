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
    <>
      <div className="text-center m-4 p-4">
        <h1 className="text-2xl font-bold">Cart</h1>
        <button
          className="bg-black text-white rounded-lg p-2"
          onClick={() => handleClear()}
        >
          Clear
        </button>
        <div>
          <ItemList item={cartItems} />
          {cartItems.length === 0 && (
            <h1>Cart is empty, add some items to the cart.</h1>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
