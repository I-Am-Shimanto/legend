import React from "react";
import { Link } from "react-router";

const MainBtn = ({ title, path = "/" }) => {
  return (
    <>
      <Link
        className="text-lg font-semibold font-inter text-black leading-12 py-1 px-10 w-fit rounded-full bg-brand"
        to={path}
      >
        {title}
      </Link>
    </>
  );
};

export default MainBtn;
