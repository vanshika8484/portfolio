import React from "react";
import SingleContactSocial from "./SingleContactSocial";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { SlSocialInstagram } from "react-icons/sl";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial
        Image={BsGithub}
        link="https://github.com/vanshika8484"
      />
      <SingleContactSocial
        Image={FaLinkedin}
        link="https://www.linkedin.com/in/vanshika-aggarwal-a9149b281?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
      />
      <SingleContactSocial
        Image={SlSocialInstagram}
        link="https://www.instagram.com/aggarrwal_22?igsh=ajl0dXJib3kzbHR6 "
      />
    </div>
  );
};

export default ContactSocial;
