import React from "react";
import HeadingBtn from "../utils/HeadingBtn";
import { TypeAnimation } from "react-type-animation";
import MainBtn from "../utils/MainBtn";
import Star from "../utils/Star";
import { IoStar } from "react-icons/io5";
import BannerCard from "../utils/BannerCard";

const Banner = () => {
  return (
    <>
      <section className="banner pt-20 pb-35">
        <div className="container">
          <div className="flex flex-col justify-center items-center">
            <HeadingBtn title="Get started today!" />
            <h1 className="max-w-180 text-2xl sm:text-5xl md:text-6xl text-white text-center font-semibold font-inter leading-10 sm:leading-14 md:leading-16 py-4">
              Seamless integrations with your{" "}
              <TypeAnimation
                sequence={[
                  "existing tools",
                  2000,
                  "business app",
                  2000,
                  "ai automation",
                  2000,
                ]}
                speed={50}
                className="text-2xl sm:text-5xl md:text-6xl"
                repeat={Infinity}
              />
            </h1>
            <p className="text-xl font-normal font-inter text-secondary leading-7.5 mb-12 text-center">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 px-4 sm:px-6 md:px-10 xl:px-35 mt-35">
            <BannerCard
              image="images/banner1.png"
              title="Enrich Data with Context & Risk Management"
            />
            <BannerCard
              image="images/banner2.png"
              title="Intuitive dashboard for at-a-glance insights"
            />
            <BannerCard
              image="images/banner3.png"
              title="Automated data analysis and reporting"
            />
            <BannerCard
              image="images/banner4.png"
              title="Scalable plans to fit any business size"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
