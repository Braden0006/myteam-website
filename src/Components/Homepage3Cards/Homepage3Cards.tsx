import React from "react";

import Kady from "../../Images/avatar-kady.jpg";
import Aiysha from "../../Images/avatar-aiysha.jpg";
import Arthur from "../../Images/avatar-arthur.jpg";

export default function Homepage3Cards() {
  return (
    <>
      <div className="homepage3Cards__card relative flex flex-col items-center justify-center">
        <svg
          className="homepage3Cards__card__pattern absolute top-0"
          xmlns="http://www.w3.org/2000/svg"
          width="67"
          height="56"
        >
          <path
            fill="#2C6269"
            d="M51.273 56c4.638 0 8.368-1.322 11.19-3.967 2.823-2.645 4.235-5.799 4.235-9.46 0-2.95-.429-5.494-1.286-7.63a197.251 197.251 0 01-2.495-6.562c-.806-2.237-1.21-4.933-1.21-8.087 0-2.746.454-5.798 1.361-9.155C63.976 7.782 65.286 4.069 67 0H55.356c-3.73 3.662-7.032 7.833-9.905 12.512-2.873 4.68-5.166 9.359-6.88 14.038C36.857 31.23 36 35.4 36 39.063c0 5.391 1.361 9.562 4.083 12.512C42.805 54.525 46.535 56 51.273 56zm-36 0c4.638 0 8.368-1.322 11.19-3.967 2.823-2.645 4.235-5.799 4.235-9.46 0-2.95-.429-5.494-1.286-7.63a197.251 197.251 0 01-2.495-6.562c-.806-2.237-1.21-4.933-1.21-8.087 0-2.746.454-5.798 1.361-9.155C27.976 7.782 29.286 4.069 31 0H19.356c-3.73 3.662-7.032 7.833-9.905 12.512-2.873 4.68-5.166 9.359-6.88 14.038C.857 31.23 0 35.4 0 39.063c0 5.391 1.361 9.562 4.083 12.512C6.805 54.525 10.535 56 15.273 56z"
          />
        </svg>
        <p className="homepage3Cards__title w-85v mt-8 text-center z-10 font-livvic text-white">
          {" "}
          “The team perfectly fit the specialized skill set required. They
          focused on the most essential features helping us launch the platform
          eight months faster than planned.”
        </p>
        <h3 className="homepage3Cards__name mt-4 font-livvic font-bold text-cyan text-lg">
          Kady Baker
        </h3>
        <span className="homepage3Cards__position text-white font-livvic italic">
          Product Manager at Bookmark
        </span>
        <img
          className="homepage3Cards__img h-62px rounded-full mt-4 mb-12"
          src={Kady}
          alt="Profile photo of kady baker"
        />
      </div>

      <div className="homepage3Cards__card relative flex flex-col items-center justify-center">
        <svg
          className="homepage3Cards__card__pattern absolute top-0"
          xmlns="http://www.w3.org/2000/svg"
          width="67"
          height="56"
        >
          <path
            fill="#2C6269"
            d="M51.273 56c4.638 0 8.368-1.322 11.19-3.967 2.823-2.645 4.235-5.799 4.235-9.46 0-2.95-.429-5.494-1.286-7.63a197.251 197.251 0 01-2.495-6.562c-.806-2.237-1.21-4.933-1.21-8.087 0-2.746.454-5.798 1.361-9.155C63.976 7.782 65.286 4.069 67 0H55.356c-3.73 3.662-7.032 7.833-9.905 12.512-2.873 4.68-5.166 9.359-6.88 14.038C36.857 31.23 36 35.4 36 39.063c0 5.391 1.361 9.562 4.083 12.512C42.805 54.525 46.535 56 51.273 56zm-36 0c4.638 0 8.368-1.322 11.19-3.967 2.823-2.645 4.235-5.799 4.235-9.46 0-2.95-.429-5.494-1.286-7.63a197.251 197.251 0 01-2.495-6.562c-.806-2.237-1.21-4.933-1.21-8.087 0-2.746.454-5.798 1.361-9.155C27.976 7.782 29.286 4.069 31 0H19.356c-3.73 3.662-7.032 7.833-9.905 12.512-2.873 4.68-5.166 9.359-6.88 14.038C.857 31.23 0 35.4 0 39.063c0 5.391 1.361 9.562 4.083 12.512C6.805 54.525 10.535 56 15.273 56z"
          />
        </svg>
        <p className="homepage3Cards__title w-85v mt-8 text-center z-10 font-livvic text-white">
          {" "}
          “We needed to automate our entire onboarding process. The team came in
          and built out the whole journey. Since going live, user retention has
          gone through the roof!”
        </p>
        <h3 className="homepage3Cards__name mt-4 font-livvic font-bold text-cyan text-lg">
          Aiysha Reese
        </h3>
        <span className="homepage3Cards__position text-white font-livvic italic">
          Founder of Manage
        </span>
        <img
          className="homepage3Cards__img h-62px rounded-full mt-4 mb-12"
          src={Aiysha}
          alt="Profile photo of kady baker"
        />
      </div>

      <div className="homepage3Cards__card relative flex flex-col items-center justify-center mb-28">
        <svg
          className="homepage3Cards__card__pattern absolute top-0"
          xmlns="http://www.w3.org/2000/svg"
          width="67"
          height="56"
        >
          <path
            fill="#2C6269"
            d="M51.273 56c4.638 0 8.368-1.322 11.19-3.967 2.823-2.645 4.235-5.799 4.235-9.46 0-2.95-.429-5.494-1.286-7.63a197.251 197.251 0 01-2.495-6.562c-.806-2.237-1.21-4.933-1.21-8.087 0-2.746.454-5.798 1.361-9.155C63.976 7.782 65.286 4.069 67 0H55.356c-3.73 3.662-7.032 7.833-9.905 12.512-2.873 4.68-5.166 9.359-6.88 14.038C36.857 31.23 36 35.4 36 39.063c0 5.391 1.361 9.562 4.083 12.512C42.805 54.525 46.535 56 51.273 56zm-36 0c4.638 0 8.368-1.322 11.19-3.967 2.823-2.645 4.235-5.799 4.235-9.46 0-2.95-.429-5.494-1.286-7.63a197.251 197.251 0 01-2.495-6.562c-.806-2.237-1.21-4.933-1.21-8.087 0-2.746.454-5.798 1.361-9.155C27.976 7.782 29.286 4.069 31 0H19.356c-3.73 3.662-7.032 7.833-9.905 12.512-2.873 4.68-5.166 9.359-6.88 14.038C.857 31.23 0 35.4 0 39.063c0 5.391 1.361 9.562 4.083 12.512C6.805 54.525 10.535 56 15.273 56z"
          />
        </svg>
        <p className="homepage3Cards__title w-85v mt-8 text-center z-10 font-livvic text-white">
          {" "}
          “Amazing. Our team helped us build an app that delivered a new
          experience for hiring a physio. The launch was an instant success with
          100k downloads in the first month.”
        </p>
        <h3 className="homepage3Cards__name mt-4 font-livvic font-bold text-cyan text-lg">
          Arthur Clarke
        </h3>
        <span className="homepage3Cards__position text-white font-livvic italic">
          Co-founder of MyPhysio
        </span>
        <img
          className="homepage3Cards__img h-62px rounded-full mt-4 mb-12"
          src={Arthur}
          alt="Profile photo of kady baker"
        />
      </div>
    </>
  );
}
