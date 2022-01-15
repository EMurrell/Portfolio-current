import Link from "next/link";
import { Github, Devdotto, Twitter } from "@icons-pack/react-simple-icons";
import { MailIcon, ArrowNarrowRightIcon } from "@heroicons/react/outline";
import FadeIn from "../animations/FadeIn";
import FadeUp from "../animations/FadeUp";
import { Framer, Nextdotjs, Tailwindcss } from "@icons-pack/react-simple-icons";

export default function Contact() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };
  return (
    <footer
      id="Contact"
      className="flex flex-col justify-around px-12 pt-10 xl:h-auto md:px-24 lg:px-52 text-neutral-100 bg-neutral-800 font-display"
    >
      <div className="flex flex-col py-20 2xl:py-20 lg:flex-row ">
        <FadeUp>
          <h1 className="pr-6 mb-12 text-4xl font-medium md:text-5xl lg:text-6xl lg:w-1/2">
            Let&apos;s Work <br />
            Together.
          </h1>
        </FadeUp>
        <FadeIn>
          <div className="flex flex-col text-base text-left 2xl:flex-row lg:text-lg">
            <a href="mailto:emurrell.dev@gmail.com">
              <div className="flex flex-col mb-6 transition duration-300 ease-in-out transform cursor-pointer lg:mx-6 h-max w-max hover:shadow-bottom">
                <h2 className="flex flex-row w-max">
                  Email &nbsp;
                  <ArrowNarrowRightIcon className="w-4 h-4 mt-1 lg:h-5 md:h-5" />
                </h2>
                <p className=" text-neutral-500 font-body">
                  emurrell.dev@gmail.com
                </p>
              </div>
            </a>
            <a href="https://github.com/EMurrell">
              <div className="flex flex-col mb-6 transition duration-300 ease-in-out transform cursor-pointer lg:mx-6 h-max w-max hover:shadow-bottom">
                <h2 className="flex flex-row w-max">
                  Github &nbsp;
                  <ArrowNarrowRightIcon className="w-4 h-4 mt-1 lg:h-5 md:h-5" />
                </h2>
                <p className=" text-neutral-500 font-body">
                  github.com/EMurrell
                </p>
              </div>
            </a>
            <a href="https://twitter.com/emurrelldev">
              <div className="flex flex-col mb-6 transition duration-300 ease-in-out transform cursor-pointer lg:mx-6 h-max w-max hover:shadow-bottom">
                <h2 className="flex flex-row w-max">
                  Twitter &nbsp;
                  <ArrowNarrowRightIcon className="w-4 h-4 mt-1 lg:h-5 md:h-5" />
                </h2>
                <p className=" text-neutral-500 font-body">
                  twitter.com/emurrelldev
                </p>
              </div>
            </a>
          </div>
        </FadeIn>
      </div>
      <div className="flex flex-col justify-center py-12 text-base text-center border-t border-neutral-500 lg:text-lg text-neutral-500">
        <div className="flex flex-row justify-center pb-1">
          Built with&nbsp;
          <Nextdotjs className="w-6 h-6 mx-2" />
          <Tailwindcss className="w-6 h-6 mx-2" />
          <Framer className="w-6 h-6 mx-2" />
        </div>
        <div className="flex flex-row justify-center pb-1">
          SVG Background by&nbsp;
          <a href="https://bgjar.com">
            <u>BGJar.com</u>
          </a>
        </div>
        &copy; {getCurrentYear()}
      </div>
    </footer>
  );
}
