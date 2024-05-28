"use client";

import { NAV_ITEMS } from "@/config/constant";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ul className="items-center justify-center pl-5 space-y-8 hidden md:flex md:space-x-10 md:space-y-0 font-sans py-3">
        {NAV_ITEMS.map((item, i) => (
          <li key={i} className="text-white hover:text-white">
            <Link href={item.link} legacyBehavior>
              <a className="text-lg">{item.name}</a>
            </Link>
          </li>
        ))}
      </ul>
      {/* mobile */}

      <div className="md:hidden">
        <button
          className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 border border-transparent"
          onClick={() => setOpen((pre) => !pre)}
        >
          {open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>
      <div
        className={`
  absolute bg-black/80 inset-0 top-16 z-50
${open ? "block" : "hidden"} 
`}
      >
        <ul className="bg-black/80  items-center justify-center pl-5 space-y-8 md:flex md:space-x-10 md:space-y-0 font-sans py-3">
          {NAV_ITEMS.map((item, i) => (
            <li key={i} className="text-white hover:text-white">
              <Link href={item.link} legacyBehavior>
                <a className="text-lg">{item.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
