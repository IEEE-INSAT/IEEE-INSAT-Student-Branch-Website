import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/SideBar/Sidebar";
import Hero from "./components/Hero/Hero";
import Chapters from "./components/Chapters/Chapters";
import About from "./components/About/About";
import Activities from "./components/Activities/Activities";
import Awards from "./components/Awards/Awards";
import Members from "./components/Members/Members";
import Footer from "./components/Footer/Footer";

const Main = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Hero />
      <Chapters />
      <About />
      {/* <Activities /> */}
      <Awards />
      <Members />
      <Footer />
    </>
  );
};

export default Main;
