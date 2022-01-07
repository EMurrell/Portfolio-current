import Image from "next/image";
import Link from "next/link";
import FadeLeft from "../animations/FadeLeft.js";

export default function About() {
  return (
    <section
      id="About"
      className="relative flex flex-col justify-center w-full px-8 py-8 mb-6 h-96 font-display "
    >
      <div className="absolute z-10 w-2/3 md:text-lg lg:pl-20 2xl:pl-32 ">
        <FadeLeft>
          <p className="py-4 text-lg font-normal md:text-xl lg:text-2xl">
            I am a Full Stack Web Developer, with a focus on modern Jamstack
            architecture. I have a passion for developing engaging digital
            experiences through the use of animations, micro-interactions, and a
            clean user interface.
            <br />
            <br />I live in Ottawa, Canada.
          </p>
        </FadeLeft>
      </div>
      <div className="absolute pb-24 font-semibold text-right text-cyan-800 md:pb-0 drop-shadow opacity-30 text-7xl md:text-9xl right-8 md:right-20 lg:right-36 2xl:right-44 ">
        ABOUT <br /> ME
      </div>
    </section>
  );
}
