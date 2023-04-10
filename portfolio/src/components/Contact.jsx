import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion as m } from "framer-motion";
import { PhoneIcon, MapIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";

export const Contact = () => {
  const [showMessage, setShowMessage] = useState(false);

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        //email service key
        "service_sh1fpau",
        //email template key
        "template_zi1o07n",
        form.current,
        //public key
        "lKv8JPeSrWaDKlsN7"
      )
      .then(
        (result) => {
          console.log(result.text);

          setShowMessage(true);
        },
        (error) => {
          alert("something went wrong");
        }
      );
    // document.getElementById("contact-form").style.display = "none";
    // document.getElementById("success-message").style.display = "inline";
  };
  return (
    <div className="portfolio  w-[50vw] lg:h-[87vh] h-[97vh] relative  rounded-lg text-center items-center flex flex-col justify-evenly ">
      <h3 className="text-gray-400 justify-center top-5 lg:top-1 lg:text-[40px] tracking-[12px] absolute uppercase">
        Contact
      </h3>
      <m.div
        initial={{ y: "100%" }}
        animate={{ y: "0%" }}
        exit={{ opacity: 1 }}
        transition={{ duration: 0.8, easy: "easyOut" }}
        className="contact  h-full lg:w-[90%] rounded-lg text-center items-center flex flex-col justify-evenly "
      >
        {showMessage ? (
          <div id="success-message" className="flex top-1">
            <h4 className="text-center  text-3xl pb-4 text-gray-300">
              Thank you for reaching out! <br /> I will get back with you as
              soon as I am able!
            </h4>
          </div>
        ) : (
          <div className="flex flex-col  relative  lg:bottom-20 lg:h-[50vh] ">
            <div className="flex items-center text-[10px] lg:text-[20px] text-white space-x-4 justify-center ">
              <PhoneIcon className="text-yellow-500 h-5   w-5 animate-pulse" />
              <p className="text-thin">(337) 322-9593</p>
            </div>

            <div className="flex items-center text-[10px] lg:text-[20px] text-white space-x-5 justify-center">
              <MapIcon className="text-yellow-500 h-5 w-5 animate-pulse" />
              <p className="text-thin">New Orleans. LA</p>
            </div>

            <div className="flex items-center text-[10px] lg:text-[20px] text-white space-x-5 justify-center">
              <EnvelopeIcon className="text-yellow-500 h-5 w-5 animate-pulse" />
              <p className="text-thin">cebacaro@gmail.com</p>
            </div>
            <div className="flex items-center text-white space-x-5 justify-center">
              <img
                src={require("./images/icon.png")}
                alt="foto"
                className="text-yellow-500 h-4 w-4 animate-pulse"
              />
              <NavLink
                to="https://www.linkedin.com/in/cesar-bacaro/"
                className="text-thin text-[10px] lg:text-[20px] z-20"
                target="_blank"
              >
                www.linkedin.com/in/cesar-bacaro/
              </NavLink>
            </div>
            <form
              className=" flex p-7 relative flex-col h-[400px] w-[80vw] lg:h-[55vh] md:h-[60vh] md:w-[30vw] lg:w-[30vw] bottom-10 "
              id="contact-form"
              ref={form}
              onSubmit={sendEmail}
            >
              <label className="pt-2 text-gray-400 flex">Name</label>
              <input
                type="text"
                name="user_name"
                placeholder="Name"
                className="w-full rounded-lg bg-gray-400"
              />
              <label className="pt-2 text-gray-400 flex">Email</label>
              <input
                type="email"
                name="user_email"
                placeholder="E-mail"
                className="w-full rounded-lg bg-gray-400 "
              />
              <label className="pt-2 text-gray-400 flex">Message</label>
              <textarea
                rows="20"
                cols="40"
                name="message"
                className="w-full rounded-lg bg-gray-400 h-[500px]"
              />
              <button
                type="submit"
                value="Send"
                onClick={sendEmail}
                className="border-black rounded-lg p-3 h-[40px] bg-orange-400  m-2 w-[90px] flex justify-center self-center text-center"
              >
                Send
              </button>
            </form>
          </div>
        )}
      </m.div>
    </div>
  );
};
export default Contact;
