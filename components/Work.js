import FadeIn from "../animations/FadeIn";
import FadeUp from "../animations/FadeUp";
import { ArrowNarrowRightIcon } from "@heroicons/react/outline";

export default function Work() {
  return (
    <section
      id="About"
      className="flex flex-col items-center min-h-screen px-12 py-20 text-neutral-800 font-display"
    >
      <FadeUp>
        <span className="flex mb-6 text-4xl font-medium w-max md:text-5xl lg:text-5xl shadow-bottom md:shadow-bottom2 lg:shadow-bottom3">
          Work Projects
        </span>
      </FadeUp>
      <div className="flex-start">
        <FadeIn>
          <div className="flex flex-col py-8 font-medium transition duration-300 ease-in-out transform cursor-pointer hover:scale-105 hover:text-highlight">
            <h3 className="text-2xl md:text-3xl lg:text-4xl">
              Mason&apos;s Touch Construction
            </h3>
            <p className="text-lg md:text-xl lg:text-2xl">
              Website Redesign / Rebuild
            </p>

            <ArrowNarrowRightIcon className="w-6 h-6 " />
          </div>
        </FadeIn>
        <FadeIn>
          <div className="flex flex-col py-8 font-medium transition duration-300 ease-in-out transform cursor-pointer hover:scale-105 hover:text-highlight">
            <h3 className="text-2xl md:text-3xl lg:text-4xl">Pup To Pal</h3>
            <p className="text-lg md:text-xl lg:text-2xl">
              Website / Content Creation
            </p>

            <ArrowNarrowRightIcon className="w-6 h-6 " />
          </div>
        </FadeIn>
        <FadeIn>
          <div className="flex flex-col py-8 font-medium transition duration-300 ease-in-out transform cursor-pointer hover:scale-105 hover:text-highlight">
            <h3 className="text-2xl md:text-3xl lg:text-4xl">Portfolio</h3>
            <p className="text-lg md:text-xl lg:text-2xl">
              Website / Content Creation
            </p>

            <ArrowNarrowRightIcon className="w-6 h-6 " />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
