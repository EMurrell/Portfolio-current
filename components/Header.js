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
      className="flex flex-col w-full h-screen px-2 pt-20 bg-center bg-cover bg-neutral-800 text-neutral-100 bg-hero font-display md:px-10 lg:px-20 xl:px-28 "
    >
      <main className="flex flex-col justify-center h-screen font-semibold tracking-tight text-center pb-28 md:tracking-normal md:pb-16">
        <FadeUp>
          <h1 className="flex flex-col pt-10 text-4xl md:text-6xl lg:text-7xl 2xl:text-8xl">
            Hello, I&apos;m Eric.
          </h1>
        </FadeUp>
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
                delay: 1,
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
            <button className="w-40 p-2 mt-5 text-lg font-normal text-white border-2 shadow-lg cursor-pointer lg:p-3 hover:bg-neutral-800 hover:text-highlight lg:mt-8 lg:w-64 lg:text-2xl border-highlight shadow-neutral-900 bg-highlight">
              Contact Me
            </button>
          </Link>
        </DelayedFadeIn>
      </main>
    </section>
  );
}
