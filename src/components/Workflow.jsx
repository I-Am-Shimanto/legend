import React from "react";

const Workflow = () => {
  return (
    <>
      <section className="workflow py-32">
        <div className="container">
          <div className="work_cont"></div>
          <div className="heading">
            <p className="text-sm font-normal font-inter text-black leading-5.25 px-4 py-1.5 bg-brand w-fit rounded-full mx-auto">
              Main Features
            </p>
            <h2 className="text-5xl font-semibold font-inter text-white leading-13 max-w-160 text-center mx-auto pt-5.25">
              Automate your workflow with our{" "}
              <span className="text-brand">1000+ apps integrations</span>
              <p className="text-lg font-normal font-inter text-white leading-6.75 text-center pt-6 pb-16">Connect your tools, connect your teams with Lexend.</p>
            </h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default Workflow;
