import React from "react";

import Nikita from "../../Images/avatar-nikita.jpg";
import Aden from "../../Images/avatar-aden.jpg";
import Christian from "../../Images/avatar-christian.jpg";
import Cruz from "../../Images/avatar-cruz.jpg";
import Drake from "../../Images/avatar-drake.jpg";
import Griffin from "../../Images/avatar-griffin.jpg";

export default function AboutDirectorsCards() {
  return (
    <div className="w-90v mt-12">
      <div className="relative flex flex-col items-center justify-center mb-14 bg-darkergreen">
        <img
          className="h-96px border-2 border-cyan rounded-full mt-8 mb-4"
          src={Nikita}
          alt="Profile picture of a girl"
        />
        <h3 className="font-livvic font-bold text-cyan text-lg">
          Nikita Marks
        </h3>
        <span className="mb-12 font-livvic italic text-white">
          Founder and CEO
        </span>
        <span className="absolute -bottom-7 flex justify-center items-center h-14 w-14 bg-lightred rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
            <path
              fill="#012F34"
              fillRule="evenodd"
              d="M10 0v5.999L16 6v4h-6v6H6v-6H0V6h6V0h4z"
            />
          </svg>
        </span>
      </div>

      <div className="relative flex flex-col items-center justify-center mb-14 bg-darkergreen">
        <img
          className="h-96px border-2 border-cyan rounded-full mt-8 mb-4"
          src={Christian}
          alt="Profile picture of a girl"
        />
        <h3 className="font-livvic font-bold text-cyan text-lg">
          Christian Duncan
        </h3>
        <span className="mb-12 font-livvic italic text-white">
          Co-Founder and COO
        </span>
        <span className="absolute -bottom-7 flex justify-center items-center h-14 w-14 bg-lightred rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
            <path
              fill="#012F34"
              fillRule="evenodd"
              d="M10 0v5.999L16 6v4h-6v6H6v-6H0V6h6V0h4z"
            />
          </svg>
        </span>
      </div>

      <div className="relative flex flex-col items-center justify-center mb-14 bg-darkergreen">
        <img
          className="h-96px border-2 border-cyan rounded-full mt-8 mb-4"
          src={Cruz}
          alt="Profile picture of a girl"
        />
        <h3 className="font-livvic font-bold text-cyan text-lg">Cruz Hamer</h3>
        <span className="mb-12 font-livvic italic text-white">
          Co-Founder and CTO
        </span>
        <span className="absolute -bottom-7 flex justify-center items-center h-14 w-14 bg-lightred rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
            <path
              fill="#012F34"
              fillRule="evenodd"
              d="M10 0v5.999L16 6v4h-6v6H6v-6H0V6h6V0h4z"
            />
          </svg>
        </span>
      </div>

      <div className="relative flex flex-col items-center justify-center mb-14 bg-darkergreen">
        <img
          className="h-96px border-2 border-cyan rounded-full mt-8 mb-4"
          src={Drake}
          alt="Profile picture of a girl"
        />
        <h3 className="font-livvic font-bold text-cyan text-lg">
          Drake Heaton
        </h3>
        <span className="mb-12 font-livvic italic text-white">
          Business Development Lead
        </span>
        <span className="absolute -bottom-7 flex justify-center items-center h-14 w-14 bg-lightred rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
            <path
              fill="#012F34"
              fillRule="evenodd"
              d="M10 0v5.999L16 6v4h-6v6H6v-6H0V6h6V0h4z"
            />
          </svg>
        </span>
      </div>

      <div className="relative flex flex-col items-center justify-center mb-14 bg-darkergreen">
        <img
          className="h-96px border-2 border-cyan rounded-full mt-8 mb-4"
          src={Griffin}
          alt="Profile picture of a girl"
        />
        <h3 className="font-livvic font-bold text-cyan text-lg">
          Griffin Wise
        </h3>
        <span className="mb-12 font-livvic italic text-white">
          Lead Marketing
        </span>
        <span className="absolute -bottom-7 flex justify-center items-center h-14 w-14 bg-lightred rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
            <path
              fill="#012F34"
              fillRule="evenodd"
              d="M10 0v5.999L16 6v4h-6v6H6v-6H0V6h6V0h4z"
            />
          </svg>
        </span>
      </div>

      <div className="relative flex flex-col items-center justify-center mb-32 bg-darkergreen">
        <img
          className="h-96px border-2 border-cyan rounded-full mt-8 mb-4"
          src={Aden}
          alt="Profile picture of a girl"
        />
        <h3 className="font-livvic font-bold text-cyan text-lg">Aden Allen</h3>
        <span className="mb-12 font-livvic italic text-white">
          Head of Talent
        </span>
        <span className="absolute -bottom-7 flex justify-center items-center h-14 w-14 bg-lightred rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
            <path
              fill="#012F34"
              fillRule="evenodd"
              d="M10 0v5.999L16 6v4h-6v6H6v-6H0V6h6V0h4z"
            />
          </svg>
        </span>
      </div>
    </div>
  );
}
