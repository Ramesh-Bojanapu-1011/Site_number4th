"use client";
import Headder from "@/components/Headder";
import dynamic from "next/dynamic";

import React from "react";

type Props = {};

const AdminDashbord = (props: Props) => {
  const ClientChart = dynamic(() => import("@/components/Dashbord"), {
    ssr: false, // Avoid SSR
  });

  return (
    <>
      <div>
        <Headder />
        <ClientChart />
      </div>
    </>
  );
};

export default AdminDashbord;
