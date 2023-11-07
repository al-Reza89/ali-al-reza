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
    lg:gap-6
    pb-5
    "
    >
      <BarLoader color="#36d7b7" height={15} width={700} />
      <BarLoader color="#36d7b7" height={15} width={700} />
      <BarLoader color="#36d7b7" height={15} width={700} />
      <BarLoader color="#36d7b7" height={15} width={700} />
      <BarLoader color="#36d7b7" height={15} width={700} />
      <BarLoader color="#36d7b7" height={15} width={700} />
      <BarLoader color="#36d7b7" height={15} width={700} />
      <BarLoader color="#36d7b7" height={15} width={700} />
      <BarLoader color="#36d7b7" height={15} width={700} />
      <BarLoader color="#36d7b7" height={15} width={700} />
      <BarLoader color="#36d7b7" height={15} width={700} />
      <BarLoader color="#36d7b7" height={15} width={700} />
      <BarLoader color="#36d7b7" height={15} width={700} />
      <BarLoader color="#36d7b7" height={15} width={700} />
      <BarLoader color="#36d7b7" height={15} width={700} />
      <BarLoader color="#36d7b7" height={15} width={700} />
    </div>
  );
};

export default Loader;
