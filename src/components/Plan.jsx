import React, { useRef, useState } from "react";
import { FaCheck } from "react-icons/fa";

const Plan = () => {
  const [isEdit, setIsEdit] = useState(true);
  const monthref = useRef(null);
  const yearref = useRef(null);

  const handleMonth = () => {
    setIsEdit(true);
    monthref.current.style = "background : #C1FFB4;";
    yearref.current.style = "background : white;";
  };

  const handleYear = () => {
    setIsEdit(false);
    monthref.current.style = "background : white;";
    yearref.current.style = "background : #C1FFB4;";
  };

  return (
    <>
      <section className="bg-[#07313B] mx-4 py-32 rounded-2xl">
        <div className="container">
          <div className="heading">
            <p className="text-sm font-normal font-inter text-black leading-5.25 px-4 py-1.5 bg-brand w-fit rounded-full mx-auto">
              Pricing
            </p>
            <h2 className="text-2xl sm:text-3xl md:4xl lg:text-5xl font-semibold font-inter text-white sm:leading-13 max-w-160 text-center mx-auto pt-5.25 px-0">
              Scalable plans{" "}
              <span className="text-brand">to fit any business size</span>
            </h2>
          </div>
          <div className="pricebtn rounded-xl bg-white w-fit mx-auto mt-16 mb-12 p-1.25">
            <button
              onClick={() => handleMonth()}
              ref={monthref}
              className="py-2.5 px-7.5 rounded-lg cursor-pointer bg-brand"
            >
              Pay monthly
            </button>
            <button
              onClick={() => handleYear()}
              ref={yearref}
              className="py-2.5 px-7.5 rounded-lg cursor-pointer"
            >
              Pay yearly
            </button>
          </div>
          <div className="pricing grid grid-cols-1 md:grid-cols-2 lg:px-30 xl:px-67 gap-4">
            {/* =============== free feature ============== */}

            <div className="free border border-brand rounded-2xl p-10.25 h-fit">
              <div className="flex justify-between pb-5 border-b border-[rgba(255,255,255,0.15)]">
                <div>
                  <p className="text-sm font-normal font-inter text-black leading-5.25 py-1.5 px-4 bg-brand w-fit rounded-full uppercase">
                    Free
                  </p>
                  <p className="text-base font-normal font-inter text-white leading-6 mt-2">
                    Free now and forever
                  </p>
                </div>
                <h4 className="text-[40px] font-normal font-inter text-white leading-11">
                  $0
                </h4>
              </div>
              <h3 className="text-base font-semibold font-inter text-white leading-6 py-4">
                Standout features
              </h3>
              <ul className="flex flex-col gap-2">
                <li className="flex items-center gap-3 text-white text-base font-normal font-inter leading-6">
                  <FaCheck /> Fast and Reliable
                </li>
                <li className="flex items-center gap-3 text-white text-base font-normal font-inter leading-6">
                  <FaCheck /> Discover Data Everywhere
                </li>
                <li className="flex items-center gap-3 text-white text-base font-normal font-inter leading-6">
                  <FaCheck /> Enrich Data with Context
                </li>
                <li className="flex items-center gap-3 text-white text-base font-normal font-inter leading-6">
                  <FaCheck /> Risk Management
                </li>
              </ul>
              <button className="mt-8 mb-2 bg-white w-full py-3.75 rounded-full font-semibold font-inter text-base cursor-pointer hover:scale-101 hover:bg-[rgba(255,255,255,0.83)] duration-300">
                Get started
              </button>
              <p className="text-sm font-normal font-inter text-[rgba(255,255,255,0.35)] leading-5.25 text-center">
                No credit card required!
              </p>
            </div>

            {/* ============== paid features ========== */}

            <div className="paid border border-brand rounded-2xl p-10.25">
              <div className="flex justify-between pb-5 border-b border-[rgba(255,255,255,0.15)]">
                <div>
                  <p className="text-sm font-normal font-inter text-black leading-5.25 py-1.5 px-4 bg-brand w-fit rounded-full uppercase">
                    get pro
                  </p>
                  <p className="text-base font-normal font-inter text-white leading-6 mt-2">
                    {isEdit ? "One month only" : "One year only"}
                  </p>
                </div>
                <h4 className="text-[40px] font-normal font-inter text-white leading-11">
                  {isEdit ? "24$" : "240$"}
                </h4>
              </div>
              <h3 className="text-base font-semibold font-inter text-white leading-6 py-4">
                Standout features
              </h3>
              <ul className="flex flex-col gap-2">
                <li className="flex items-center gap-3 text-white text-base font-normal font-inter leading-6">
                  <FaCheck /> Fast and Reliable
                </li>
                <li className="flex items-center gap-3 text-white text-base font-normal font-inter leading-6">
                  <FaCheck /> Discover Data Everywhere
                </li>
                <li className="flex items-center gap-3 text-white text-base font-normal font-inter leading-6">
                  <FaCheck /> Enrich Data with Context
                </li>
                <li className="flex items-center gap-3 text-white text-base font-normal font-inter leading-6">
                  <FaCheck /> Risk Management
                </li>
                <li className="flex items-center gap-3 text-white text-base font-normal font-inter leading-6">
                  <FaCheck /> Privacy Compliance
                </li>
                <li className="flex items-center gap-3 text-white text-base font-normal font-inter leading-6">
                  <FaCheck /> Third-Party Management
                </li>
              </ul>
              <button className="mt-8 mb-2 bg-brand w-full py-3.75 rounded-full font-semibold font-inter text-base text-black hover:scale-101 cursor-pointer duration-300">
                Try for free
              </button>
              <p className="text-sm font-normal font-inter text-[rgba(255,255,255,0.35)] leading-5.25 text-center">
                No credit card required!
              </p>
            </div>
          </div>
          <p className="mt-12 text-center text-base font-normal font-inter text-[#9EBAC1] leading-6">
            *Yearly discount available on select plans.
          </p>
        </div>
      </section>
    </>
  );
};

export default Plan;
