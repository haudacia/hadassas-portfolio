import React from "react";

const Video = ({ src }) => {
  return (
    <video autoPlay muted loop>
      <source src={src} type="video/mp4" />
    </video>
  );
};

export default Video;
