import React from "react";

export default function ContactSection() {
  return (
    <div className="contact-section relative flex flex-col items-center justify-center bg-lightred md:flex-row md:py-24 md:gap-8">
      <h1 className="contact-section__title w-70v mt-24 mb-4 text-center text-32 leading-8 font-livvic font-bold text-darkergreen md:mt-0 md:mb-0 md:w-50% lg:text-5xl lg:text-left">
        Ready to get started?
      </h1>
      <button className="contact-section__button mb-24 border-darkergreen border-2 rounded-3xl py-1.5 px-8 text-lg text-darkergreen font-livvic font-bold md:mb-0">
        contact us
      </button>
      <svg
        className="contact__patter absolute -bottom-5 left-0 lg:bottom-0"
        xmlns="http://www.w3.org/2000/svg"
        width="200"
        height="144"
      >
        <g fill="none" fillRule="evenodd">
          <path fill="#2C6269" d="M100 144H0V44h100z" />
          <path
            fill="#004047"
            d="M100 44c55.228 0 100 44.772 100 100s-44.772 100-100 100S0 199.228 0 144 44.772 44 100 44zm0 67c-18.225 0-33 14.775-33 33s14.775 33 33 33 33-14.775 33-33-14.775-33-33-33z"
          />
          <path
            fill="#F67E7E"
            d="M100 140v4H0v-4h100zm0-8v4H0v-4h100zm0-8v4H0v-4h100zm0-8v4H0v-4h100zm0-8v4H0v-4h100zm0-8v4H0v-4h100z"
          />
          <path
            fill="#79C8C7"
            d="M4 40v4H0v-4h4zm7 0v4H7v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zM4 32v4H0v-4h4zm7 0v4H7v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zM4 24v4H0v-4h4zm7 0v4H7v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm7 0v4h-4v-4h4zm-35-8v4h-4v-4h4zm14 0v4h-4v-4h4zm-7 0v4h-4v-4h4zm21 0v4h-4v-4h4zm-7 0v4h-4v-4h4zM4 16v4H0v-4h4zm7 0v4H7v-4h4zm42 0v4h-4v-4h4zM4 8v4H0V8h4zm7 0v4H7V8h4zm7 0v4h-4V8h4zm7 0v4h-4V8h4zm7 0v4h-4V8h4zm7 0v4h-4V8h4zm7 0v4h-4V8h4zm7 0v4h-4V8h4zM4 0v4H0V0h4zm7 0v4H7V0h4zm7 0v4h-4V0h4zm7 0v4h-4V0h4zm7 0v4h-4V0h4zm7 0v4h-4V0h4zm7 0v4h-4V0h4zm7 0v4h-4V0h4z"
          />
        </g>
      </svg>
    </div>
  );
}
