import { Link } from "react-router-dom";
import heroImage from "../assets/hero-image.jpg";

function Hero() {
  return (
    <section
      className="relative h-[85vh] bg-cover bg-center bg-fixed flex items-center"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="max-w-lg text-slate-900">
          <p className="mb-2 text-sm font-bold tracking-widest uppercase text-gray-800">
            Black Friday In July
          </p>

          <h1 className="text-4xl md:text-6xl font-black tracking-tight uppercase leading-none">
            Up to 50% Off
          </h1>

          <p className="mt-3 text-xs md:text-lg font-bold uppercase tracking-wider text-gray-900">
            Hundreds of styles available
          </p>

          <Link
            to="/products"
            className="mt-6 inline-block bg-black hover:bg-yellow-700 text-white text-xs font-bold uppercase tracking-widest px-6 py-3 transition-all"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
