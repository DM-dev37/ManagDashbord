"use client";

import { Menu } from "lucide-react";
import React from "react";

export default function SideBar() {
  return (
    <div className="px-4 ">
      {/* top logo */}
      <div className="flex gap-4 justify-between md:justify-normal items-center pt-8">
        <h1 className="text-sm font-semibold pt-2">
          <span className="text-2xl font-black text-blue-500">R</span>EDSTOCK
        </h1>

        <button
          className="md:hidden p-3 bg-gray-200 rounded-full hover:bg-blue-300"
          onClick={() => {}}
        >
          <Menu className="size-4" />
        </button>
      </div>

      {/* link */}
      <div className="flex flex-1 mt-8">mes liens arrivent...</div>

      {/* footer */}
      <div>
        <p className="text-center text-gray-500 text-sx ">&copy; 2026 DM.dev</p>
      </div>
    </div>
  );
}
