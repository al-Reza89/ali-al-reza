"use client";
import React from "react";
import { BarLoader, ClockLoader } from "react-spinners";

const Loader = () => {
  return (
    <div
      className="
    h-[70vh]
    flex 
    flex-col 
    items-center
    gap-3
    "
    >
      <BarLoader color="#36d7b7" height={20} width={600} />
      <BarLoader color="#36d7b7" height={20} width={600} />
      <BarLoader color="#36d7b7" height={20} width={600} />
    </div>
  );
};

export default Loader;
