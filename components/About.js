import FadeIn from "../animations/FadeIn";
import FadeUp from "../animations/FadeUp";
import FadeRight from "../animations/FadeRight";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Bio() {
  return (
    <section
      id="About"
      className="flex flex-col px-12 py-20 md:py-36 md:px-24 lg:px-52 2xl:px-96 text-neutral-800 font-display"
    >
      <FadeRight>
        <span className="flex text-4xl font-medium w-max md:text-5xl shadow-bottom md:shadow-bottom2 lg:shadow-bottom3">
          About Me
        </span>
      </FadeRight>
      <FadeIn>
        <p className="pt-16 text-xl md:text-2xl font-body">
          I am a Full Stack Web Developer, with a focus on Jamstack technology.
          <br />
          <br />I have a passion for creating engaging digital experiences
          through the use of animations, micro-interactions, and a clean user
          interface.
          <br />
          <br />I live in Ottawa, Canada.
        </p>
      </FadeIn>
    </section>
  );
}
