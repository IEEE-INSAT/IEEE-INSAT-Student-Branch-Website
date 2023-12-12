export default function Contact() {
  return (
    <>
      {/* Contact Us */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="max-w-xl mx-auto">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">
              Contact us
            </h1>
            <p className="mt-1 text-gray-600 dark:text-gray-400">
              We'd love to talk about how we can help you.
            </p>
          </div>
        </div>
        <div className="mt-12 max-w-lg mx-auto">
          {/* Card */}
          <div className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8 dark:border-gray-700">
            <h2 className="mb-8 text-xl font-semibold text-gray-800 dark:text-gray-200">
              Fill in the form
            </h2>
            <form
              action="mailto:ieee@insat.rnu.tn"
              method="get"
              encType="text/plain"
            >
              <div className="grid gap-4 lg:gap-6">
                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                  <div className={"col-span-2"}>
                    <label
                      htmlFor="hs-lastname-contacts-1"
                      className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="subject"
                      id="hs-lastname-contacts-1"
                      className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    />
                  </div>
                </div>
                {/* End Grid */}
                {/* Grid */}
                <div className="grid grid-cols-1">
                  <div>
                    <label
                      htmlFor="hs-email-contacts-1"
                      className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="hs-email-contacts-1"
                      autoComplete="email"
                      className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    />
                  </div>
                </div>
                {/* End Grid */}
                <div>
                  <label
                    htmlFor="hs-about-contacts-1"
                    className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                  >
                    Details
                  </label>
                  <textarea
                    id="hs-about-contacts-1"
                    name="body"
                    rows={4}
                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    defaultValue={""}
                  />
                </div>
              </div>
              {/* End Grid */}
              <div className="mt-6 grid">
                <button
                  type="submit"
                  value={"Send"}
                  className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  Send inquiry
                </button>
              </div>
              <div className="mt-3 text-center">
                <p className="text-sm text-gray-500">
                  We'll get back to you in 1-2 business days.
                </p>
              </div>
            </form>
          </div>
          {/* End Card */}
        </div>
        {/*<div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-4 lg:gap-8">*/}
        {/* Icon Block */}
        {/*<a*/}
        {/*  className="group flex flex-col h-full text-center rounded-lg hover:bg-gray-100 p-4 sm:p-6 dark:hover:bg-white/[.05] dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"*/}
        {/*  href="#"*/}
        {/*>*/}
        {/*  <svg*/}
        {/*    className="w-9 h-9 text-gray-800 mx-auto dark:text-gray-200"*/}
        {/*    xmlns="http://www.w3.org/2000/svg"*/}
        {/*    width={24}*/}
        {/*    height={24}*/}
        {/*    viewBox="0 0 24 24"*/}
        {/*    fill="none"*/}
        {/*    stroke="currentColor"*/}
        {/*    strokeWidth={2}*/}
        {/*    strokeLinecap="round"*/}
        {/*    strokeLinejoin="round"*/}
        {/*  >*/}
        {/*    <circle cx={12} cy={12} r={10} />*/}
        {/*    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />*/}
        {/*    <path d="M12 17h.01" />*/}
        {/*  </svg>*/}
        {/*  <div className="mt-5">*/}
        {/*    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">*/}
        {/*      Knowledgebase*/}
        {/*    </h3>*/}
        {/*    <p className="mt-1 text-gray-500">*/}
        {/*      We're here to help with any questions or code.*/}
        {/*    </p>*/}
        {/*    <p className="mt-5 inline-flex items-center gap-x-1 font-medium text-blue-600 dark:text-blue-500">*/}
        {/*      Contact support*/}
        {/*      <svg*/}
        {/*        className="flex-shrink-0 w-4 h-4 transition ease-in-out group-hover:translate-x-1"*/}
        {/*        xmlns="http://www.w3.org/2000/svg"*/}
        {/*        width={24}*/}
        {/*        height={24}*/}
        {/*        viewBox="0 0 24 24"*/}
        {/*        fill="none"*/}
        {/*        stroke="currentColor"*/}
        {/*        strokeWidth={2}*/}
        {/*        strokeLinecap="round"*/}
        {/*        strokeLinejoin="round"*/}
        {/*      >*/}
        {/*        <path d="m9 18 6-6-6-6" />*/}
        {/*      </svg>*/}
        {/*    </p>*/}
        {/*  </div>*/}
        {/*</a>*/}
        {/* End Icon Block */}
        {/* Icon Block */}
        {/*<a*/}
        {/*  className="group flex flex-col h-full text-center rounded-lg hover:bg-gray-100 p-4 sm:p-6 dark:hover:bg-white/[.05] dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"*/}
        {/*  href="#"*/}
        {/*>*/}
        {/*  <svg*/}
        {/*    className="w-9 h-9 text-gray-800 mx-auto dark:text-gray-200"*/}
        {/*    xmlns="http://www.w3.org/2000/svg"*/}
        {/*    width={24}*/}
        {/*    height={24}*/}
        {/*    viewBox="0 0 24 24"*/}
        {/*    fill="none"*/}
        {/*    stroke="currentColor"*/}
        {/*    strokeWidth={2}*/}
        {/*    strokeLinecap="round"*/}
        {/*    strokeLinejoin="round"*/}
        {/*  >*/}
        {/*    <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />*/}
        {/*    <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />*/}
        {/*  </svg>*/}
        {/*  <div className="mt-5">*/}
        {/*    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">*/}
        {/*      FAQ*/}
        {/*    </h3>*/}
        {/*    <p className="mt-1 text-gray-500">*/}
        {/*      Search our FAQ for answers to anything you might ask.*/}
        {/*    </p>*/}
        {/*    <p className="mt-5 inline-flex items-center gap-x-1 font-medium text-blue-600 dark:text-blue-500">*/}
        {/*      Visit FAQ*/}
        {/*      <svg*/}
        {/*        className="flex-shrink-0 w-4 h-4 transition ease-in-out group-hover:translate-x-1"*/}
        {/*        xmlns="http://www.w3.org/2000/svg"*/}
        {/*        width={24}*/}
        {/*        height={24}*/}
        {/*        viewBox="0 0 24 24"*/}
        {/*        fill="none"*/}
        {/*        stroke="currentColor"*/}
        {/*        strokeWidth={2}*/}
        {/*        strokeLinecap="round"*/}
        {/*        strokeLinejoin="round"*/}
        {/*      >*/}
        {/*        <path d="m9 18 6-6-6-6" />*/}
        {/*      </svg>*/}
        {/*    </p>*/}
        {/*  </div>*/}
        {/*</a>*/}
        {/* End Icon Block */}
        {/* Icon Block */}
        {/*<a*/}
        {/*  className="group flex flex-col h-full text-center rounded-lg hover:bg-gray-100 p-4 sm:p-6 dark:hover:bg-white/[.05] dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"*/}
        {/*  href="#"*/}
        {/*>*/}
        {/*  <svg*/}
        {/*    className="w-9 h-9 text-gray-800 mx-auto dark:text-gray-200"*/}
        {/*    xmlns="http://www.w3.org/2000/svg"*/}
        {/*    width={24}*/}
        {/*    height={24}*/}
        {/*    viewBox="0 0 24 24"*/}
        {/*    fill="none"*/}
        {/*    stroke="currentColor"*/}
        {/*    strokeWidth={2}*/}
        {/*    strokeLinecap="round"*/}
        {/*    strokeLinejoin="round"*/}
        {/*  >*/}
        {/*    <path d="m7 11 2-2-2-2" />*/}
        {/*    <path d="M11 13h4" />*/}
        {/*    <rect width={18} height={18} x={3} y={3} rx={2} ry={2} />*/}
        {/*  </svg>*/}
        {/*  <div className="mt-5">*/}
        {/*    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">*/}
        {/*      Developer APIs*/}
        {/*    </h3>*/}
        {/*    <p className="mt-1 text-gray-500">*/}
        {/*      Check out our development quickstart guide.*/}
        {/*    </p>*/}
        {/*    <p className="mt-5 inline-flex items-center gap-x-1 font-medium text-blue-600 dark:text-blue-500">*/}
        {/*      Contact sales*/}
        {/*      <svg*/}
        {/*        className="flex-shrink-0 w-4 h-4 transition ease-in-out group-hover:translate-x-1"*/}
        {/*        xmlns="http://www.w3.org/2000/svg"*/}
        {/*        width={24}*/}
        {/*        height={24}*/}
        {/*        viewBox="0 0 24 24"*/}
        {/*        fill="none"*/}
        {/*        stroke="currentColor"*/}
        {/*        strokeWidth={2}*/}
        {/*        strokeLinecap="round"*/}
        {/*        strokeLinejoin="round"*/}
        {/*      >*/}
        {/*        <path d="m9 18 6-6-6-6" />*/}
        {/*      </svg>*/}
        {/*    </p>*/}
        {/*  </div>*/}
        {/*</a>*/}
        {/* End Icon Block */}
        {/*</div>*/}
      </div>
      {/* End Contact Us */}
    </>
  );
}
