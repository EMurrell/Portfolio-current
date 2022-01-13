import Link from "next/link";
import Head from "next/head";
import Meta from "../components/Meta";
import FadeIn from "../animations/FadeIn";

export default function Mtc() {
  return (
    <>
      <Meta />
      <section
        id="mtc"
        className="w-full min-h-screen px-5 pt-4 pb-24 tracking-wide font-display text-neutral-100 md:pt-8 md:px-12 lg:px-24 2xl:px-32 bg-neutral-800"
      >
        <div className="inline-flex justify-between w-full pt-2 mt-2 text-xs border-t-2 border-neutral-100 md:text-base ">
          <p>Mason&apos;s Touch</p>
          <p>Case Study</p>
        </div>
        <FadeIn>
          <div className="flex flex-col">
            <div className="flex pt-12 lg:pt-24">
              <h3 className="pr-16 text-xl font-semibold md:text-2xl lg:text-3xl md:pr-96">
                Mason&apos;s Touch is a masonry and foundation repair business
                in Ottawa, ON.
              </h3>
            </div>
            <div className="inline-flex justify-center py-4 md:justify-end ">
              <button className="p-2 mt-6 text-lg font-normal text-white border-2 shadow-lg cursor-pointer w-44 md:w-72 lg:p-3 hover:bg-neutral-800 hover:text-highlight lg:mt-8 lg:w-64 lg:text-2xl border-highlight shadow-neutral-900 bg-highlight">
                <a
                  className="text-base md:text-lg lg:text-xl "
                  href="https://masonstouch.com"
                >
                  Visit Website
                </a>
              </button>
            </div>
            <div className="flex flex-col md:flex-row font-body ">
              <div className="pr-10 text-lg lg:w-1/2 md:w-2/3 md:text-xl lg:text-2xl">
                <p className="pb-6 lg:pb-12">
                  Brief:
                  <br /> Redesign/develop a modern website to replace an
                  outdated and unresponsive site.
                </p>
                <p>
                  Tools:
                  <br />
                  Next.js (React), Tailwind CSS / UI, Framer-Motion, HeadlessUI,
                  Affinity Photo.
                </p>
              </div>
              <div className="flex justify-center rounded lg:justify-end lg:w-1/2 ">
                <a href="https://masonstouch.com">
                  <img
                    src="/mtcsquare.jpg"
                    alt="picture of website"
                    width="300"
                    height="auto"
                    className="px-6 py-20 transition duration-300 ease-in-out transform md:p-0 hover:scale-105"
                  />
                </a>
              </div>
            </div>
            <Link href="/#Work">
              <p className="text-center cursor-pointer md:w-40 md:text-left 2xl:text-xl hover:text-highlight">
                &larr;Go Back
              </p>
            </Link>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
