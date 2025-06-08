import React from "react";
import SolutionCard from "../utils/SolutionCard";
import { Link } from "react-router";
import { FaPlus } from "react-icons/fa";

const Solution = () => {
  return (
    <>
      <section className="py-32">
        <div className="container">
          <div className="heading">
            <p className="text-sm font-normal font-inter text-black leading-5.25 px-4 py-1.5 bg-brand w-fit rounded-full mx-auto">
              Solutions
            </p>
            <h2 className="text-2xl sm:text-3xl md:4xl lg:text-5xl font-semibold font-inter text-white sm:leading-13 max-w-160 text-center mx-auto pt-5.25 px-0">
              <span className="text-brand">End-to-End</span> seamless data
              management solutions
            </h2>
            <p className="max-w-144 mx-auto text-lg font-normal font-inter text-white leading-6.75 text-center pt-6 pb-16">
              Offers a unified platform that fosters innovation while providing
              end- to-end data management.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xl:px-39">
            <SolutionCard
              image="images/feature1.png"
              title="Fast and Reliable"
              body="Whether you have a team of 2 or 200, our shared team inboxes keep
                everyone on the same page and in the loop."
            />
            <SolutionCard
              image="images/feature2.png"
              title="Fast and Reliable"
              body="Whether you have a team of 2 or 200, our shared team inboxes keep
                everyone on the same page and in the loop."
            />
            <SolutionCard
              image="images/feature3.png"
              title="Fast and Reliable"
              body="Whether you have a team of 2 or 200, our shared team inboxes keep
                everyone on the same page and in the loop."
            />
            <SolutionCard
              image="images/feature4.png"
              title="Fast and Reliable"
              body="Whether you have a team of 2 or 200, our shared team inboxes keep
                everyone on the same page and in the loop."
            />
            <SolutionCard
              image="images/feature5.png"
              title="Fast and Reliable"
              body="Whether you have a team of 2 or 200, our shared team inboxes keep
                everyone on the same page and in the loop."
            />
            <SolutionCard
              image="images/feature6.png"
              title="Fast and Reliable"
              body="Whether you have a team of 2 or 200, our shared team inboxes keep
                everyone on the same page and in the loop."
            />
          </div>
          <Link
            to="/"
            className="text-brand text-base font-semibold font-inter leading-12 px-6 border border-[rgba(255,255,255,0.15)] rounded-full mt-16 w-fit mx-auto flex hover:border-white duration-300 hover:scale-102"
          >
            <span className="flex items-center gap-1.5">
              <FaPlus />
              View all solutions
            </span>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Solution;
