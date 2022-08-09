import React, { FC } from "react";

import { motion } from "framer-motion";

interface Props {
  menu: boolean;
  setMenu: (menu: boolean) => void;
}

const Menu: FC<Props> = ({ menu, setMenu }: Props) => {
  const variants = {
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 50,
        stiffness: 500,
      },
    },
    closed: {
      opacity: 0,
      x: "100%",
    },
    exit: {
      opacity: 1,
      x: "100%",
    },
  };

  return (
    <motion.div
      className="menu-background fixed flex justify-end h-screen w-screen top-0 left-0 bottom-0 right-0 bg-transparentblack"
      initial="closed"
      animate="open"
      exit="exit"
      variants={variants}
    >
      <div className="menu-overlay relative w-8/12 flex flex-col items-center bg-menugreen">
        <svg
          onClick={() => setMenu(!menu)}
          className="absolute right-4 top-10"
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="17"
        >
          <path
            fill="#FFF"
            fillRule="evenodd"
            d="M15.01.368l2.122 2.122-6.01 6.01 6.01 6.01-2.122 2.122L9 10.622l-6.01 6.01L.868 14.51 6.88 8.5.87 2.49 2.988.368 9 6.38 15.01.37z"
          />
        </svg>

        <ul className="absolute top-32 w-8/12">
          <li className="text-white font-livvic pb-6">home</li>
          <li className="text-white font-livvic">about</li>
        </ul>

        <button className="absolute top-56 w-8/12 border-white border-2 rounded-3xl py-1.5 px-8 text-lg text-white font-livvic font-bold">
          contact us
        </button>

        <svg
          className="absolute bottom-0 -right-26"
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
    </motion.div>
  );
};

export default Menu;
