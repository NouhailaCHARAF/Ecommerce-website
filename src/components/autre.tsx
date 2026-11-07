import { Truck, CreditCard, ShieldCheck, ShoppingCart } from "lucide-react";

const features = [
  {
    id: 1,
    title: "FAST DELIVERY",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.",
    icon: Truck,
  },
  {
    id: 2,
    title: "FREE SHIPPING",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.",
    icon: CreditCard,
  },
  {
    id: 3,
    title: "SECURE CHECKOUT",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.",
    icon: ShieldCheck,
  },
  {
    id: 4,
    title: "EASY RETURNS",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.",
    icon: ShoppingCart,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white px-4 py-16">
      <div className="mx-auto max-w-7xl text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
          Our Benefits
        </p>

        <h2 className="mt-2 text-3xl font-bold uppercase text-slate-900 md:text-4xl">
          Why Choose Us
        </h2>

        <div className="mx-auto mb-16 mt-4 h-0.5 w-12 bg-[#a37962]" />

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((item) => (
            <div key={item.id} className="flex flex-col items-center">
              <item.icon size={36} className="text-[#a37962]" />

              <h3 className="mb-3 mt-5 text-lg font-bold text-slate-900">
                {item.title}
              </h3>

              <p className="text-sm leading-6 text-gray-700">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
