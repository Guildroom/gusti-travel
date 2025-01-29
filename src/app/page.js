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

export default function Home() {
  const packageOptions = [
    {
      title: "paket A",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur doloremque saepe architecto maiores repudiandae amet perferendis repellendus, reprehenderit voluptas sequi.",
      img: "/background.jpg",
    },
    {
      title: "paket B",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur doloremque saepe architecto maiores repudiandae amet perferendis repellendus, reprehenderit voluptas sequi.",
      img: "/background.jpg",
    },
    {
      title: "paket C",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur doloremque saepe architecto maiores repudiandae amet perferendis repellendus, reprehenderit voluptas sequi.",
      img: "/background.jpg",
    },
  ];
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
            <div>Package</div>
            <div>Activity</div>
            <div>Transport</div>
          </div>
        </div>
      </div>
      <div className=" w-full flex items-center justify-center flex-col -mt-12 z-1">
        <div className="flex flex-col justify-center items-start md:items-center rounded-4xl bg-white gap-3.5 drop-shadow-md md:flex-row w-[90vw] md:w-fit md:rounded-full">
          <div className="flex gap-3 items-center rounded-full h-24 px-4 hover:none md:hover:shadow-md">
            <LocalTwo theme="outline" size="24" fill="#333" strokeWidth={2} />
            <div>
              <p>Package</p>
              <Select options={packageOptions} />
            </div>
          </div>
          <div className="flex gap-3 items-center rounded-full h-24 px-4 hover:none md:hover:shadow-md">
            <Calendar theme="outline" size="24" fill="#333" strokeWidth={2} />
            <div>
              <p>Date</p>
              <DatePicker />
            </div>
          </div>
          <div className="flex gap-3 items-center rounded-full h-24 px-4 hover:none md:hover:shadow-md">
            <Appointment
              theme="outline"
              size="24"
              fill="#333"
              strokeWidth={2}
            />
            <div>
              <p>Sub Activity</p>
              <DropdownWithCheckBox options={packageOptions} />
            </div>
          </div>
          <a
            href="#"
            className="inline-block rounded-full bg-indigo-600 px-8 py-6 mr-8 ml-5 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
          >
            Send to Us
          </a>
        </div>
      </div>
      <ContactUs />
      <Footer />
    </div>
  );
}
