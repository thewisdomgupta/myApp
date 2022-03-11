import React from "react";
import Img1 from '../../Image/ManRobot.jpg'
// import {RemoveScrollBar} from 'react-remove-scroll-bar'

const Background = () => {
  return (
    <div id="container1">

      <img src={ Img1 } alt="Wallpaper"
      height={500}
      width={1515}
      className="body"
      >

      </img>
    </div>
  );
};

export default Background;
