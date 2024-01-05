import React from "react";

const ArchiveImage = props => {
  const { changeHandler, focusHandler, name, placeholder, fieldText } = props;
  return (
    <label className="w-full block rounded-md bg-slate-500 p-2 text-sm text-gray-300">
      Select Image
      <input
        onChange={changeHandler}
        onBlur={focusHandler}
        type="file"
        name={name}
        id={name}
        placeholder={placeholder}
        className="hidden"
      />
      {fieldText?.length < 1 ? (
        <span className="mt-2 block text-right text-xs tracking-wide text-gray-300">
          Enter at least 1 image
        </span>
      ) : (
        ""
      )}
    </label>
  );
};

export default ArchiveImage;
