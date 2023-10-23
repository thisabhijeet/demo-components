"use client";

import React, { useState } from "react";

function DropDown({ data }) {
  const [selected, setSelected] = useState("Video Tags");
  const [show, setShow] = useState(false);
  return (
    <div className="mt-4 ml-20 flex items-center gap-4">
      <div className="font-bold">Define Card Groups</div>
      <div
        className=" relative w-64 border rounded-md cursor-pointer"
        onClick={() => {
          setShow(!show);
        }}
      >
        <div className="px-4 py-2 flex justify-between items-center">
          {selected}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4 "
          >
            <path
              fillRule="evenodd"
              d="M20.03 4.72a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 11.69l6.97-6.97a.75.75 0 011.06 0zm0 6a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 111.06-1.06L12 17.69l6.97-6.97a.75.75 0 011.06 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        {show && (
          <div className="absolute top-12 border shadow-md w-full rounded-md">
            {data.map((item, i) => {
              return (
                <div
                  className="px-4 py-2 border-b cursor-pointer"
                  onClick={() => {
                    setSelected(item);
                    setShow(false);
                  }}
                >
                  {item}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default DropDown;
