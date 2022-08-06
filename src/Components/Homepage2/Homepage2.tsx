import React from "react";

import Homepage2Cards from "../Homepage2Cards/Homepage2Cards";

export default function Homepage2() {
  return (
    <div className="relative flex flex-col items-center bg-darkgreen">
      <div className="w-90v mt-16">
        <svg
          width="50"
          height="4"
          viewBox="0 0 50 4"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="50" height="4" fill="#F67E7E" />
        </svg>
        <h1 className="text-white text-32 mt-4 w-3/5 leading-9 font-livvic font-bold">
          Build & manage distributed teams like no one else.
        </h1>
      </div>

      <svg
        className="absolute -right-100px"
        xmlns="http://www.w3.org/2000/svg"
        width="200"
        height="244"
      >
        <g fill="none" fillRule="evenodd">
          <path fill="#2C6269" d="M100 144H0V44h100z" />
          <path
            fill="#014E56"
            d="M100 44c55.228 0 100 44.772 100 100s-44.772 100-100 100S0 199.228 0 144 44.772 44 100 44zm0 67c-18.225 0-33 14.775-33 33s14.775 33 33 33 33-14.775 33-33-14.775-33-33-33z"
          />
          <path
            fill="#79C8C7"
            d="M100 184v4H0v-4h100zm0-8v4H0v-4h100zm0-8v4H0v-4h100zm0-8v4H0v-4h100zm0-8v4H0v-4h100zm0-8v4H0v-4h100zM4 40v4H0v-4h4zm7 0v4H7v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zM4 32v4H0v-4h4zm7 0v4H7v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zM4 24v4H0v-4h4zm7 0v4H7v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm-35-8v4h-4v-4h4zm14 0v4h-4v-4h4zm-7 0v4h-4v-4h4zm21 0v4h-4v-4h4zm-7 0v4h-4v-4h4zM4 16v4H0v-4h4zm7 0v4H7v-4h4zm42 0v4h-4v-4h4zM4 8v4H0V8h4zm7 0v4H7V8h4zm7 0v4h-4V8h4zm7 0v4h-4V8h4zm7 0v4h-4V8h4zm7 0v4h-4V8h4zm7 0v4h-4V8h4zm7 0v4h-4V8h4zM4 0v4H0V0h4zm7 0v4H7V0h4zm7 0v4h-4V0h4zm7 0v4h-4V0h4zm7 0v4h-4V0h4zm7 0v4h-4V0h4zm7 0v4h-4V0h4zm7 0v4h-4V0h4z"
          />
        </g>
      </svg>

      <Homepage2Cards />
    </div>
  );
}
