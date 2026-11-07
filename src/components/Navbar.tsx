import { Link } from "react-router-dom";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";
import { useCart } from "../context/CartContext";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useCart();
  const cartCount = cart.length;
  return (
    <header className="absolute top-0 left-0 w-full bg-transparent z-50 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link
          to="/"
          className="text-xl md:text-2xl font-black tracking-tight uppercase text-slate-900"
        >
          Nouha<span className="text-yellow-700">Store</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 font-bold text-sm uppercase tracking-wider text-gray-800">
          <Link to="/" className="hover:text-yellow-700 transition-colors">
            Home
          </Link>
          <Link
            to="/products"
            className="hover:text-yellow-700 transition-colors"
          >
            Products
          </Link>
          <Link to="/about" className="hover:text-yellow-700 transition-colors">
            About
          </Link>
          <Link to="/contact" className="hover:yellow-700 transition-colors">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-8">
          <Link
            to="/cart"
            aria-label="Shopping cart"
            className="relative text-gray-800 hover:text-yellow-700 transition-colors"
          >
            <ShoppingCart size={22} />
            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                {cartCount}
              </span>
            )}
          </Link>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-yellow-700 transition-colors text-gray-800"
            aria-label="Open menu"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-xl border-t border-gray-100 py-6 px-6 flex flex-col gap-4 md:hidden transition-all duration-300">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="text-sm font-bold uppercase tracking-wider text-gray-800 hover:text-purple-800 transition-colors py-2 border-b border-gray-50"
          >
            Home
          </Link>
          <Link
            to="/products"
            onClick={() => setIsOpen(false)}
            className="text-sm font-bold uppercase tracking-wider text-gray-800 hover:text-purple-800 transition-colors py-2 border-b border-gray-50"
          >
            Products
          </Link>
          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="text-sm font-bold uppercase tracking-wider text-gray-800 hover:text-purple-800 transition-colors py-2 border-b border-gray-50"
          >
            About
          </Link>

          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="text-sm font-bold uppercase tracking-wider text-gray-800 hover:text-purple-800 transition-colors py-2"
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}

export default Navbar;
