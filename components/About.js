import FadeIn from "../animations/FadeIn";
import FadeUp from "../animations/FadeUp";
import FadeRight from "../animations/FadeRight";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Bio() {
  return (
    <section
      id="About"
      className="flex flex-col px-12 py-20 bg-center bg-no-repeat bg-contain bg-devices md:py-36 md:px-24 lg:px-52 2xl:px-96 text-neutral-800 font-display"
    >
      <FadeRight>
        <span className="flex text-4xl font-medium w-max md:text-5xl shadow-bottom md:shadow-bottom2 lg:shadow-bottom3">
          About Me
        </span>
      </FadeRight>

      <div className="pt-16 text-xl font-medium md:text-2xl font-body">
        <FadeIn>
          <p className="py-4">
            I am a Full Stack Web Developer, with a focus on Jamstack
            technology.
          </p>
        </FadeIn>
        <FadeIn>
          <p className="py-4">
            I have a passion for creating engaging digital experiences through
            the use of animations, micro-interactions, and a clean user
            interface.
          </p>
        </FadeIn>
        <FadeIn>
          <p className="py-4">
            Responsive, pixel-perfect design and ultra-fast load times are among
            my top priorities for every website I develop.
            <p className="py-6"> I live in Ottawa, Canada.</p>
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
