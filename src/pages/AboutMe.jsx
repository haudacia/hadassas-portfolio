import React from "react";
import lnkdnIcon from "/assets/lnkdn-icon-cropped.svg";
import githubIcon from "/assets/github-icon.svg";
import CustomIcon from "../components/CustomIcon";

function AboutMe() {
  return (
    <div className="flex-col px-32 py-16 gap-12">
      <div className="flex-row gap-[2em] w-1/2">
        <h1>About me</h1>
      </div>
      <div className="flex-row h-[7%] gap-[3%]">
        <CustomIcon
          href="linkedin.com/in/hadassamedeiros"
          iconImg={lnkdnIcon}
        />
        <CustomIcon href="github.com/haudacia" iconImg={githubIcon} />
      </div>

      <div>
        <ul className="personal-info">
          <li>Full-stack developer (front-end focus)</li>
          <li>Background in Architecture and Urbanism</li>
          <li>hadassa.m.lima@gmail.com</li>
          <li>barcelona, spain</li>
        </ul>
        <div className="flex-col">
          <p>
            I like things to flow and be uncomplicated. Full stack
            developer, front-end focus, UX awareness, academic background in architecture and urbanism. I specialize in the MERN stack (MongoDB, Express, React,
            Node.js).
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
