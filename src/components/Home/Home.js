import React from "react";
import Img1 from "../Image/ManRobot.jpg";

const Background = () => {
  return (
    <div id="container1">
      <img
        src={Img1}
        alt="Wallpaper"
        className='img-fluid rounded-pill'
      ></img>
    </div>
  );
};

export default Background;
