"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { Appointment, Calendar, Down, LocalTwo } from "@icon-park/react";
import Footer from "@/component/footer";
import Header from "@/component/header";
import ContactUs from "@/component/contactUs";
import Select from "@/component/select";
import DropdownWithCheckBox from "@/component/dropdownWithCheckbox";
import DatePicker from "@/component/datepicker";
import { useState } from "react";
import Form from "@/component/form";

export default function Home() {
  const [formType, setFormType] = useState("Package");

  return (
    <div>
      <div className="relative z-0">
        <div className="z-1 absolute w-full">
          <Header />
        </div>
        <div className="z-0 h-[60vh] w-0">
          <Image
            src="/background.jpg"
            alt="mountain img"
            fill
            priority
            style={{
              objectFit: "cover",
              objectPosition: "30% 100%",
            }}
          />
        </div>
        <div className=" absolute bottom-[20vh] text-white flex items-center flex-col justify-center w-full gap-10">
          <div className=" md:text-6xl font-bold text-3xl">
            Let the journey begin
          </div>
          <div className=" md:text-3xl ">
            Get the best prices on 2,000,000+ properties, worldwide
          </div>
        </div>
        <div className=" absolute top-[55vh] w-full flex items-center justify-center flex-col -mt-12 z-1">
          <div className="flex items-center justify-center gap-3.5 text-white">
            <div
              className="cursor-pointer"
              onClick={() => {
                setFormType("Package");
              }}
            >
              Package
            </div>
            <div
              className="cursor-pointer"
              onClick={() => {
                setFormType("Activity");
              }}
            >
              Activity
            </div>
            <div
              className="cursor-pointer"
              onClick={() => {
                setFormType("Transport");
              }}
            >
              Transport
            </div>
          </div>
        </div>
      </div>
      <Form formType={formType} />
      <ContactUs />
      <Footer />
    </div>
  );
}
