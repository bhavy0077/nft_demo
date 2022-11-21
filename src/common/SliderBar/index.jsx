import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowLeft, ArrowRight } from "@material-ui/icons";
import { useStyleSlider } from "./style";
import Card from "../card";
import cronos from "../../assets/cronos.png";
import { useNavigate } from "react-router-dom";

export default function SliderBar({ data }) {
  const [sliderRef, setSliderRef] = useState(null);
  const classes = useStyleSlider();
  const navigate = useNavigate();

  const sliderSettings = {
    arrows: false,
    arrow: true,
    slidesToShow: 4,
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
    <>
      <div className={classes.content}>
        <div className={classes.controls}>
          <button
            className={classes.controlsBtn}
            onClick={sliderRef?.slickPrev}
          >
            <ArrowLeft />
          </button>
          <button
            onClick={sliderRef?.slickNext}
            className={classes.controlsBtn}
          >
            <ArrowRight />
          </button>
        </div>
        <h2>Collections</h2>
        <Slider ref={setSliderRef} {...sliderSettings}>
          {data &&
            data.map((card, index) => (
              <div
                onClick={() => {
                  navigate(`details/${card.asset_contract.address}`);
                }}
              >
                <Card key={index} className={classes.card}>
                  <img
                    src={card.asset_contract?.image_url ?? ""}
                    alt={card.name}
                    className={classes.cardImage}
                  />

                  <div className="text-info">
                    <div className={classes.text}>
                      <div style={{ display: "flex" }}>
                        <h4>{card.name}</h4>
                        <img
                          src={cronos}
                          style={{
                            height: 40,
                            width: 40,
                            paddingLeft: "10rem",
                            paddingTop: "1rem",
                          }}
                        />
                      </div>
                      <span style={{ float: "left" }}>{card.pricingText}</span>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
        </Slider>
      </div>
      
    </>
  );
}
