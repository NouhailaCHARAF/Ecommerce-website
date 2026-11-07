import { useEffect, useState } from "react";

const logos = [
  "/src/assets/logo-1.png",
  "/src/assets/logo-2.png",
  "/src/assets/logo-3.png",
  "/src/assets/logo-4.png",
  "/src/assets/logo-5.png",
  "/src/assets/logo-6.png",
  "/src/assets/logo-7.png",
  "/src/assets/logo-8.png",
];

export default function Brands() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % logos.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full px-4 py-8 sm:px-6 md:py-10">
      <div className="grid grid-cols-2 items-center gap-4 sm:grid-cols-3 md:grid-cols-5 md:gap-6">
        {Array.from({ length: 5 }, (_, i) => {
          const index = (active + i) % logos.length;

          return (
            <div
              key={index}
              className="flex h-24 items-center justify-center sm:h-28 md:h-32 border border-black"
            >
              <img
                src={logos[index]}
                alt={`Category ${index + 1}`}
                className="h-full w-full object-contain"
              />
            </div>
          );
        })}
      </div>

      <div className="mt-6 flex justify-center gap-2">
        {logos.map((_, index) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            aria-label={`Show logos starting from ${index + 1}`}
            className={`h-2 rounded-full transition-all duration-500 ${
              active === index ? "w-6 bg-black" : "w-2 bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
