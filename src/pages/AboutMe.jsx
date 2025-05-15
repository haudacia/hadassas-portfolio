import React from "react";
import lnkdnIcon from "/assets/lnkdn-icon-cropped.svg";
import githubIcon from "/assets/github-icon.svg";
import CustomIcon from "../components/CustomIcon";

function AboutMe() {
  return (
    <div className="flex-col px-32 py-16 gap-12">
      <div className="flex-row gap-[2em] w-1/2">
        <h1>ABOUT</h1>
        <h1>ME</h1>
      </div>
      <div className="flex-row h-[7%] gap-[3%]">
        <CustomIcon
          href="linkedin.com/in/hadassamedeiros"
          iconImg={lnkdnIcon}
        />
        <CustomIcon href="github.com/haudacia" iconImg={githubIcon} />
      </div>

      <div className="flex-col w-1/2 gap-12 self-end">
        <ul className="personal-info">
          <li>full stack developer</li>
          <li>architect and urbanist</li>
          <li>hadassa.m.lima@gmail.com</li>
          <li>barcelona, spain</li>
        </ul>
        <div className="flex-col">
          <p>Hi, I'm Hadassa — an architect transitioning into tech</p>
          <p>
            I love aesthetics + process optimization led me to full-stack
            development, where I can combine creativity with well structures
            processes. I specialize in the MERN stack (MongoDB, Express, React,
            Node.js) I love crafting well-thought-out systems, automating
            workflows, and ensuring every detail serves a purpose.
          </p>
          <p>
            Beyond tech, I'm into interior design, fashion, personal
            organization and weightlifting.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
