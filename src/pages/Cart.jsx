import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartTile from "../components/cart-tile/CartTile";

export default function Cart() {
  const [totalCart, setTotalCart] = useState(0);

  const { cart } = useSelector((state) => state);

  useEffect(() => {
    setTotalCart(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  console.log(cart);
  console.log(totalCart);

  return (
    <div className="">
      {cart && cart.length ? (
        <>
          <div className="min-h-[80vh] grid md:grid-cols-2 max-w-6xl mx-auto">
            <div className="flex flex-col justify-center items-center p-3">
              {cart.map((cartItem) => (
                <CartTile cartItem={cartItem} />
              ))}
            </div>
          </div>
          <div>
            <div className="flex felx-col justify-center p-5 items-end mt-14 space-y-5">
              <h1 className="font-bold">Cart summary</h1>
              <p>
                <span className="font-bold">Total items</span>
                <span>: {cart.length}</span>
              </p>
              <p>
                <span>Total amount</span>
                <span>: {totalCart}</span>
              </p>
            </div>
          </div>
        </>
      ) : (
        <div className="min-h-[80vh] flex felx-col items-center justify-center">
          <h1 className="text-gray-800 font-bold text-xl mb-2">
            Cart is empty
          </h1>
          <Link to={"/"}>
            <button>Products</button>
          </Link>
        </div>
      )}
    </div>
  );
}
