import React from "react";

export default function About() {
  return (
    <div className="about h-screen relative flex flex-col items-center justify-center">
      <h1 className="about__title mb-4 text-40 text-white font-livvic font-bold md:text-64">
        About
      </h1>
      <p className="about__info w-90v leading-7 text-center text-white font-livvic md:w-60v">
        We help companies build dynamic teams made up of top global talent.
        Using our network of passionate professionals we drive innovation and
        deliver incredible outcomes. Talented, diverse teams shape the best
        products and experiences. We’ll bring those teams to you.
      </p>

      <div className="absolute bottom-0 left-0 z-10 bg-primary w-50v h-28"></div>

      <svg
        className="about__pattern absolute -bottom-24 -right-24 md:bottom-0"
        xmlns="http://www.w3.org/2000/svg"
        width="200"
        height="200"
      >
        <g fill="none" fillRule="evenodd">
          <path fill="#2C6269" d="M100 100H0V0h100z" />
          <path
            fill="#F67E7E"
            d="M100 0c55.228 0 100 44.772 100 100s-44.772 100-100 100S0 155.228 0 100 44.772 0 100 0zm0 67c-18.225 0-33 14.775-33 33s14.775 33 33 33 33-14.775 33-33-14.775-33-33-33z"
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
