import React from "react";
import { CONTACT } from "../constants";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 z-50 relative">
      <h1 className="text-white z-50 my-20 text-center text-4xl">
        Get In Touch
      </h1>
        <div className="text-center tracking-tighter ">
          <p className="my-4">{CONTACT.address}</p>
          <p className="my-4">{CONTACT.phoneNo}</p>
          <a href="#" className="border-b">
            {CONTACT.email}
          </a>
        </div>
    </div>
  );
};

export default Contact;
