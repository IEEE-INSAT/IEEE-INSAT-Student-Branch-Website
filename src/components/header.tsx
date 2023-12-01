import React from "react";
import { NavLink } from "react-router-dom";
import { routes } from "../routes";
import MainLogo from "../assets/LOGO.png";

export const Logo = () => {
  return (
    <img
      src={MainLogo}
      alt={"ieee insat sb logo"}
      className={
        "object-contain max-h-10 md:max-h-16 md:py-2 dark:brightness-0 dark:invert"
      }
    />
  );
};

function NavItem({ href, text }: { href: string; text: string }) {
  return (
    <NavLink
      className={(p) =>
        p.isActive
          ? "font-semibold text-blue-600 dark:text-blue-500"
          : "font-medium text-gray-500 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
      }
      to={href}
    >
      {text}
    </NavLink>
  );
}

const Header = () => {
  return (
    <header className="flex flex-wrap justify-center md:flex-nowrap z-50 w-full text-sm sticky top-0 mb-3">
      <nav
        className="mt-6 relative max-w-[85rem] w-11/12 bg-white border border-gray-300 rounded-[36px] mx-2 py-3 px-4 md:flex md:items-center md:justify-between md:py-0 md:px-6 lg:px-8 xl:mx-auto dark:bg-gray-800 dark:border-gray-700"
        aria-label="Global"
      >
        <div className="flex items-center justify-between">
          <Logo />
          <div className="md:hidden">
            <MobileMenuButton />
          </div>
        </div>
        <div
          id="navbar-collapse-with-animation"
          className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block"
        >
          <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:items-center md:justify-end md:gap-y-0 md:gap-x-7 md:mt-0 md:ps-7">
            {routes[0].children?.map((route, index) => (
              <NavItem
                href={route.path ?? "./"}
                text={route.id ?? ""}
                key={route.path}
              />
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

function MobileMenuButton() {
  return (
    <button
      type="button"
      className="hs-collapse-toggle w-8 h-8 flex justify-center items-center text-sm font-semibold rounded-full border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
      data-hs-collapse="#navbar-collapse-with-animation"
      aria-controls="navbar-collapse-with-animation"
      aria-label="Toggle navigation"
    >
      <svg
        className="hs-collapse-open:hidden flex-shrink-0 w-4 h-4"
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
        <line x1={3} x2={21} y1={6} y2={6} />
        <line x1={3} x2={21} y1={12} y2={12} />
        <line x1={3} x2={21} y1={18} y2={18} />
      </svg>
      <svg
        className="hs-collapse-open:block hidden flex-shrink-0 w-4 h-4"
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
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
      </svg>
    </button>
  );
}
