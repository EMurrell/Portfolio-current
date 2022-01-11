import Link from "next/link";
import { Github, Devdotto, Twitter } from "@icons-pack/react-simple-icons";
import { MailIcon } from "@heroicons/react/outline";
import FadeIn from "../animations/FadeIn";

export default function Contact() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };
  return (
    <footer
      id="Contact"
      className="px-12 py-12 md:px-24 lg:px-52 text-neutral-100 bg-neutral-800 font-display"
    >
      <FadeIn>
        <div className="flex flex-col pt-10 2xl:pt-16 lg:flex-row ">
          <h1 className="pr-6 mb-12 text-4xl font-medium md:text-5xl lg:text-6xl lg:w-1/2">
            Let&apos;s Work <br />
            Together.
          </h1>
          <div className="flex flex-col text-base text-left 2xl:flex-row lg:text-lg">
            <div className="flex flex-col mb-6 cursor-pointer lg:px-6 hover:text-highlight">
              <h2 className="">Email</h2>
              <p className=" text-neutral-500">emurrell.dev@gmail.com</p>
            </div>
            <div className="flex flex-col mb-6 cursor-pointer lg:px-6 hover:text-highlight">
              <h2 className="">Github</h2>
              <p className=" text-neutral-500">github.com/EMurrell</p>
            </div>
            <div className="flex flex-col mb-6 cursor-pointer lg:px-6 hover:text-highlight">
              <h2 className="">Twitter</h2>
              <p className=" text-neutral-500">twitter.com/MurrellWeb</p>
            </div>
          </div>
        </div>
        <div className="pt-8 mt-12 border-t border-neutral-500">
          <p className="text-sm text-center md:text-base lg:text-lg text-neutral-500">
            Built with Next.js and TailwindCSS
            <br />
            &copy; {getCurrentYear()} Eric Murrell.
          </p>
        </div>
      </FadeIn>
    </footer>
  );
}
