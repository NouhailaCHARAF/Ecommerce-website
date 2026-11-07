import { Link } from "react-router-dom";
import { useState } from "react";

export default function Footer() {
  const [success, setSuccess] = useState(false);
  return (
    <footer className=" bg-[#f4f4f4] text-gray-600 py-12 ">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="text-xl md:text-2xl font-black tracking-tight uppercase text-slate-900">
            Nouha<span className="text-yellow-700">Store</span>
          </h3>
        </div>

        <div>
          <h4 className="mb-4 text-md font-bold text-gray-900">LINKS</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <Link
                to="/products"
                className="hover:text-yellow-800 font-semibold"
              >
                Our Products
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-yellow-800 font-semibold"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-yellow-800 font-semibold">
                About us
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-yellow-800 font-semibold">
                Help
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-md font-bold text-gray-900">CATEGORIES</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <Link
                to="/products?category=beauty"
                className="hover:text-yellow-800 font-semibold"
              >
                Beauty
              </Link>
            </li>
            <li>
              <Link
                to="/products?category=fragrances"
                className="hover:text-yellow-800 font-semibold"
              >
                Fragrances
              </Link>
            </li>
            <li>
              <Link
                to="/products?category=furniture"
                className="hover:text-yellow-800 font-semibold"
              >
                Furniture
              </Link>
            </li>
            <li>
              <Link
                to="/products?category=groceries"
                className="hover:text-yellow-800 font-semibold"
              >
                Groceries
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-md font-bold text-slate-900">SUBSCRIBE</h4>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              e.currentTarget.reset();
              setSuccess(true);
            }}
            className="flex flex-col gap-3"
          >
            <input
              type="email"
              placeholder="Your email address"
              required
              className="w-full border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-[#a37962]"
            />

            <button
              type="submit"
              className="w-fit bg-slate-900 px-6 py-3 text-xs font-bold text-white hover:bg-yellow-800"
            >
              SUBSCRIBE
            </button>

            {success && (
              <p className="text-sm font-medium text-green-600">
                ✓ Thank you for subscribing!
              </p>
            )}
          </form>
        </div>
      </div>

      <div className="border-t border-gray-300">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row">
          <p className="text-center text-md font-semibold">
            © 2026 Furniture Shop. All rights reserved.
          </p>
          <a
            href="mailto:Charafnouhaila10@gmail.com"
            className="hover:text-yellow-700 transition"
          >
            Charafnouhaila10@gmail.com
          </a>

          <div className="flex gap-5">
            <a href="#" aria-label="Facebook" className="hover:text-[#a37962]">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V3.9c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V10H7.3v3h2.8v8h3.4Z" />
              </svg>
            </a>

            <a href="#" aria-label="YouTube" className="hover:text-[#a37962]">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                <path d="M23 7a3 3 0 0 0-2.1-2.1C19 4.4 12 4.4 12 4.4s-7 0-8.9.5A3 3 0 0 0 1 7a31 31 0 0 0-.5 5 31 31 0 0 0 .5 5 3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5A3 3 0 0 0 23 17a31 31 0 0 0 .5-5 31 31 0 0 0-.5-5ZM9.6 15.5v-7l6 3.5-6 3.5Z" />
              </svg>
            </a>

            <a href="#" aria-label="Instagram" className="hover:text-[#a37962]">
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle
                  cx="17.5"
                  cy="6.5"
                  r="1"
                  fill="currentColor"
                  stroke="none"
                />
              </svg>
            </a>

            <a href="#" aria-label="Twitter" className="hover:text-[#a37962]">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                <path d="M22 5.9a8 8 0 0 1-2.4.7 4.2 4.2 0 0 0 1.8-2.3 8.4 8.4 0 0 1-2.7 1 4.2 4.2 0 0 0-7.2 3.8A12 12 0 0 1 2.8 4.8a4.2 4.2 0 0 0 1.3 5.6 4.2 4.2 0 0 1-1.9-.5v.1a4.2 4.2 0 0 0 3.4 4.1 4.2 4.2 0 0 1-1.9.1 4.2 4.2 0 0 0 3.9 2.9A8.5 8.5 0 0 1 1 18.9a12 12 0 0 0 18.5-10.1v-.6A8.5 8.5 0 0 0 22 5.9Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
