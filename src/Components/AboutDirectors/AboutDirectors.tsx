import React from "react";

import AboutDirectorsCards from "../AboutDirectorsCards/AboutDirectorsCards";

export default function AboutDirectors() {
  return (
    <div className="about-direct relative flex flex-col items-center z-1 bg-lightergreen">
      <svg
        className="about-direct__pattern absolute -top-26 -left-28 md:top-0"
        xmlns="http://www.w3.org/2000/svg"
        width="200"
        height="200"
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
          <path
            fill="#F67E7E"
            d="M196 140v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm49-8v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm49-8v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm35-8v4h4v-4h-4zm-14 0v4h4v-4h-4zm7 0v4h4v-4h-4zm-21 0v4h4v-4h-4zm7 0v4h4v-4h-4zm35 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-42 0v4h4v-4h-4zm49-8v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm49-8v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4zm-7 0v4h4v-4h-4z"
          />
        </g>
      </svg>
      <h2 className="about-direct__title mt-20 text-32 text-white font-livvic font-bold md:mt-24 lg:text-5xl">
        Meet the directors
      </h2>

      <AboutDirectorsCards />

      <svg
        className="absolute bottom-0 right-0"
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
    </div>
  );
}
