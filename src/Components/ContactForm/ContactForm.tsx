import React from "react";

export default function ContactForm() {
  return (
    <div className="relative">
      <form className="relative mb-24 flex flex-col items-center" action="">
        <input
          className="w-90v bg-primary border-b-2 outline-none border-white font-livvic py-4 pl-4 mb-8 text-white"
          type="text"
          placeholder="Name"
        />

        <input
          className="w-90v bg-primary border-b-2 outline-none border-white font-livvic py-4 pl-4 mb-8 text-white"
          type="email"
          placeholder="Email Address"
        />

        <input
          className="w-90v bg-primary border-b-2 outline-none border-white font-livvic py-4 pl-4 mb-8 text-white"
          type="text"
          placeholder="Company Name"
        />

        <input
          className="w-90v bg-primary border-b-2 outline-none border-white font-livvic py-4 pl-4 mb-8 text-white"
          type="text"
          placeholder="Title"
        />

        <textarea
          className="w-90v bg-primary border-b-2 outline-none border-white font-livvic pt-4 pb-10 pl-4 mb-20 text-white"
          placeholder="Message"
        />

        <input
          className="absolute bottom-0 left-0 py-3 px-8 rounded-full bg-white text-primary font-livvic font-bold"
          type="submit"
        />
      </form>

      <svg
        className="absolute -bottom-28 -right-32"
        xmlns="http://www.w3.org/2000/svg"
        width="201"
        height="225"
      >
        <g fill="none" fillRule="evenodd">
          <path
            fill="#012F34"
            d="M.5 100.5C.5 45.272 45.272.5 100.5.5s100 44.772 100 100-44.772 100-100 100-100-44.772-100-100zm67 0c0 18.225 14.775 33 33 33s33-14.775 33-33-14.775-33-33-33-33 14.775-33 33z"
          />
          <path fill="#79C8C7" d="M43.5.5v43H.5V.5z" />
          <path
            fill="#F67E7E"
            d="M.5 124.986c0-55.228 44.772-100 100-100s100 44.772 100 100c0 55.229-44.772 100-100 100s-100-44.771-100-100zm67 0c0 18.226 14.775 33 33 33s33-14.774 33-33c0-18.225-14.775-33-33-33s-33 14.775-33 33z"
          />
        </g>
      </svg>
    </div>
  );
}
