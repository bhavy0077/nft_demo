import { useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowLeft, ArrowRight } from "@material-ui/icons";
import { useStyleSlider } from "./style";
import { Button } from "@material-ui/core";
import './style.css'


export default function FirstSlider() {
  const [sliderRef, setSliderRef] = useState(null);
  const classes = useStyleSlider();

  const settings = {
    arrow: true,
    dots: true,
    fade:true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2000
  };
  
  const hotelCards = [
    {
      imageSrc:
        "https://images.unsplash.com/photo-1559508551-44bff1de756b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
      title: "Studio Room",
      description: "Lorem ipsum dolor sit amet, consectur dolori",
      pricingText: "USD 50/Day",
      features: ["Free Wifi", "Free breakfast"],
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1616940844649-535215ae4eb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      title: "Deluxe Room",
      description: "Lorem ipsum dolor sit amet, consectur dolori",
      pricingText: "USD 80/Day",
      features: ["Free Wifi", "Free breakfast"],
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1559508551-44bff1de756b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
      title: "Studio Room",
      description: "Lorem ipsum dolor sit amet, consectur dolori",
      pricingText: "USD 50/Day",
      features: ["Free Wifi", "Free breakfast"],
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1599619351208-3e6c839d6828?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80",
      title: "King Deluxe Room",
      description: "Lorem ipsum dolor sit amet, consectur dolori",
      pricingText: "USD 150/Day",
      features: ["Free Wifi", "Free breakfast", "Discounted Meals"],
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1461092746677-7b4afb1178f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      title: "Royal Suite",
      description: "Lorem ipsum dolor sit amet, consectur dolori",
      pricingText: "USD 299/Day",
      features: [
        "Free Wifi",
        "Free breakfast",
        "Discounted Meals",
        "MacBook for work use (hotel's property)",
      ],
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1559508551-44bff1de756b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
      title: "Studio Room",
      description: "Lorem ipsum dolor sit amet, consectur dolori",
      pricingText: "USD 50/Day",
      features: ["Free Wifi", "Free breakfast"],
    },
  ];

  return (
    
    <div className={classes.content}>
        <h2> Showcase</h2>
        {/* <div className={classes.controlsleft}>
        <button className={classes.controlsBtn} onClick={sliderRef?.slickPrev}>
          <ArrowLeft />
        </button>
        </div>
        <div className={classes.controlsRight}>
        <button onClick={sliderRef?.slickNext} className={classes.controlsBtn}>
          <ArrowRight />
        </button>
      </div> */}
        <Slider {...settings}>
        {hotelCards.map((card, index) => (
          <div key={index} >
            <img
              src={card.imageSrc}
              className={classes.cardImage}
             
            />
          </div>
        ))}
        </Slider>
    </div>
  );
}
