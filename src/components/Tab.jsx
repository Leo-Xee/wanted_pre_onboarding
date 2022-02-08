import React, { useState } from "react";

function Tab() {
  const [tab, setTab] = useState("ONE");
  const tabs = ["ONE", "TWO", "THREE"];

  const onChangeTab = (e) => {
    const { name } = e.target;
    setTab(name);
  };

  return (
    <div className="flex flex-col justify-center mt-40">
      <div className="flex w-full h-12 pl-10 bg-gray-300">
        {tabs.map((val, idx) => (
          <button
            key={idx}
            type="button"
            name={val}
            onClick={onChangeTab}
            className={`flex-1 text-left pl-4 ${
              tab === val ? "bg-violet-700 text-white" : ""
            }`}
          >
            Tab{idx + 1}
          </button>
        ))}
      </div>
      <div className="flex justify-center items-center h-44">
        <div>Tab menu {tab}</div>
      </div>
    </div>
  );
}

export default Tab;
