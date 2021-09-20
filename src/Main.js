import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/SideBar/Sidebar";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import Chapters from "./components/Chapters/Chapters";
import About from "./components/About/About";

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
      <Footer />
    </>
  );
};

export default Main;
