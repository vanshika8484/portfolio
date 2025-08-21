import React from "react";
import ContactInfo from "./ContactInfo";
import ContactSocial from "./ContactSocial";

const ContactMeRight = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-12">
      <img
        src="../../../public/images/email.png"
        className="max-w-[300px]"
      ></img>
      <ContactInfo />
      <ContactSocial />
    </div>
  );
};

export default ContactMeRight;
