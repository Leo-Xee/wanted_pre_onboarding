import React, { useState } from "react";

function Toggle() {
  const [isToggled, setIsToggled] = useState(false);
  const text = isToggled ? "ON" : "OFF";

  const onToggle = () => {
    setIsToggled((prev) => !prev);
  };

  return (
    <div className="flex flex-col items-center mt-40">
      <label className="cursor-pointer">
        <div className="relative">
          <input type="checkbox" onClick={onToggle} className="sr-only" />
          <div
            className={`w-20 h-10 rounded-full ${
              isToggled ? "bg-violet-700" : "bg-gray-300"
            } ease-linear duration-100`}
          ></div>
          <div
            className={`absolute animate-toggle left-1 top-1 w-8 h-8 bg-white rounded-full ${
              isToggled ? "translate-x-10" : "translate-x-0"
            } ease-linear duration-100`}
          ></div>
        </div>
      </label>
      <span className="mt-2">Toggle Switch {text}</span>
    </div>
  );
}

export default Toggle;
