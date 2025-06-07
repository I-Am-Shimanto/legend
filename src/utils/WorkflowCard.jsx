import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";

const WorkflowCard = ({ image, title, button, path = "/" }) => {
  return (
    <div className="linear pt-4 px-8 pb-8 border border-[rgba(255,255,255,0.15)] rounded-3xl">
      <img className=" mx-auto" src={image} alt="image" />
      <h2 className="text-2xl font-semibold font-inter text-white leading-7 py-8">
        {title}
      </h2>
      <Link
        className="text-base font-semibold font-inter text-black gap-2 px-4.25 py-1.5 bg-brand w-fit rounded-lg"
        to={path}
      >
        <p className="flex  items-center gap-1.5">
          {button}
          <FaArrowRight className="-rotate-45" />
        </p>
      </Link>
    </div>
  );
};

export default WorkflowCard;
