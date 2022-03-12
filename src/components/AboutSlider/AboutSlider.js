import React from "react";
import { Carousel } from "react-bootstrap";
import Img1 from "../Image/CMOS.jpg";
import Img2 from "../Image/NGO.jpg";
import Img3 from "../Image/REACTS.jpg";
import Img4 from "../Image/BUGS.jpg";
import Img5 from "../Image/BUG SNAP.jpg";
import Img6 from "../Image/PSLV.jpg";
import Img7 from "../Image/VIVEK QUOTE.jpg";
import Img8 from "../Image/Whatsapp.jpg";

const AboutSlider = () => {
  return (
    <div>
      <Carousel height="50px">
        <Carousel.Item interval={1000}>
          <img className="img-fluid" src={Img1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img className="img-fluid" src={Img2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="img-fluid" src={Img3} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img className="img-fluid" src={Img4} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img className="img-fluid" src={Img5} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img className="img-fluid" src={Img6} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img className="img-fluid" src={Img7} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img className="img-fluid" src={Img8} alt="First slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default AboutSlider;
