import React from "react";

export default function BasicDropDown(props) {
  const { options } = props;
  const [open, setOpens] = React.useState(false);
  return (
    <div className="relative" onClick={() => setOpens(!open)}>
      <input
        className="  active:border-none outline-0"
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
                  className="flex items-center  py-3 hover:bg-amber-50"
                >
                  <div className="w-full ps-3">
                    <div className="">
                      <span className="text-black-600">{item.title}</span>
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
