"use client";

import { Bell, Menu, Settings, SunMedium } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center w-full mb-7">
      {/* Lett side */}
      <div className="flex justify-center items-center gap-5">
        <button
          className="p-3 bg-gray-200 rounded-full hover:bg-blue-300"
          onClick={() => {}}
        >
          <Menu className="size-5" />
        </button>
        <div className="relative">
          <input
            type="search"
            placeholder="search groups & products"
            className="pl-10 pr-4 py-2 w-50 md:w-80 border-2 border-gray-300 bg-white rounded-lg focus:outline-none focus:border-blue-500"
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Bell className="text-gray-500 size-5" />
          </div>
        </div>
      </div>

      {/* right side */}
      <div className="flex items-center justify-between gap-5">
        <div className="hidden md:flex justify-between items-center gap-5">
          <div className="">
            <button className="p-3 bg-gray-200 rounded-full" onClick={() => {}}>
              <SunMedium className="size-5 text-gray-500 cursor-pointer " />
            </button>
          </div>
          <div className="relative">
            <Bell className="size-7 cursor-pointer text-gray-500 " />
            <span className="absolute -top-3 -right-2 inline-flex items-center py-1 px-2 text-xs font-semibold leading-none bg-red-500 rounded-full">
              3
            </span>
          </div>
          <hr className="w-0 h-7 border-l-2 border-gray-500 mx-3" />
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="w-9 h-9">image</div>
            <span className="font-semibold">DM.dev</span>
          </div>
        </div>
        <Link href="/setting">
          <Settings className="size-7 cursor-pointed text-gray-500 " />
        </Link>
      </div>
    </div>
  );
}
