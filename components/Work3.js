import FadeIn from "../animations/FadeIn";
import FadeUp from "../animations/FadeUp";

import {
  ExternalLinkIcon,
  ArrowNarrowRightIcon,
  ChevronRightIcon,
  ArrowRightIcon,
} from "@heroicons/react/outline";
import Link from "next/link";

export default function Work() {
  return (
    <section
      id="Work"
      className="flex flex-col justify-center h-screen px-12 py-20 md:px-24 lg:px-52 2xl:px-96 text-neutral-800 font-display"
    >
      <FadeUp>
        <div className="flex text-4xl font-semibold w-max md:text-5xl lg:text-5xl shadow-bottom md:shadow-bottom2 lg:shadow-bottom3 ">
          Work
        </div>
      </FadeUp>
      <FadeIn>
        <div className="flex flex-col justify-center">
          <Link href="/ptp" scroll={false}>
            <a>
              <div className="workcard ">
                <span className="pb-2 text-base md:text-2xl lg:text-3xl">
                  Pup To Pal
                </span>
                <div className="flex flex-row justify-between pt-2">
                  <p className="text-xs leading-loose tracking-widest ">
                    website/content creation
                  </p>
                  <ArrowRightIcon className="w-6 h-6 " />
                </div>
              </div>
            </a>
          </Link>
          <Link href="/mtc">
            <div className="workcard">
              <span className="pb-2 text-base md:text-2xl lg:text-3xl">
                Mason's Touch
              </span>
              <div className="flex flex-row justify-between pt-2">
                <p className="text-xs leading-loose tracking-widest">
                  website redesign/rebuild
                </p>
                <ArrowRightIcon className="w-6 h-6 " />
              </div>
            </div>
          </Link>

          <Link href="/port">
            <div className="workcard">
              <span className="pb-2 text-base md:text-2xl lg:text-3xl">
                Portfolio
              </span>
              <div className="flex flex-row justify-between pt-2">
                <p className="text-xs leading-loose tracking-widest">
                  website/content creation
                </p>
                <ArrowRightIcon className="w-6 h-6 " />
              </div>
            </div>
          </Link>
        </div>
      </FadeIn>
    </section>
  );
}
