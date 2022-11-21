import { useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowLeft, ArrowRight } from "@material-ui/icons";
import { useStyleSlider } from "./style";

export default function SliderBar({ data }) {
  const [sliderRef, setSliderRef] = useState(null);
  const classes = useStyleSlider();

  const sliderSettings = {
    arrows: false,
    arrow: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className={classes.content}>
      <div className={classes.controls}>
        <button className={classes.controlsBtn} onClick={sliderRef?.slickPrev}>
          <ArrowLeft />
        </button>
        <button onClick={sliderRef?.slickNext} className={classes.controlsBtn}>
          <ArrowRight />
        </button>
      </div>
      <Slider ref={setSliderRef} {...sliderSettings}>
        {data &&
          data.map((card, index) => (
            <div key={index} className={classes.card}>
              <img
                src={card.asset_contract?.image_url ?? ""}
                alt={card.name}
                className={classes.cardImage}
              />
              <div className="text-info">
                <div className={classes.text}>
                  <h2>{card.name}</h2>
                  <span style={{ float: "left" }}>{card.description}</span>
                </div>
              </div>
            </div>
          ))}
      </Slider>
    </div>
  );
}
