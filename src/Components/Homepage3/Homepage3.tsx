import React from "react";

import Homepage3Cards from "../Homepage3Cards/Homepage3Cards";

export default function Homepage3() {
  return (
    <section className="homepage3 relative flex flex-col items-center w-screen bg-lightergreen lg:h-100v lg:justify-center">
      <svg
        className="homepage3__pattern absolute top-0 left-0"
        xmlns="http://www.w3.org/2000/svg"
        width="147"
        height="100"
      >
        <g fill="none" fillRule="evenodd">
          <path fill="#002529" d="M0 100h100V0H0z" />
          <path
            fill="#79C8C7"
            d="M47 96v4h100v-4H47zm0-8v4h100v-4H47zm0-8v4h100v-4H47zm0-8v4h100v-4H47zm0-8v4h100v-4H47zm0-8v4h100v-4H47z"
          />
        </g>
      </svg>

      <h1 className="homepage3__title text-32 text-center mt-36 mb-12 w-90v leading-8 font-livvic font-bold text-white md:w-60v md:mt-24 lg:text-5xl lg:w-65%">
        Delivering real results for top companies. Some of our{" "}
        <span className="homepage3__title-words text-cyan">
          success stories.
        </span>
      </h1>

      <div className="homepage3__cards relative lg:grid lg:grid-cols-3 lg:w-80% lg:gap-12">
        <Homepage3Cards />
      </div>

      <svg
        className=" absolute bottom-0 right-0"
        xmlns="http://www.w3.org/2000/svg"
        width="200"
        height="100"
      >
        <g fill="none" fillRule="evenodd">
          <path fill="#2C6269" d="M100 100h100V0H100z" />
          <path
            fill="#012F34"
            d="M100 0C44.772 0 0 44.772 0 100s44.772 100 100 100 100-44.772 100-100S155.228 0 100 0zm0 67c18.225 0 33 14.775 33 33s-14.775 33-33 33-33-14.775-33-33 14.775-33 33-33z"
          />
          <path
            fill="#79C8C7"
            d="M100 96v4h100v-4H100zm0-8v4h100v-4H100zm0-8v4h100v-4H100zm0-8v4h100v-4H100zm0-8v4h100v-4H100zm0-8v4h100v-4H100z"
          />
        </g>
      </svg>
    </section>
  );
}
