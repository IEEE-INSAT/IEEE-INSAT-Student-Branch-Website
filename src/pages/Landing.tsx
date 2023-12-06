import Hero from "../components/hero";
import Vision from "../components/Vision";
import Chapters from "../components/Chapters";
import Numbers from "../components/Stats";
import Team from "../components/Team";
import Partners from "../components/Partners";
import Contact from "../components/Contact";
import Masonry from "../components/Masonry";
import { Marquee } from "../components/Marquee";

export default function Landing() {
  return (
    <>
      <Hero />

      <Masonry />

      <Vision />
      <Marquee />
      <Numbers />
      <Chapters />
      <Partners />
      <Team />
      <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-xl mx-auto mb-12">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">
              We're located in INSAT, Obviously!
            </h1>
            <p className="mt-1 text-gray-600 dark:text-gray-400">
              Check if we're neighbours!
            </p>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6386.042146056181!2d10.187460001337307!3d36.84197136062557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd353f5b04ecad%3A0xca198eb19f6b148c!2sIEEE%20INSAT%20Student%20Branch!5e0!3m2!1sen!2stn!4v1701467665755!5m2!1sen!2stn"
          className={"rounded-2xl mx-auto w-[80%] aspect-video max-w-[70rem]"}
          allowFullScreen={true}
          loading="lazy"
          title={"IEEE INSAT Student Branch Location"}
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <Contact />
    </>
  );
}
