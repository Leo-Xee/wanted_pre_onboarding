import React, { useEffect, useRef, useState } from "react";

function Tag() {
  const [tags, setTags] = useState([]);
  const [isFocused, setIsFocused] = useState(false);

  const inputRef = useRef(null);

  useEffect(() => {
    const focusOut = () => isFocused && setIsFocused(false);
    document.addEventListener("click", focusOut);
    return () => {
      document.removeEventListener("click", focusOut);
    };
  }, [isFocused]);

  const onEnter = async (e) => {
    if (e.key === "Enter") {
      await setTags((prev) => [...prev, inputRef.current.value]);
      inputRef.current.value = "";
    }
  };

  const onFocus = (e) => {
    e.stopPropagation();
    inputRef.current.focus();
    setIsFocused(true);
  };

  const onRemove = (e, idx) => {
    e.stopPropagation();
    const tagsFiltered = tags.filter((_, id) => id !== idx);
    setTags([...tagsFiltered]);
    inputRef.current.blur();
    setIsFocused(false);
  };

  return (
    <div className="flex justify-center items-center mt-40">
      <div
        onClick={onFocus}
        className={`w-6/12 p-2 flex items-center border-solid border-2 rounded-md flex-wrap ${
          isFocused ? "border-violet-700" : "border-gray-300"
        }`}
      >
        {tags.map((val, idx) => {
          return (
            <div
              key={idx}
              className="h-8 p-2 my-1 mr-2 flex items-center bg-violet-700 rounded-md"
            >
              <div className="text-white m-1 text-xs truncate">{val}</div>
              <button
                type="button"
                onClick={(e) => onRemove(e, idx)}
                className="w-4 h-4 bg-white rounded-full text-xs"
              >
                x
              </button>
            </div>
          );
        })}
        <label>
          <input
            type="text"
            placeholder="Press enter to add tag"
            onKeyPress={onEnter}
            className="h-10 outline-none text-sm"
            ref={inputRef}
          />
        </label>
      </div>
    </div>
  );
}

export default Tag;
