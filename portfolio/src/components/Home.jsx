import React, { useEffect, useRef } from "react";
// import pdf from "../pdf/resume.pdf";
import hero from "./data/hero.json";
import Typed from "typed.js";

const Home = () => {
  const typedRef = useRef(null);
  useEffect(() => {
    const option = {
      strings: [
        "welcome to my profile",
        "My name is Neeraj jeena",
        "I`m web Developer",
        "I am Frontent Developer",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };
    const typed = new Typed(typedRef.current, option);
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="container home" id="Home">
        <div className="left" data-aos="fade-up-right" data-aos-duration="1000">
          <h1 ref={typedRef}></h1>
          <a
            // href={pdf} " "
            href=""
            // download="resume.pdf"
            className="btn btn-outline-warning my-3"
          >
            Download resume
          </a>
        </div>
        <div className="right">
          <div className="img" data-aos="fade-up-left" data-aos-duration="1000">
            <img src={` /assets/${hero.imgSrc}`} alt="hero" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
