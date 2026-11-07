import { useEffect, useState } from "react";
import { supabase } from "../supabase";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export type Product = {
  id: number;
  name: string;
  description?: string;
  price: number;
  category: string;
  image_url: string;
};

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);

  const [sort, setSort] = useState("default");
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedCategory = searchParams.get("category") || "All";
  const { addToCart } = useCart();

  useEffect(() => {
    const getProducts = async () => {
      const { data, error } = await supabase.from("products").select("*");

      if (error) {
        console.log(error.message);
        return;
      }

      setProducts(data || []);
    };

    getProducts();
  }, []);

  const categories = ["All", ...new Set(products.map((item) => item.category))];

  const filteredProducts = products
    .filter(
      (item) =>
        selectedCategory === "All" ||
        item.category.toLowerCase() === selectedCategory.toLowerCase(),
    )
    .sort((a, b) => {
      if (sort === "price-low") return a.price - b.price;
      if (sort === "price-high") return b.price - a.price;
      if (sort === "latest") return b.id - a.id;
      return 0;
    });

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 pt-32 pb-4">
        <p className="mb-6 text-sm text-gray-500">
          <a href="/">Home</a> / Product
        </p>

        <h1 className="mb-8 text-4xl font-semibold">Product</h1>

        <div className="mb-6 flex flex-col justify-between gap-5 border-b pb-6 sm:flex-row sm:items-center">
          <p className="text-sm text-gray-500">
            Showing {filteredProducts.length} results
          </p>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="border-0 bg-transparent py-2 text-sm outline-none "
          >
            <option value="default ">Default sorting</option>
            <option value="latest">Sort by latest</option>
            <option value="price-low">Price: low to high</option>
            <option value="price-high">Price: high to low</option>
          </select>
        </div>

        <div className="flex flex-wrap gap-3">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => {
                if (item === "All") {
                  setSearchParams({});
                } else {
                  setSearchParams({ category: item });
                }
              }}
              className={`rounded-full border px-5 py-2 text-sm transition ${
                selectedCategory === item
                  ? "border-black bg-black text-white"
                  : "border-gray-200 hover:border-black"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 max-w-7xl mx-auto px-2 py-6">
        {filteredProducts.map((item) => (
          <Link
            to={`/products/${item.id}`}
            className="flex h-full flex-col"
            key={item.id}
          >
            <div className="group flex flex-col h-full justify-between overflow-hidden rounded-2xl border border-gray-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              {/* Image */}
              <div className="relative flex h-48 items-center justify-center overflow-hidden bg-[#f8f5f3] p-5 sm:h-60">
                <img
                  src={item.image_url || ""}
                  alt={item.name}
                  className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
                />

                <button
                  aria-label="Add to cart"
                  className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-800 shadow-md transition hover:bg-black hover:text-white cursor-pointer"
                >
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0"
                    />
                  </svg>
                </button>
              </div>

              <div className="p-3 sm:p-4 flex flex-col flex-1 justify-between">
                <div>
                  <p className="mb-1 text-xs font-medium uppercase tracking-wide text-gray-400">
                    {item.category}
                  </p>

                  <h3 className="truncate text-sm font-semibold text-gray-900 sm:text-base">
                    {item.name}
                  </h3>

                  <p className="mt-1 text-xs text-gray-500 sm:text-sm line-clamp-2">
                    {item.description}
                  </p>
                </div>

                <div>
                  <div className="mt-3 flex items-center justify-between gap-2">
                    <span className="text-sm font-bold text-yellow-700 sm:text-base">
                      {item.price} MAD
                    </span>
                  </div>

                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      addToCart(item);
                    }}
                    className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-black px-3 py-2.5 text-xs font-medium text-white transition hover:bg-gray-800 sm:mt-4 sm:text-sm cursor-pointer"
                  >
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0"
                      />
                    </svg>
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
