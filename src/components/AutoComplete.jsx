import React, { useRef, useState, useEffect } from "react";

function AutoComplete() {
  const [searchInput, setSearchInput] = useState("");
  const [searchList, setSearchList] = useState(["원티드", "코드스테이츠", "온보딩"]);
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    const focusOut = () => isFocused && setIsFocused(false);
    document.addEventListener("click", focusOut);
    return () => {
      document.removeEventListener("click", focusOut);
    };
  }, [isFocused]);

  const match = (input, list) => {
    return list.filter((val) => {
      const regex = new RegExp(input, "ig");
      return val.match(regex);
    });
  };

  const onChangeHandler = (e) => {
    const { value } = e.target;
    setSearchInput(value);
  };

  const onSave = async (e) => {
    if (e.key === "Enter") {
      await setSearchList((prev) => [...prev, searchInput]);
      setSearchInput("");
    }
  };

  const onFocus = () => {
    inputRef.current.focus();
    setIsFocused(true);
  };

  const onSelect = (word) => {
    setSearchInput(word);
  };

  const isValidToRecommend = searchInput && match(searchInput, searchList).length > 0;

  return (
    <div onClick={onFocus} className="flex flex-col justify-center items-center mt-40 relative">
      <div
        className={`flex justify-between w-6/12 h-14 px-4 border-gray-300 border-2  
        ${isValidToRecommend ? "rounded-t-2xl border-b-0 " : "rounded-2xl"} 
        ${isFocused && !isValidToRecommend ? "shadow-lg" : ""}`}
      >
        <input
          type="text"
          placeholder="Press enter to add history"
          value={searchInput}
          onChange={onChangeHandler}
          onKeyPress={onSave}
          ref={inputRef}
          className="w-full outline-none"
        />
        <button type="button" onClick={() => setSearchInput("")}>
          x
        </button>
      </div>
      {isValidToRecommend && (
        <ul className="absolute w-6/12 top-14 left-68 border-gray-300 border-2 rounded-b-2xl shadow-lg">
          {match(searchInput, searchList).map((val, idx) => (
            <li
              key={idx}
              onClick={() => onSelect(val)}
              className="pl-4 hover:bg-gray-100 last:pb-1 last:rounded-b-2xl cursor-pointer"
            >
              {val}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AutoComplete;
