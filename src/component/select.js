import React from "react";
import ContactUs from "./contactUs";

export default function Select(props) {
  const { options } = props;
  const [open, setOpens] = React.useState(false);

  return (
    <div className="" onClick={() => setOpens(!open)}>
      <input
        className=" relative active:border-none outline-0"
        placeholder="where are you going"
      />

      {open ? (
        <div
          id="dropdownNotification"
          className="absolute scrollbar max-h-96 overflow-auto left-0 right-0 z-20 w-full max-w-sm bg-white divide-y divide-gray-100 rounded-lg shadow-sm"
          aria-labelledby="dropdownNotificationButton"
        >
          <div className="divide-y divide-gray-100 dark:divide-gray-700">
            {options.map((item, index) => {
              return (
                <a
                  key={index}
                  href="#"
                  className="flex items-center px-4 py-3 hover:bg-amber-50"
                >
                  <div className=" max-w-20 max-h-20">
                    <img src={item.img} alt="Jese image" />
                  </div>
                  <div className="w-full ps-3">
                    <div className="">
                      <span className="font-semibold text-gray-900">
                        {item.title}
                      </span>
                    </div>
                    <div className="text-gray-500 text-sm mb-1.5 dark:text-gray-400">
                      {item.description}
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
}
