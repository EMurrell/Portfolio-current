import FadeIn from "../animations/FadeIn";
import FadeUp from "../animations/FadeUp";
import FadeRight from "../animations/FadeRight";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Bio() {
  return (
    <section
      id="About"
      className="flex flex-col px-12 py-16 md:py-36 md:px-24 lg:px-60 2xl:px-80 text-neutral-800 font-display "
    >
      <FadeRight>
        <div className="flex lg:justify-center">
          <span className="text-4xl font-medium w-max md:text-5xl shadow-bottom md:shadow-bottom2 lg:shadow-bottom3">
            About
          </span>
        </div>
      </FadeRight>

      <div className="pt-8 text-xl font-normal lg:text-center md:text-2xl ">
        <FadeIn>
          <p className="py-4">
            I am a Full Stack Web Developer, with a focus on Jamstack
            technology.
          </p>
        </FadeIn>
        <FadeIn>
          <p className="pb-10 md:pb-20">
            I have a passion for creating engaging digital products.
          </p>
        </FadeIn>

        <div className="flex flex-col justify-center py-4 lg:flex-row ">
          <FadeIn>
            <div className="flex flex-col items-center pb-12 text-center lg:pb-0 lg:px-12">
              <span className="pb-2 text-2xl font-medium md:text-3xl">
                Responsive
              </span>
              <Image
                src="/resp-dev.png"
                alt="picture of multiple devices"
                width={200}
                height={120}
                className=" opacity-80"
                layout="fixed"
              />
              <p className="pt-4 text-base md:text-lg lg:text-xl">
                Pixel-perfect layout on all devices. Mobile-first design
                approach.
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="flex flex-col items-center px-4 pb-12 text-center lg:pb-0 lg:px-12 ">
              <span className="pb-2 text-2xl font-medium md:text-3xl">
                Fast
              </span>
              <Image
                src="/speedometer.png"
                alt="picture of speedometer"
                width={200}
                height={120}
                className=" opacity-80"
                layout="fixed"
              />
              <p className="w-full pt-4 pb-8 text-base md:text-lg lg:text-xl">
                Ultra-fast load times are an essential aspect of every project.
              </p>
            </div>
          </FadeIn>
          <FadeIn>
            <div className="flex flex-col items-center px-4 pb-12 text-center lg:pb-0 lg:px-12 ">
              <span className="pb-2 text-2xl font-medium md:text-3xl">
                Intuitive
              </span>
              <Image
                src="/lightbulb.png"
                alt="picture of lightbuld"
                width={180}
                height={120}
                layout="fixed"
              />
              <p className="w-full pt-4 pb-8 text-base md:text-lg lg:text-xl">
                I deliver a clean, modern UI and smooth, seamless UX.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
