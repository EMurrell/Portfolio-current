import FadeIn from "../animations/FadeIn";
import FadeUp from "../animations/FadeUp";
import { AnimatePresence, animatePresence, motion } from "framer-motion";
import {
  ReactJs,
  Github,
  Html5,
  Framer,
  Hyper,
  Stackoverflow,
  Affinityphoto,
  Visualstudiocode,
  CssThree,
  Vercel,
  Netlify,
  Npm,
  Nodedotjs,
  Nextdotjs,
  Tailwindcss,
  Javascript,
} from "@icons-pack/react-simple-icons";

export default function Skills() {
  return (
    <section
      id="Skills"
      className="flex flex-col justify-center w-full h-screen md:pt-8 lg:pt-16 text-neutral-900 font-display md:px-28 lg:px-36 xl:px-72 "
    >
      <div className="flex flex-col text-center ">
        <FadeUp>
          <h1 className="pb-6 text-3xl font-semibold md:text-4xl lg:text-6xl ">
            Tech Stack
          </h1>
          <p className="px-16 pb-6 text-lg md:px-32 md:text-xl lg:text-2xl ">
            Some of the tools and technologies I use every day.
          </p>
        </FadeUp>

        <FadeIn>
          <div className="flex flex-row justify-center">
            <div className="flex flex-col justify-center">
              <Html5 className="icon" />
              <p className="description">HTML</p>
              <CssThree className="icon" />
              <p className="description">CSS</p>
              <Javascript className="icon" />
              <p className="description">Javascript</p>
              <ReactJs className="icon" />
              <p className="description">React</p>
            </div>
            <div className="flex flex-col justify-center">
              <Nodedotjs className="icon" />
              <p className="description">Node.js</p>
              <Nextdotjs className="icon" />
              <p className="description">Next.js</p>
              <Tailwindcss className="icon" />
              <p className="description">TailwindCSS</p>
              <Github className="icon" />
              <p className="description">Github</p>
            </div>
            <div className="flex flex-col justify-center">
              <Netlify className="icon" />
              <p className="description">Netlify</p>
              {/* <Vercel className="icon" />
              <p className="description">Vercel</p> */}
              <Framer className="icon" />
              <p className="description">Framer API</p>
              <Affinityphoto className="icon" />
              <p className="description">Affinity Photo</p>
              <Visualstudiocode className="icon" />
              <p className="description">VS Code</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
