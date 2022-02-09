import React, { useState } from "react";
import PropTypes from "prop-types";

function Input({ label, value, setValue }) {
  const [input, setInput] = useState(value);
  const [isValidToEdit, setIsValidToEdit] = useState(false);

  const onEdit = () => {
    setIsValidToEdit(true);
  };

  const onSelect = (e) => {
    e.target.select();
  };

  const onChangeInput = (e) => {
    setInput(e.target.value);
  };

  const onBlurHandler = () => {
    setIsValidToEdit(false);
    setValue(input);
  };

  return (
    <>
      {isValidToEdit ? (
        <label className="mb-6">
          {label}
          <input
            type="text"
            value={input}
            maxLength={20}
            onClick={onSelect}
            onChange={onChangeInput}
            onBlur={onBlurHandler}
            className="w-44 h-8 ml-4 border-2 border-gray-300 text-center"
          />
        </label>
      ) : (
        <div className="flex items-center mb-6">
          <div>{label}</div>
          <div onClick={onEdit} className="w-44 h-8 ml-4 border-2 border-gray-300 text-center">
            {value}
          </div>
        </div>
      )}
    </>
  );
}

function ClickToEdit() {
  const [name, setName] = useState("원티드");
  const [age, setAge] = useState(7);

  return (
    <div className="flex flex-col justify-center items-center mt-40">
      <div className="flex flex-col">
        <Input label="이름" value={name} setValue={setName} />
        <Input label="나이" value={age} setValue={setAge} />
      </div>
      <div>
        이름 {name} 나이 {age}
      </div>
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  setValue: PropTypes.func.isRequired,
};

export default ClickToEdit;
