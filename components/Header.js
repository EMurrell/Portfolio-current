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
      className="flex flex-col w-full h-screen px-6 pt-16 bg-center bg-cover bg-hero bg-neutral-900 text-neutral-100 font-display md:px-10 lg:px-20 xl:px-28 "
    >
      <main className="flex flex-col justify-center w-full h-screen font-medium tracking-tight lg:text-center pb-28 md:tracking-normal md:pb-16">
        <motion.h1
          className="flex flex-col pt-12 pr-4 text-5xl md:text-6xl lg:text-7xl "
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
          Hello,
          <br className="md:hidden" /> I&apos;m Eric.
        </motion.h1>

        <motion.h3
          className="flex flex-col mt-2 text-3xl md:text-4xl lg:text-6xl"
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
          I build for the web.
        </motion.h3>
        <DelayedFadeIn>
          <Link href={"/#Contact"} passHref>
            <button className="px-6 py-2 mt-5 text-lg font-medium text-black border-2 shadow-lg cursor-pointer lg:px-10 hover:bg-transparent lg:p-3 hover:text-highlight lg:mt-8 lg:ml-1 border-highlight bg-highlight">
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
