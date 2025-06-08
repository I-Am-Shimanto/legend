import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";

const WorkflowCard = ({ image, title, button, path = "/" }) => {
  return (
    <div data-aos="fade-up" data-aos-duration="1000">
      <div className="linear pt-4 px-8 pb-8 border border-[rgba(255,255,255,0.15)] rounded-3xl cursor-pointer hover:scale-101 hover:border-white duration-300">
        <img className=" mx-auto" src={image} alt="image" />
        <h2 className="text-2xl font-semibold font-inter text-white leading-7 py-8">
          {title}
        </h2>
        <Link
          className="text-base font-semibold font-inter text-black gap-2 px-4.25 py-1.5 bg-brand w-fit rounded-lg group flex"
          to={path}
        >
          <p className="flex  items-center gap-1.5">
            {button}
            <FaArrowRight className="-rotate-45 group-hover:text-white duration-300" />
          </p>
        </Link>
      </div>
    </div>
  );
};

export default WorkflowCard;
