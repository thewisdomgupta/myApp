import React from "react";
import Img1 from "../Image/ManRobot.jpg";
import HomeMessage from "../HomeAccordionMessage/HomeMessage";

const Background = () => {
  return (
    <div id="container1">
      <img
        src={Img1}
        alt="Wallpaper"
        className='img-fluid rounded-pill'
      ></img>
      <HomeMessage />
    </div>
  );
};

export default Background;
