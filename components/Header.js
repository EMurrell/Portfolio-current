import { motion } from "framer-motion";
import Nav from "./Nav";
import Meta from "./Meta.js";
import FadeUp from "../animations/FadeUp";
import { Github, Devdotto, Twitter } from "@icons-pack/react-simple-icons";
import { MailIcon } from "@heroicons/react/outline";

const line1 = "Hello, ";
const line2 = "I'm Eric.";
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
      className="flex flex-col w-full h-screen px-2 tracking-wide font-display text-neutral-100 bg-neutral-900 md:px-10 lg:px-20 xl:px-28 bg-"
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            scale: 1,
            opacity: 0,
            y: -50,
          },
          visible: {
            scale: 1,
            opacity: 1,
            y: 0,
            transition: {
              delay: 2,
              duration: 0.5,
            },
          },
        }}
      >
        <Nav />
      </motion.div>
      <main className="flex flex-col justify-center flex-1 h-screen pb-20 pl-5 font-semibold lg:leading-loose md:pl-12 lg:pl-16">
        <motion.h3 variants={headline} initial="hidden" animate="visible">
          {line1.split("").map((char, index) => {
            return (
              <motion.span
                key={char + "-" + index}
                variants={letter}
                className="text-xl font-bold tracking-wide md:text-2xl lg:text-3xl 2xl:text-4xl"
              >
                {char}
              </motion.span>
            );
          })}
          {line2.split("").map((char, index) => {
            return (
              <motion.span
                key={char + "-" + index}
                variants={letter}
                className="text-2xl font-bold tracking-wide md:text-4xl lg:text-5xl 2xl:text-6xl"
              >
                {char}
              </motion.span>
            );
          })}
        </motion.h3>
        <motion.h1
          className="flex flex-col pt-2 text-lg md:text-3xl lg:text-4xl 2xl:text-5xl"
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
                delay: 1.5,
                duration: 0.5,
              },
            },
          }}
        ></motion.h1>

        <motion.p
          className="flex flex-col pt-2 text-lg md:text-3xl lg:text-4xl 2xl:text-5xl"
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
                delay: 1.5,
                duration: 0.5,
              },
            },
          }}
        >
          I build websites.
        </motion.p>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              scale: 1,
              opacity: 0,
              y: 0,
            },
            visible: {
              scale: 1,
              opacity: 1,
              y: 0,
              transition: {
                delay: 2.6,
                duration: 0.5,
              },
            },
          }}
        >
          <a>
            <button className="w-32 p-2 mt-4 text-sm font-medium tracking-wide text-white border-2 border-white cursor-pointer font-body hover:border-teal-400 hover:text-neutral-800 hover:bg-teal-400 lg:mt-6 lg:w-60 lg:text-lg ">
              CONTACT ME
            </button>
          </a>
        </motion.div>
      </main>
    </section>
  );
}
