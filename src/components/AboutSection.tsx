export default function AboutSection() {
  return (
    <>
      <section className="relative flex min-h-[65vh] items-center bg-white px-6 pt-20">
        <div className="mx-auto w-full max-w-6xl text-center">
          <h1 className="mb-8 text-3xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
            About Us
          </h1>
          <div className="mx-auto mb-12 mt-4 h-0.5 w-12 bg-[#a37962]" />

          <p className="mx-auto max-w-4xl text-xl font-bold leading-snug text-slate-900 md:text-3xl ">
            The joy of easy and hassle-free shopping, with everything you need
            in one place, inspired us to start this business.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 pb-16 md:pb-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <div>
            <p className="mb-3 font-semibold text-[#a37962]">A Few Words</p>

            <h2 className="mb-6 text-3xl font-bold md:text-4xl">Our Story</h2>

            <p className="mb-4 leading-7 text-gray-500">
              We created our store to make shopping simple, convenient, and
              enjoyable. Discover a variety of products selected to meet your
              everyday needs.
            </p>

            <p className="leading-7 text-gray-500">
              Our goal is to offer quality products, fair prices, and a smooth
              shopping experience for every customer.
            </p>
          </div>

          <img
            src="/src/assets/store.webp"
            alt="Our store"
            className="h-[400px] w-full object-cover md:h-[480px]"
          />
        </div>
      </section>

      <section className="bg-[#f8f6f3] px-6 py-20 text-center">
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#a37962]">
            We Value Our Customers
          </p>

          <h2 className="mb-6 text-3xl font-bold md:text-5xl">
            Your Satisfaction Is Our Priority
          </h2>
          <div className="mx-auto mb-12 mt-4 h-0.5 w-12 bg-[#a37962]" />

          <p className="leading-7 text-gray-500">
            We believe that great shopping starts with great service. We want
            every customer to enjoy a simple, reliable, and comfortable shopping
            experience.
          </p>
        </div>
      </section>
      <section
        className="h-[550px] w-full bg-fixed bg-cover bg-center md:h-[650px]"
        style={{
          backgroundImage: "url('src/assets/our_story.webp')",
        }}
      >
        <div className="h-full w-full bg-black/20" />
      </section>
    </>
  );
}
