import { motion } from "framer-motion";
import Nav from "./Nav";
import Meta from "./Meta";
import FadeUp from "../animations/FadeUp";
import { Github, Devdotto, Twitter } from "@icons-pack/react-simple-icons";
import { MailIcon, ChevronDownIcon } from "@heroicons/react/outline";
import DelayedFadeIn from "../animations/DelayedFadeIn";
import Link from "next/link";
import Head from "next/head";

export default function Header() {
  return (
    <section
      id="Home"
      className="flex flex-col w-full h-screen px-6 pt-20 bg-center bg-cover bg-hero bg-neutral-900 text-neutral-100 font-display md:px-10 lg:px-20 xl:px-28 "
    >
      <main className="flex flex-col justify-center w-full h-screen font-medium tracking-tight pb-28 md:tracking-normal md:pb-16">
        <motion.h1
          className="flex flex-col pt-12 pr-4 text-5xl md:text-6xl lg:text-8xl "
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              scale: 1,
              opacity: 0,
              y: 15,
            },
            visible: {
              scale: 1,
              opacity: 1,
              y: 0,

              transition: {
                delay: 0.5,
                duration: 0.5,
                type: "tween",
              },
            },
          }}
        >
          Hello, I&apos;m Eric.
        </motion.h1>

        <motion.h3
          className="flex flex-col text-5xl md:text-6xl lg:text-8xl "
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
                delay: 1.4,
                duration: 0.5,
                type: "tween",
              },
            },
          }}
        >
          I build fast websites.
        </motion.h3>
        <DelayedFadeIn>
          <Link href={"/#Contact"} passHref>
            <button className="p-2 mt-5 text-lg font-normal bg-transparent border-2 shadow-lg cursor-pointer hover:text-black w-36 lg:p-3 text-highlight lg:mt-8 lg:ml-1 lg:w-60 lg:text-2xl border-highlight hover:bg-highlight">
              Contact Me
            </button>
          </Link>
        </DelayedFadeIn>
        <DelayedFadeIn>
          <div className="absolute bottom-0 inset-x-1/2">
            <ChevronDownIcon className="w-8 h-8 -ml-4 ease-in delay-75 animate-bounce" />
          </div>
        </DelayedFadeIn>
      </main>
    </section>
  );
}
