import { Star, UserRound } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Sarah M.",
    text: "Beautiful furniture and excellent quality. Very happy with my purchase!",
    rating: 5,
  },
  {
    id: 2,
    name: "Adam K.",
    text: "Great design and fast delivery. Everything looks exactly as expected.",
    rating: 5,
  },
  {
    id: 3,
    name: "Lina R.",
    text: "The quality is amazing and the furniture looks perfect in my home.",
    rating: 5,
  },
  {
    id: 4,
    name: "Youssef A.",
    text: "Good prices, beautiful products, and a smooth shopping experience.",
    rating: 5,
  },
  {
    id: 5,
    name: "Maya B.",
    text: "I love the simple design and the attention to detail. Highly recommended!",
    rating: 5,
  },
  {
    id: 6,
    name: "Omar T.",
    text: "Excellent service and stylish furniture. I will definitely order again.",
    rating: 5,
  },
];

export default function CustomerReviews() {
  return (
    <section className=" px-4 py-16 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
            Customer Reviews
          </p>

          <h2 className="mt-2 text-3xl font-bold uppercase text-slate-900 md:text-4xl">
            What Our Customers Say
          </h2>

          <div className="mx-auto mt-4 h-0.5 w-12 bg-[#a37962]" />
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="flex flex-col bg-[#f1f0f0d1] p-6 transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex gap-1">
                {Array.from({ length: review.rating }).map((_, index) => (
                  <Star
                    key={index}
                    size={16}
                    className="fill-[#a37962] text-[#a37962]"
                  />
                ))}
              </div>

              <p className="mt-4 flex-1 text-sm leading-6 text-gray-600">
                "{review.text}"
              </p>

              <div className="mt-6 flex items-center gap-3 border-t border-gray-100 pt-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#eee5dc] text-[#a37962]">
                  <UserRound size={20} />
                </div>

                <h3 className="text-sm font-bold text-slate-900">
                  {review.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
