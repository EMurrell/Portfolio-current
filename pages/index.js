import Head from "next/head";
import Image from "next/image";
import Meta from "../components/Meta";
import Nav from "../components/Nav.js";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Work from "../components/Work";

export default function Home() {
  return (
    <>
      <Meta />

      <Hero />

      <About />
      <Skills />
      <Work />
    </>
  );
}
