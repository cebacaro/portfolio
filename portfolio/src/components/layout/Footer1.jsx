import React from "react";

import { ChevronDoubleDownIcon } from "@heroicons/react/24/solid";

function Footer1() {
  return (
    <div className="footer flex flex-col gap-1  items-center relative bottom-10">
      <a
        href="/contact"
        className="contactMe text-yellow-500 hover:scale-125 duration-300 hover:text-teal-400 flex justify-center pb-3 tracking-[5px] font-bold"
      >
        Contact Me
      </a>
      <div className="absolute border border-sky-500  rounded-full h-[32px] w-[32px] flex justify-center mt-8 " />
      <ChevronDoubleDownIcon className="icon text-yellow-500  animate-bounce flex place-self-center mb-3 h-5 w-5" />
    </div>
  );
}

export default Footer1;
