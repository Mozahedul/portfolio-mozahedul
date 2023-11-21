"use client";

import React from "react";
import { CgSpinner } from "react-icons/cg";

const Spin = () => {
  return (
    <div className="fixed bottom-1/2 left-1/2 right-1/2 top-1/2 h-screen w-screen">
      <div>
        <svg className="h-12 w-12 animate-spin" viewBox="0 0 48 48">
          <CgSpinner className="text-5xl font-bold text-gray-300" />
        </svg>
      </div>
    </div>
  );
};

export default Spin;
