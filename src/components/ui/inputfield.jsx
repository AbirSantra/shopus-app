import React from "react";
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const InputField = ({ type, label, ...props }) => {
  // to store the password state
  const [showpass, setShowpass] = useState(false);

  // to toggle the password state
  const togglePass = (e) => {
    e.preventDefault();
    setShowpass((prev) => !prev);
  };

  return (
    <div className="focus-within:text-primary flex w-full flex-col gap-1 text-slate-500">
      <p className="text-xs font-semibold">{label}</p>
      {type === "password" ? (
        <div className="focus-within:border-primary flex w-full items-center justify-center gap-2 rounded-md border border-slate-300 px-4 py-2 text-slate-500">
          <input
            type={showpass ? "text" : "password"}
            {...props}
            className="w-full border-none outline-none"
          />
          <button className="" onClick={togglePass}>
            {showpass ? (
              <AiFillEye size={20} />
            ) : (
              <AiFillEyeInvisible size={20} />
            )}
          </button>
        </div>
      ) : (
        <div className="focus-within:border-primary flex w-full items-center justify-center gap-2 rounded-md border border-slate-300 px-4 py-2 text-slate-500">
          <input
            type={type}
            {...props}
            className="w-full border-none outline-none"
          />
        </div>
      )}
    </div>
  );
};

export default InputField;
