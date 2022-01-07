import Head from "next/head";
import Image from "next/image";
import Meta from "../components/Meta";
import Nav from "../components/Nav.js";

import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";

import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Meta />

      <Header />

      <About />
      <Skills />
    </>
  );
}
