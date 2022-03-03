import Link from "next/link";
import Head from "next/head";
import Meta from "../components/Meta";
import FadeIn from "../animations/FadeIn";

export default function Port() {
  return (
    <>
      <Meta />
      <section
        id="port"
        className="w-full min-h-screen px-5 pt-4 pb-24 tracking-wide font-display bg-neutral-800 text-neutral-100 md:pt-8 md:px-12 lg:px-24 2xl:px-32"
      >
        <div className="inline-flex justify-between w-full pt-2 mt-2 text-xs border-t-2 border-neutral-100 md:text-base ">
          <p>Professional Portfolio</p>
          <p>Case Study</p>
        </div>
        <FadeIn>
          <div className="flex flex-col">
            <div className="flex pt-12 lg:pt-24">
              <h3 className="pr-16 text-xl font-semibold md:text-2xl lg:text-3xl md:pr-96">
                A portfolio website to showcase my skills and work projects.
              </h3>
            </div>
            <div className="inline-flex justify-center py-4 md:justify-end ">
              <button className="p-2 mt-6 text-lg font-normal text-white border-2 shadow-lg cursor-pointer w-44 md:w-72 lg:p-3 hover:bg-neutral-800 hover:text-highlight lg:mt-8 lg:w-64 lg:text-2xl border-highlight shadow-neutral-900 bg-highlight">
                <a
                  className="text-base md:text-lg lg:text-xl "
                  href="https://emurrell.com"
                >
                  VISIT WEBSITE&nbsp;
                </a>
              </button>
            </div>
            <div className="flex flex-col md:flex-row font-body">
              <div className="pr-10 text-lg md:text-xl lg:text-2xl">
                <p className="pb-6 lg:pb-12">
                  Brief:
                  <br /> I saught to create a portfolio site that would
                  challenge my skill levels for both design and development. My
                  approach was to incorporate elements of minimalism, bold
                  typography, and orchestrated animations.
                </p>
                <p>
                  Tools:
                  <br />
                  Next.js (React), Tailwind CSS, Framer-Motion, Affinity Photo.
                </p>
              </div>
            </div>
            <Link href="/#Work" passHref>
              <p className="mt-12 text-center cursor-pointer md:w-40 md:text-left 2xl:text-xl hover:text-highlight">
                &larr;Go Back
              </p>
            </Link>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
