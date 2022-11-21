import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useStyleSlider } from "./style";
import { Button } from "@material-ui/core";
import './style.css'
import Card from "../card";

export default function FirstSlider({ data }) {
  const classes = useStyleSlider();

  const settings = {
    arrow: true,
    dots: true,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
  };
  return (
    <>
    <div className={classes.content}>
     
        <h2> Buy and Showcase</h2>
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
        {/* {hotelCards.map((card, index) => (
          <div key={index} >
            <img
              src={card.imageSrc}
              className={classes.cardImage}
             
            />
          </div>
         
        ))} */}
       {data.map((card, index) => (
          <>
            <div key={index} style={{ position: "relative" }}>
            <div className={classes.article}>
      <img className={classes.cardImage} src={card.banner_image_url} alt="background" />
      <h6 className={classes.header}>{card.name}</h6>
    </div>
              {/* <img src={card.banner_image_url} className={classes.cardImage} />
              <div style={{ position: "absolute" }}>{card.name}</div> */}
            </div>
          </>
        ))}
      </Slider>
    </div>
 
    </>
  );
}

