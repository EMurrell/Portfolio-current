import FadeUp from "../animations/FadeUp";
import FadeRight from "../animations/FadeRight";
import FadeIn from "../animations/FadeIn";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Bio() {
  return (
    <section
      id="About"
      className="flex flex-col px-8 py-2 bg-neutral-900 md:py-28 md:px-32 2xl:px-64 text-neutral-100 font-display "
    >
      <div className="pt-8 text-3xl xl:text-center md:text-4xl xl:text-5xl">
        <FadeUp>
          <p className="py-4 font-light">
            I am a Full Stack Web Developer, with a focus on Jamstack
            technology.
          </p>
        </FadeUp>
        <FadeUp>
          <p className="pt-10 pb-24 font-light md:pb-32">
            I have a passion for creating engaging digital products.
          </p>
        </FadeUp>

        <div className="flex flex-col justify-center py-4 lg:flex-row ">
          <FadeUp>
            <div className="flex flex-col items-center pb-20 text-center xl:pb-0 xl:mx-12 mx-8">
              <span className="mb-3 text-3xl md:text-4xl xl:text-5xl ">
                Responsive
              </span>
              <Image
                src="/resp-dev-gray.png"
                alt="picture of multiple devices"
                width={170}
                height={100}
                className=""
                layout="fixed"
              />
              <p className="pt-2 pb-4 text-xl font-light md:text-xl xl:text-2xl">
                Pixel-perfect layout on all devices. Mobile-first design
                approach.
              </p>
            </div>
          </FadeUp>

          <FadeUp>
            <div className="flex flex-col items-center pb-20  text-center xl:pb-0 xl:mx-12 mx-8">
              <span className="mb-3 text-3xl  md:text-4xl xl:text-5xl ">
                Fast
              </span>
              <Image
                src="/speedometerlighter.png"
                alt="picture of speedometer"
                width={150}
                height={100}
                className=""
                layout="fixed"
              />
              <p className="pt-2 pb-4 text-xl font-light md:text-xl xl:text-2xl ">
                Ultra-fast load times are a top priority.
              </p>
            </div>
          </FadeUp>
          <FadeUp>
            <div className="flex flex-col items-center pb-20 mx-8 text-center xl:pb-0 xl:mx-12 ">
              <span className="mb-3 text-3xl md:text-4xl xl:text-5xl ">
                Intuitive
              </span>
              <Image
                src="/lightbulb.png"
                alt="picture of lightbuld"
                width={155}
                height={100}
                layout="fixed"
                className="opacity-60"
              />
              <p className="pt-2 pb-4 text-xl font-light md:text-xl xl:text-2xl ">
                I deliver a clean, modern UI and excellent UX.
              </p>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
