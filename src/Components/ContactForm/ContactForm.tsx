import React from "react";

export default function ContactForm() {
  return (
    <div className="lg:h-90%">
      <form className="relative mb-24 flex flex-col items-center" action="">
        <input
          className="w-90v bg-primary border-b outline-none border-white font-livvic py-4 pl-4 mb-8 text-white md:w-65v lg:w-full lg:hover:cursor-pointer lg:hover:border-cyan"
          type="text"
          placeholder="Name"
        />

        <input
          className="w-90v bg-primary border-b outline-none border-white font-livvic py-4 pl-4 mb-8 text-white md:w-65v lg:w-full lg:hover:cursor-pointer lg:hover:border-cyan"
          type="email"
          placeholder="Email Address"
          required
        />

        <input
          className="w-90v bg-primary border-b outline-none border-white font-livvic py-4 pl-4 mb-8 text-white md:w-65v lg:w-full lg:hover:cursor-pointer lg:hover:border-cyan"
          type="text"
          placeholder="Company Name"
        />

        <input
          className="w-90v bg-primary border-b outline-none border-white font-livvic py-4 pl-4 mb-8 text-white md:w-65v lg:w-full lg:hover:cursor-pointer lg:hover:border-cyan"
          type="text"
          placeholder="Title"
        />

        <textarea
          className="w-90v bg-primary border-b outline-none border-white font-livvic pt-4 pb-10 pl-4 mb-20 text-white md:w-65v lg:w-full lg:hover:cursor-pointer lg:hover:border-cyan"
          placeholder="Message"
        />

        <input
          className="absolute bottom-0 left-0 py-3 px-8 rounded-full bg-white text-primary font-livvic font-bold lg:hover:cursor-pointer lg:hover:border-cyan"
          type="submit"
        />
      </form>
    </div>
  );
}
