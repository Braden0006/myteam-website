import React from "react";

import { useDirectorsContext } from "../../Context/DirectorsContext";

import Nikita from "../../Images/avatar-nikita.jpg";
import Aden from "../../Images/avatar-aden.jpg";
import Christian from "../../Images/avatar-christian.jpg";
import Cruz from "../../Images/avatar-cruz.jpg";
import Drake from "../../Images/avatar-drake.jpg";
import Griffin from "../../Images/avatar-griffin.jpg";

export default function AboutDirectorsCards() {
  const {
    nikita,
    setNikita,
    christian,
    setChristian,
    cruz,
    setCruz,
    drake,
    setDrake,
    griffin,
    setGriffin,
    aden,
    setAden,
  } = useDirectorsContext();

  return (
    <div className="w-90v mt-12 md:grid md:grid-cols-2 md:gap-4 md:w-80v lg:grid-cols-3">
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

        {nikita ? (
          <span
            className="absolute -bottom-7 flex justify-center items-center h-14 w-14 bg-cyan rounded-full z-10 lg:hover:cursor-pointer"
            onClick={() => setNikita(false)}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.0711 3.75735L12.2426 0.92892L8 5.17156L3.75736 0.92892L0.928932 3.75735L5.17157 7.99999L0.928932 12.2426L3.75736 15.0711L8 10.8284L12.2426 15.0711L15.0711 12.2426L10.8284 7.99999L15.0711 3.75735Z"
                fill="#012F34"
              />
            </svg>
          </span>
        ) : (
          <span
            className="absolute -bottom-7 flex justify-center items-center h-14 w-14 bg-lightred rounded-full z-10 lg:hover:bg-cyan lg:hover:cursor-pointer"
            onClick={() => setNikita(true)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
              <path
                fill="#012F34"
                fillRule="evenodd"
                d="M10 0v5.999L16 6v4h-6v6H6v-6H0V6h6V0h4z"
              />
            </svg>
          </span>
        )}

        {nikita && (
          <div className="absolute h-full w-full bg-footergreen flex flex-col items-center justify-center">
            <h3 className="mb-2 text-cyan text-livvic font-bold">
              Nikita Marks
            </h3>
            <p className="text-center w-80% mb-6 text-white font-livvic">
              “It always amazes me how much talent there is in every corner of
              the globe.”
            </p>

            <div className="flex gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20">
                <path
                  className="lg:hover:fill-lightred lg:hover:cursor-pointer"
                  fill="#FFF"
                  d="M24 2.557a9.83 9.83 0 01-2.828.775A4.932 4.932 0 0023.337.608a9.864 9.864 0 01-3.127 1.195A4.916 4.916 0 0016.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 1.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 17.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 2.557z"
                />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                <path
                  className="lg:hover:fill-lightred lg:hover:cursor-pointer"
                  fill="#FFF"
                  d="M18 0H2C.9 0 0 .9 0 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zM6 17H3V8h3v9zM4.5 6.3c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zM17 17h-3v-5.3c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5V17H8V8h3v1.2c.5-.8 1.6-1.4 2.5-1.4 1.9 0 3.5 1.6 3.5 3.5V17z"
                />
              </svg>
            </div>
          </div>
        )}
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
        {christian ? (
          <span
            className="absolute -bottom-7 flex justify-center items-center h-14 w-14 bg-cyan rounded-full z-10 lg:hover:cursor-pointer"
            onClick={() => setChristian(false)}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.0711 3.75735L12.2426 0.92892L8 5.17156L3.75736 0.92892L0.928932 3.75735L5.17157 7.99999L0.928932 12.2426L3.75736 15.0711L8 10.8284L12.2426 15.0711L15.0711 12.2426L10.8284 7.99999L15.0711 3.75735Z"
                fill="#012F34"
              />
            </svg>
          </span>
        ) : (
          <span
            className="absolute -bottom-7 flex justify-center items-center h-14 w-14 bg-lightred rounded-full z-10 lg:hover:bg-cyan lg:hover:cursor-pointer"
            onClick={() => setChristian(true)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
              <path
                fill="#012F34"
                fillRule="evenodd"
                d="M10 0v5.999L16 6v4h-6v6H6v-6H0V6h6V0h4z"
              />
            </svg>
          </span>
        )}

        {christian && (
          <div className="absolute h-full w-full bg-footergreen flex flex-col items-center justify-center">
            <h3 className="mb-2 text-cyan text-livvic font-bold">
              Christian Duncan
            </h3>
            <p className="text-center w-80% mb-6 text-white font-livvic">
              “Distributed teams required unique processes. You need to approach
              work in a new way.”
            </p>

            <div className="flex gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20">
                <path
                  className="lg:hover:fill-lightred lg:hover:cursor-pointer"
                  fill="#FFF"
                  d="M24 2.557a9.83 9.83 0 01-2.828.775A4.932 4.932 0 0023.337.608a9.864 9.864 0 01-3.127 1.195A4.916 4.916 0 0016.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 1.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 17.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 2.557z"
                />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                <path
                  className="lg:hover:fill-lightred lg:hover:cursor-pointer"
                  fill="#FFF"
                  d="M18 0H2C.9 0 0 .9 0 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zM6 17H3V8h3v9zM4.5 6.3c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zM17 17h-3v-5.3c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5V17H8V8h3v1.2c.5-.8 1.6-1.4 2.5-1.4 1.9 0 3.5 1.6 3.5 3.5V17z"
                />
              </svg>
            </div>
          </div>
        )}
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
        {cruz ? (
          <span
            className="absolute -bottom-7 flex justify-center items-center h-14 w-14 bg-cyan rounded-full z-10 lg:hover:cursor-pointer"
            onClick={() => setCruz(false)}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.0711 3.75735L12.2426 0.92892L8 5.17156L3.75736 0.92892L0.928932 3.75735L5.17157 7.99999L0.928932 12.2426L3.75736 15.0711L8 10.8284L12.2426 15.0711L15.0711 12.2426L10.8284 7.99999L15.0711 3.75735Z"
                fill="#012F34"
              />
            </svg>
          </span>
        ) : (
          <span
            className="absolute -bottom-7 flex justify-center items-center h-14 w-14 bg-lightred rounded-full z-10 lg:hover:bg-cyan lg:hover:cursor-pointer"
            onClick={() => setCruz(true)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
              <path
                fill="#012F34"
                fillRule="evenodd"
                d="M10 0v5.999L16 6v4h-6v6H6v-6H0V6h6V0h4z"
              />
            </svg>
          </span>
        )}

        {cruz && (
          <div className="absolute h-full w-full bg-footergreen flex flex-col items-center justify-center">
            <h3 className="mb-2 text-cyan text-livvic font-bold">Cruz Hamer</h3>
            <p className="text-center w-80% mb-6 text-white font-livvic">
              “Technology is at the forefront of enabling distributed teams.
              That's where we come in.”
            </p>

            <div className="flex gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20">
                <path
                  className="lg:hover:fill-lightred lg:hover:cursor-pointer"
                  fill="#FFF"
                  d="M24 2.557a9.83 9.83 0 01-2.828.775A4.932 4.932 0 0023.337.608a9.864 9.864 0 01-3.127 1.195A4.916 4.916 0 0016.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 1.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 17.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 2.557z"
                />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                <path
                  className="lg:hover:fill-lightred lg:hover:cursor-pointer"
                  fill="#FFF"
                  d="M18 0H2C.9 0 0 .9 0 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zM6 17H3V8h3v9zM4.5 6.3c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zM17 17h-3v-5.3c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5V17H8V8h3v1.2c.5-.8 1.6-1.4 2.5-1.4 1.9 0 3.5 1.6 3.5 3.5V17z"
                />
              </svg>
            </div>
          </div>
        )}
      </div>

      <div className="relative flex flex-col items-center justify-center mb-14 bg-darkergreen lg:mb-32">
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

        {drake ? (
          <span
            className="absolute -bottom-7 flex justify-center items-center h-14 w-14 bg-cyan rounded-full z-10 lg:hover:cursor-pointer"
            onClick={() => setDrake(false)}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.0711 3.75735L12.2426 0.92892L8 5.17156L3.75736 0.92892L0.928932 3.75735L5.17157 7.99999L0.928932 12.2426L3.75736 15.0711L8 10.8284L12.2426 15.0711L15.0711 12.2426L10.8284 7.99999L15.0711 3.75735Z"
                fill="#012F34"
              />
            </svg>
          </span>
        ) : (
          <span
            className="absolute -bottom-7 flex justify-center items-center h-14 w-14 bg-lightred rounded-full z-10 lg:hover:bg-cyan lg:hover:cursor-pointer"
            onClick={() => setDrake(true)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
              <path
                fill="#012F34"
                fillRule="evenodd"
                d="M10 0v5.999L16 6v4h-6v6H6v-6H0V6h6V0h4z"
              />
            </svg>
          </span>
        )}

        {drake && (
          <div className="absolute h-full w-full bg-footergreen flex flex-col items-center justify-center">
            <h3 className="mb-2 text-cyan text-livvic font-bold">
              Drake Heaton
            </h3>
            <p className="text-center w-80% mb-6 text-white font-livvic">
              “Hiring similar people from similar backgrounds is a surefire way
              to stunt innovation.”
            </p>

            <div className="flex gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20">
                <path
                  className="lg:hover:fill-lightred lg:hover:cursor-pointer"
                  fill="#FFF"
                  d="M24 2.557a9.83 9.83 0 01-2.828.775A4.932 4.932 0 0023.337.608a9.864 9.864 0 01-3.127 1.195A4.916 4.916 0 0016.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 1.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 17.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 2.557z"
                />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                <path
                  className="lg:hover:fill-lightred lg:hover:cursor-pointer"
                  fill="#FFF"
                  d="M18 0H2C.9 0 0 .9 0 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zM6 17H3V8h3v9zM4.5 6.3c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zM17 17h-3v-5.3c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5V17H8V8h3v1.2c.5-.8 1.6-1.4 2.5-1.4 1.9 0 3.5 1.6 3.5 3.5V17z"
                />
              </svg>
            </div>
          </div>
        )}
      </div>

      <div className="relative flex flex-col items-center justify-center mb-14 bg-darkergreen md:mb-32">
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

        {griffin ? (
          <span
            className="absolute -bottom-7 flex justify-center items-center h-14 w-14 bg-cyan rounded-full z-10 lg:hover:cursor-pointer"
            onClick={() => setGriffin(false)}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.0711 3.75735L12.2426 0.92892L8 5.17156L3.75736 0.92892L0.928932 3.75735L5.17157 7.99999L0.928932 12.2426L3.75736 15.0711L8 10.8284L12.2426 15.0711L15.0711 12.2426L10.8284 7.99999L15.0711 3.75735Z"
                fill="#012F34"
              />
            </svg>
          </span>
        ) : (
          <span
            className="absolute -bottom-7 flex justify-center items-center h-14 w-14 bg-lightred rounded-full z-10 lg:hover:bg-cyan lg:hover:cursor-pointer"
            onClick={() => setGriffin(true)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
              <path
                fill="#012F34"
                fillRule="evenodd"
                d="M10 0v5.999L16 6v4h-6v6H6v-6H0V6h6V0h4z"
              />
            </svg>
          </span>
        )}

        {griffin && (
          <div className="absolute h-full w-full bg-footergreen flex flex-col items-center justify-center">
            <h3 className="mb-2 text-cyan text-livvic font-bold">
              Griffin Wise
            </h3>
            <p className="text-center w-80% mb-6 text-white font-livvic">
              “Unique perspectives shape unique products, which is what you need
              to survive these days.”
            </p>

            <div className="flex gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20">
                <path
                  className="lg:hover:fill-lightred lg:hover:cursor-pointer"
                  fill="#FFF"
                  d="M24 2.557a9.83 9.83 0 01-2.828.775A4.932 4.932 0 0023.337.608a9.864 9.864 0 01-3.127 1.195A4.916 4.916 0 0016.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 1.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 17.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 2.557z"
                />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                <path
                  className="lg:hover:fill-lightred lg:hover:cursor-pointer"
                  fill="#FFF"
                  d="M18 0H2C.9 0 0 .9 0 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zM6 17H3V8h3v9zM4.5 6.3c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zM17 17h-3v-5.3c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5V17H8V8h3v1.2c.5-.8 1.6-1.4 2.5-1.4 1.9 0 3.5 1.6 3.5 3.5V17z"
                />
              </svg>
            </div>
          </div>
        )}
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

        {aden ? (
          <span
            className="absolute -bottom-7 flex justify-center items-center h-14 w-14 bg-cyan rounded-full z-10 lg:hover:cursor-pointer"
            onClick={() => setAden(false)}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.0711 3.75735L12.2426 0.92892L8 5.17156L3.75736 0.92892L0.928932 3.75735L5.17157 7.99999L0.928932 12.2426L3.75736 15.0711L8 10.8284L12.2426 15.0711L15.0711 12.2426L10.8284 7.99999L15.0711 3.75735Z"
                fill="#012F34"
              />
            </svg>
          </span>
        ) : (
          <span
            className="absolute -bottom-7 flex justify-center items-center h-14 w-14 bg-lightred rounded-full z-10 lg:hover:bg-cyan lg:hover:cursor-pointer"
            onClick={() => setAden(true)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
              <path
                fill="#012F34"
                fillRule="evenodd"
                d="M10 0v5.999L16 6v4h-6v6H6v-6H0V6h6V0h4z"
              />
            </svg>
          </span>
        )}

        {aden && (
          <div className="absolute h-full w-full bg-footergreen flex flex-col items-center justify-center">
            <h3 className="mb-2 text-cyan text-livvic font-bold">Aden Allen</h3>
            <p className="text-center w-80% mb-6 text-white font-livvic">
              “Empowered teams create truly amazing products. Set the north star
              and let them follow it.”
            </p>

            <div className="flex gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20">
                <path
                  className="lg:hover:fill-lightred lg:hover:cursor-pointer"
                  fill="#FFF"
                  d="M24 2.557a9.83 9.83 0 01-2.828.775A4.932 4.932 0 0023.337.608a9.864 9.864 0 01-3.127 1.195A4.916 4.916 0 0016.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 1.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 17.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 2.557z"
                />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                <path
                  className="lg:hover:fill-lightred lg:hover:cursor-pointer"
                  fill="#FFF"
                  d="M18 0H2C.9 0 0 .9 0 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zM6 17H3V8h3v9zM4.5 6.3c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zM17 17h-3v-5.3c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5V17H8V8h3v1.2c.5-.8 1.6-1.4 2.5-1.4 1.9 0 3.5 1.6 3.5 3.5V17z"
                />
              </svg>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
