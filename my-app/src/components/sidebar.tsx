"use client";

import { useRouter } from "next/router";
import React from "react";

const pages = [
  {
    path: "/leaders",
    element: "Leaders",
  },
  {
    path: "/history",
    element: "History",
  },
  {
    path: "/map",
    element: "Map",
  },
  {
    path: "/cold-war",
    element: "Cold War",
  },
];

const sidebar = () => {
  return (
    <div className="bg-sky-400 fixed border-r border-black flex flex-col w-[125px] h-screen gap-1">
      <div>
        <p className="text-2xl border border-b-gray-400 text-center">WW2</p>
      </div>
      <div className="mt-3">
        {pages.map((page, index) => (
          <div key={index} page={pages}>
            <div className="p-2 text-center ">
              <p className="hover:bg-sky-600 scroll-off rounded-lg cursor-pointer " >
                {page.element}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default sidebar;
