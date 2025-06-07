import React from "react";
import WorkflowCard from "../utils/WorkflowCard";
import MainBtn from "../utils/MainBtn";
import Star from "../utils/Star";
import { IoStar } from "react-icons/io5";

const Workflow = () => {
  return (
    <>
      <section className="px-5">
        <div className="workflow py-32 rounded-4xl">
          <div className="container px-0">
            <div className="work_cont"></div>
            <div className="heading">
              <p className="text-sm font-normal font-inter text-black leading-5.25 px-4 py-1.5 bg-brand w-fit rounded-full mx-auto">
                Main Features
              </p>
              <h2 className="text-2xl sm:text-3xl md:4xl lg:text-5xl font-semibold font-inter text-white sm:leading-13 max-w-160 text-center mx-auto pt-5.25 px-0">
                Automate your workflow with our{" "}
                <span className="text-brand">1000+ apps integrations</span>
              </h2>
              <p className="text-lg font-normal font-inter text-white leading-6.75 text-center pt-6 pb-16">
                Connect your tools, connect your teams with Lexend.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:px-18 pb-32">
              <WorkflowCard
                image="images/workflow1.png"
                title="Seamless integrations with your app tools"
                button="Learn more"
              />
              <WorkflowCard
                image="images/workflow2.png"
                title="Intuitive dashboard for at-a-glance insights"
                button="Learn more"
              />
              <WorkflowCard
                image="images/workflow3.png"
                title="Get more value from your tools"
                button="Learn more"
              />
              <WorkflowCard
                image="images/workflow4.png"
                title="Enrich Data with Risk Management"
                button="Learn more"
              />
              <WorkflowCard
                image="images/workflow5.png"
                title="Scalable plans to fit any business size"
                button="Learn more"
              />
              <WorkflowCard
                image="images/workflow6.png"
                title="Automated data analysis and reporting"
                button="Learn more"
              />
            </div>
            <div className="flex flex-col items-center">
              <MainBtn title="Start your free trial" />
              <div className="flex flex-wrap text-center justify-center items-center text-white font-semibold font-inter leading-6 mt-8.5">
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
        </div>
      </section>
    </>
  );
};

export default Workflow;
