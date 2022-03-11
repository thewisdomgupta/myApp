import React from "react";
import Img1 from "../../Image/ManRobot.jpg";

const Background = () => {
  return (
    <div id="container1">
      <img
        src={Img1}
        alt="Wallpaper"
        height={500}
        width={1536}
        className="body"
      ></img>
    </div>
  );
};

export default Background;
