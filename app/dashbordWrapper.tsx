"use client";

import React from "react";
import Navbar from "./(components)/Navbar/navbar";
import SideBar from "./(components)/sidebar/page";
import StoreProvider from "./redux";

const DashbordLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={`light flex w-full min-h-screen, bg-gray-50 text-gray-900`}>
      <SideBar />
      <main
        className={`flex flex-col py-7 px-9 w-full h-full bg-gray-50 md:pl-24:`}
      >
        <Navbar />
        {children}
      </main>
    </div>
  );
};

const DashbordWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <StoreProvider>
      <DashbordLayout>{children}</DashbordLayout>
    </StoreProvider>
  );
};
export default DashbordWrapper;
