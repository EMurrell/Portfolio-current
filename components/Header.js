import { motion } from "framer-motion";
import Nav from "./Nav";
import Meta from "./Meta";
import FadeUp from "../animations/FadeUp";
import { Github, Devdotto, Twitter } from "@icons-pack/react-simple-icons";
import { MailIcon, ChevronDownIcon } from "@heroicons/react/outline";
import DelayedFadeIn from "../animations/DelayedFadeIn";

const line1 = "Hello, I'm Eric.";

const headline = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const letter = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,

    y: 0,
  },
};

export default function Header() {
  return (
    <section
      id="Home"
      className="flex flex-col w-full h-screen px-2 text-neutral-900 font-display md:px-10 lg:px-20 xl:px-28 "
    >
      <DelayedFadeIn>
        <Nav />
      </DelayedFadeIn>

      <main className="flex flex-col justify-center h-screen font-bold tracking-tight text-center pb-28 md:tracking-normal md:pb-16">
        <motion.h1 variants={headline} initial="hidden" animate="visible">
          {line1.split("").map((char, index) => {
            return (
              <motion.span
                key={char + "-" + index}
                variants={letter}
                className="text-4xl md:text-6xl lg:text-7xl 2xl:text-8xl"
              >
                {char}
              </motion.span>
            );
          })}
        </motion.h1>

        <motion.h3
          className="flex flex-col pt-2 text-3xl md:text-6xl lg:text-7xl 2xl:text-8xl"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              scale: 1,
              opacity: 0,
            },
            visible: {
              scale: 1,
              opacity: 1,

              transition: {
                delay: 1.8,
                duration: 0.5,
              },
            },
          }}
        >
          I build fast websites.
        </motion.h3>
        <DelayedFadeIn>
          <button className="w-40 p-2 mt-6 text-lg font-normal text-white border-2 rounded-sm shadow-lg cursor-pointer lg:p-3 hover:bg-white hover:text-cyan-800 lg:mt-8 lg:w-64 lg:text-2xl border-cyan-800 shadow-neutral-400 bg-cyan-800">
            Contact Me
          </button>
        </DelayedFadeIn>
      </main>
    </section>
  );
}
