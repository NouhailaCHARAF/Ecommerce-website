import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { supabase } from "../supabase";
import Navbar from "./Navbar";
import type { Product } from "../components/Products";
import { useCart } from "../context/CartContext";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    const getProduct = async () => {
      if (!id) return;

      const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq("id", Number(id))
        .single();

      if (error) {
        console.log(error.message);
        setProduct(null);
      } else {
        setProduct(data);
      }

      setLoading(false);
    };

    getProduct();
  }, [id]);

  if (loading) {
    return <p className="py-32 text-center">Loading product...</p>;
  }

  if (!product) {
    return (
      <div className="py-32 text-center">
        <p className="mb-4 text-lg">Product not found.</p>
        <Link to="/products" className="underline">
          Back to Shop
        </Link>
      </div>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-5 pb-16 pt-40">
      <Navbar />
      <p className="mb-8 text-sm text-gray-500">
        <Link to="/" className="hover:text-black">
          Home
        </Link>
        {" / "}
        <Link to="/products" className="hover:text-black">
          Shop
        </Link>
        {" / "}
        <span className="text-gray-900">{product.name}</span>
      </p>

      <div className="grid gap-10 md:grid-cols-2 md:gap-16">
        <div className="flex min-h-80 items-center justify-center rounded-2xl bg-[#f8f5f3] p-8">
          <img
            src={product.image_url || ""}
            alt={product.name}
            className="max-h-[500px] w-full object-contain"
          />
        </div>

        <div className="flex flex-col items-start">
          <p className="mb-3 text-sm uppercase tracking-widest text-gray-500">
            {product.category}
          </p>

          <h1 className="text-3xl font-semibold text-gray-900 md:text-4xl">
            {product.name}
          </h1>

          <p className="mt-5 text-2xl font-bold text-yellow-700">
            {(product.price * quantity).toFixed(2)} MAD
          </p>

          <div className="my-6 h-px w-full bg-gray-200" />

          <p className="leading-7 text-gray-600">
            {product.description || "No description available."}
          </p>

          <div className="mt-8 flex items-center gap-4">
            <div className="flex items-center rounded-lg border border-gray-200">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="px-4 py-3 hover:bg-gray-100"
                aria-label="Decrease quantity"
              >
                −
              </button>

              <span className="min-w-10 text-center">{quantity}</span>

              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="px-4 py-3 hover:bg-gray-100"
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>

            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                addToCart(product);
              }}
              className="flex items-center gap-2 rounded-lg bg-black px-6 py-3 text-white transition hover:bg-yellow-700"
            >
              <ShoppingCart size={18} />
              Add to Cart
            </button>
          </div>

          <p className="mt-6 text-sm text-gray-500">
            Category: {product.category}
          </p>
        </div>
      </div>
    </section>
  );
}
