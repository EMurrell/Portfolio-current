/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import Link from "next/link";
import Nav from "./Nav.js";
import Meta from "./Meta.js";
import FadeUp from "../animations/FadeUp";
import DelayedFadeIn from "../animations/DelayedFadeIn.js";
import { Github, Devdotto, Twitter } from "@icons-pack/react-simple-icons";
import { MailIcon } from "@heroicons/react/outline";

export default function Hero() {
  return (
    <main className="shadow-md shadow-neutral-500 bg-neutral-800">
      <Nav />
      <div className="relative h-screen mb-8 tracking-wide font-display">
        <div className="absolute inset-0">
          {/* <img
            className="object-cover w-full h-screen"
            src="/wave-grey.avif"
            alt="background"
          /> */}
          {/* <div
            className="absolute inset-0 bg-neutral-100 mix-blend-multiply"
            aria-hidden="true"
          /> */}
        </div>
        <div className="relative justify-center px-6 mx-auto max-w-7xl md:px-16 ">
          <FadeUp>
            <h1 className="pt-64 text-4xl font-semibold text-neutral-200 md:text-5xl lg:text-6xl 2xl:text-7xl">
              Hello, I'm Eric.
            </h1>
          </FadeUp>
          <DelayedFadeIn>
            <h3 className="mt-2 text-2xl font-semibold text-neutral-200 md:text-3xl lg:text-4xl 2xl:text-5xl">
              I develop fast websites.
            </h3>

            <Link href="/menu">
              <button className="px-8 py-2 mt-6 text-xl font-normal border-2 text-neutral-100 hover:bg-neutral-100 hover:border-neutral-100 hover:text-black">
                CONTACT ME
              </button>
            </Link>
          </DelayedFadeIn>
        </div>
      </div>
    </main>
  );
}
