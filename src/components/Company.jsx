import React from "react";

const Company = () => {
  return (
    <>
      <section className="mb-25">
        <div className="container">
          <p className="text-base font-normal font-inter text-secondary leading-6 text-center mb-10">
            Trusted by over most popular companies worldwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12.5">
            <img src="images/brand1.png" alt="brand" />
            <img src="images/brand2.png" alt="brand" />
            <img src="images/brand3.png" alt="brand" />
            <img src="images/brand4.png" alt="brand" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Company;
