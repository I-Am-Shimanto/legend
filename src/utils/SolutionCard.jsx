import React from "react";

const SolutionCard = ({ image, title, body }) => {
  return (
    <div data-aos="zoom-in">
      <div className="linear border border-[rgba(255,255,255,0.15)] py-12 px-10.5 rounded-xl flex gap-10.5 cursor-pointer hover:scale-102 hover:border-white duration-300">
        <img className="w-10 h-10" src={image} alt="feature" />
        <div>
          <h4 className="text-xl font-semibold font-inter text-white leading-6 mb-2.5">
            {title}
          </h4>
          <p className="text-base font-normal font-inter text-secondary leading-6">
            {body}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SolutionCard;
