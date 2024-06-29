"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Lines_Chart } from "@/app/dashboard/grafica";
import { Bar_Chart } from "@/app/dashboard/barras";
import { Circular_Chart } from "@/app/dashboard/pie";
import NeonBarChart from "@/app/dashboard/neon_bar";

const Dashboard: React.FC = () => {
  return (
    <div className="flex h-auto">
      {/*barra de navegacion lateral*/}
      <nav className="w-auto bg-slate-100 p-4 m-2 rounded-lg">
        <div className="flex items-center mb-6">
          {
            //  <Image src={"/icon.png"} alt={"icono intitech"} width={50} height={50} />
          }{" "}
        </div>
        <ul className="m-1 p-1">
          {/*completar los href con las rutas relativas de cada link*/}
          <li className="mb-4">
            <Link href={"/orders"}>Orders</Link>
          </li>
          <li className="mb-4">
            <Link href={"/products"}>Products</Link>
          </li>
          <li className="mb-4">
            <Link href={"/messages"}>Messages</Link>
          </li>
          <li className="mb-4">
            <Link href={"/settings"}>Settings</Link>
          </li>
          <li>
            <Link href={"/signout"}>Sign Out</Link>
          </li>
        </ul>
      </nav>

      <main className="w-4/5 p-4 grid grid-cols-2 gap-2 mt-5 h-svh">
        <section className="bg-gray-100 p-1 rounded-lg shadow-md">
          
            <Lines_Chart />
        </section>

        <section className="bg-gray-100 p-4 rounded-lg shadow-md">
            <Bar_Chart />
          <div className="w-56 -mt-10 overflow-hidden bg-gray-100 rounded-lg shadow-lg md:w-64 dark:bg-gray-800"></div>
        </section>

        <section className="bg-gray-100 p-4 rounded-lg shadow-md h-60">
            <Circular_Chart />
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
