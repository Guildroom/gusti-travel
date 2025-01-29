import { useState } from "react";

export default function DropdownWithCheckBox(props) {
  const { options } = props;
  const [open, setOpens] = useState(false);
  return (
    <div
      className=" relative"
      onClick={() => {
        setOpens(!open);
      }}
    >
      <input
        className="active:border-none outline-0"
        placeholder="Beside Package what activity you want to do"
      />
      {open ? (
        <div
          id="dropdownHelper"
          className=" absolute z-10 text-black left-0 right-0 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-60"
        >
          <ul
            className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownHelperButton"
          >
            {options.map((item, inxed) => {
              return (
                <li key={inxed}>
                  <div className="flex items-center gap-2 p-2 rounded-sm hover:bg-gray-100 dark:hover:bg-amber-50">
                    <div className="flex items-center h-5">
                      <input
                        id="helper-checkbox-1"
                        aria-describedby="helper-checkbox-text-1"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm "
                      />
                    </div>
                    <div className="ms-2 text-sm">
                      <label className="font-medium text-black">
                        <div>Coocking</div>
                        <p
                          id="helper-checkbox-text-1"
                          className="text-gray-500 text-sm mb-1.5 dark:text-gray-400"
                        >
                          Some helpful instruction goes over here.
                        </p>
                      </label>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
