import React from "react";

import Gadgets from "../../Images/logo-gadgets-now.png";
import Jakarta from "../../Images/logo-jakarta-post.png";
import Tech from "../../Images/logo-tech-radar.png";
import Guardian from "../../Images/logo-the-guardian.png";
import Verge from "../../Images/logo-the-verge.png";

export default function AboutClients() {
  return (
    <div className="relative flex flex-col items-center justify-center bg-darkergreen">
      <svg
        className="absolute -top-28 -left-100px md:left-0"
        xmlns="http://www.w3.org/2000/svg"
        width="200"
        height="200"
      >
        <g fill="none" fillRule="evenodd">
          <path fill="#2C6269" d="M100 100H0V0h100z" />
          <path
            fill="#014E56"
            d="M100 0c55.228 0 100 44.772 100 100s-44.772 100-100 100S0 155.228 0 100 44.772 0 100 0zm0 67c-18.225 0-33 14.775-33 33s14.775 33 33 33 33-14.775 33-33-14.775-33-33-33z"
          />
          <path
            fill="#79C8C7"
            d="M100 140v4H0v-4h100zm0-8v4H0v-4h100zm0-8v4H0v-4h100zm0-8v4H0v-4h100zm0-8v4H0v-4h100zm0-8v4H0v-4h100zM4 40v4H0v-4h4zm7 0v4H7v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zM4 32v4H0v-4h4zm7 0v4H7v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zM4 24v4H0v-4h4zm7 0v4H7v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm-35-8v4h-4v-4h4zm14 0v4h-4v-4h4zm-7 0v4h-4v-4h4zm21 0v4h-4v-4h4zm-7 0v4h-4v-4h4zM4 16v4H0v-4h4zm7 0v4H7v-4h4zm42 0v4h-4v-4h4zM4 8v4H0V8h4zm7 0v4H7V8h4zm7 0v4h-4V8h4zm7 0v4h-4V8h4zm7 0v4h-4V8h4zm7 0v4h-4V8h4zm7 0v4h-4V8h4zm7 0v4h-4V8h4zM4 0v4H0V0h4zm7 0v4H7V0h4zm7 0v4h-4V0h4zm7 0v4h-4V0h4zm7 0v4h-4V0h4zm7 0v4h-4V0h4zm7 0v4h-4V0h4zm7 0v4h-4V0h4z"
          />
        </g>
      </svg>
      <h2 className="text-32 mb-12 mt-20 font-livvic font-bold text-white">
        Some of our clients
      </h2>
      <div className="flex flex-col items-center md:flex-row md:gap-8 md:justify-center md:mb-24">
        <img
          className="h-5 mb-12 md:mb-0"
          src={Verge}
          alt="A logo of the verge"
        />
        <img
          className="h-5 mb-12 md:mb-0"
          src={Jakarta}
          alt="A logo of the jakarta post"
        />
        <img
          className="h-5 mb-12 md:mb-0"
          src={Guardian}
          alt="A logo of the guardian"
        />
        <img
          className="h-5 mb-12 md:mb-0"
          src={Tech}
          alt="A logo of the tech radar"
        />
        <img
          className="h-8 mb-16 md:mb-0"
          src={Gadgets}
          alt="A logo of the gadgets now"
        />
      </div>
    </div>
  );
}
