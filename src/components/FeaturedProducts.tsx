import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { supabase } from "../supabase";
import { useCart } from "../context/CartContext";
import type { Product } from "../components/Products";

function FeaturedProducts() {
  const { addToCart } = useCart();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      const { data, error } = await supabase
        .from("products")
        .select("id, name, image_url, price, category")
        .order("created_at", { ascending: false })
        .limit(5);

      if (error) {
        console.log(error.message);
        return;
      }

      setProducts(data || []);
    };

    getProducts();
  }, []);

  return (
    <section className="px-6 py-16 md:px-12 lg:px-20">
      <div className="relative flex w-full flex-col items-center justify-center bg-white py-12 text-center">
        <span className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
          Featured Products
        </span>

        <h2 className="text-3xl font-black uppercase tracking-tight text-slate-900 md:text-4xl">
          Featured Products
        </h2>

        <div className="mt-4 h-[2px] w-12 bg-yellow-700"></div>

        <Link
          to="/products"
          className="mt-6 text-sm font-semibold text-gray-900 underline decoration-yellow-700 underline-offset-4 transition hover:text-yellow-700 md:absolute md:right-0 md:top-1/2 md:mt-0 md:-translate-y-1/2"
        >
          View All Products →
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5">
        {products.map((item) => (
          <Link to={`/products/${item.id}`}>
            <div
              key={item.id}
              className="overflow-hidden rounded-2xl border border-gray-100 bg-white transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative overflow-hidden bg-gray-100">
                <img
                  src={item.image_url || ""}
                  alt={item.name}
                  className="h-44 w-full object-contain transition duration-500 hover:scale-105 sm:h-60 "
                />

                <span className="absolute left-3 top-3 rounded-md bg-yellow-700 px-2 py-1 text-xs font-semibold text-white">
                  {item.category}
                </span>
              </div>

              <div className="p-3 sm:p-4">
                <h3 className="truncate font-medium text-gray-900 sm:text-base hover:text-gray-600">
                  {item.name}
                </h3>

                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <span className="text-lg font-bold text-yellow-700 ">
                    {item.price} MAD
                  </span>
                </div>

                <button
                  className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-black px-3 py-3 text-sm font-medium text-white transition hover:bg-yellow-700"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    addToCart(item);
                  }}
                >
                  <ShoppingCart size={17} />
                  Add to Cart
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default FeaturedProducts;
