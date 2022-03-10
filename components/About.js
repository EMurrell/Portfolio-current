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
      <div className="pt-8 text-2xl text-center md:text-4xl ">
        <FadeUp>
          <p className="pt-6 pb-16 font-light md:pb-24">
            I have a passion for creating engaging digital products.
          </p>
        </FadeUp>
        <FadeUp>
          <p className="pt-2 pb-24 font-light md:pb-32">
            And I&apos;m a big fan of the jamstack.
          </p>
        </FadeUp>

        <div className="flex flex-col justify-center py-4 lg:flex-row ">
          <FadeUp>
            <div className="flex flex-col items-center pb-20 mx-8 text-center xl:pb-0 xl:mx-12">
              <span className="mb-3 text-xl md:text-2xl xl:text-3xl ">
                Responsive
              </span>
              <Image
                src="/resp-dev-gray.png"
                alt="picture of multiple devices"
                width={102}
                height={60}
                className=""
                layout="fixed"
              />
              <p className="pt-2 pb-4 text-lg font-light md:text-xl ">
                Pixel-perfect layout on all devices. Mobile-first design
                approach.
              </p>
            </div>
          </FadeUp>

          <FadeUp>
            <div className="flex flex-col items-center pb-20 mx-8 text-center xl:pb-0 xl:mx-12">
              <span className="mb-3 text-xl md:text-2xl xl:text-3xl ">
                Fast
              </span>
              <Image
                src="/speedometerlighter.png"
                alt="picture of speedometer"
                width={90}
                height={60}
                className=""
                layout="fixed"
              />
              <p className="pt-2 pb-4 text-lg font-light md:text-xl ">
                Ultra-fast load times are a top priority.
              </p>
            </div>
          </FadeUp>
          <FadeUp>
            <div className="flex flex-col items-center pb-20 mx-8 text-center xl:pb-0 xl:mx-12 ">
              <span className="mb-3 text-xl md:text-2xl xl:text-3xl ">
                Intuitive
              </span>
              <Image
                src="/lightbulb.png"
                alt="picture of lightbuld"
                width={105}
                height={60}
                layout="fixed"
                className="opacity-60"
              />
              <p className="pt-2 pb-4 text-lg font-light md:text-xl ">
                I deliver a clean, modern UI and excellent UX.
              </p>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
