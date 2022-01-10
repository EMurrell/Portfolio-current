import FadeIn from "../animations/FadeIn";
import FadeUp from "../animations/FadeUp";

export default function Bio() {
  return (
    <section
      id="About"
      className="flex flex-col justify-center h-screen px-12 py-20 md:px-24 lg:px-52 2xl:px-96 text-neutral-800 font-display"
    >
      <FadeUp>
        <span className="flex text-4xl font-semibold w-max md:text-5xl lg:text-5xl shadow-bottom md:shadow-bottom2 lg:shadow-bottom3">
          About Me
        </span>
      </FadeUp>
      <FadeIn>
        <p className="pt-16 text-xl md:text-2xl">
          I am a Full Stack Web Developer, with a focus on Jamstack technology.
          <br />
          <br />I have a passion for developing engaging digital experiences
          through the use of animations, micro-interactions, and a clean user
          interface.
          <br />
          <br />I live in Ottawa, Canada.
        </p>
      </FadeIn>
    </section>
  );
}
