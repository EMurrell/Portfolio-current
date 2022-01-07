import Head from "next/head";
import Link from "next/link";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import {
  Github,
  Devdotto,
  Twitter,
  ReactJs,
} from "@icons-pack/react-simple-icons";
import { MailIcon, ChevronDownIcon } from "@heroicons/react/outline";
import { Sling as Hamburger } from "hamburger-react";

const links = [
  { name: "About", to: "#About", id: 1 },
  { name: "Work", to: "#Work", id: 2 },
  { name: "Skills", to: "#Skills", id: 3 },
  { name: "Contact", to: "#Contact", id: 4 },
];

const itemVariants = {
  closed: {
    opacity: 0,
  },
  open: { opacity: 1 },
};

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.25,
      staggerDirection: 1,
    },
  },
};

export default function Nav() {
  const [open, cycleOpen] = useCycle(false, true);

  return (
    <nav className="flex justify-between w-full text-neutral-900 font-display">
      <div className="inline-flex px-4 py-6 text-2xl font-medium lg:text-2xl md:pl-8 lg:pl-16 ">
        Eric Murrell
      </div>

      {/* The Side Bar Menu for screens smaller than 'Medium' */}
      <AnimatePresence>
        {open && (
          <motion.aside
            className="fixed right-0 h-screen bg-yellow-400 md:hidden"
            initial={{ width: 0 }}
            animate={{
              width: "100%",
            }}
            exit={{
              width: 0,
              transition: { delay: 0.3, duration: 0.15 },
            }}
          >
            <motion.div
              className="flex flex-col p-8 ml-4 text-2xl "
              initial="closed"
              animate="open"
              exit="closed"
              variants={sideVariants}
            >
              <div className="pt-20 ">Eric Murrell</div>
              <div className="flex flex-row pb-12 ">
                <a href="https://github.com/EMurrell">
                  <Github className="my-6 mr-6 transition duration-100 ease-in-out transform w-7 h-7 hover:scale-110 hover:text-blue-200" />
                </a>
                <a href="mailto:emurrell.dev@gmail.com">
                  <MailIcon className="w-8 h-8 my-6 mr-6 transition duration-100 ease-in-out transform hover:scale-110 hover:text-blue-200" />
                </a>

                <a href="https://twitter.com/MurrellWeb">
                  <Twitter className="my-6 mr-6 transition duration-100 ease-in-out transform w-7 h-7 hover:scale-110 hover:text-blue-200" />
                </a>

                <a href="https://dev.to/emurrell">
                  <Devdotto className="w-8 h-8 my-6 transition duration-100 ease-in-out transform hover:scale-110 hover:text-blue-200" />
                </a>
              </div>
              {links.map(({ name, to, id }) => (
                <motion.a
                  key={id}
                  href={to}
                  className="flex my-4 transition duration-100 ease-in-out transform text-neutral-900 hover:text-blue-200 hover:scale-105"
                  variants={itemVariants}
                  aria-current={links.current ? "page" : undefined}
                  onClick={cycleOpen}
                >
                  {name}
                </motion.a>
              ))}
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* The Hamburger Menu and Close Icons */}
      <div className="flex justify-end md:hidden ">
        <button className="px-2 m-2 cursor-pointer">
          <span className="sr-only">Open main menu</span>
          <Hamburger toggled={open} toggle={cycleOpen} />
        </button>
      </div>

      {/* The Navbar on medium screens */}
      <div className="hidden pr-8 md:inline-flex ">
        {links.map(({ name, to, id }) => (
          <a
            key={id}
            href={to}
            className="px-6 py-6 text-lg font-medium transition duration-100 ease-in-out transform lg:px-8 text-neutral-900 2xl:text-xl hover:text-blue-200 hover:scale-105"
          >
            {name}
          </a>
        ))}
      </div>
    </nav>
  );
}
