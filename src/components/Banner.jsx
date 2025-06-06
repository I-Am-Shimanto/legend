import React from "react";
import HeadingBtn from "../utils/HeadingBtn";
import { TypeAnimation } from "react-type-animation";
import MainBtn from "../utils/MainBtn";
import Star from "../utils/Star";
import { IoStar } from "react-icons/io5";

const Banner = () => {
  return (
    <>
      <section className="banner pt-20 pb-35">
        <div className="container">
          <div className="flex flex-col justify-center items-center">
            <HeadingBtn title="Get started today!" />
            <h1 className="max-w-180 text-6xl text-white text-center font-semibold font-inter leading-16 py-4">
              Seamless integrations with your{" "}
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed once, initially
                  "existing tools",
                  2000,
                  "business app",
                  2000,
                  "ai automation",
                  2000,
                ]}
                speed={50}
                style={{ fontSize: "60px", color: "#C1FFB4" }}
                repeat={Infinity}
              />
            </h1>
            <p className="text-xl font-normal font-inter text-secondary leading-7.5 mb-12">
              See how we help your team solve today’s biggest challenges.
            </p>
            <MainBtn title="Start your free trial" />
            <div className="flex items-center text-white font-semibold font-inter leading-6 mt-8.5">
              <p>Super</p>
              <div className="star flex items-center gap-1 ml-4 mr-2">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </div>
              <p>5,200+ reviews on</p>
              <IoStar className="text-[#00B67A] mx-1" />
              <p>Trustpilot</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
