import React from "react";
import ClientsCard from "../utils/ClientsCard";
import Company from "./Company";

const Clients = () => {
  return (
    <section className="py-24">
      <div className="container">
        <div className="heading">
          <p className="text-sm font-normal font-inter text-black leading-5.25 px-4 py-1.5 bg-brand w-fit rounded-full mx-auto">
            Clients feedback
          </p>
          <h2 className="text-2xl sm:text-3xl md:4xl lg:text-5xl font-semibold font-inter text-white sm:leading-13 max-w-160 text-center mx-auto pt-5.25 px-0 pb-8">
            What our <span className="text-brand">satisfied clients</span> said
            about us!
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 sm:px-20 md:px-10 xl:px-31 gap-8 mb-8">
          <ClientsCard
            body="“We’re looking for people who share our vision! most of our time used
          to be taken up by most of alternate to help our employees.”"
            image="images/client1.png"
            title="Mark Zellers"
          />
          <ClientsCard
            body="“This powerful tool eliminates the need to leave Salesforce to get things done as I can create a custom proposal with dynamic pricing tables, and get approval from my boss all within 36 minutes.”"
            image="images/client1.png"
            title="Mark Zellers"
          />
          <ClientsCard
            body="“Look for service suppliers that
                    comply with this regulation,
                    and as we look to create our
                    website, this builder is just
                    outstanding!”"
            image="images/client1.png"
            title="Mark Zellers"
          />
          <div className="xl:-translate-y-13.5 overflow-hidden">
            <ClientsCard
              body="“We’re looking for people who
                    share our vision! most of our
                    time used to be taken up by
                    most of alternate
                    administrative work whereas
                    now we can focus on building
                    out to help our employees.”"
              image="images/client1.png"
              title="Mark Zellers"
            />
          </div>
          <ClientsCard
            body="“This powerful tool eliminates
                    the need to leave Salesforce to
                    get things done as I can create
                    a custom proposal with
                    dynamic pricing tables, and get
                    approval from my boss all
                    within 36 minutes.”"
            image="images/client1.png"
            title="Mark Zellers"
          />
          <div className="xl:-translate-y-13.5 overflow-hidden">
            <ClientsCard
              body="“We’re looking for people who
                    share our vision! most of our
                    time used to be taken up by
                    most of alternate
                    administrative work whereas
                    now we can focus on building
                    out to help our employees.”"
              image="images/client1.png"
              title="Mark Zellers"
            />
          </div>
        </div>
        <Company/>
      </div>
    </section>
  );
};

export default Clients;
