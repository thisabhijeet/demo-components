"use client";

import React, { useEffect, useState } from "react";

function Table({ tableData }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(tableData);
  }, [tableData]);

  const handleDelete = (i) => {
    const temp = data.filter((item, j) => j != i);
    setData(temp);
  };

  const styles = {
    Active:
      "text-[12px] pl-5 pr-2 border rounded-full font-medium bg-green-300 relative text-green-600",
    "Customer data":
      "text-[12px] px-2  border rounded-full font-medium  bg-blue-300 text-blue-700",
    Admin:
      "text-[12px] px-2 border rounded-full font-medium  bg-violet-300 text-violet-700",
  };
  return (
    <table className="mt-4 ml-4 text-[12px]" style={{}}>
      <thead>
        <tr className="bg-slate-50 text-slate-400 font-bold border-b-2 border-gray-200">
          <td className="p-2">Video</td>
          <td className="p-2">Tagged to</td>
          <td className="p-2">Tagged Entities</td>
          <td className="p-2">VIDEO TAGS</td>
          <td className="p-2">Flows</td>
          <td className="p-2">Status</td>
          <td className="p-2"></td>
        </tr>
      </thead>
      <tbody>
        {data?.map((item, i) => {
          return (
            <tr key={i} className="border-b-2 border-gray-200">
              <td className="p-2 pr-10">
                <div className="flex gap-2 items-center max-w-[170px] break-all">
                  <img src="./images.jpg" className="h-16 w-12" alt="" />
                  <div className="font-semibold">{item.Video}</div>
                </div>
              </td>
              <td className="p-2 pr-10">{item["Tagged to"]}</td>
              <td className="p-2 pr-40">{item["Tagged Entities"]}</td>
              <td className="p-2 pr-4">
                <div className="flex gap-2">
                  {item["Video Tags"].map((tag, i) => {
                    return (
                      <div className={`${styles[tag]}`} key={i}>
                        {tag == "Active" ? (
                          <div className="h-[8px] w-[8px] border-green-600 rounded-full bg-green-600 absolute top-[5px] left-[7px]"></div>
                        ) : (
                          ""
                        )}
                        {tag}
                      </div>
                    );
                  })}
                </div>
              </td>
              <td className="p-2 pr-4">
                <div className="flex max-w-[200px] flex-wrap gap-2">
                  {item.Flows.slice(0, 6).map((tag, i) => {
                    return (
                      <div className={`${styles[tag]}`} key={i}>
                        {tag == "Active" ? (
                          <div className="h-[8px] w-[8px] border-green-600 rounded-full bg-green-600 absolute top-[5px] left-[7px]"></div>
                        ) : (
                          ""
                        )}
                        {tag}
                      </div>
                    );
                  })}
                  <div className="text-[12px] px-2 border rounded-full font-medium bg-gray-300 text-gray-500">
                    +{item.Flows.length - 6}
                  </div>
                </div>
              </td>
              <td className="p-2 pr-4">{item.Status}</td>
              <td className="p-2">
                <div className="flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4 cursor-pointer"
                    onClick={() => {
                      handleDelete(i);
                    }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </div>
              </td>
            </tr>
          );
        })}
        {/* </div> */}
      </tbody>
    </table>
  );
}

export default Table;
