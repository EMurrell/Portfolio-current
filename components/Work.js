import FadeIn from "../animations/FadeIn";
import FadeUp from "../animations/FadeUp";
import FadeRight from "../animations/FadeRight";
import { ArrowNarrowRightIcon } from "@heroicons/react/outline";
import Link from "next/link";

export default function Work() {
  return (
    <section
      id="Work"
      className="flex flex-col items-center min-h-screen px-12 py-20 font-medium text-neutral-800 font-display"
    >
      <FadeRight>
        <span className="flex mb-6 text-4xl w-max md:text-5xl lg:text-5xl shadow-bottom md:shadow-bottom2 lg:shadow-bottom3">
          Work Projects
        </span>
      </FadeRight>
      <div className="pt-4">
        <FadeIn>
          <Link href={"/mtc"} passHref>
            <div className="flex flex-col px-2 py-8 transition duration-300 ease-in-out transform cursor-pointer hover:scale-105 hover:text-highlight ">
              <h3 className="text-2xl md:text-3xl lg:text-4xl ">
                Mason&apos;s Touch Construction
              </h3>
              <p className="text-lg text-black md:text-xl lg:text-2xl font-body">
                Website Redesign/Rebuild
              </p>

              <ArrowNarrowRightIcon className="w-6 h-6 text-neutral-700 lg:w-10 lg:h-10 md:w-8 md:h-8" />
            </div>
          </Link>
        </FadeIn>
        <FadeIn>
          <Link href={"/ptp"} passHref>
            <div className="flex flex-col py-8 transition duration-300 ease-in-out transform cursor-pointer hover:scale-105 hover:text-highlight">
              <h3 className="text-2xl md:text-3xl lg:text-4xl">Pup To Pal</h3>
              <p className="text-lg text-black md:text-xl lg:text-2xl font-body">
                Website/Content Creation
              </p>

              <ArrowNarrowRightIcon className="w-6 h-6 text-neutral-700 lg:w-10 lg:h-10 md:w-8 md:h-8" />
            </div>
          </Link>
        </FadeIn>
        <FadeIn>
          <Link href={"/port"} passHref>
            <div className="flex flex-col py-8 transition duration-300 ease-in-out transform cursor-pointer hover:scale-105 hover:text-highlight">
              <h3 className="text-2xl md:text-3xl lg:text-4xl">Portfolio</h3>
              <p className="text-lg text-black md:text-xl lg:text-2xl font-body">
                Website/Content Creation
              </p>

              <ArrowNarrowRightIcon className="w-6 h-6 text-neutral-700 lg:w-10 lg:h-10 md:w-8 md:h-8" />
            </div>
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
