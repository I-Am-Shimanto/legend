import React from "react";

const HeadingBtn = ({ title }) => {
  return (
    <div>
      <h4 className="text-sm font-normal font-inter text-[#212529] leading-5.5 bg-brand w-fit px-4 py-1.5 rounded-full">
        {title}
      </h4>
    </div>
  );
};

export default HeadingBtn;
