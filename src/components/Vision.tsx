function Icon({ src }: { src: string }) {
  return (
    <span className="flex-shrink-0 inline-flex justify-center p-3 items-center w-[46px] h-[46px] rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm mx-auto dark:bg-slate-900 dark:border-gray-700 dark:text-gray-200">
      {/*<svg*/}
      {/*  className="flex-shrink-0 w-5 h-5"*/}
      {/*  xmlns="http://www.w3.org/2000/svg"*/}
      {/*  width={24}*/}
      {/*  height={24}*/}
      {/*  viewBox="0 0 24 24"*/}
      {/*  fill="none"*/}
      {/*  stroke="currentColor"*/}
      {/*  strokeWidth={2}*/}
      {/*  strokeLinecap="round"*/}
      {/*  strokeLinejoin="round"*/}
      {/*>*/}
      {/*  <path d="M7 10v12" />*/}
      {/*  <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />*/}
      {/*</svg>*/}
      <img
        src={src}
        alt="icon"
        className="w-full h-full object-contain inline saturate-0 brightness-125"
      />
    </span>
  );
}

function Text(props: { text: string; title: string }) {
  return (
    <div className="ms-5 sm:ms-8">
      <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
        {props.title}
      </h3>
      <p className="mt-1 text-gray-600 dark:text-gray-400">{props.text}</p>
    </div>
  );
}

export default function Vision() {
  return (
    <>
      {/* Icon Blocks */}
      <div className="max-w-[70rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          <div className="lg:w-3/4">
            <h2 className="text-3xl text-gray-800 font-bold lg:text-4xl dark:text-white">
              Join a community of forward-thinking individuals
            </h2>
            <p className="mt-3 text-gray-800 dark:text-gray-400">
              As an IEEE member, you'll be presented with new resources,
              valuable opportunities, and many discounts that will help you
              advance your career. You can find colleagues who share your vision
              and commitment—those who are moving technology forward today.
            </p>
            <p className="mt-5">
              <a
                className="inline-flex items-center gap-x-1 font-medium text-blue-600 dark:text-blue-500"
                href="https://www.ieee.org/membership"
              >
                Learn membership benefits now!
                <svg
                  className="flex-shrink-0 w-4 h-4 transition ease-in-out group-hover:translate-x-1"
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
              </a>
            </p>
          </div>
          {/* End Col */}
          <div className="space-y-6 lg:space-y-10">
            {/* Icon Block */}

            {/* Icon Block */}
            <div className="flex">
              {/* Icon */}
              <Icon
                src={
                  "https://res.cloudinary.com/dzgxf5tsm/image/upload/v1701464458/mtvotuw6znhjdjxpm7ha.png"
                }
              />
              <Text
                title={"Grow as a Leader"}
                text={
                  "Between IEEE INSAT and the global organization, there are countless opportunities to take leadership positions in events, units and committees"
                }
              />
            </div>
            <div className="flex">
              {/* Icon */}
              <Icon
                src={
                  "https://res.cloudinary.com/dzgxf5tsm/image/upload/v1701464458/bjeeqcefrhuspt5p4xod.png"
                }
              />
              <Text
                text={
                  "Being part of a global organization, IEEE INSAT connects you with students and professionals from across the globe"
                }
                title={"Grow your Network"}
              />
            </div>
            <div className="flex">
              {/* Icon */}
              <Icon
                src={
                  "https://res.cloudinary.com/dzgxf5tsm/image/upload/v1701464458/rw4hfm2ev8s5oecb8bc0.png"
                }
              />
              <Text
                text={
                  "You’ll be in contact with various organizations and partners. You’ll receive unmatched exposure to the professional world"
                }
                title={"Grow Professionally"}
              />
            </div>
            {/* End Icon Block */}
          </div>
          {/* End Col */}
        </div>
        {/* End Grid */}
      </div>
      {/* End Icon Blocks */}
    </>
  );
}
