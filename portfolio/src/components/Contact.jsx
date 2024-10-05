import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";
const Contect = () => {
  return (
    <>
      <div className="container contact" id="Content">
        <h1>Contact me</h1>
        <div
          className="contact-icon"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <a
            href="https://www.linkedin.com/in/neeraj-jeena-980a3431b"
            className="items"
          >
            <FaLinkedin className="icons"></FaLinkedin>
          </a>
          <a href="https://github.com/neeraj-singhjeena" className="items">
            <FaGithub className="icons"></FaGithub>
          </a>
          <a
            href="https://x.com/NeerajSingh9988?t=wl1sPquVIAMDrP8wqny-3w&s=08"
            className="items"
          >
            <BsTwitterX className="icons"></BsTwitterX>
          </a>
          <a href="mailto:neeraj2005jeena@gmail.com" className="items">
            <BiLogoGmail className="icons"></BiLogoGmail>
          </a>
        </div>
      </div>
    </>
  );
};

export default Contect;
