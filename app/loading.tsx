"use client";
import Loader from "@/components/Loader";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const Loading = () => {
  return (
    <div className=" max-w-[50rem] mx-auto px-4">
      <Loader />
    </div>
  );
};

export default Loading;
