import FadeUp from "../animations/FadeUp.js";

export default function Example() {
  return (
    <div className="py-16 bg-white lg:py-24 ">
      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 ">
        <div className="relative px-8 py-24 overflow-hidden shadow-lg bg-neutral-800 shadow-neutral-500 lg:px-16 lg:grid lg:grid-cols-2 lg:gap-x-8">
          <div className="absolute inset-0 bg-black opacity-50 filter saturate-0 mix-blend-multiply">
            <img
              src="/techicons.avif"
              alt=""
              className="object-contain w-full h-full "
            />
          </div>
          <div className="relative lg:col-span-1">
            <img className="w-auto h-12" src="" alt="" />
            <blockquote className="mt-6 text-white">
              <p className="text-xl font-medium sm:text-2xl">
                Workflow has completely transformed how we interact with
                customers. We've seen record bookings, higher customer
                satisfaction, and reduced churn.
              </p>
              <footer className="mt-6">
                <p className="flex flex-col font-medium">
                  <span>Marie Chilvers</span>
                  <span>CEO, Workcation</span>
                </p>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
}
