import React from "react";

function Resume() {
  return (
    <div className="flex relative flex-col justify-center items-center w-full  h-full">
      <img
        className="img lg:w-[30vw] h-[60vh] lg:h-[70vh] "
        src={require("./images/portfilio.png")}
        alt="foto"
      />
    </div>
  );
}

export default Resume;
