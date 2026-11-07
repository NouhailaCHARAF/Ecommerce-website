import { useState } from "react";

export default function Contact() {
  const [success, setSuccess] = useState(false);
  return (
    <>
      <section className="bg-white px-6 py-20 text-slate-900 pt-64">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h1 className="text-5xl font-extrabold tracking-tight md:text-5xl">
              Contact Us
            </h1>
            <div className="mx-auto mb-12 mt-4 h-0.5 w-12 bg-[#a37962]" />
            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-600 md:text-lg pb-12">
              Have a question or need help? We are here for you. Send us a
              message and we will get back to you.
            </p>
          </div>

          <div className="grid gap-12 md:grid-cols-2 md:gap-20">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-widest text-yellow-700">
                Get In Touch
              </p>

              <h2 className="mb-8 text-3xl font-bold md:text-4xl">
                We'd Love to Hear From You
              </h2>

              <div className="space-y-6 text-lg text-gray-600">
                <div>
                  <h3 className="mb-2 font-bold text-slate-900">Email</h3>
                  <a
                    href="mailto:Charafnouhaila10@gmail.com"
                    className="text-red-700"
                  >
                    Charafnouhaila10@gmail.com
                  </a>
                </div>

                <div>
                  <h3 className="mb-2 font-bold text-slate-900">Phone</h3>
                  <p>+212 600 000 000</p>
                </div>

                <div>
                  <h3 className="mb-2 font-bold text-slate-900">
                    Customer Support
                  </h3>
                  <p>
                    We are happy to help with your orders, products, and any
                    questions you may have.
                  </p>
                </div>
              </div>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                e.currentTarget.reset();
                setSuccess(true);
              }}
              className="space-y-6"
            >
              <div>
                <label className="mb-2 block text-lg font-semibold">
                  Your Name *
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  required
                  className="w-full border border-gray-200 bg-[#f8f6f3] px-4 py-3 text-sm outline-none transition focus:border-[#a37962]"
                />
              </div>

              <div>
                <label className="mb-2 block text-lg font-semibold">
                  Your Email *
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="w-full border border-gray-200 bg-[#f8f6f3] px-4 py-3 text-sm outline-none transition focus:border-[#a37962]"
                />
              </div>

              <div>
                <label className="mb-2 block text-lg font-semibold">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="What is your message about?"
                  className="w-full border border-gray-200 bg-[#f8f6f3] px-4 py-3 text-sm outline-none transition focus:border-[#a37962]"
                />
              </div>

              <div>
                <label className="mb-2 block text-lg font-semibold">
                  Your Message *
                </label>
                <textarea
                  rows={5}
                  placeholder="Write your message here..."
                  required
                  className="w-full resize-y border border-gray-200 bg-[#f8f6f3] px-4 py-3 text-sm outline-none transition focus:border-[#a37962]"
                />
              </div>

              <button
                type="submit"
                className="bg-yellow-700 px-8 py-3 text-sm font-bold uppercase tracking-wider text-white transition hover:bg-yellow-800"
              >
                Send Message →
              </button>
              {success && (
                <div className="rounded-lg border border-green-200 bg-green-50 px-5 py-4 text-sm font-medium text-green-700">
                  ✓ Your message has been sent successfully!
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
      <section className="w-full bg-white py-16 md:py-24 font-sans text-slate-900">
        <div className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900">
            Useful Links
          </h2>
          <div className="mx-auto mb-12 mt-4 h-0.5 w-12 bg-[#a37962]" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 w-full">
            <div className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#f0e7df] text-[#a37962] transition duration-300 group-hover:-translate-y-2 group-hover:bg-[#a37962] group-hover:text-white group-hover:shadow-lg">
                <svg
                  className="h-9 w-9"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                >
                  <path d="m8 12 3 3a2 2 0 0 0 3 0l4-4" />
                  <path d="m2 9 5-5 4 2h4l7 6-3 3-4-3" />
                  <path d="m2 9 5 8a2 2 0 0 0 3 1l1-1" />
                  <path d="m14 17 1 1a2 2 0 0 0 3-1l1-2" />
                  <path d="m11 19 1 1a2 2 0 0 0 3-1" />
                </svg>
              </div>

              <h3 className="text-xl font-bold tracking-tight text-slate-900 my-2">
                Partnerships
              </h3>
              <p className="text-xs md:text-sm text-gray-500 mb-6">
                Interested in a partnership with us?
              </p>

              <a
                href="#apply"
                className="bg-yellow-700 hover:bg-yellow-800 text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded transition-all shadow-sm"
              >
                APPLY HERE
              </a>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#f0e7df] text-[#a37962] transition duration-300 group-hover:-translate-y-2 group-hover:bg-[#a37962] group-hover:text-white group-hover:shadow-lg">
                <svg
                  className="h-9 w-9"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path d="M9.5 9a2.5 2.5 0 1 1 4.2 1.8c-1.1 1-1.7 1.4-1.7 3" />
                  <path d="M12 17h.01" />
                </svg>
              </div>

              <h3 className="text-xl font-bold tracking-tight text-slate-900 my-2">
                FAQ
              </h3>
              <p className="text-xs md:text-sm text-gray-500 mb-6">
                Most questions can be answered here.
              </p>

              <a
                href="#faq"
                className="bg-yellow-700 hover:bg-yellow-800 text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded transition-all shadow-sm"
              >
                GO TO FAQ
              </a>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#f0e7df] text-[#a37962] transition duration-300 group-hover:-translate-y-2 group-hover:bg-[#a37962] group-hover:text-white group-hover:shadow-lg">
                <svg
                  className="h-9 w-9"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                >
                  <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
              </div>

              <h3 className="text-xl font-bold tracking-tight text-slate-900 my-2">
                Store Locations
              </h3>
              <p className="text-xs md:text-sm text-gray-500 mb-6">
                Find your nearest Electric Scooter store.
              </p>

              <a
                href="#stores"
                className="bg-yellow-700 hover:bg-yellow-800 text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded transition-all shadow-sm"
              >
                FIND STORE
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
