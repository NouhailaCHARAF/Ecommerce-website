import upgradeImage from "../assets/upgrade-your-home.webp";

export default function BrandDealBanner() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      <div className="grid overflow-hidden bg-[#d2ede6] md:grid-cols-2">
        <div className="flex flex-col items-start justify-center p-8 md:p-14">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a37962]">
            Special Offer
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 md:text-5xl">
            Upgrade Your Home
            <span className="mt-1 block text-[#a37962]">Save Up to 30%</span>
          </h2>

          <p className="mt-4 max-w-sm text-md leading-6 text-gray-600">
            Discover timeless designs and bring comfort and style into your
            home.
          </p>

          <a
            href="/products"
            className="mt-7 inline-block bg-slate-900 px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#a37962]"
          >
            Shop Now →
          </a>
        </div>

        <div className="h-72 md:h-full md:min-h-[420px]">
          <img
            src={upgradeImage}
            alt="Special offer"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
