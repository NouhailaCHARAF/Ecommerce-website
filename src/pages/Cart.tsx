import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import Navbar from "../components/Navbar";
import { ShoppingBag, Trash2, ArrowRight } from "lucide-react";

export default function Cart() {
  const { cart, removeFromCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-50 px-4 pt-32 pb-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <p className="mb-2 text-sm text-gray-500">Home / Cart</p>

            <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>

            <p className="mt-2 text-gray-500">
              Review your selected products before ordering.
            </p>
          </div>

          {cart.length === 0 ? (
            <div className="rounded-2xl bg-white px-6 py-20 text-center shadow-sm">
              <ShoppingBag size={55} className="mx-auto mb-5 text-gray-300" />

              <h2 className="mb-2 text-xl font-semibold">Your cart is empty</h2>

              <p className="mb-7 text-gray-500">
                Looks like you haven't added anything yet.
              </p>

              <Link
                to="/products"
                className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-7 py-3 text-white transition hover:bg-yellow-700"
              >
                Continue Shopping
                <ArrowRight size={18} />
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div className="space-y-4 lg:col-span-2">
                <div className="rounded-2xl bg-white p-6 shadow-sm">
                  <h2 className="mb-6 text-lg font-semibold">
                    Cart Items ({cart.length})
                  </h2>

                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="flex flex-col gap-4 border-b border-gray-100 py-6 first:pt-0 last:border-0 last:pb-0 sm:flex-row sm:items-center"
                    >
                      {/* Product Image */}
                      <div className="flex h-28 w-full items-center justify-center rounded-xl bg-gray-50 sm:w-28 sm:shrink-0">
                        <img
                          src={item.image_url || ""}
                          alt={item.name}
                          className="h-full w-full rounded-xl object-contain p-2"
                        />
                      </div>

                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">
                          {item.name}
                        </h3>

                        <p className="mt-2 text-sm text-gray-500">
                          {item.price.toFixed(2)} MAD / item
                        </p>

                        <p className="mt-2 text-sm text-gray-500">
                          Quantity: {item.quantity}
                        </p>
                      </div>

                      <div className="flex items-center justify-between gap-4 sm:flex-col sm:items-end">
                        <p className="font-bold text-gray-900">
                          {(item.price * item.quantity).toFixed(2)} MAD
                        </p>

                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="flex items-center gap-1 text-sm text-red-500 transition hover:text-red-700"
                        >
                          <Trash2 size={16} />
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition hover:text-yellow-700"
                >
                  <ArrowRight size={16} className="rotate-180" />
                  Continue Shopping
                </Link>
              </div>

              <div>
                <div className="sticky top-28 rounded-2xl bg-white p-6 shadow-sm">
                  <h2 className="mb-6 text-xl font-bold">Order Summary</h2>

                  <div className="space-y-4 border-b border-gray-100 pb-5">
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>Products</span>
                      <span>{cart.length}</span>
                    </div>

                    <div className="flex justify-between text-sm text-gray-500">
                      <span>Subtotal</span>
                      <span>{total.toFixed(2)} MAD</span>
                    </div>

                    <div className="flex justify-between text-sm text-gray-500">
                      <span>Shipping</span>
                      <span>Calculated later</span>
                    </div>
                  </div>

                  <div className="flex justify-between py-5 text-lg font-bold">
                    <span>Total</span>
                    <span>{total.toFixed(2)} MAD</span>
                  </div>

                  <button className="w-full rounded-xl bg-gray-900 py-4 font-semibold text-white transition hover:bg-yellow-700">
                    Commander
                  </button>

                  <p className="mt-4 text-center text-xs text-gray-400">
                    Secure shopping experience
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
