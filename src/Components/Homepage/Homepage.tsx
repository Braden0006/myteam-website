import React from "react";

export default function Homepage() {
  return (
    <div className="flex items-center justify-center bg-primary relative h-screen">

      <div className="flex flex-col items-center w-screen text-center mb-8">
        <h1 className="text-white text-4xl mb-5 w-55v font-livvic font-bold md:text-64 md:leading-16 md:w-50v md:mb-8">
          Find the best{" "}
          <span className="homepage__title__word text-lightred">talent</span>
        </h1>
        <p className="text-white text-center text-sm w-78v leading-7 font-livvic md:text-base md:leading-8 md:w-60v">
          Finding the right people and building high performing teams can be
          hard. Most companies aren’t tapping into the abundance of global
          talent. We’re about to change that.
        </p>
      </div>

      <svg
        className="absolute bottom-0"
        xmlns="http://www.w3.org/2000/svg"
        width="358"
        height="100"
      >
        <g fill="none" fillRule="evenodd">
          <circle cx="100" cy="100" r="100" fill="#2C6269" />
          <path
            fill="#012F34"
            d="M258 0c55.228 0 100 44.772 100 100s-44.772 100-100 100-100-44.772-100-100S202.772 0 258 0zm0 67c-18.225 0-33 14.775-33 33s14.775 33 33 33 33-14.775 33-33-14.775-33-33-33z"
          />
          <path fill="#79C8C7" d="M358 43h-43V0h43z" />
          <path
            fill="#F67E7E"
            d="M233.514 0c55.228 0 100 44.772 100 100s-44.772 100-100 100c-55.229 0-100-44.772-100-100s44.771-100 100-100zm0 67c-18.226 0-33 14.775-33 33s14.774 33 33 33c18.225 0 33-14.775 33-33s-14.775-33-33-33z"
          />
          <path
            fill="#79C8C7"
            d="M100 40v4H0v-4h100zm0-8v4H0v-4h100zm0-8v4H0v-4h100zm0-8v4H0v-4h100zm0-8v4H0V8h100zm0-8v4H0V0h100z"
          />
        </g>
      </svg>
    </div>
  );
}
