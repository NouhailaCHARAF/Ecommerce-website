import { Link } from "react-router-dom";
import beauty from "../assets/Beauty.webp";
import fragrances from "../assets/Fragrances.webp";
import furniture from "../assets/Furniture.webp";
import groceries from "../assets/Groceries.webp";

const categories = [
  {
    id: 1,
    name: "Beauty",
    count: "5 PRODUCTS",
    image: beauty,
  },
  {
    id: 2,
    name: "Fragrances",
    count: "5 PRODUCTS",
    image: fragrances,
  },
  {
    id: 3,
    name: "Furniture",
    count: "5 PRODUCTS",
    image: furniture,
  },
  {
    id: 4,
    name: "Groceries",
    count: "15 PRODUCTS",
    image: groceries,
  },
];

export default function ShopByCategory() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
          Shop By Category
        </p>

        <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
          Shop By Category
        </h2>

        <div className="mx-auto mb-12 mt-4 h-0.5 w-12 bg-[#a37962]" />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/products?category=${encodeURIComponent(cat.name)}`}
            >
              <div
                key={cat.id}
                className="group flex min-h-[380px] flex-col items-center bg-gray-100 p-6 "
              >
                <div className="flex flex-1 items-center justify-center ">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="w-full bg-white py-4">
                  <h3 className="text-lg font-bold text-slate-900">
                    {cat.name}
                  </h3>

                  <p className="mt-1  text-gray-400 text-xs font-bold">
                    {cat.count}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
