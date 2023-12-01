import { Link } from "react-router-dom";
import React from "react";

function Item(props: { to: string; title: string; subtitle: string }) {
  return (
    <Link
      className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
      to={props.to}
    >
      <div className="p-4 md:p-5">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200">
              {props.title}
            </h3>
            <p className="text-sm text-gray-500">{props.subtitle}</p>
          </div>
          <div className="ps-3 text-gray-500">
            <svg
              className="flex-shrink-0 w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function Masonry() {
  return (
    <>
      {/* Card Section */}

      <div className="max-w-[70rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="sm:w-1/2 xl:w-1/3 mx-auto text-center mb-3 md:mb-12 mt-3">
          <h2 className="text-xl font-semibold md:text-2xl md:leading-tight text-gray-800 dark:text-gray-200">
            Explore our Student Branch
          </h2>
        </div>
        {/* Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6">
          {[
            [
              "Our Story",
              "Learn how this student branch evolved over the years",
              "/our-story",
            ],
            [
              "Student Branch Map",
              "Explore where the SB is located in the IEEE hierarchy",
              "/map",
            ],
            [
              "Events",
              "Check out events organised by our various subunits",
              "/events",
            ],
            [
              "Gallery",
              "A digital gallery of historical moments in our history",
              "/gallery",
            ],
            ["Awards", "A list of awards received since 2013", "/awards"],
          ].map((item, index) => (
            <Item key={index} to={item[2]} title={item[0]} subtitle={item[1]} />
          ))}
        </div>
        {/* End Grid */}
      </div>
      {/* End Card Section */}
    </>
  );
}
