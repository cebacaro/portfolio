import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion as m } from "framer-motion";
import { PhoneIcon, MapIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

export const Contact = () => {
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
        },
        (error) => {
          alert("something went wrong");
        }
      );
    document.getElementById("contact-form").style.display = "none";
    document.getElementById("success-message").style.display = "inline";
  };
  return (
    <>
      <h3 className="text-gray-400  justify-center top-20 text-[40px] tracking-[12px] absolute  uppercase">
        Contact
      </h3>
      <m.div
        initial={{ y: "100%" }}
        animate={{ y: "0%" }}
        exit={{ opacity: 1 }}
        transition={{ duration: 0.8, easy: "easyOut" }}
        className="contact  h-[80vh] w-[90%] rounded-lg text-center items-center flex flex-col justify-evenly "
      >
        <div className="flex flex-col space-y-10 relative top-20">
          <h4 className="text-2xl text-center text-white font-semibold">
            I have what you looking for. <br /> Lets Talk.
          </h4>

          <div>
            <div className="flex items-center text-white space-x-5 justify-center">
              <PhoneIcon className="text-yellow-500 h-5 w-5 animate-pulse" />
              <p className="text-thin">(123)3885689</p>
            </div>

            <div className="flex items-center text-white space-x-5 justify-center">
              <MapIcon className="text-yellow-500 h-5 w-5 animate-pulse" />
              <p className="text-thin">New Orleans. LA</p>
            </div>

            <div className="flex items-center text-white space-x-5 justify-center">
              <EnvelopeIcon className="text-yellow-500 h-5 w-5 animate-pulse" />
              <p className="text-thin">cebacaro@gmail.com</p>
            </div>
          </div>
        </div>

        <form
          className=" flex mt-10 p-7 flex-col h-[500px] w-[400px]"
          id="contact-form"
          ref={form}
          onSubmit={sendEmail}
        >
          <label className="pt-2 text-gray-600">Name</label>
          <input
            type="text"
            name="user_name"
            placeholder="Name"
            className="w-full rounded-lg bg-gray-400"
          />
          <label className="pt-2 text-gray-600">Email</label>
          <input
            type="email"
            name="user_email"
            placeholder="E-mail"
            className="w-full rounded-lg bg-gray-400"
          />
          <label className="pt-2 text-gray-600">Message</label>
          <textarea
            rows="20"
            cols="50"
            name="message"
            className="w-full rounded-lg bg-gray-400"
          />
          <button
            type="submit"
            value="Send"
            onClick={sendEmail}
            className="border-black rounded-lg p-3 bg-orange-400  m-2 w-[90px] flex justify-center self-center"
          >
            Send
          </button>
        </form>

        <div id="success-message">
          <h4 className="text-center text-sm pb-4 text-gray-300">
            Thank you for reaching out! <br /> I will get back with you as soon
            as I am able!
          </h4>
        </div>
      </m.div>
    </>
  );
};
export default Contact;
