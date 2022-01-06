import FadeUp from "../animations/FadeUp.js";

export default function Example() {
  return (
    <div className="py-16 bg-white lg:py-24 font-display">
      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 ">
        <div className="relative px-8 py-24 overflow-hidden shadow-lg bg-neutral-800 shadow-neutral-500 lg:px-16 lg:grid lg:grid-cols-2 lg:gap-x-8">
          <div className="absolute inset-0 bg-black opacity-50 filter saturate-0 mix-blend-multiply">
            <img
              src="/techicons.avif"
              alt=""
              className="object-cover w-full h-full "
            />
          </div>
          <div className="relative lg:col-span-1">
            <img className="w-auto h-12" src="" alt="" />
            <div className="flex flex-row mt-6 text-xl font-medium text-white sm:text-2xl">
              <div className="flex flex-col">
                <p className="">HTML</p>
                <p className="">CSS</p>
                <p className="">Javascript</p>
                <p className="">React</p>
                <p className="">Github</p>
                <p className="">Vercel</p>
              </div>
              <div className="flex flex-col">
                <p className="">Next.js</p>
                <p className="">TailwindCSS</p>
                <p className="">Framer-Motion</p>
                <p className="">Node.js</p>
                <p className="">Netlify</p>
                <p className="">VSCode</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
