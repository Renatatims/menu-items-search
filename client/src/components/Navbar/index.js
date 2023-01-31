import React from "react";
import { useState } from "react"; // import state

function Navbar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <nav className="bg-gray-200 border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
      <div className="mx-auto justify-between px-4 md:flex md:items-center md:px-8 lg:max-w-7xl">
        <div>
          <div className="flex items-center justify-between py-3 md:block md:py-5 lg:block lg:py-5">
            <div className="md:hidden">
              <button
                className="rounded-md p-2 text-gray-700 outline-none focus:border focus:border-gray-400"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
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
                    className="h-6 w-6 text-white"
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
          </div>
        </div>
        <div>
          <div
            className={`mt-8 flex-1 justify-self-center pb-3 md:mt-0 md:block md:pb-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 text-xl md:flex md:space-x-6 md:space-y-0">
              <li className="text-white hover:text-indigo-200">Search</li>
              <li className="text-white hover:text-indigo-200">Favorites</li>
              <div className="mt-3 space-y-2 md:inline-block">
                <button className="inline-block w-full rounded-md bg-gray-600 px-4 py-2 text-center text-white shadow hover:bg-gray-800">
                  Login
                </button>
              </div>
              <div className="mt-3 space-y-2 md:inline-block">
                <button className="inline-block w-full rounded-md bg-gray-600 px-4 py-2 text-center text-white shadow hover:bg-gray-800">
                  Signup
                </button>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
