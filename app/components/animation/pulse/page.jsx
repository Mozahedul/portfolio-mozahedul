import React from "react";

const Pulse = () => {
  return (
    <div
      className="mx-2 w-full max-w-sm rounded-md p-4 shadow"
      style={{ backgroundColor: "#0b1e3f" }}
    >
      <div className="flex flex-col animate-pulse space-x-4">
        <div className="h-10 flex justify-between">
          <div className="h-8 w-8 rounded-lg bg-slate-400 opacity-50" />
          <div className="flex">
            <div className="h-6 w-6 rounded-sm bg-slate-400 opacity-50" />
            <div className="h-6 w-6 rounded-sm bg-slate-400 opacity-50 ml-2" />
          </div>
        </div>
        <div className="flex-1 space-y-6 py-1">
          <div className="my-5">
            <div className="h-3 rounded bg-slate-400 opacity-50 mb-2" />
            <div className="h-3 rounded bg-slate-400 opacity-50" />
          </div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="col-span-3 h-1 rounded bg-slate-400 opacity-50" />
              <div className="col-span-2 h-1 rounded bg-slate-400 opacity-50" />
              <div className="col-span-3 h-1 rounded bg-slate-400 opacity-50" />
            </div>
            <div className="flex">
              <div className="h-5 mx-1 w-12 rounded-full bg-slate-200 opacity-50" />
              <div className="h-5 mx-1 w-12 rounded-full bg-slate-200 opacity-50" />
              <div className="h-5 mx-1 w-12 rounded-full bg-slate-200 opacity-50" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pulse;
