import Image from "next/image";

export default function ContactUs() {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:items-center md:gap-8">
          <div className="md:col-span-2">
            <img
              src="/large-card-contact-us.jpg.webp"
              className="rounded z-0 h-[60vh]"
              alt=""
            ></img>
          </div>

          <div className="md:col-span-2 h-full">
            <div className="max-w-lg md:max-w-none h-full py-0 md:py-12 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                  Get special offers, and more from Traveler
                </h2>

                <p className="mt-4 text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tenetur doloremque saepe architecto maiores repudiandae amet
                  perferendis repellendus, reprehenderit voluptas sequi.
                </p>
              </div>

              <a
                href="#"
                className="mt-8 inline-block rounded w-full text-center  bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Get Started Today
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
