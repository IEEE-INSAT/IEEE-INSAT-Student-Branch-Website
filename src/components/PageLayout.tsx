import { PropsWithChildren } from "react";
import Header from "./header";
import Footer from "./footer";
import "./Stars.css";

export default function PageLayout(props: PropsWithChildren) {
  return (
    <>
      <div
        className={
          "h-full absolute top-0 w-full opacity-50 mix-blend-luminosity"
        }
      >
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
      </div>
      <main
        id="content"
        role="main"
        className={"w-full"}
        style={{ contain: "paint" }}
      >
        <div className="">
          <Header />
          {props.children}
        </div>
      </main>
      <Footer />
    </>
  );
}
