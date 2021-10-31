import { useEffect, useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY >= 30) setNavbar(true);
      else setNavbar(false);
    };
    window.addEventListener("scroll", changeBackground, { passive: true });

    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  });

  return (
    <div
      className={
        "w-full flex justify-between px-6 py-4 sm:py-5 fixed z-30 items-center transition delay-150 duration-150 ease-in-out " +
        (navbar && "bg-black bg-opacity-60")
      }
    >
      <div className="h-5 w-20 relative">
        <Image layout="fill" objectFit="cover" src="/david_logo.png" alt="david0" />
      </div>
      <div className="flex">
        <button
          onClick={() => window.open("https://github.com/Olatokumbo", "_blank")}
          className="hover:bg-gray-800 bg-opacity-5 font-bold p-2 rounded-full inline-flex items-center mx-3"
        >
          <svg
            className="h-5 w-5 text-gray-300"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
          </svg>
        </button>
        <button
          onClick={() =>
            window.open("https://www.linkedin.com/in/david-odesola", "_blank")
          }
          className="hover:bg-gray-800 bg-opacity-5 font-bold p-2 rounded-full inline-flex items-center mx-3"
        >
          <svg
            className="h-5 w-5 text-gray-300"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect x="2" y="9" width="4" height="12" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        </button>
        <button
          onClick={() =>
            window.open("https://www.instagram.com/diaviid0/", "_blank")
          }
          className="hover:bg-gray-800 bg-opacity-5 font-bold p-2 rounded-full inline-flex items-center mx-3"
        >
          <svg
            className="h-5 w-5 text-gray-300"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <rect x="4" y="4" width="16" height="16" rx="4" />
            <circle cx="12" cy="12" r="3" />{" "}
            <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
