import React from "react";
import { useMediaQuery } from "react-responsive";

export default function About() {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div className="about h-screen relative flex flex-col items-center justify-center">
      <div className="lg:flex lg:w-80% lg:justify-between lg:items-center">
        <h1 className="about__title mb-4 text-40 text-white text-center font-livvic font-bold md:text-64">
          About
        </h1>

        <div className="lg:flex lg:flex-col lg:w-65%">
          <svg
          className="mb-12"
            width="50"
            height="4"
            viewBox="0 0 50 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="50" height="4" fill="#F67E7E" />
          </svg>

          <p className="about__info w-90v leading-7 text-center text-white font-livvic md:w-60v lg:text-left lg:w-auto lg:text-lg">
            We help companies build dynamic teams made up of top global talent.
            Using our network of passionate professionals we drive innovation
            and deliver incredible outcomes. Talented, diverse teams shape the
            best products and experiences. We’ll bring those teams to you.
          </p>
        </div>

        {isMobile && (
          <div className="absolute bottom-0 left-0 z-10 bg-primary w-50v h-28"></div>
        )}

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
    </div>
  );
}
