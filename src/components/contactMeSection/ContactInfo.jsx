import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="text-white">
      <SingleInfo text="vanshikaagarwal8484@gmail.com" Image={HiOutlineMail} />
    </div>
  );
};

export default ContactInfo;
