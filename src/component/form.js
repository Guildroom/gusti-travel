import { destinationOptions, packageOptions } from "./constant";
import DatePickerCustom from "./datepicker";
import DropdownWithCheckBox from "./dropdownWithCheckbox";
import Select from "./select";
import { Appointment, Calendar, LocalTwo } from "@icon-park/react";

export default function Form(props) {
  const { formType } = props;

  if (formType == "Package") {
    return (
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
              <DatePickerCustom />
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
    );
  } else if (formType == "Activity") {
    return (
      <div className=" w-full flex items-center justify-center flex-col -mt-12 z-1">
        <div className="flex flex-col justify-center items-start md:items-center rounded-4xl bg-white gap-3.5 drop-shadow-md md:flex-row w-[90vw] md:w-fit md:rounded-full">
          <div className="flex gap-3 items-center rounded-full h-24 px-4 hover:none md:hover:shadow-md">
            <LocalTwo theme="outline" size="24" fill="#333" strokeWidth={2} />
            <div>
              <p>Your Place</p>
              <Select options={destinationOptions} />
            </div>
          </div>
          <div className="flex gap-3 items-center rounded-full h-24 px-4 hover:none md:hover:shadow-md">
            <Calendar theme="outline" size="24" fill="#333" strokeWidth={2} />
            <div>
              <p>Date</p>
              <DatePickerCustom />
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
              <p>Activity</p>
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
    );
  } else if (formType == "Transport") {
    return (
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
              <DatePickerCustom />
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
    );
  } else {
    return;
  }
}
