import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowLeft, ArrowRight } from "@material-ui/icons";
import { useStyleSlider } from "./style";
import Card from "../card";
import cronos from '../../assets/cronos.png'

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
    <>
    
    <div className={classes.content}>
      <div className={classes.controls}>
        <button className={classes.controlsBtn} onClick={sliderRef?.slickPrev}>
          <ArrowLeft />
        </button>
        <button onClick={sliderRef?.slickNext} className={classes.controlsBtn}>
          <ArrowRight />
        </button>
      </div>
      <h2>Collections</h2>
      <Slider ref={setSliderRef} {...sliderSettings}>
        {/* {hotelCards.map(( card,index) => (
          <Card key={index} >
            <img
              src={card.imageSrc}
              alt={card.title}
              className={classes.cardImage}
            />
            <div className="text-info">
              <div className={classes.text}>
                <div style={{display:'flex'}}>
                <h2>{card.title}</h2>
                <img src={cronos}  style={{height:40,width:40,paddingLeft:'10rem',paddingTop:'1rem'}}/>
                </div> 
                <span style={{float:'left'}}>{card.pricingText}</span>
              </div>
            </div>
          </Card>
        ))} */}
        {data &&
          data.map((card, index) => (
          
            <Card key={index} className={classes.card} >
              <img
                src={card.asset_contract?.image_url ?? ""}
                alt={card.name}
                className={classes.cardImage}
              />
              {console.log('data',card)}
              <div className="text-info">
                <div className={classes.text}>
                  {/* <h2>{card.name}</h2>
                  <span style={{ float: "left" }}>{card.description}</span> */}
                   <div style={{display:'flex'}}>
                <h4>{card.name}</h4>
                <img src={cronos}  style={{height:40,width:40,paddingLeft:'10rem',paddingTop:'1rem'}}/>
                </div> 
                <span style={{float:'left'}}>{card.pricingText}</span>
                </div>
              </div>
            </Card>
          ))}
      </Slider>
    </div>
    </>
  );
}

{/* {data &&
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
          ))} */}