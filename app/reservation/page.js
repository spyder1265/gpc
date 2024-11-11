import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Reservation() {
  return (
    <main className="min-h-screen w-full flex flex-col">
      <section className="relative h-[500px] w-full">
        <div className="absolute top-0 left-0 right-0 flex flex-col justify-between bg-overlay/65 text-white h-full w-full">
          <div className="">
            <Navbar />
          </div>
          <div className="md:py-24 py-12 px-6 md:px-16 w-full">
            <div className="flex flex-col gap-y-1 items-start justify-center text-left h-full">
              <h1 className="text-3xl md:text-5xl font-bold">Reservations</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="h-auto bg-slate-50 py-10 w-full"></section>
      <div className="bg-slate-50">
        <Footer />
      </div>
    </main>
  );
}
