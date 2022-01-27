import FadeRight from "../animations/FadeRight";
import FadeUp from "../animations/FadeUp";
import FadeIn from "../animations/FadeIn";
import Arrow from "../components/Arrow";

import Link from "next/link";

export default function Work() {
  return (
    <section
      id="Work"
      className="flex flex-col items-center w-full px-12 md:px-16 lg:px-32 2xl:px-64 bg-neutral-900 text-neutral-100 font-display"
    >
      <hr className="w-full mb-24 opacity-50" />
      <FadeRight>
        <span className="flex mb-4 text-5xl font-medium text-center md:text-6xl lg:text-7xl">
          Work
        </span>
      </FadeRight>
      <div className="pt-4">
        <FadeRight>
          <Link href={"/mtc"} passHref>
            <div className="flex flex-col px-2 py-8 transition duration-300 ease-in-out transform cursor-pointer hover:scale-105 hover:text-highlight ">
              <h3 className="text-2xl md:text-3xl lg:text-4xl ">
                Mason&apos;s Touch Construction
              </h3>
              <p className="text-lg font-light text-neutral-100 md:text-xl lg:text-2xl font-body">
                Website Redesign/Rebuild
              </p>

              <Arrow />
            </div>
          </Link>
        </FadeRight>
        <FadeRight>
          <Link href={"/ptp"} passHref>
            <div className="flex flex-col py-8 transition duration-300 ease-in-out transform cursor-pointer hover:scale-105 hover:text-highlight">
              <h3 className="text-2xl md:text-3xl lg:text-4xl">Pup To Pal</h3>
              <p className="text-lg font-light text-neutral-100 md:text-xl lg:text-2xl font-body">
                Website/Content Creation
              </p>

              <Arrow />
            </div>
          </Link>
        </FadeRight>
        <FadeRight>
          <Link href={"/port"} passHref>
            <div className="flex flex-col py-8 transition duration-300 ease-in-out transform cursor-pointer hover:scale-105 hover:text-highlight">
              <h3 className="text-2xl md:text-3xl lg:text-4xl">Portfolio</h3>
              <p className="text-lg font-light text-neutral-100 md:text-xl lg:text-2xl font-body">
                Website/Content Creation
              </p>

              <Arrow />
            </div>
          </Link>
        </FadeRight>
      </div>
    </section>
  );
}
